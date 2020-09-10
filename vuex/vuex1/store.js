import applyMixin from "./mixin";
import { forEachValue } from './util';
export let Vue;

export class Store {
  constructor(options) {
    // 1.处理state
    const state = options.state; //数据变化要更新视图 （vue的核心逻辑依赖收集）
    const computed = {};

    // 2.处理getters属性 具有缓存的 computed 带有缓存 （多次取值是如果值不变是不会重新取值）
    this.getters = {};
    forEachValue(options.getters, (fn, key) => {
      // 将用户的getters 定义在实例上， 计算属性是如何实现缓存
      computed[key] = () => fn(this.state);
      // 当取值的时候执行计算属性的逻辑，此时就有缓存功能
      Object.defineProperty(this.getters, key, {
        get: () => fn(this._vm[key])
      })
    })

    this._vm = new Vue({
      data: { // 属性如果是通过$开头的 默认不会将这个属性挂载到vm上
        $$store: state
      },
      computed,
    })

    // 3.实现mutations
    this.mutations = {};
    forEachValue(options.mutations, (fn, key) => {
      this.mutations[key] = (payload) => fn(this.state, payload)
    })

    // 4.实现actions
    this.actions = {};
    forEachValue(options.actions, (fn, key) => {
      this.actions[key] = (payload) => fn(this, payload);
    });

  }

  commit = (type, payload) => { //保证当前this 当前store实例
    this.mutations[type](payload)
  }

  dispatch = (type, payload) => {
    this.mutations[type](payload)
  }

  get state() { // 属性访问器   new Store().state  Object.defineProperty({get()})
    return this._vm._data.$$state
  }

}

// _vue 是Vue的构造函数
export const install = (_vue) => {
  // 需要保存Vue,用户传入的Vue构造函数
  Vue = _vue;
  // 需要将根组件中注入的store 分派给每一个组件 （子组件） Vue.mixin
  applyMixin(Vue);
}
