const { readFileSync } = require("fs");

const fileName = process.argv[2];

if (!fileName) {
  console.error("Please provide a filename as an argument");
  process.exit(1);
}

const content = readFileSync(fileName, "utf8");

const myReg = /\b\w+\b/g;

const matchResult = content.match(myReg);

console.log(matchResult.length);
