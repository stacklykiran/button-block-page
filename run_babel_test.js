const babel = require('@babel/standalone');
const fs = require('fs');

const code = fs.readFileSync('temp.tsx', 'utf8');

try {
  // Simulate the browser environment's Babel with a custom preset
  const res = babel.transform(code, {
    presets: [
      'env',
      'react',
      [babel.availablePresets['typescript'], { isTSX: true, allExtensions: true }]
    ],
    filename: 'app.tsx'
  });
  console.log("Babel Transform Successful! Length:", res.code.length);
} catch (e) {
  console.error("Babel Parsing Error:");
  console.error(e);
}
