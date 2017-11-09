// 导出数据
console.log("top")
export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;
// 导出函数
console.log("export top")
export function sum(num1, num2) {
    console.log("in sum")
    return num1 + num1;
}
// 导出类
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}
// 此函数为模块私有
function subtract(num1, num2) {
    return num1 - num2;
}
// 定义一个函数……
function multiply(num1, num2) {
    console.log("in multiply")
    return num1 * num2;
}
// ……稍后将其导出
export { multiply };
console.log("bottom");
var a='qwert';
export default a;