const getTheTitles = function() {
  let titles = [];  
    for (let book of books){
      titles.push(book.title);
    }
    return titles;
};
/*
const getTheTitles = function(array) {
    return array.map(book => book.title)
  };
*/

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];
// Do not edit below this line
module.exports = getTheTitles;
