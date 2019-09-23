let genFile = require('./index.js');

genFile({
    path: './test/foo.md',
    data: 'This is the foo data'
})
.then(() => {
    console.log('generated file');
})
.catch((e) => {
    console.log(e.message);
});
