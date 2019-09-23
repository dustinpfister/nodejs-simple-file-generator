let genFile = require('./index.js');

genFile([{
    path: './test/2019/01/index.html',
    data: '<p>This is a foo page</p>'
},
{
    path: './test/2019/02/index.html',
    data: '<p>This is a bar page</p>'
}])
.then(() => {
    console.log('generated file');
})
.catch((e) => {
    console.log(e.message);
});
