const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  test("should render circle SVG code with correct radius and color", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="50" fill="red" />'
    );
  });
});

describe("Triangle", () => {
  test("should render triangle SVG code with correct points and color", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toBe(
      '<polygon points="150,0 100,173.20508075688772 200,173.20508075688772" fill="blue" />'
    );
  });
});

describe("Square", () => {
  test("should render square SVG code with correct dimensions and color", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toBe(
      '<rect x="100" y="100" width="100" height="100" fill="green" />'
    );
  });
});
