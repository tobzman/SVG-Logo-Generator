const { Circle } = require("./shapes");
const { LogoText, SVG } = require("./Svg");

describe("SVG", () => {
  test("should render SVG code with the shape and logo text", () => {
    const circle = new Circle();
    circle.setColor("red");

    const logoText = new LogoText("SVG", "white");

    const svg = new SVG(circle, logoText);
    const expectedSvgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="50" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`;

    expect(svg.render()).toBe(expectedSvgCode);
  });
});
