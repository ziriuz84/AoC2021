"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const text = fs_1.default.readFileSync(path_1.default.join(__dirname, "./input2"), "utf-8");
const data = text.split("\n");
let position = 0;
let depth = 0;
let d;
for (d in data) {
    let dato = data[d].split(" ");
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
let aim = 0;
position = 0;
depth = 0;
for (d in data) {
    let dato = data[d].split(" ");
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
