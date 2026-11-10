const fs = require('fs');

let html = fs.readFileSync('public/preview-floor4.html', 'utf8');

const targetFunctionBlock = `    function selectMapHub(hubKey) {
      const data = HUBS_DATA[hubKey];
      if (!data) return;

      document.getElementById('ribbonName').textContent = data.name;
      document.getElementById('ribbonFlag').textContent = data.flag;
      document.getElementById('ribbonBadge').textContent = data.tag;
      document.getElementById('ribbonShare').textContent = \`\${data.share} (\${data.shareSub})\`;

      document.getElementById('hubCardNameBadge').textContent = data.name;
      document.getElementById('hubCardShareSub').textContent = data.shareSub;
      document.getElementById('hubCardImg').src = data.img;
      document.getElementById('hubCardPowerBadge').textContent = data.power;
      document.getElementById('hubCardHeadline').textContent = data.headline;
      document.getElementById('hubCardFormula').textContent = data.formula;
      document.getElementById('hubCardShare').textContent = data.share;

      thoughtText.textContent = data.thought;
    }`;

const replacementFunctionBlock = `    const HUB_GIS_TELEMETRY = {
      usa: { coords: "37°23'N 122°05'W • SILICON VALLEY", cluster: "R&D & BẢN QUYỀN TRÍ TUỆ ĐỘC QUYỀN" },
      europe: { coords: "51°25'N 05°24'E • ASML & ARM", cluster: "ĐỘC QUYỀN CÔNG NGHỆ THƯỢNG NGUỒN (c)" },
      taiwan: { coords: "24°46'N 121°00'E • TSMC FAB 18", cluster: "XƯỞNG ĐÚC NANO SIÊU TINH KHIẾT" },
      vietnam: { coords: "21°11'N 106°03'E • BẮC NINH / THÁI NGUYÊN", cluster: "ĐẠI CÔNG XƯỞNG LẮP RÁP TOÀN CẦU" },
      congo: { coords: "11°40'S 27°28'E • MỎ COBALT KATANGA", cluster: "KHAI THÁC KHOÁNG SẢN VÙNG NGOẠI VI" }
    };

    function updateMapLayerPaths(layer) {
      const paths = document.querySelectorAll('#worldMapPathsGroup path');
      paths.forEach(p => {
        const id = p.getAttribute('data-cid') || '';
        let fill = "#F8FAFC";
        let stroke = "#CBD5E1";
        let strokeWidth = "0.65";

        if (layer === 'production') {
          if (id === 'vietnam') { fill = "#FEE2E2"; stroke = "#EF4444"; strokeWidth = "2"; }
          else if (id === 'taiwan') { fill = "#FEF3C7"; stroke = "#F59E0B"; strokeWidth = "2.2"; }
          else if (id === 'netherlands') { fill = "#D1FAE5"; stroke = "#10B981"; strokeWidth = "2"; }
          else if (id === 'china') { fill = "#FEF9C3"; stroke = "#EAB308"; strokeWidth = "1.2"; }
          else if (id === 'usa') { fill = "#E0F2FE"; stroke = "#0284C7"; strokeWidth = "1.2"; }
          else if (id === 'south korea') { fill = "#DCFCE7"; stroke = "#22C55E"; strokeWidth = "1.5"; }
        } else if (layer === 'value') {
          if (id === 'usa' || id === 'britain') { fill = "#BAE6FD"; stroke = "#0284C7"; strokeWidth = "2.5"; }
          else if (id === 'netherlands') { fill = "#A7F3D0"; stroke = "#059669"; strokeWidth = "2.2"; }
          else if (id === 'taiwan') { fill = "#FEF3C7"; stroke = "#D97706"; strokeWidth = "1.5"; }
          else if (id === 'vietnam' || id === 'china') { fill = "#F1F5F9"; stroke = "#94A3B8"; strokeWidth = "0.8"; }
        } else if (layer === 'ownership') {
          if (id === 'usa' || id === 'south korea' || id === 'honshu') { fill = "#FED7AA"; stroke = "#EA580C"; strokeWidth = "2"; }
        } else if (layer === 'consumer') {
          if (['usa', 'canada', 'germany', 'france', 'britain', 'netherlands', 'italy'].includes(id)) {
            fill = "#BBF7D0"; stroke = "#16A34A"; strokeWidth = "1.8";
          } else if (['china', 'honshu', 'vietnam'].includes(id)) {
            fill = "#DCFCE7"; stroke = "#16A34A"; strokeWidth = "1.2";
          }
        }

        p.setAttribute('fill', fill);
        p.setAttribute('stroke', stroke);
        p.setAttribute('stroke-width', strokeWidth);
      });
    }

    function selectMapHub(hubKey) {
      const data = HUBS_DATA[hubKey];
      if (!data) return;

      const telem = HUB_GIS_TELEMETRY[hubKey] || HUB_GIS_TELEMETRY.vietnam;
      const coordsEl = document.getElementById('mapGpsCoords');
      const clusterEl = document.getElementById('mapClusterDesc');
      if (coordsEl) coordsEl.innerHTML = telem.coords;
      if (clusterEl) clusterEl.textContent = telem.cluster;

      ['usa', 'europe', 'taiwan', 'vietnam', 'congo'].forEach(k => {
        const glow = document.getElementById(\`hubGlow-\${k}\`);
        if (glow) {
          glow.classList.toggle('opacity-0', k !== hubKey);
          glow.classList.toggle('opacity-100', k === hubKey);
        }
      });

      document.getElementById('ribbonName').textContent = data.name;
      document.getElementById('ribbonFlag').textContent = data.flag;
      document.getElementById('ribbonBadge').textContent = data.tag;
      document.getElementById('ribbonShare').textContent = \`\${data.share} (\${data.shareSub})\`;

      document.getElementById('hubCardNameBadge').textContent = data.name;
      document.getElementById('hubCardShareSub').textContent = data.shareSub;
      document.getElementById('hubCardImg').src = data.img;
      document.getElementById('hubCardPowerBadge').textContent = data.power;
      document.getElementById('hubCardHeadline').textContent = data.headline;
      document.getElementById('hubCardFormula').textContent = data.formula;
      document.getElementById('hubCardShare').textContent = data.share;

      thoughtText.textContent = data.thought;
    }`;

html = html.replace(targetFunctionBlock, replacementFunctionBlock);

// Hook updateMapLayerPaths in setMapLayer
const oldSetMapLayer = `    function setMapLayer(layer) {
      currentLayer = layer;`;

const newSetMapLayer = `    function setMapLayer(layer) {
      currentLayer = layer;
      updateMapLayerPaths(layer);`;

html = html.replace(oldSetMapLayer, newSetMapLayer);

fs.writeFileSync('public/preview-floor4.html', html, 'utf8');
console.log('preview-floor4.html interactive logic updated successfully');
