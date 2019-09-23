let fs = require('fs'),
util = require('util'),
path = require('path'),
writeFile = util.promisify(fs.writeFile),
mkdirp = util.promisify(require('mkdirp'));

// the genFile method
let genFile = (filePath, data, options) => {

    // make path absolute
    filePath = path.resolve(filePath);

    // using given options or these defaults
    options = options || {
        encoding: 'utf8',
        mode: 0o666,
        flag: 'w'
    }

    // mkdirp the path to the file
    return mkdirp(path.dirname(filePath))

    // then write the data to the file
    .then(() => {
        return writeFile(filePath, data, options);
    });

};

// the main method
module.exports = (fileObjects, options) => {

    if (Array.isArray(fileObjects)) {
        return Promise.all(fileObjects.map((fileObj) => {
                return genFile(fileObj.path, fileObj.data, options);
            }));
    }
    return genFile(fileObjects.path, fileObjects.data, options)
}
