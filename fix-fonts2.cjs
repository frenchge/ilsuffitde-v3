const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(
  /<link href="https:\/\/fonts.googleapis.com[^"]*" rel="stylesheet">/,
  '<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">'
);
fs.writeFileSync('index.html', index);

let css = fs.readFileSync('src/styles/globals.css', 'utf8');
css = css.replace(/--font-sans: [^;]+;/, '--font-sans: "Schibsted Grotesk", sans-serif;');
css = css.replace(/--font-serif: [^;]+;/, '--font-serif: "Bodoni Moda", serif;');
fs.writeFileSync('src/styles/globals.css', css);
