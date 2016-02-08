'use strict';
var commander = require('commander');
var pkg = require('../package.json');
module.exports = function() {
    // setup the commander
    commander.version(
        pkg.version
    ).usage(
        '[options] glob-patterns'
    ).option(
        '-c, --css [file]',
        'use a custom css file'
    ).option(
        '-t, --theme [string]',
        'use a custom markdown theme'
    ).option(
        '-h, --highlightStyle [string]',
        'use a highlightjs theme style. Styles are detailed here: https://highlightjs.org/static/demo/'
    ).option(
        '-o, --output [path]',
        'output to a given folder'
    ).option(
        '-L, --languages [file]',
        'use a custom languages.json'
    ).option(
        '-t, --template [file]',
        'use a custom jst template file'
    ).option(
        '-m, --marked [file]',
        'use custom marked options'
    ).option(
        '-i, --index [file]',
        'the file to be documented as the landing file for a folder'
    ).parse(
        process.argv
    );
    if (commander.args.length) {
        require('./document')(commander);
    } else {
        return console.log(commander.helpInformation());
    }
};