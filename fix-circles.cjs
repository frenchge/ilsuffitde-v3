const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

// Change border radius and aspect ratio
code = code.replace(/aspect-\[4\/5\]/g, 'aspect-square');
code = code.replace(/rounded-\[1\.5rem\]/g, 'rounded-full');

// Change scrollTrigger
code = code.replace(/start: 'top 120%',/g, "start: 'top 100%',");
code = code.replace(/end: 'top 20%',/g, "end: 'top 5%',");
code = code.replace(/scrub: 2,/g, "scrub: 4,");
code = code.replace(/rotation: \(i % 2 === 0 \? -6 : 6\)/g, "rotation: 0"); // since it's a circle, rotation might not be as obvious but let's keep it

fs.writeFileSync('src/App.tsx', code);
