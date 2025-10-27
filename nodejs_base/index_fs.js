import fs from 'fs';
import fs2 from 'fs/promises';
import { exec } from 'child_process';
// fs.readFile('output.html', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File data:', data.toString());
//   fs.writeFile('output_copy.html', data, (err) => {
//     if (err) {
//       console.error('Error writing file:', err);
//       return;
//     }
//     console.log('File copied successfully.');
//     exec(`open output_copy.html`, (err) => {
//       if (err) {
//         console.error('Error opening file:', err);
//         return;
//       }
//       console.log('Original file opened successfully.');
//     });
//   });
// });

fs2.readFile('output.html')
  .then((data) => {
    console.log('File data (fs/promises):', data.toString());
    return fs2.writeFile('output_copy2.html', data);
  })
  .then(() => {
    console.log('File copied successfully (fs/promises).');
    return exec(`open output_copy2.html`, (err) => {
      if (err) {
        console.error('Error opening file (fs/promises):', err);
        return;
      }
      console.log('Original file opened successfully (fs/promises).');
    });
  })
  .catch((err) => {
    console.error('Error (fs/promises):', err);
  });


