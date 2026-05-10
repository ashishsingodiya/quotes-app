import fs from 'fs';
let content = fs.readFileSync('src/App.jsx', 'utf8');
content = content.replace(
  '    fetchQuotes(currentPage);',
  '    // eslint-disable-next-line react-hooks/set-state-in-effect\n    fetchQuotes(currentPage);'
);
content = content.replace(
  '  // eslint-disable-next-line react-hooks/set-state-in-effect\n  useEffect(() => {\n',
  '  useEffect(() => {\n'
);
fs.writeFileSync('src/App.jsx', content);
