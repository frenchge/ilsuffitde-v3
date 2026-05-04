const fs = require('fs');

const bg = 'bg-[#ede7e3]'; 
const bgOld2 = 'bg-[\\#FAFAFA]';
const bgOld3 = 'bg-[\\#FDF0D5]';

// Target colors
const dark = '[#16697a]';
const accent = '[#ffa62b]';
const sec = '[#489fb5]';
const tert = '[#82c0cc]';

const paths = [
    'src/App.tsx', 
    'src/components/layout/Header.tsx', 
    'src/components/layout/Footer.tsx', 
    'src/components/canvas/Experience.tsx'
];

paths.forEach(p => {
    if (!fs.existsSync(p)) return;
    let c = fs.readFileSync(p, 'utf8');

    // Bg colors
    c = c.replace(/bg-white/gi, bg);
    c = c.replace(/bg-\\[#FAFAFA\\]/gi, bg);
    c = c.replace(/#FAFAFA/gi, 'ede7e3');
    c = c.replace(/#FDF0D5/gi, 'ede7e3');
    
    // Core styling replacements
    c = c.replace(/#003049/gi, '16697a');
    c = c.replace(/text-slate-900/gi, `text-${dark}`);
    c = c.replace(/bg-slate-900/gi, `bg-${dark}`);
    c = c.replace(/text-slate-600/gi, `text-${sec}`);
    c = c.replace(/text-slate-400/gi, `text-${tert}`);

    // Red & Orange -> Amber
    c = c.replace(/#C1121F/gi, 'ffa62b');
    c = c.replace(/#FF3E00/gi, 'ffa62b');
    c = c.replace(/#FF8C00/gi, 'ffa62b');
    
    // Blues -> Pacific & Sky
    c = c.replace(/#669BBC/gi, '489fb5');
    c = c.replace(/#0055FF/gi, '489fb5');
    c = c.replace(/#00A3FF/gi, '82c0cc');
    
    // Deep Red -> Sky Blue
    c = c.replace(/#780000/gi, '82c0cc');

    fs.writeFileSync(p, c);
});
console.log("MIGRATION COMPLETE");
