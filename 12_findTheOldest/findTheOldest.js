const findTheOldest = function (array) {
    return array.reduce((oldestPerson, currentPerson) => {
      const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldestPerson;
    });
  };
  
const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
};
  
// const findTheOldest = function (array) {
//     return array.reduce((oldestPerson, currentPerson) => {
//         const oldestAge = getAge(
//             oldestPerson.yearOfBirth, 
//             oldestPerson.yearOfDeath
//         );
//         const currentAge = getAge(
//             currentPerson.yearOfBirth, 
//             currentPerson.yearOfDeath
//         );
//         return oldestAge < currentAge ? currentPerson : oldestPerson;
//     });
// };

//     const getAge = function (birth, death) {
//         if (!death) {
//             death = new Date().getFullYear;
//         }
//         return death - birth;
//     };

    // return array.reduce((obj, person) => {
    //     let personAge = person.yearOfDeath - person.yearOfBirth;
    //     let objAge = obj.yearOfDeath - obj.yearOfBirth;
    //     if (!("yearOfDeath" in person)) {
    //         personAge = person.getFullYear() - person.yearOfBirth;
    //     };
    //     if ( personAge > objAge) {
    //         obj = person;
    //     } 
    //     return obj;
    // });

// Do not edit below this line
module.exports = findTheOldest;
