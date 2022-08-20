const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// //Sync version:
// fs.mkdirSync(folderName);
// fs.writeFileSync(`${folderName}/index.html`, '');
// fs.writeFileSync(`${folderName}/style.css`, '');
// fs.writeFileSync(`${folderName}/app.js`, '');

//Async version:
fs.mkdir(`${folderName}`, { recursive: true }, (err) => {
    console.log('The folder is successfully created')
    if (err) console.log(err);
})
fs.writeFile(`${folderName}/index.html`, 'I am the new file\'s content', (err) => {
    console.log('The HTML file is successfully created')
    if (err) console.log(err)
});
fs.writeFile(`${folderName}/style.css`, 'I am the new file\'s content', (err) => {
    console.log('The CSS file is successfully created')
    if (err) console.log(err)
});
fs.writeFile(`${folderName}/app.js`, 'I am the new file\'s content', (err) => {
    console.log('The JS file is successfully created')
    if (err) console.log(err)
});