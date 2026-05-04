
import fs from 'fs';
const headPath = '/Users/salemlahmer/ilsuffitdelast/website/src/components/layout/Header.tsx';
const appPath = '/Users/salemlahmer/ilsuffitdelast/website/src/App.tsx';

let head = fs.readFileSync(headPath, 'utf8');
head = head.replace(/import\s*\{\s*Instagram,\s*Facebook,\s*Youtube,\s*Menu\s*\}\s*from\s*'lucide-react'/, "import { Menu } from 'lucide-react'");
head = head.replace(/<Instagram[^>]*\/>/g, '<span>IG</span>');
head = head.replace(/<Facebook[^>]*\/>/g, '<span>FB</span>');
head = head.replace(/<Youtube[^>]*\/>/g, '<span>YT</span>');
head = head.replace('const [scrolled, setScrolled] = useState(false)', 'const [scrolled, setScrolled] = useState(false)
  console.log(scrolled)');

fs.writeFileSync(headPath, head);

let app = fs.readFileSync(appPath, 'utf8');
app = app.replace('function raf(time) {', 'function raf(time: number) {');
fs.writeFileSync(appPath, app);

console.log('Fixed');

