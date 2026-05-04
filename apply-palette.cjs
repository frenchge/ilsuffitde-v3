const fs = require('fs');

const palette = {
  bg: '#FDF0D5',
  primaryText: '#780000',
  secondaryText: '#003049',
  accent1: '#C1121F',
  accent2: '#669BBC',
  accent3: '#003049'
};

function updateColors(filePath) {
  if (!fs.existsSync(filePath)) return;
  let code = fs.readFileSync(filePath, 'utf8');

  // Backgrounds
  code = code.replace(/bg-\[#FFF200\]/g, `bg-[${palette.bg}]`);
  code = code.replace(/bg-\[#FFF700\]/g, `bg-[${palette.bg}]`);
  code = code.replace(/bg-\[#FFFF00\]/g, `bg-[${palette.bg}]`);
  code = code.replace(/bg-\[#FF007A\]/g, `bg-[${palette.accent3}]`); 
  code = code.replace(/bg-\[#00FFD1\]/g, `bg-[${palette.accent1}]`); // buttons
  
  code = code.replace(/bg-\[#FFF200\]\/90/g, `bg-[${palette.bg}]/90`);

  // Texts
  code = code.replace(/text-\[#FF007F\]/g, `text-[${palette.primaryText}]`);
  code = code.replace(/text-\[#FF007A\]/g, `text-[${palette.primaryText}]`);
  code = code.replace(/text-\[#5E00FF\]/g, `text-[${palette.secondaryText}]`);
  code = code.replace(/text-\[#7000FF\]/g, `text-[${palette.secondaryText}]`);
  code = code.replace(/text-\[#00FFD1\]/g, `text-[${palette.accent1}]`);
  code = code.replace(/text-white/g, `text-[${palette.bg}]`); // Make white text match the bg

  // Gradients and Borders
  code = code.replace(/from-\[#FF00FF\]/g, `from-[${palette.accent1}]`);
  code = code.replace(/from-\[#5E00FF\]/g, `from-[${palette.secondaryText}]`);
  code = code.replace(/to-\[#00FFFF\]/g, `to-[${palette.accent2}]`);
  code = code.replace(/to-\[#FFEA00\]/g, `to-[${palette.accent3}]`);
  
  code = code.replace(/border-\[#FF007A\]/g, `border-[${palette.primaryText}]`);
  code = code.replace(/border-\[#00FFD1\]/g, `border-[${palette.accent1}]`);
  code = code.replace(/shadow-\[#FF007A\]/g, `shadow-[${palette.primaryText}]`);

  fs.writeFileSync(filePath, code);
}

updateColors('src/App.tsx');
updateColors('src/components/layout/Header.tsx');
updateColors('src/components/layout/Footer.tsx');
updateColors('src/components/canvas/Experience.tsx'); // May need color updates inside threejs

console.log('Palette applied!');
