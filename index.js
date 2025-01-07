const group = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 },
  { name: "Frank", age: 50 },
  { name: "Grace", age: 70 },
  { name: "Hank", age: 50 },
  { name: "Ivy", age: 65 },
  { name: "Jack", age: 50 },
];

group.sort((a, b) => {
  if (b.age === a.age) {
    return b.name.localeCompare(a.name);
  }
  return b.age - a.age;
});

console.log(group);
