const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = (arr) => {
  return arr.reduce(function(oldest, current){
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    if (currentAge > oldestAge){
      return current;
    }
    else return oldest
  })
}

let getAge = (birth, death) => {
  if (!death){
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
