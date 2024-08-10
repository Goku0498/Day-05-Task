class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Radius = ${this.radius},Color = ${this.color}`;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

let measure = new Circle(1, "red");
console.log("\n\nOutput of Circle Class:");
console.log(`
${measure.toString()}`);
console.log(
  `The Area is ${measure.getArea().toFixed(2)} and Circumference is ${measure
    .getCircumference()
    .toFixed(2)}`
);
measure.setRadius(2);
console.log(`The New Radius is ${measure.getRadius()}`);
measure.setColor("Green");
console.log(`The New Color is ${measure.getColor()}`);
console.log(measure.toString());
console.log(
  `The Area is ${measure.getArea().toFixed(2)} and Circumference is ${measure
    .getCircumference()
    .toFixed(2)}`
);
