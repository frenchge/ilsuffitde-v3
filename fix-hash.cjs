const fs = require('fs');

const paths = [
    'src/App.tsx', 
    'src/components/layout/Header.tsx', 
    'src/components/layout/Footer.tsx', 
    'src/components/canvas/Experience.tsx'
];

paths.forEach(p => {
    if (!fs.existsSync(p)) return;
    let c = fs.readFileSync(p, 'utf8');

    // Fix the missing hashtag issue
    // In Tailwind arbitrary values, if it has `-[16697a]`, it needs to become `-[#16697a]`
    c = c.replace(/-\\[16697a\\]/gi, '-[#16697a]');
    c = c.replace(/-\\[ffa62b\\]/gi, '-[#ffa62b]');
    c = c.replace(/-\\[489fb5\\]/gi, '-[#489fb5]');
    c = c.replace(/-\\[82c0cc\\]/gi, '-[#82c0cc]');
    c = c.replace(/-\\[ede7e3\\]/gi, '-[#ede7e3]');

    fs.writeFileSync(p, c);
});
console.log("HASH TAGS RESTORED");
