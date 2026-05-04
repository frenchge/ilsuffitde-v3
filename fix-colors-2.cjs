const fs = require('fs');

let htmlPath = 'index.html';
let cssPath = 'src/styles/globals.css';
let appPath = 'src/App.tsx';

let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com[^"]+"/g, '<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Outfit:wght@300;400;500;700;900&display=swap"');
fs.writeFileSync(htmlPath, html);

let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/--font-sans:[^;]+;/g, "--font-sans: 'Outfit', sans-serif;");
css = css.replace(/--font-serif:[^;]+;/g, "--font-serif: 'Fredoka', sans-serif;");
fs.writeFileSync(cssPath, css);

let app = fs.readFileSync(appPath, 'utf8');
app = app.replace(/bg-\[#F2F0E9\]/g, 'bg-[#FFF700]'); 
app = app.replace(/text-\[#4400FF\]/g, 'text-[#FF007A]'); 
app = app.replace(/text-slate-900/g, 'text-[#FF007A]'); 
app = app.replace(/text-slate-600/g, 'text-[#5E00FF]'); 
app = app.replace(/bg-slate-900/g, 'bg-[#apFFapp );
app = app.replace(/from-\[#FF3366\]/g, 'from-[#FF00FF]');
app = app.replace(/to-\[#4400FF\]/g, 'to-[#00FFFF]');
app = app.replace(/from-\[#4400FF\]/g, 'from-[#5E00FF]');
app = app.replace(/to-\[#AA00FF\]/g, 'to-[#FFEA00]');
app = app.replace(/bg-white\/50/g, 'bg-white/90');
app = app.replace(/text-white/g, 'text-[#5E00FF]'); // Make text inside buttons readable 

fs.writeFileSync(appPath, app);
console.log('done colors');
