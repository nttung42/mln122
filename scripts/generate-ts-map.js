const fs = require('fs');

const paths = JSON.parse(fs.readFileSync('src/components/floor-journey/world-map-paths.json', 'utf8'));

const tsContent = `// Auto-generated real geopolitical world map vector paths (Equirectangular WGS-84)
export interface WorldPath {
  id: string;
  d: string;
}

export const WORLD_MAP_PATHS: WorldPath[] = ${JSON.stringify(paths, null, 2)};
`;

fs.writeFileSync('src/components/floor-journey/world-map-data.ts', tsContent, 'utf8');
console.log('Saved src/components/floor-journey/world-map-data.ts successfully');
