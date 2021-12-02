"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const text = fs_1.default.readFileSync(path_1.default.join(__dirname, "./input"), "utf-8");
const data = text.split("\n");
let counter = 0;
let counterWindow = 0;
let i = 0;
for (i = 1; i < data.length; i++) {
    if (Number(data[i]) > Number(data[i - 1])) {
        counter++;
    }
}
console.log(counter);
let j;
for (j = 3; j < data.length; j++) {
    if (Number(data[j]) > Number(data[j - 3])) {
        counterWindow++;
    }
}
console.log(counterWindow);
