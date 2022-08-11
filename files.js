const fs = require('fs').promises;

const fsGeneral = require('fs');

// fs.appendFile('./file.txt', 'Hello ept \n').then(() => {
//     console.log('done');
// }).catch(e => {
//     console.log(e);
// })  // appendFile - створює файл або в якийсь існуючий уже і дозаписує данні
//
// fs.writeFile('./file.txt', 'Hello ept \n').then(() => {
//     console.log('done');
// }).catch(e => {
//     console.log(e);
// })  // appendFile - створює файл або в якийсь існуючий уже і перезаписує данні
//
// fs.readFile('./file.txt').then(data => {
//     console.log(data.toString());
//     console.log(data);
// }) // зчитує файл і дата це що написано в файлі в 16-ковому коді, toString вертає в читабельному вигляді
//
// fs.unlink('./file.txt').then(value => console.log(value))  //   видаляє файл
//
// fs.mkdir('./home_video').catch(e => {
//     console.log(e)
// }) //   створює папку
//
// fs.stat('./file.txt').then(info => {
//     console.log(info.isDirectory())
//     console.log(info.isFile())
// })  // дає статистику про файл, інфу про нього, розмір і т.д. isDirectory - чи це папка, isFile - чи це файл, вертає тру або фолс
//
// fs.readdir('./home_video').then(files => {
//     console.log('-----------------------------------');
//     console.log(files);
// }) // читає директорію і вертає масив з назвами вложеностей
//
// fs.readdir('./home_video').then(files => {
//
//     for (const file of files) {
//         fs.stat(`./home_video/${file}`).then(info => {
//
//             if (!info.isFile()) {
//                 return
//             }
//             fs.readFile(`./home_video/${file}`).then(fileBuffer => {
//                 console.log(fileBuffer.toString());
//             })
//
//         })
//     }
//
// })
//
// fs.rename('./rename.css', './home_video/style.css').catch(e=>{
//     console.log(e);
// }) // можна перейменовувати файл або переміщати
//
// fs.rmdir('./home_video', {recursive:true}).catch(e=>{
//     console.log(e);
// }) // видаляє папку, по дефолту не можна видалити якщо не пуста, recursive:true - видаляє силоміць не пусту папку

// const readStream = fsGeneral.createReadStream('./file.txt');
// const writeStream = fsGeneral.createWriteStream('./copy.txt');
//
// readStream.on('data', (data)=>{
//     writeStream.write(data)
//     console.log(data);
// })
// readStream.on('end', ()=>{
//     console.log('DONE');
// })
//
// readStream.pipe(writeStream)