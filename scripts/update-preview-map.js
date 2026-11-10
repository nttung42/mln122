const fs = require('fs');

const paths = JSON.parse(fs.readFileSync('src/components/floor-journey/world-map-paths.json', 'utf8'));
let previewHtml = fs.readFileSync('public/preview-floor4.html', 'utf8');

// Generate SVG paths string
const countryPathsSvg = paths.map((item, idx) => {
  return `<path id="country-${item.id || 'path_' + idx}" data-cid="${item.id}" d="${item.d}" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="0.65" style="transition: all 0.3s ease;" class="hover:fill-slate-300 cursor-pointer"><title>${(item.id || '').toUpperCase()}</title></path>`;
}).join('\n            ');

const realisticMapHtml = `<!-- 1.1 Realistic GVC Geopolitical Map Canvas (Rộng 820px, Real Geographic Vector Map) -->
      <div style="left: 850px; top: 130px;" class="absolute pointer-events-auto w-[820px] h-[400px] z-20 flex flex-col justify-between">
        
        <div class="relative w-full h-[340px] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col justify-between">
          
          <!-- TOP TELEMETRY HUD BAR -->
          <div class="relative z-10 flex items-center justify-between px-4 py-2 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-[10px] font-mono text-slate-300">
            <div class="flex items-center gap-2.5">
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="font-bold text-emerald-400 tracking-wider">LIVE GIS TELEMETRY // WGS-84</span>
              <span class="text-slate-600">|</span>
              <span id="mapGpsCoords" class="text-slate-400">21°11'N 106°03'E &bull; <strong class="text-white">BẮC NINH / THÁI NGUYÊN</strong></span>
            </div>

            <div class="flex items-center gap-3">
              <span id="mapClusterDesc" class="text-slate-400 hidden sm:inline">ĐẠI CÔNG XƯỞNG LẮP RÁP TOÀN CẦU</span>
              <span class="px-2 py-0.5 rounded bg-slate-800 text-sky-400 font-bold border border-slate-700">N 🧭 00°</span>
            </div>
          </div>

          <!-- REALISTIC WORLD MAP SVG CANVAS -->
          <div class="relative w-full flex-1 overflow-hidden">
            <svg class="w-full h-full" viewBox="40 70 870 410" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gisOceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#0B132B" />
                  <stop offset="50%" stop-color="#0F172A" />
                  <stop offset="100%" stop-color="#0A1128" />
                </linearGradient>
                <radialGradient id="gisSkyGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.9" />
                  <stop offset="100%" stop-color="#0284C7" stop-opacity="0" />
                </radialGradient>
                <radialGradient id="gisEmeraldGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#34D399" stop-opacity="0.9" />
                  <stop offset="100%" stop-color="#10B981" stop-opacity="0" />
                </radialGradient>
                <radialGradient id="gisAmberGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.9" />
                  <stop offset="100%" stop-color="#D97706" stop-opacity="0" />
                </radialGradient>
                <radialGradient id="gisRedGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#F87171" stop-opacity="0.95" />
                  <stop offset="100%" stop-color="#DC2626" stop-opacity="0" />
                </radialGradient>
              </defs>

              <!-- Ocean Background -->
              <rect x="0" y="0" width="950" height="620" fill="url(#gisOceanGradient)" />

              <!-- Graticules -->
              <g stroke="#1E293B" stroke-width="0.75" stroke-dasharray="3 4">
                <line x1="40" y1="280" x2="910" y2="280" stroke="#334155" stroke-width="1" stroke-dasharray="6 4" />
                <text x="50" y="276" fill="#475569" font-size="7" font-family="'JetBrains Mono'">0° EQUATOR</text>
                <line x1="40" y1="200" x2="910" y2="200" stroke="#1E293B" stroke-dasharray="4 4" />
                <text x="50" y="196" fill="#334155" font-size="6.5" font-family="'JetBrains Mono'">23.5°N TROPIC OF CANCER</text>
                <line x1="40" y1="360" x2="910" y2="360" stroke="#1E293B" stroke-dasharray="4 4" />
                <text x="50" y="356" fill="#334155" font-size="6.5" font-family="'JetBrains Mono'">23.5°S TROPIC OF CAPRICORN</text>
                <line x1="445" y1="70" x2="445" y2="480" stroke="#334155" stroke-width="1" stroke-dasharray="6 4" />
                <text x="448" y="85" fill="#475569" font-size="6.5" font-family="'JetBrains Mono'">0° GREENWICH</text>
                <line x1="140" y1="70" x2="140" y2="480" />
                <line x1="240" y1="70" x2="240" y2="480" />
                <line x1="645" y1="70" x2="645" y2="480" />
                <line x1="785" y1="70" x2="785" y2="480" />
              </g>

              <!-- 340 Real Geographical Landmass Paths -->
              <g id="worldMapPathsGroup">
                ${countryPathsSvg}
              </g>

              <!-- Great-Circle Trade & IP Arcs -->
              <g fill="none">
                <path d="M 152 194 C 190 90, 710 90, 786 252" stroke="#0284C7" stroke-width="2.5" stroke-dasharray="8 8" class="flow-dash-right" opacity="0.9" />
                <path d="M 468 168 Q 628 135 786 252" stroke="#10B981" stroke-width="2.5" stroke-dasharray="6 6" class="flow-dash-right" opacity="0.9" />
                <path d="M 786 252 Q 770 262 742 278" stroke="#D97706" stroke-width="3.2" stroke-dasharray="5 5" class="flow-dash-right" />
                <path d="M 742 278 C 820 150, 110 150, 155 205" stroke="#EF4444" stroke-width="2.2" stroke-dasharray="8 10" class="flow-dash-left" opacity="0.85" />
                <path d="M 742 278 Q 734 315 734 332 Q 620 320 540 270 Q 500 220 468 168" stroke="#F59E0B" stroke-width="1.8" stroke-dasharray="6 8" class="flow-dash-left" opacity="0.75" />
              </g>

              <!-- Interactive Pins (Exact Geographical Coordinates) -->
              <!-- USA -->
              <g onclick="selectMapHub('usa')" class="cursor-pointer group" transform="translate(152, 194)">
                <circle id="hubGlow-usa" r="28" fill="url(#gisSkyGlow)" class="pulse-node-circle opacity-0" />
                <circle r="7.5" fill="#0284C7" stroke="#FFF" stroke-width="2" class="group-hover:scale-125 transition-transform drop-shadow" />
                <g transform="translate(0, -14)">
                  <rect x="-42" y="-10" width="84" height="16" rx="8" fill="#0F172A" fill-opacity="0.85" stroke="#0284C7" stroke-width="1" />
                  <text x="0" y="1" text-anchor="middle" font-size="8" font-family="'JetBrains Mono'" font-weight="bold" fill="#FFF">🇺🇸 SILICON VALLEY</text>
                </g>
              </g>

              <!-- EUROPE (ASML / ARM) -->
              <g onclick="selectMapHub('europe')" class="cursor-pointer group" transform="translate(468, 168)">
                <circle id="hubGlow-europe" r="28" fill="url(#gisEmeraldGlow)" class="pulse-node-circle opacity-0" />
                <circle r="7" fill="#10B981" stroke="#FFF" stroke-width="2" class="group-hover:scale-125 transition-transform drop-shadow" />
                <g transform="translate(0, -14)">
                  <rect x="-38" y="-10" width="76" height="16" rx="8" fill="#0F172A" fill-opacity="0.85" stroke="#10B981" stroke-width="1" />
                  <text x="0" y="1" text-anchor="middle" font-size="8" font-family="'JetBrains Mono'" font-weight="bold" fill="#FFF">🇳🇱 ASML & ARM</text>
                </g>
              </g>

              <!-- TAIWAN (TSMC) -->
              <g onclick="selectMapHub('taiwan')" class="cursor-pointer group" transform="translate(786, 252)">
                <circle id="hubGlow-taiwan" r="28" fill="url(#gisAmberGlow)" class="pulse-node-circle opacity-0" />
                <circle r="7.5" fill="#D97706" stroke="#FFF" stroke-width="2" class="group-hover:scale-125 transition-transform drop-shadow" />
                <g transform="translate(0, -14)">
                  <rect x="-38" y="-10" width="76" height="16" rx="8" fill="#0F172A" fill-opacity="0.85" stroke="#D97706" stroke-width="1" />
                  <text x="0" y="1" text-anchor="middle" font-size="8" font-family="'JetBrains Mono'" font-weight="bold" fill="#FFF">🇹🇼 TSMC FAB 18</text>
                </g>
              </g>

              <!-- VIETNAM (BAC NINH / THAI NGUYEN) -->
              <g onclick="selectMapHub('vietnam')" class="cursor-pointer group" transform="translate(742, 278)">
                <circle id="hubGlow-vietnam" r="28" fill="url(#gisRedGlow)" class="pulse-node-circle" />
                <circle r="8.5" fill="#DC2626" stroke="#FFF" stroke-width="2.5" class="group-hover:scale-125 transition-transform drop-shadow" />
                <g transform="translate(0, -14)">
                  <rect x="-42" y="-10" width="84" height="16" rx="8" fill="#0F172A" fill-opacity="0.85" stroke="#DC2626" stroke-width="1.5" />
                  <text x="0" y="1" text-anchor="middle" font-size="8" font-family="'JetBrains Mono'" font-weight="black" fill="#FFF">🇻🇳 VIỆT NAM ★</text>
                </g>
              </g>

              <!-- CONGO -->
              <g onclick="selectMapHub('congo')" class="cursor-pointer group" transform="translate(502, 338)">
                <circle id="hubGlow-congo" r="24" fill="url(#gisAmberGlow)" class="pulse-node-circle opacity-0" />
                <circle r="6" fill="#64748B" stroke="#FFF" stroke-width="1.5" class="group-hover:scale-125 transition-transform drop-shadow" />
                <g transform="translate(0, -14)">
                  <rect x="-36" y="-10" width="72" height="16" rx="8" fill="#0F172A" fill-opacity="0.85" stroke="#64748B" stroke-width="0.75" />
                  <text x="0" y="1" text-anchor="middle" font-size="7.5" font-family="'JetBrains Mono'" font-weight="bold" fill="#CBD5E1">🇨🇩 MỎ COBALT</text>
                </g>
              </g>
            </svg>
          </div>

          <!-- BOTTOM CARTOGRAPHY STATUS -->
          <div class="relative z-10 flex items-center justify-between px-4 py-1.5 bg-slate-950/85 backdrop-blur-md border-t border-slate-800 text-[9.5px] font-mono text-slate-400">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-sky-500"></span><span>R&D Hoa Kỳ</span></div>
              <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500"></span><span>EUV Hà Lan</span></div>
              <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-500"></span><span>Foundry Đài Loan</span></div>
              <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-500"></span><strong class="text-red-400">Lắp Ráp VN</strong></div>
            </div>
            <div class="flex items-center gap-2 text-slate-500">
              <span>|--- 1,500 KM --- 3,000 KM ---|</span>
              <span class="text-slate-400 font-bold hidden md:inline">EQUIRECTANGULAR WGS-84</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between px-4 py-2 rounded-2xl bg-white/95 border border-slate-200 text-xs font-mono shadow-xs backdrop-blur-sm">
          <span class="flex items-center gap-2 font-bold text-slate-800">
            <span id="ribbonFlag" class="text-base">🇻🇳</span>
            <span id="ribbonName">VIỆT NAM</span>
          </span>
          <span id="ribbonBadge" class="text-sky-700 font-bold">400.000 CÔNG NHÂN PHÒNG SẠCH</span>
          <span class="text-slate-500">Thặng dư: <strong id="ribbonShare" class="text-slate-900">$28 (2.8%)</strong></span>
        </div>
      </div>`;

// Replace from <!-- 1.1 Expansive Map Canvas to <!-- 1.2 Open Photo
const startMarker = '<!-- 1.1 Expansive Map Canvas';
const endMarker = '<!-- 1.2 Open Photo & Event Mural';

const sIdx = previewHtml.indexOf(startMarker);
const eIdx = previewHtml.indexOf(endMarker);

if (sIdx !== -1 && eIdx !== -1) {
  previewHtml = previewHtml.substring(0, sIdx) + realisticMapHtml + '\n\n      ' + previewHtml.substring(eIdx);
  fs.writeFileSync('public/preview-floor4.html', previewHtml, 'utf8');
  console.log('Successfully updated public/preview-floor4.html with realistic map!');
} else {
  console.error('Markers not found', { sIdx, eIdx });
}
