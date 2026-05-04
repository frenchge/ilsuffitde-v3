const fs = require('fs');

const b64 = "==";

fs.writeFileSync('src/App.tsx', Buffer.from(b64, 'base64').toString('utf8'));
