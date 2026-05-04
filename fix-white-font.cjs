const fs = require('fs');

// 1. HTML Fonts
let htmlPath = 'index.html';
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=[^"]+"/g, '<link href="https://fonts.googleapis.com/css2?family=Titan+One&family=Outfit:wght@300;400;500;700;900&display=swap"');
fs.writeFileSync(htmlPath, html);

// 2. CSS Vars
let cssPath = 'src/styles/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/--font-serif:[^;]+;/g, "--font-serif: 'Titan One', cursive;");
fs.writeFileSync(cssPath, css);

// 3. Backgrounds and Colors in App, Header, Footer
function makeWhite(filePath) {
    if (!fs.existsSync(filePath)) return;
    let code = fs.readFileSync(filePath, 'utf8');
    
    // Convert Papaya Whip to White
    code = code.replace(/bg-\[#FDF0D5\]/g, 'bg-white');
    code = code.replace(/text-\[#FDF0D5\]/g, 'text-white');
    
    fs.writeFileSync(filePath, code);
}

makeWhite('src/App.tsx');
makeWhite('src/components/layout/Header.tsx');
makeWhite('src/components/layout/Footer.tsx');

console.log('Background is white, font is Titan One!');
