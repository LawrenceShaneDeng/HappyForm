module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['your-node-package'],
      mainProcessFile: './common/api/request.js',
      builderOptions: {
        // 配置其他打包选项
		        "directories": { // 输出文件夹
		          "output": "unpackage/dist/service",
		        },
      }
    }
  },
  // 其他Vue CLI配置项
}