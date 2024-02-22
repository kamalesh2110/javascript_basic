// Delete the element which in array using filter method

const arr = [1, 2, 3, 4, 5];

let deleteEle = 4;
newArr = arr.filter((ele) => {
  if (ele !== deleteEle) {
    return ele;
  }
});
console.log(newArr);
