import fs from 'fs';
import path from 'path';

// Order is important: dependencies first
const files = [
  'src/types/index.ts',
  'src/components/Header.tsx',
  'src/components/LeftSidebar.tsx',
  'src/components/RightSidebar.tsx',
  'src/components/Canvas.tsx',
  'src/app/page.tsx'
];

let allCode = '';

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Strip imports
  content = content.replace(/^import\s+.*?;\s*$/gm, '');
  content = content.replace(/^import\s+[\s\S]*?from\s+['"].*?['"];\s*$/gm, '');
  content = content.replace(/"use client";/g, '');
  
  // Convert default exports to const/function
  content = content.replace(/export\s+default\s+function\s+(\w+)/g, 'function $1');
  
  // Convert interface/type exports
  content = content.replace(/export\s+interface/g, 'interface');
  content = content.replace(/export\s+type/g, 'type');
  
  allCode += `\n/* --- ${path.basename(file)} --- */\n` + content;
}

// Prepare HTML
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stackly Page Builder</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- React & ReactDOM -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  
  <!-- Babel for JSX -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  
  <!-- Lucide React Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <script>window.react = window.React;</script>
  <script src="https://unpkg.com/lucide-react@0.292.0/dist/umd/lucide-react.js"></script>
  
  <style>
    /* Custom Scrollbar for top bar */
    .custom-scrollbar::-webkit-scrollbar {
      height: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 4px;
    }
  </style>
</head>
<body class="bg-[#F0F2F5] font-sans antialiased text-gray-900 overflow-hidden">
  <div id="root"></div>

  <script>
    Babel.registerPreset('ts-tsx', {
      presets: [
        [Babel.availablePresets['typescript'], { isTSX: true, allExtensions: true }]
      ]
    });
  </script>
  <script type="text/babel" data-type="module" data-presets="env,react,ts-tsx">
    const { useState, useEffect, useRef, useMemo, useCallback } = React;
    const { 
      ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Undo2, Redo2, Eye, Send, X, Play, Menu, SlidersHorizontal, Save,
      ShoppingCart, Search, Mic, Type, Image: ImageIcon, MousePointerSquareDashed, 
      Video, MonitorPlay, Minus, LayoutTemplate, Columns, Heading, HelpCircle, Maximize, LogOut
    } = LucideReact;

    // React's Menu icon shadows something if we're not careful, but wait, the component imports Menu as MenuIcon
    const MenuIcon = Menu;

    ${allCode}

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Page />);
  </script>
</body>
</html>`;

fs.writeFileSync('index.html', htmlTemplate, 'utf8');
console.log('Successfully merged all into index.html');
