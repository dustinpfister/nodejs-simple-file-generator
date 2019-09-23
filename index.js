let fs = require('fs'),
util = require('util'),
path = require('path'),
writeFile = util.promisify(fs.writeFile),
mkdirp = util.promisify(require('mkdirp'));

// the genFile method
let genFile = (filePath, data, options, forGen) => {
    // make path absolute
    filePath = path.resolve(filePath);
    // using given options or these defaults
    options = options || {
        encoding: 'utf8',
        mode: 0o666,
        flag: 'w'
    };
    forGen = forGen === undefined ? (filePath, data) => {
        console.log('\u001b[32m' + 'genFile: ' + filePath + '\u001b[39m');
    }: forGen;
    // mkdirp the path to the file
    return mkdirp(path.dirname(filePath))
    // then write the data to the file
    .then(() => {
        return writeFile(filePath, data, options);
    })
    .then(() => {

        forGen(filePath, data)

    })
};

// the main method
module.exports = (fileObjects, options, forGen) => {
    if (Array.isArray(fileObjects)) {
        return Promise.all(fileObjects.map((fileObj) => {
                return genFile(fileObj.path, fileObj.data, options, forGen);
            }));
    }
    return genFile(fileObjects.path, fileObjects.data, options, forGen)
};
