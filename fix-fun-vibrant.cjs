const fs = require('fs');

// 1. Update index.html fonts
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com[^"]+"/g, '<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Outfit:wght@300;400;500;700;900&display=swap"');
fs.writeFileSync('index.html', html);

// 2. Update globals.css
let css = fs.readFileSync('src/styles/globals.css', 'utf8');
css = css.replace(/--font-sans:[^;]+;/g, "--font-sans: 'Outfit', sans-serif;");
css = css.replace(/--font-serif:[^;]+;/g, "--font-serif: 'Fredoka', sans-serif;");
fs.writeFileSync('src/styles/globals.css', css);

// 3. Update App.tsx colors safely
let app = fs.readFileSync('src/App.tsx', 'utf8');

app = app.replace(/bg-\[#F2F0E9\]/g, 'bg-[#FFFFE0]');
app = app.replace(/bg-slate-900/g, 'bg-[#FF0055]');
app = app.replace(/text-slate-900/g, 'text-[#3300FF]');
app = app.replace(/text-slate-600/g, 'text-[#00CC99]');
app = app.replace(/bg-\[#E1DDD1\]/g, 'bg-[#FFCC00]');
app = app.replace(/from-\[#FF3366\]/g, 'from-[#FF0055]');
app = app.replace(/to-\[#FF9900\]/g, 'to-[#FFDD00]');

fs.writeFileSync('src/App.tsx', app);
console.log('done!');
