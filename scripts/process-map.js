const fs = require('fs');

const svg = fs.readFileSync('public/world-map-raw.svg', 'utf8');
const chunks = svg.split('<path');

const paths = [];
for (let i = 1; i < chunks.length; i++) {
  const c = chunks[i];
  const idM = c.match(/\bid="([^"]+)"/);
  const dM = c.match(/\bd="([^"]+)"/);
  if (dM) {
    paths.push({
      id: idM ? idM[1] : `path_${i}`,
      d: dM[1].replace(/\s+/g, ' ').trim()
    });
  }
}

console.log('Valid paths found:', paths.length);
fs.writeFileSync('src/components/floor-journey/world-map-paths.json', JSON.stringify(paths));

// Test key entities
const keys = ['usa', 'netherlands', 'britain', 'taiwan', 'vietnam', 'china', 'honshu', 'south korea'];
for (const key of keys) {
  const p = paths.find(x => x.id === key);
  if (!p) {
    console.log(`Missing ${key}`);
    continue;
  }
  const cleanD = p.d.replace(/[a-zA-Z]/g, ' ');
  const numbers = cleanD.match(/-?[\d.]+/g);
  if (!numbers) continue;
  const numList = numbers.map(Number);
  const xs = [];
  const ys = [];
  for (let j = 0; j < numList.length; j += 2) {
    if (!isNaN(numList[j]) && !isNaN(numList[j+1])) {
      xs.push(numList[j]);
      ys.push(numList[j+1]);
    }
  }
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  console.log(`${key}: center=(${midX.toFixed(1)}, ${midY.toFixed(1)}), bounds=[${minX.toFixed(1)}, ${minY.toFixed(1)}, ${maxX.toFixed(1)}, ${maxY.toFixed(1)}]`);
}
