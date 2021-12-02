import path from "path";
import fs from "fs";

const text: string = fs.readFileSync(path.join(__dirname, "./input"), "utf-8");
const data: string[] = text.split("\n");

let counter: number = 0;
let counterWindow: number = 0;
let i: number = 0;

for (i = 1; i < data.length; i++) {
  if (Number(data[i]) > Number(data[i - 1])) {
    counter++;
  }
}

console.log(counter);
let j: number;
for (j = 3; j < data.length; j++) {
  if (Number(data[j]) > Number(data[j - 3])) {
    counterWindow++;
    console.log(counterWindow);
  }
  console.log("---------------");
}

console.log(counterWindow);
