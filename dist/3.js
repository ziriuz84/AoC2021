"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const text = fs_1.default.readFileSync(path_1.default.join(__dirname, "./input3"), "utf-8");
const data = text.split("\n");
let dataset = [];
dataset = data.map((d) => {
    let i = 0;
    let result = [];
    for (i = 0; i < d.length; i++) {
        result.push(Number(d.charAt(i)));
    }
    return result;
});
console.log(dataset.length);
let count1 = [];
let count0 = [];
let mostCommon = [];
let lessCommon = [];
let i = 0;
for (i = 0; i < dataset[0].length; i++) {
    count1.push(0);
    count0.push(0);
    mostCommon.push(0);
    lessCommon.push(0);
}
dataset.forEach((d) => {
    let i = 0;
    for (i = 0; i < d.length; i++) {
        if (d[i] == 1) {
            count1[i]++;
        }
        else {
            count0[i]++;
        }
    }
});
console.log(count1);
console.log(count0);
for (i = 0; i < count0.length; i++) {
    if (count1[i] > count0[i]) {
        mostCommon[i] = 1;
        lessCommon[i] = 0;
    }
    else {
        mostCommon[i] = 0;
        lessCommon[i] = 1;
    }
}
console.log(mostCommon);
console.log(lessCommon);
let gammaRate = 0;
let epsilonRate = 0;
for (i = 0; i < mostCommon.length; i++) {
    gammaRate += Math.pow(2, i) * mostCommon[i];
    epsilonRate += Math.pow(2, i) * lessCommon[i];
}
console.log(gammaRate * epsilonRate);
