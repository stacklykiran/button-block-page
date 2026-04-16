import fs from 'fs';
import path from 'path';

// read index.html
const html = fs.readFileSync('index.html', 'utf8');

// extract the babel script
const scriptMatch = html.match(/<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.log("No babel script found!");
  process.exit(1);
}

const sourceCode = scriptMatch[1];
console.log("Extracted code length:", sourceCode.length);
console.log("Writing to temp.tsx for syntax checking...");
fs.writeFileSync('temp.tsx', sourceCode, 'utf8');

// Use typescript to type check or babel to parse
