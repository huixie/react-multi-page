# react-multi-page
基于react框架的多页面框架

### 页面配置：config/entryPages.js
  > ` const _basePath='src/pages'`<br />
    ` module.exports ={`<br />
    `   'test':{path : _basePath + '/Test.js', title:'测试'},`<br />
    `   // 'test2':{path : _basePath + '/test/Test.js', title:'测试2'},`<br />
    `   // 'test3':{path : _basePath + '/test/Test.js', title:'测试3'},`<br />
    ` }`

### 命令
  > `yarn start : 启动项目`<br />
    `yarn run build : 打包生产环境`<br />
    `yarn run build:test : 打包测试环境`<br />
    `yarn run build:pre : 打包预发环境`
