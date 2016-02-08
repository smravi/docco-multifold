'use strict';
var marked = require('marked');
var path = require('path');
var fileResolver = require('./file-resolver');
var isAbsolute = function(filePath) {
    return /^(?:\/|[a-z]+:\/\/)/.test(filePath);
};

module.exports = function(srcPath, options) {
    var renderer = new marked.Renderer();

    renderer.link = function(href, title, text) {
        if (!isAbsolute(href)) {
            console.log('here!!', srcPath);
            href = fileResolver(options, path.resolve(path.dirname(srcPath), href));
        }
        return marked.Renderer.prototype.link.call(this, href, title, text);
    };
    renderer.image = function(href, title, text) {
        if (!isAbsolute(href)) {
            console.log('here!!!!', srcPath);
            href = fileResolver(options, path.resolve(path.dirname(srcPath), href));
        }
        return marked.Renderer.prototype.image.call(this, href, title, text);
    };
    return renderer;
};