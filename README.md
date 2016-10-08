# Html File Webpack Plugin
This is an extension plugin that injects  webpack assets source to html for the webpack plugin [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin). 

本插件的作用是把webpack的产物的源码注入到html中，需配合 [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) 使用。
## Installation
```shell
$ npm install --save-dev html-file-webpack-plugin html-webpack-plugin
```
## Usage
Require the plugin in your webpack config:
```js
var HtmlFilePlugin = require('html-file-webpack-plugin');
```
Add the plugin to your webpack config as follows:
```js
plugins: [
    new HtmlWebpackPlugin(),
    new HtmlFilePlugin({
        filename: 'manifest.json'
    })
]
```
Add the plugin to your html as follows:
```html
<script>
window.webpackManifest=<%=htmlWebpackPlugin.files.htmlFilePlugin['manifest.json']%>
</script>
```
The file (manifest.json) will be add to ```htmlWebpackPlugin.files.htmlFilePlugin```.
## Configuration
```filename```: ```string | []``` The file to be injected to html.
