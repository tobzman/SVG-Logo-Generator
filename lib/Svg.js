class LogoText {
  constructor(text, colour) {
    this.colour = colour;
    this.text = text;
  }
  render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
  }
}
class SVG {
  constructor(shape, logoText) {
    this.shape = shape;
    this.logoText = logoText;
  }
  render() {
    const Svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.logoText.render()}</svg>`;
    return Svg;
  }
}

module.exports = { LogoText, SVG };
