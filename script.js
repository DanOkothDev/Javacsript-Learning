const marks = [75, 42, 88, 56, 91];

let total = 0;

console.log(marks.length)

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

const average = total / marks.length;

console.log("Total:", total);
console.log("Average:", average);

if (average >= 70) {
  console.log("Excellent performance");
} else {
  console.log("Keep practising");
}
