/**
 * 入口文件配置
 * 【key】:'为打包后的html文件名'
 * path:入口文件path
 * title:html页面title 不设置 title默认为粉象生活
 *  */
const _basePath='src/pages'
module.exports ={
  'test':{path : _basePath + '/Test.js', title:'测试'},
  'test2':{path : _basePath + '/test/Test.js', title:'测试2'},
  // 'a/about':{path : _basePath + '/about/index.js', title:'关于我们'},
}