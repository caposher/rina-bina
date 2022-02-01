const fs = require('fs');
const recPath = '../../src/assets/recommendations';
const field = 'recommend';

//load all recommendations
const json = require(`${recPath}/recommendation.json`);

//read recommend file
const recText = fs.readFileSync(`./${field}.txt`, { encoding: 'utf8', flag: 'r' });

if (recText) {
  const newObj = { recommend: recText };

  //prevent duplications
  if (!JSON.stringify(json).includes(JSON.stringify(newObj))) {
    json.push(newObj);
    console.log('Recommendation added successfully');
  }

  //clear txt file
  fs.writeFileSync(`./${field}.txt`, '');

  //add image info to project json file
  fs.writeFileSync(`${recPath}/recommendation.json`, JSON.stringify(json));
} else {
  console.log('No recommendation text in the file');
}
