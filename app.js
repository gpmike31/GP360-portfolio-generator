//input function
const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [Gerald, geraldhub] = profileDataArgs;

console.log(Gerald, geraldhub);

const pageHTML = generatePage(Gerald, geraldhub);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});


//output function
//const printProfileData = profileDataArr => {
    //This....
    //for (let i = 0; i < profileDataArr.length; i++) {
      //console.log(profileDataArr[i]);
   // }

  //  console.log('================');

    // Is the same as this...
  //  profileDataArr.forEach(profileItem => console.log(profileItem));
//};





