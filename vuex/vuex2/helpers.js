export function mapState(stateArr) {
  let obj = {};
  for (let i = 0; i < stateArr.length; i++) {
    let stateName = stateArr[i];
    obj[stateName] = function() {
      return this.$store.state[stateName]
    }
  }
  return obj
}

export function mapGetters(gettersArr) {
  let obj = {};
  for (let i = 0; i < gettersArr.length; i++) {
    let gettName = gettersArr[i];
    obj[gettName] = function() {
      return this.$store.getters[gettName]
    }
  }
  return obj
}

export function mapMutations(obj) {
  let res = {};
  Object.entries(obj).forEach(([key, value]) => {
    res[key] = function(...args) {
      this.$store.commit(value, ...args)
    }
  })
  return res;
}

export function mapActions(obj) {
  let res = {};
  Object.entries(obj).forEach(([key, value]) => {
    res[key] = function(...args) {
      this.$store.dispatch(value, ...args)
    }
  })
  return res;
}

export const createNamespacedHelpers = (namespace) => ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
})
