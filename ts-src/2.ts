import path from "path";
import fs from "fs";

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
