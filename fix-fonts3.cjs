const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(
  /<link href="https:\/\/fonts.googleapis.com[^"]*" rel="stylesheet">/,
  '<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">'
);
fs.writeFileSync('index.html', index);

let css = fs.readFileSync('src/styles/globals.css', 'utf8');
css = css.replace(/--font-sans: [^;]+;/, '--font-sans: "Outfit", sans-serif;');
css = css.replace(/--font-serif: [^;]+;/, '--font-serif: "Cormorant Garamond", serif;');
fs.writeFileSync('src/styles/globals.css', css);
