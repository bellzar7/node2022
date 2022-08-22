// const fs = require('fs/promises');
// const path = require('path');
//
// const sortByFolder = async (dir, gen, newPath) => {
//     try {
//         const folderPath = path.join(__dirname, dir);
//         const files = await fs.readdir(folderPath);
//
//         for (const file of files) {
//
//             const pathToFile = path.join(folderPath, file);
//
//             const buffer = await fs.readFile(pathToFile);
//
//             const user = JSON.parse(buffer.toString());
//
//             if (user.gender !== gen) {
//               await  fs.rename(pathToFile, path.join(__dirname, newPath, file))
//             }
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// sortByFolder('boys', 'male', 'girls')
// sortByFolder('girls', 'female', 'boys')

// ADDITIONAL
const fs = require('fs/promises');
const path = require('path');

const reader = async (folderPath) => {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
        const pathToFile = path.join(folderPath, file)
        const stat = await fs.stat(pathToFile);

        if (stat.isDirectory()) {
            await reader(pathToFile)
        }
        if (stat.isFile()) {
            await fs.rename(pathToFile, path.join(__dirname, 'Folder', file))
        }
    }

}

reader(path.join(__dirname, 'Folder'))
