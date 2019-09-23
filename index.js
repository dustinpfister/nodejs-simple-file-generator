let fs = require('fs'),
util = require('util'),
path = require('path'),
writeFile = util.promisify(fs.writeFile),
mkdirp = util.promisify(require('mkdirp'));

// the genFile method
module.exports = (path, data, options) => {

    // make path absolute
    path = path.resolve(path);

    // using given options or these defaults
    options = options || {
        encoding: 'utf8',
        mode: 0o666,
        flag: 'w'
    }

    // mkdirp the path
    return mkdirp(path)

    // then write the data to the file
    .then(() => {
        writeFile(data, options);
    });

};
