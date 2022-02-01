const fs = require('fs');
const imagesPath = '../../src/assets/imgs/branding';
const field = 'title';

//load json file
const json = require(`${imagesPath}/images.json`);

//get all folder content
fs.readdir('./', (err, files) => {
  if (err) console.log('Failed to read files:', err);
  else {
    //get image and text files
    const imgFile = files.find((file) => {
      return file.match('.(png|jpe?g|svg)$');
    });
    const txtFile = files.find((file) => {
      return file.match(field);
    });

    //read text file content
    const fieldContent = fs.readFileSync(`./${txtFile}`, 'utf8');

    if (imgFile && txtFile && fieldContent) {
      console.log('image file:', imgFile);
      console.log(`${field} file:`, fieldContent);
      const newObj = { fileName: imgFile, title: fieldContent };

      //prevent duplications
      if (!JSON.stringify(json).includes(JSON.stringify(newObj))) {
        json.push({ fileName: imgFile, title: fieldContent });
      }

      //copy image to project
      fs.rename(`./${imgFile}`, `${imagesPath}/${imgFile}`, function (err) {
        if (err) console.log('Failed to move image to project:', err);
        else {
          console.log('Image successfully moved to project!');
          fs.writeFileSync(`./${txtFile}`, ''); //clear txt file
        }
      });

      //add image info to project json file
      fs.writeFileSync(`${imagesPath}/images.json`, JSON.stringify(json));
    } else {
      console.log('Something missing');
      console.log('Image name:', imgFile);
      console.log('Text file name: ', txtFile);
      console.log(`${field}:`, fieldContent ? fieldContent : 'missing!');
    }
  }
});
