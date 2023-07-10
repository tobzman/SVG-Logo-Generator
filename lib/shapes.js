class Shape {
  constructor(color = "#000000") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    // The render method is overridden by the child classes
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    const Svg = `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    return Svg;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    const Svg = `<polygon points="150,18 244 ,182 56,182" fill="${this.color}" />`;
    return Svg;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    const Svg = `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    return Svg;
  }
}

module.exports = {
  Shape,
  Circle,
  Triangle,
  Square,
};
