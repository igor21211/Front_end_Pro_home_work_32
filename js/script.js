"use strict";

class SuperMath {
  constructor() {
    this.operators = ["+", "-", "%", "/", "*"];
  }

  calculate(x, y, znak) {
    switch (znak) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "/":
        return y === 0 ? "Cant do 0 with operant /" : x / y;
      case "*":
        return x * y;
      case "%":
        return x % y;
      default:
        return `Unable operator ${znak} able operators ${this.operators} `;
    }
  }

  input() {
    const X = parseFloat(prompt("Set first number"));
    const Y = parseFloat(prompt("Set second number"));
    const znak = prompt(`Set operator: able operators ${this.operators}`);

    return { X, Y, znak };
  }

  check(obj) {
    const { X, Y, znak } = obj;
    return this.operators.includes(znak)
      ? alert(this.calculate(X, Y, znak))
      : this.check(this.input());
  }
}

const res = new SuperMath();
const obj = { X: 2, Y: 3, znak: "+" };
console.log(res.check(obj));
