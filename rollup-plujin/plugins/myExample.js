export default function myExample() {
  return {
    name: 'my-example', // 名字会在 warnings 和 errors 中显示

    options(inputOptions) {
      console.log(inputOptions, 'options 钩子');
    },

    buildStart(inputOptions) {
      console.log(inputOptions, 'buildStart 钩子');
    },

    resolveId(source) {
      console.log(source, 'resolveId 钩子');
      if (source === 'virtual-module') {
        return source; // 这表明 rollup 不应该询问其他插件或检查文件系统来寻找这个 ID。
      }
      return null; // 其他的 ID 应该按照通常的方式处理
    },

    load(id) {
      console.log(id, 'load钩子');
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'; // "virtual-module" 的源码
      }
      return null; // 其他的 ID 应该按照通常的方式处理
    },

    transform(code, id) {
      console.log(id, 'transform钩子');
    },

    buildEnd(error) {
      console.log(error, 'buildEnd 钩子');
    }
  };
}


