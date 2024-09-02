// const newArray = oldArray.map(callback(currentValue, index, array));

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jack', age: 20 },
];

const updatedUsers = users.map((user) => {
  return {
    name: user.name.toUpperCase(),
    age: user.age + 5,
  };
});

console.log(updatedUsers);
