function HtmlFilePlugin (options) {
    options = options || {};
    this.filename = options.filename;
}

HtmlFilePlugin.prototype.apply = function (compiler) {
    var self = this;
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-generation', function (htmlPluginData, callback) {
            var filenames = self.filename;
            if (typeof filenames === 'string') {
                filenames = [filenames];
            }

            for (var i = 0; i < filenames.length; i++) {
                var name = filenames[i];
                htmlPluginData.assets.htmlFilePlugin[name] = compilation.assets[name].source();
            }

            callback(null, htmlPluginData);
        });
    });
};

module.exports = HtmlFilePlugin;