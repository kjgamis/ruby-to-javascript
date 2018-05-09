var apples = 14;
console.log(apples);
console.log('I have ' + apples + ' apples.');
// -------------------------------------------------- //
var materials = ['wood', 'metal', 'stone'];
var words = {
  elephant:    "The world's largest land mammal.",
  school:      "A place of learning.",
  "ice cream": "A delicious milk-based dessert."
};
console.log(words.elephant);
// -------------------------------------------------- //
var num = 16;
if (num > 10) {
  console.log(num + ' is greater than 10.')
} else if (num == 10) {
  console.log(num + 'is exactly 10.')
} else {
  console.log(num + 'must be less than 10.')
}
// -------------------------------------------------- //
var base = 5;
for (var num = 0; num < 21; num++) {
  console.log(num + base);
}
// -------------------------------------------------- //
var total = 0;
for (var num = 0; num < 101; num++) {
  total += num
};
console.log(total);
// -------------------------------------------------- //
for (var num = 3; num < 16; num++) {
  if (num > 9) {
    console.log("You can get on the rollercoaster!")
  } else {
    console.log("You are too short to ride this rollercoaster.")
  }
}
// -------------------------------------------------- //
var containers = ['purse', 'wallet', 'backpack']
for (var index = 0; index < containers.length; index++) {
  console.log(containers[index]);
}
// -------------------------------------------------- //
function hello_world() {
  return "Hello world!"
}
console.log(hello_world());
// -------------------------------------------------- //
function add(first_num, second_num) {
  return first_num + second_num
}
amount = add(5, 1);
console.log(amount);
