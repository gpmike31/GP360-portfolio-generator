//input function
//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

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

const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    Github: ${githubName}
  `;
};

console.log(generatePage('Gerald', 'geraldhub'));

