const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(
  /<link href="https:\/\/fonts.googleapis.com[^"]+" rel="stylesheet">/,
  '<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap" rel="stylesheet">'
);
fs.writeFileSync('index.html', index);

let css = fs.readFileSync('src/styles/globals.css', 'utf8');
css = css.replace(/--font-sans: [^;]+;/, '--font-sans: "Plus Jakarta Sans", sans-serif;');
css = css.replace(/--font-serif: [^;]+;/, '--font-serif: "Instrument Serif", serif;');
fs.writeFileSync('src/styles/globals.css', css);
