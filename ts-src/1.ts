import path from "path";
import fs from "fs";

const text: string = fs.readFileSync(path.join(__dirname, "./input"), "utf-8");
const data: string[] = text.split("\n");

let counter: number = 0;
let i: number = 0;
let terminal: number = data.length - 1;

for (i = 1; i < data.length; i++) {
  if (Number(data[i]) > Number(data[i - 1])) {
    counter++;
  }
}

console.log(counter);
