import path from "path";
import fs from "fs";
import { argv0 } from "process";

const text: string = fs.readFileSync(path.join(__dirname, "./input2"), "utf-8");
const data: string[] = text.split("\n");

let position: number = 0;
let depth: number = 0;
let d: string;

for (d in data) {
  let dato: string[] = data[d].split(" ");
  if (dato[0] == "forward") {
    position += Number(dato[1]);
  }
  if (dato[0] == "down") {
    depth += Number(dato[1]);
  }
  if (dato[0] == "up") {
    depth -= Number(dato[1]);
  }
}
console.log(position * depth);

let aim: number = 0;
position = 0;
depth = 0;

for (d in data) {
  let dato: string[] = data[d].split(" ");
  if (dato[0] == "forward") {
    position += Number(dato[1]);
    depth += Number(dato[1]) * aim;
  }
  if (dato[0] == "down") {
    aim += Number(dato[1]);
  }
  if (dato[0] == "up") {
    aim -= Number(dato[1]);
  }
}
console.log(position * depth);
