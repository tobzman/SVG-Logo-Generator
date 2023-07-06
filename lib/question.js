const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for the logo:",
    validate: function (input) {
      if (input.length > 3) {
        return "Please enter up to three characters.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColour",
    message: "Enter the text color (keyword or hexadecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape for the logo:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColour",
    message: "Enter the shape color (keyword or hexadecimal):",
  },
];

module.exports = questions;
