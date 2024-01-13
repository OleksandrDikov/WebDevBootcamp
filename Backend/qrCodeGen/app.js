import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            message: "Please enter your link to generate a QR code:",
            name: "URL",
        }
    ])
    .then((answers) => {
        let qr_svg = qr.image(answers.URL, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('qr.png'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong import { writeFile } from 'node:fs';
        }
    });