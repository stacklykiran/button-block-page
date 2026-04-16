const { JSDOM } = require("jsdom");
const babel = require("@babel/standalone");
const fs = require("fs");

(async () => {
  console.log("Transpiling...");
  const rawCode = fs.readFileSync("temp.tsx", "utf8");
  const transpiled = babel.transform(rawCode, { presets: ["env", "react", "typescript"] }).code;
  
  console.log("Setting up JSDOM...");
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head></head>
      <body><div id="root"></div></body>
    </html>
  `, { runScripts: "dangerously", resources: "usable" });

  dom.window.addEventListener("error", (event) => {
    console.error("JSDOM Error caught:", event.error ? event.error.message : event.message);
  });

  // Inject mocks if network fails
  // But JSDOM resources="usable" will fetch scripts if we append them
  console.log("Loading libraries...");
  
  const injectScript = (src) => new Promise((resolve, reject) => {
    const script = dom.window.document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Failed to load ' + src));
    dom.window.document.head.appendChild(script);
  });
  
  const injectInline = (code) => {
    const script = dom.window.document.createElement("script");
    script.textContent = code;
    dom.window.document.head.appendChild(script);
  }

  try {
    await injectScript("https://unpkg.com/react@18/umd/react.development.js");
    await injectScript("https://unpkg.com/react-dom@18/umd/react-dom.development.js");
    injectInline("window.react = window.React;");
    await injectScript("https://unpkg.com/lucide-react@0.292.0/dist/umd/lucide-react.js");
    console.log("Libraries loaded successfully. Keys available:", Object.keys(dom.window).filter(k => ['React', 'ReactDOM', 'LucideReact'].includes(k)));
    
    // Evaluate the transpiled UI code
    console.log("Evaluating UI code...");
    injectInline(transpiled);
    console.log("Evaluation complete!");
    
  } catch (err) {
    console.error("Caught Exception:", err.message);
  }
})();
