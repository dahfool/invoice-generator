import fs from 'fs';
import PDFDocument from 'pdfkit';

let doc = new PDFDocument;

doc.fontSize(15).text('A title', 50, 50);
// Set the paragraph width and align direction
doc.text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it', {
    width: 410,
    align: 'left'
});
// doc.image('test.png', 50, 150, {width: 300});
doc.pipe(fs.createWriteStream('output.pdf'));
// PDF Creation logic goes here
doc.end();
