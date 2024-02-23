let obj = {
  user1: {
    user2: [],
    user3: [],
  },
  user2: {
    user1: [],
    user3: [],
  },
  user3: {
    user1: [],
    user2: [],
  },
};

//object traverse  using for loop
const addUser = (user) => {
  const arr = Object.keys(obj);
  for (const key in obj) {
    obj[key] = { ...obj[key], [user]: [] };
  }
  const tempObj = {};
  arr.forEach((key) => {
    tempObj[key] = [];
  });

  obj = {
    ...obj,
    [user]: tempObj,
  };
};

addUser("user4");

console.log(obj);
