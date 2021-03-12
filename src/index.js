
// You should implement your task here.

module.exports = function towelSort (arr) {
  if(!arr || arr.length === 0) return [];

    const res = arr.reduce((acc, el, i) => {
        if (i % 2 === 0) {
            return acc = [...acc, ...el];
        } else return acc = [...acc, ...el.reverse()]
    })
    return res;
    }
  

