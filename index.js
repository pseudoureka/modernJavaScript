function sayHello(name) {
  console.log(`Hello ${name}!`);
}

console.log("시작");

setTimeout(sayHello, 3000, "Codeit!");

console.log("끝");
