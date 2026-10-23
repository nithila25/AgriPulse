const districts = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri',
  'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanniyakumari', 'Karur',
  'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris',
  'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga',
  'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli',
  'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore',
  'Viluppuram', 'Virudhunagar'
];

const soilProfiles = {
  delta: { name: 'Cauvery delta alluvium', texture: 'Deep alluvial clay and silty loam, with locally saline coastal flats.', drainage: 'Slow in low-lying fields; field drains help after heavy rain.', pH: 'Typically near-neutral to mildly alkaline; local variation is substantial.' },
  coast: { name: 'Coastal alluvial & sandy soils', texture: 'Sandy coastal soils with alluvial and clayey pockets inland.', drainage: 'Rapid in sandy belts; poor where coastal clay and a high water table occur.', pH: 'Ranges from mildly acidic inland to alkaline or saline near the coast.' },
  west: { name: 'Western red loam & black soil', texture: 'Red loam and gravelly uplands, with heavier black-soil tracts in valleys.', drainage: 'Generally good on uplands; cracking clay holds water longer.', pH: 'Often mildly acidic to neutral in red soils; alkaline pockets are possible.' },
  north: { name: 'Northern red loam & clay', texture: 'Red loam, gravelly red earth and patches of clayey alluvium.', drainage: 'Moderate to rapid on uplands; clay basins can drain slowly.', pH: 'Commonly mildly acidic to neutral, with locally alkaline patches.' },
  south: { name: 'Southern red & black soils', texture: 'Red sandy loam and shallow gravelly soil; heavier black soil in selected tracts.', drainage: 'Variable; red uplands drain quickly and black soils retain moisture.', pH: 'Often neutral to mildly alkaline; coastal and irrigated fields may be saline.' },
  hill: { name: 'Foothill red loam', texture: 'Red loam and colluvial soil, deeper in foothills and shallower on slopes.', drainage: 'Usually well drained; protect slopes from runoff and erosion.', pH: 'Often mildly acidic, with local variation by elevation and parent material.' }
};

const districtSoils = {
  Ariyalur: 'north', Chengalpattu: 'coast', Chennai: 'coast', Coimbatore: 'west', Cuddalore: 'coast',
  Dharmapuri: 'hill', Dindigul: 'hill', Erode: 'west', Kallakurichi: 'north', Kancheepuram: 'north',
  Kanniyakumari: 'coast', Karur: 'west', Krishnagiri: 'hill', Madurai: 'south', Mayiladuthurai: 'delta',
  Nagapattinam: 'delta', Namakkal: 'west', Nilgiris: 'hill', Perambalur: 'north', Pudukkottai: 'south', Ramanathapuram: 'south',
  Ranipet: 'north', Salem: 'west', Sivaganga: 'south', Tenkasi: 'hill', Thanjavur: 'delta', Theni: 'hill',
  Thoothukudi: 'south', Tiruchirappalli: 'delta', Tirunelveli: 'south', Tirupathur: 'hill', Tiruppur: 'west',
  Tiruvallur: 'north', Tiruvannamalai: 'north', Tiruvarur: 'delta', Vellore: 'north', Viluppuram: 'north',
  Virudhunagar: 'south'
};

const climateGroups = {
  delta: { label: 'Delta & north-east monsoon', rainfall: 'Seasonal rain is concentrated in the north-east monsoon; low fields may waterlog.' },
  coast: { label: 'Coastal & north-east monsoon', rainfall: 'Coastal rain and cyclonic spells can bring short periods of intense rainfall.' },
  west: { label: 'Western & south-west monsoon', rainfall: 'Western districts receive stronger south-west monsoon influence; dry spells remain possible.' },
  north: { label: 'Northern interior', rainfall: 'Rainfall is variable and often concentrated in the north-east monsoon.' },
  south: { label: 'Southern interior', rainfall: 'Rainfall is seasonal and variable; dry spells and local irrigation availability matter.' },
  hill: { label: 'Upland & foothill', rainfall: 'Elevation creates local rainfall differences; slopes may shed water quickly.' }
};

const crops = {
  paddy: {
    name: 'Paddy', icon: '🌾', cycle: 120, waterMm: 1200, stages: [15, 40, 25, 20],
    moisture: [55, 90], ideal: 'Fine-textured clay loam to clay, level land, dependable water, and pH 5.5–7.5.',
    suitability: { delta: 3, coast: 14, west: 18, north: 16, south: 20, hill: 24 },
    diseases: ['Rice blast', 'Sheath blight', 'Bacterial leaf blight'],
    nutrition: ['Soil-test-based NPK in split doses; avoid excess nitrogen.', 'Neem cake and well-decomposed compost before planting.', 'Pseudomonas fluorescens seed or seedling treatment; Trichoderma-enriched compost.'],
    conserve: 'Use a field water tube and alternate wetting and drying where the cultivar and soil permit. Keep bunds sound and avoid standing water except at sensitive stages.',
    fit: 'Delta alluvium is well suited to puddled rice when bunds hold water. On lighter soils, shorter irrigation intervals may be needed; provide outlets before intense rain.',
    risk: ['Water demand is high; reliable irrigation is important.']
  },
  sugarcane: {
    name: 'Sugarcane', icon: '🎋', cycle: 330, waterMm: 1800, stages: [15, 45, 25, 15],
    moisture: [45, 80], ideal: 'Deep, fertile, well-drained loam with good organic matter and pH 6.0–7.5.',
    suitability: { delta: 8, coast: 19, west: 6, north: 16, south: 18, hill: 23 },
    diseases: ['Red rot', 'Smut', 'Wilt'],
    nutrition: ['Soil-test-guided NPK in split applications; apply potassium on light soils.', 'Cane trash mulch and mature compost improve moisture retention.', 'Trichoderma-enriched sett treatment; use healthy, disease-free planting material.'],
    conserve: 'Drip irrigation with fertigation can reduce applied water. Trash mulch, timely earthing-up and irrigation scheduling are valuable during establishment and grand growth.',
    fit: 'Deep alluvium or western loams can support rooting if drainage is sound. Avoid prolonged waterlogging; improve organic matter on shallow or coarse soils.',
    risk: ['Long growth cycle increases exposure to dry spells.', 'Needs dependable water through establishment and grand growth.']
  },
  cotton: {
    name: 'Cotton', icon: '☁️', cycle: 160, waterMm: 700, stages: [15, 35, 30, 20],
    moisture: [30, 65], ideal: 'Deep, well-drained black soil or medium loam with pH 6.0–8.0.',
    suitability: { delta: 19, coast: 22, west: 8, north: 15, south: 9, hill: 21 },
    diseases: ['Bacterial blight', 'Wilt', 'Root rot'],
    nutrition: ['Soil-test-based NPK; avoid excess nitrogen during flowering.', 'Well-rotted farmyard manure before sowing.', 'Trichoderma seed treatment and crop-residue hygiene.'],
    conserve: 'Prefer rainfed sowing after an effective planting rain. Use broad beds and furrows in black soil; avoid irrigation during prolonged cloudy, wet weather.',
    fit: 'Black-soil tracts suit cotton when surface drainage is managed. Red soils need organic matter and moisture conservation; avoid poorly drained delta depressions.',
    risk: ['Excess moisture during flowering can increase disease pressure.']
  },
  banana: {
    name: 'Banana', icon: '🍌', cycle: 300, waterMm: 1600, stages: [10, 40, 30, 20],
    moisture: [45, 80], ideal: 'Deep, fertile, well-aerated loam rich in organic matter; pH 6.0–7.5.',
    suitability: { delta: 11, coast: 16, west: 9, north: 17, south: 16, hill: 14 },
    diseases: ['Fusarium wilt', 'Sigatoka leaf spot', 'Bacterial rhizome rot'],
    nutrition: ['Split potassium and nitrogen applications guided by soil test.', 'Compost or well-decomposed farmyard manure around the mat.', 'Trichoderma-enriched compost and clean, disease-free planting material.'],
    conserve: 'Drip irrigation and basin mulch help maintain even moisture. Keep drainage channels open in heavy soils and avoid water stagnation at the mat.',
    fit: 'Deep alluvial and western loams can work well with reliable water. In coastal sand, add organic matter and irrigate in smaller, frequent doses.',
    risk: ['Perennial water demand makes irrigation reliability important.']
  },
  groundnut: {
    name: 'Groundnut', icon: '🥜', cycle: 105, waterMm: 500, stages: [20, 25, 35, 20],
    moisture: [25, 60], ideal: 'Loose, friable sandy loam with good drainage and pH 6.0–7.5.',
    suitability: { delta: 23, coast: 8, west: 16, north: 11, south: 9, hill: 15 },
    diseases: ['Late leaf spot', 'Rust', 'Stem rot'],
    nutrition: ['Apply gypsum around flowering and pegging as locally recommended.', 'Use well-decomposed compost before sowing.', 'Trichoderma seed treatment; rotate crops to reduce soil-borne disease.'],
    conserve: 'Conserve stored soil moisture with timely sowing and a light surface mulch. Avoid waterlogging at pegging and pod development; irrigate only when needed.',
    fit: 'Coastal sandy loam supports pod development but may dry quickly. In clay or delta soils, use raised beds and strong drainage to protect pegs and pods.',
    risk: ['Heavy soil or prolonged rain can impair pegging and pod quality.']
  },
  maize: {
    name: 'Maize', icon: '🌽', cycle: 105, waterMm: 600, stages: [15, 35, 30, 20],
    moisture: [30, 65], ideal: 'Deep, fertile, well-drained loam with pH 5.8–7.5.',
    suitability: { delta: 17, coast: 17, west: 10, north: 10, south: 12, hill: 13 },
    diseases: ['Turcicum leaf blight', 'Downy mildew', 'Stalk rot'],
    nutrition: ['Split N and potassium applications based on soil test and crop stage.', 'Incorporate mature compost before sowing.', 'Trichoderma seed treatment and rotation with non-cereal crops.'],
    conserve: 'Prioritise irrigation around tasselling, silking and early grain fill. Use furrows or drip, and avoid ponding around stems.',
    fit: 'Red loams and well-drained western soils are suitable. In heavy alluvium, sow on ridges or raised beds and clear excess rainwater promptly.',
    risk: ['Water stress near tasselling and silking can sharply reduce grain set.']
  },
  turmeric: {
    name: 'Turmeric', icon: '🟡', cycle: 240, waterMm: 1500, stages: [15, 45, 25, 15],
    moisture: [40, 75], ideal: 'Loose, fertile, well-drained sandy loam to clay loam with pH 5.5–7.5.',
    suitability: { delta: 12, coast: 16, west: 8, north: 17, south: 17, hill: 11 },
    diseases: ['Rhizome rot', 'Leaf blotch', 'Leaf spot'],
    nutrition: ['Soil-test-based NPK in split doses; avoid excess nitrogen.', 'Apply mature compost or farmyard manure before planting.', 'Trichoderma-enriched compost and clean rhizomes help limit rot.'],
    conserve: 'Mulch beds after planting and after earthing-up. Use drip where available; keep drains clear because saturated beds encourage rhizome rot.',
    fit: 'Western loams and well-drained foothill soils are favourable. Heavy delta fields need raised beds and drainage; coastal sands benefit from organic matter.',
    risk: ['Saturated soil can raise rhizome-rot risk.', 'Moderate to high water demand through active rhizome growth.']
  },
  millet: {
    name: 'Pearl millet', icon: '🌾', cycle: 85, waterMm: 350, stages: [20, 30, 30, 20],
    moisture: [20, 55], ideal: 'Well-drained sandy loam to loam; tolerates lighter soils and pH 5.5–8.0.',
    suitability: { delta: 23, coast: 18, west: 12, north: 11, south: 8, hill: 19 },
    diseases: ['Downy mildew', 'Ergot', 'Rust'],
    nutrition: ['Apply balanced NPK based on soil test; split nitrogen if irrigated.', 'Compost or farmyard manure supports soil structure.', 'Use clean seed and rotate away from millet after disease outbreaks.'],
    conserve: 'Time sowing to dependable rainfall. A modest mulch and timely intercultivation conserve moisture; avoid routine irrigation when rainfall is adequate.',
    fit: 'Red and lighter interior soils suit this drought-tolerant crop. On heavy delta soils, use raised seedbeds and avoid waterlogged low spots.',
    risk: ['A dry spell near flowering may still affect grain set.']
  },
  sorghum: {
    name: 'Sorghum', icon: '🌿', cycle: 110, waterMm: 450, stages: [15, 30, 35, 20],
    moisture: [20, 60], ideal: 'Deep loam or well-drained black soil, with pH 6.0–8.0.',
    suitability: { delta: 19, coast: 18, west: 9, north: 12, south: 10, hill: 18 },
    diseases: ['Grain mould', 'Anthracnose', 'Charcoal rot'],
    nutrition: ['Soil-test-based NPK; split nitrogen where moisture is assured.', 'Incorporate crop residues and mature compost.', 'Use clean seed, rotation and tolerant cultivars suited to the season.'],
    conserve: 'Sow with the onset of reliable rain and maintain timely weed control. Reserve supplemental irrigation for booting, flowering and grain fill.',
    fit: 'Well-drained western black soils and interior red loams are suitable. In delta clay, avoid low-lying waterlogged fields.',
    risk: ['Water stress around flowering and grain fill can reduce yield.']
  },
  pulses: {
    name: 'Black gram', icon: '🫘', cycle: 75, waterMm: 300, stages: [20, 30, 30, 20],
    moisture: [20, 55], ideal: 'Well-drained loam or sandy loam with pH 6.0–7.5; sensitive to standing water.',
    suitability: { delta: 18, coast: 14, west: 11, north: 11, south: 9, hill: 16 },
    diseases: ['Yellow mosaic virus', 'Powdery mildew', 'Root rot'],
    nutrition: ['Use soil-test-guided phosphorus and locally recommended rhizobium inoculant.', 'Avoid high nitrogen; add mature compost to improve soil structure.', 'Trichoderma seed treatment and timely removal of virus-affected plants.'],
    conserve: 'Often grown on residual moisture or as a short-duration crop. Avoid unnecessary irrigation; provide drainage and protect flowering from severe moisture stress.',
    fit: 'Red loams and well-drained delta fallows suit short-duration pulses. Heavy soils need surface drainage; coastal sand needs moisture-conserving organic matter.',
    risk: ['Standing water during rain can cause root disease.', 'Flowering-stage dry spells can reduce pod set.']
  },
  tomato: {
    name: 'Tomato', icon: '🍅', cycle: 120, waterMm: 600, stages: [15, 30, 35, 20],
    moisture: [35, 70], ideal: 'Well-drained sandy loam rich in organic matter, with pH 6.0–7.0.',
    suitability: { delta: 19, coast: 18, west: 10, north: 14, south: 13, hill: 10 },
    diseases: ['Early blight', 'Bacterial wilt', 'Leaf curl virus'],
    nutrition: ['Soil-test-based balanced NPK; maintain calcium and potassium through fruiting.', 'Use mature compost before transplanting.', 'Trichoderma-enriched nursery media; rotate away from solanaceous crops.'],
    conserve: 'Drip irrigation, mulch and even soil moisture help limit cracking and blossom-end rot. Avoid wetting foliage late in the day and clear drains after rain.',
    fit: 'Well-drained western and foothill soils can suit tomato. In humid coastal and delta conditions, use raised beds, airflow and careful disease monitoring.',
    risk: ['Warm, humid spells can favour foliar disease.', 'Uneven moisture during fruit development affects quality.']
  },
  onion: {
    name: 'Onion', icon: '🧅', cycle: 110, waterMm: 450, stages: [20, 35, 30, 15],
    moisture: [25, 60], ideal: 'Loose, well-drained sandy loam with pH 6.0–7.0; avoid waterlogging.',
    suitability: { delta: 19, coast: 18, west: 10, north: 12, south: 11, hill: 13 },
    diseases: ['Purple blotch', 'Stemphylium blight', 'Basal rot'],
    nutrition: ['Split N and potassium according to soil test; reduce nitrogen near bulb maturity.', 'Use well-decomposed compost before planting.', 'Trichoderma-treated nursery media and healthy planting material.'],
    conserve: 'Use light, timely irrigations and stop before harvest for curing. Raised beds and clear furrows reduce bulb rot after rain.',
    fit: 'Red loams and sandy loams are suitable when drainage is good. Heavy delta soil needs raised beds and careful irrigation to avoid bulb rot.',
    risk: ['Excess rain near bulb maturity can increase rot and storage losses.']
  }
};

const storageKey = 'agripulse.field.v1';
const districtInput = document.querySelector('#district-input');
const cropSelect = document.querySelector('#crop-select');
const durationInput = document.querySelector('#duration-input');
const plannerScreen = document.querySelector('#planner-screen');
const dossierScreen = document.querySelector('#dossier-screen');
const resultPanel = document.querySelector('#result-panel');
const telemetryPanel = document.querySelector('.telemetry-panel');
const sensorValues = { moisture: null, temperature: null, humidity: null, rain: null };
let state = loadState();
let serialPort = null;
let serialReader = null;
let toastTimer;

for (const district of districts) {
  const option = document.createElement('option');
  option.value = district;
  document.querySelector('#district-list').append(option);
}

for (const [key, crop] of Object.entries(crops)) {
  const option = document.createElement('option');
  option.value = key;
  option.textContent = `${crop.icon} ${crop.name}`;
  cropSelect.append(option);
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) ?? {};
  } catch {
    return {};
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    showToast('Your browser could not save this session on this device.');
  }
}

function validDistrict(name) {
  return districts.find((district) => district.toLowerCase() === name.trim().toLowerCase()) ?? null;
}

function getSoil(district) {
  return soilProfiles[districtSoils[district] ?? 'north'];
}

function getClimate(district) {
  return climateGroups[districtSoils[district] ?? 'north'];
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3600);
}

function updateSeason(district) {
  document.querySelector('#season-label').textContent = district ? getClimate(district).label : 'Local reference';
}

function renderSoilReference() {
  const district = validDistrict(districtInput.value);
  const region = document.querySelector('#soil-reference');
  if (!district) {
    region.innerHTML = '<span class="soil-reference-mark" aria-hidden="true">⌁</span><p>Select a district to see its regional soil reference.</p><span class="reference-tag">LOCAL PROFILE</span>';
    updateSeason(null);
    return;
  }
  const soil = getSoil(district);
  region.innerHTML = `<span class="soil-reference-mark" aria-hidden="true">⌁</span><p><strong>${soil.name}</strong> · ${soil.texture}</p><span class="reference-tag">${district.toUpperCase()}</span>`;
  updateSeason(district);
}

function restoreForm() {
  districtInput.value = validDistrict(state.district ?? '') ?? '';
  cropSelect.value = crops[state.crop] ? state.crop : '';
  durationInput.value = state.duration ?? '';
  renderSoilReference();
  if (state.result && validDistrict(state.district ?? '') && crops[state.crop]) renderAssessment(state.result);
  if (state.screen === 'dossier' && state.result?.risk <= 50 && validDistrict(state.district ?? '') && crops[state.crop]) showDossier();
}

function persistForm() {
  state.district = validDistrict(districtInput.value) ?? '';
  state.crop = crops[cropSelect.value] ? cropSelect.value : '';
  state.duration = durationInput.value ? Number(durationInput.value) : '';
  state.result = null;
  state.screen = 'planner';
  saveState();
  resultPanel.hidden = true;
  document.querySelector('#nav-dossier').disabled = true;
  document.querySelector('#nav-dossier').classList.remove('is-current');
  document.querySelector('#nav-planner').classList.add('is-current');
  document.querySelector('#nav-planner').setAttribute('aria-current', 'page');
  document.querySelector('#nav-dossier').removeAttribute('aria-current');
  renderSoilReference();
}

function setSensor(id, value, unit = '') {
  document.querySelector(id).innerHTML = `${value}<small>${unit}</small>`;
}

function normalizeRain(value) {
  const text = String(value).trim().toLowerCase();
  if (['1', 'true', 'wet', 'rain', 'raining', 'precipitation', 'precipitating'].includes(text)) return 'RAIN';
  if (['0', 'false', 'dry', 'clear', 'no rain'].includes(text)) return 'DRY';
  return text.toUpperCase().slice(0, 12);
}

function renderSensors() {
  setSensor('#sensor-moisture', sensorValues.moisture ?? '--', '%');
  setSensor('#sensor-temperature', sensorValues.temperature ?? '--', '°C');
  setSensor('#sensor-humidity', sensorValues.humidity ?? '--', '%');
  document.querySelector('#sensor-rain').textContent = sensorValues.rain ?? '--';
}

function parseSerialLine(line) {
  let parsed;
  const content = line.trim();
  if (!content) return false;
  try {
    parsed = JSON.parse(content);
  } catch {
    const fields = content.split(/[;,\s]+/).filter(Boolean);
    if (fields.length < 4) return false;
    parsed = { moisture: fields[0], temperature: fields[1], humidity: fields[2], rain: fields.slice(3).join(' ') };
  }
  if (!parsed || typeof parsed !== 'object') return false;
  const values = {
    moisture: parsed.moisture ?? parsed.soil_moisture ?? parsed.soilMoisture ?? parsed.soil,
    temperature: parsed.temperature ?? parsed.temp ?? parsed.temperature_c ?? parsed.temperatureC,
    humidity: parsed.humidity ?? parsed.hum,
    rain: parsed.rain ?? parsed.rain_sensor ?? parsed.rainSensor
  };
  let changed = false;
  for (const key of ['moisture', 'temperature', 'humidity']) {
    const value = Number(values[key]);
    if (values[key] !== undefined && Number.isFinite(value)) {
      sensorValues[key] = Number.isInteger(value) ? String(value) : value.toFixed(1);
      changed = true;
    }
  }
  if (values.rain !== undefined && String(values.rain).trim()) {
    sensorValues.rain = normalizeRain(values.rain);
    changed = true;
  }
  if (changed) {
    renderSensors();
    document.querySelector('#serial-note').textContent = `Last reading received ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
  return changed;
}

async function connectBoard() {
  if (!('serial' in navigator)) {
    showToast('Web Serial is unavailable here. Use a supported Chromium browser on localhost or HTTPS.');
    return;
  }
  try {
    serialPort = await navigator.serial.requestPort();
    await serialPort.open({ baudRate: 9600 });
    telemetryPanel.classList.add('is-connected');
    document.querySelector('#connection-label').textContent = 'BOARD CONNECTED';
    document.querySelector('#connect-button').innerHTML = '<span aria-hidden="true">×</span> Disconnect board';
    document.querySelector('#serial-note').textContent = 'Waiting for sensor data · newline-delimited JSON or CSV';
    const decoder = new TextDecoderStream();
    serialPort.readable.pipeTo(decoder.writable).catch(() => {});
    serialReader = decoder.readable.getReader();
    let buffer = '';
    while (true) {
      const { value, done } = await serialReader.read();
      if (done) break;
      buffer += value;
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() ?? '';
      for (const line of lines) parseSerialLine(line);
    }
  } catch (error) {
    if (error.name !== 'NotFoundError') showToast(`Serial connection ended: ${error.message}`);
    await disconnectBoard();
  }
}

async function disconnectBoard() {
  if (serialReader) {
    try { await serialReader.cancel(); } catch { /* The reader may already have stopped. */ }
    serialReader.releaseLock();
    serialReader = null;
  }
  if (serialPort) {
    try { await serialPort.close(); } catch { /* The port may already be closed. */ }
    serialPort = null;
  }
  telemetryPanel.classList.remove('is-connected');
  document.querySelector('#connection-label').textContent = 'NOT CONNECTED';
  document.querySelector('#connect-button').innerHTML = '<span aria-hidden="true">↗</span> Connect board';
  document.querySelector('#serial-note').textContent = 'Sensor values appear only when data is received.';
}

function calculateRisk(district, cropKey, duration) {
  const crop = crops[cropKey];
  const group = districtSoils[district] ?? 'north';
  let risk = 15 + crop.suitability[group];
  const factors = [];
  const expectedDuration = crop.cycle;
  if (duration) {
    const difference = Math.abs(duration - expectedDuration) / expectedDuration;
    if (difference > 0.25) {
      risk += Math.min(16, Math.round(difference * 20));
      factors.push(`Entered cycle (${duration} days) differs from the ${expectedDuration}-day crop reference`);
    }
  }
  const soil = getSoil(district);
  factors.push(`${soil.name}: ${soil.drainage}`);
  factors.push(getClimate(district).rainfall);
  if (group === 'coast' && ['cotton', 'groundnut', 'pulses'].includes(cropKey)) risk += 5;
  if (group === 'delta' && ['groundnut', 'cotton', 'millet'].includes(cropKey)) risk += 5;

  if (sensorValues.moisture !== null) {
    const moisture = Number(sensorValues.moisture);
    if (moisture < crop.moisture[0]) {
      risk += 12;
      factors.push(`Soil moisture is below the ${crop.moisture[0]}% crop reference`);
    } else if (moisture > crop.moisture[1]) {
      risk += 12;
      factors.push(`Soil moisture is above the ${crop.moisture[1]}% crop reference; check drainage`);
    } else {
      risk -= 7;
      factors.push('Current soil moisture is within the broad crop reference range');
    }
  }
  if (sensorValues.temperature !== null) {
    const temperature = Number(sensorValues.temperature);
    if (temperature > 38 || temperature < 12) {
      risk += 9;
      factors.push(`Current air temperature (${temperature}°C) is outside the broad field reference`);
    } else if (temperature >= 20 && temperature <= 34) {
      risk -= 3;
    }
  }
  if (sensorValues.humidity !== null && Number(sensorValues.humidity) > 85) {
    risk += 5;
    factors.push('High measured humidity may favour foliar disease');
  }
  if (sensorValues.rain === 'RAIN') {
    risk += ['groundnut', 'cotton', 'pulses'].includes(cropKey) ? 8 : 4;
    factors.push('Rain sensor reports precipitation; reassess drainage and field access');
  }
  if (sensorValues.rain === 'DRY' && crop.waterMm >= 1000) {
    risk += 4;
    factors.push('Rain sensor is dry; plan irrigation for this higher-demand crop');
  }
  return { risk: Math.max(0, Math.min(100, Math.round(risk))), factors };
}

function renderAssessment(result) {
  const recommended = result.risk <= 50;
  resultPanel.hidden = false;
  resultPanel.innerHTML = `<div class="result-top"><div class="risk-ring"><strong>${result.risk}%</strong><span>RISK</span></div><div class="result-copy"><p class="section-index">OFFLINE FIELD ASSESSMENT</p><h2>${recommended ? 'RECOMMENDED' : 'NOT RECOMMENDED'}</h2><p>${recommended ? 'The regional reference is within the planning threshold. Review the crop dossier before planting.' : 'This pairing has notable constraints. Review the factors below and seek local agronomic advice before committing.'}</p></div>${recommended ? '<button class="result-action" id="open-dossier" type="button">Open crop dossier →</button>' : ''}</div><div class="result-factors">${result.factors.map((factor) => `<span class="factor-chip${recommended ? '' : ' is-adverse'}">${factor}</span>`).join('')}</div>`;
  if (recommended) document.querySelector('#open-dossier').addEventListener('click', showDossier);
  document.querySelector('#nav-dossier').disabled = !recommended;
  if (recommended) document.querySelector('#nav-dossier').addEventListener('click', showDossier, { once: true });
}

function assess() {
  const district = validDistrict(districtInput.value);
  const crop = crops[cropSelect.value];
  if (!district) {
    showToast('Select a valid Tamil Nadu district to assess this field.');
    districtInput.focus();
    return;
  }
  if (!crop) {
    showToast('Choose a crop before running the field assessment.');
    cropSelect.focus();
    return;
  }
  const duration = Number(durationInput.value) || crop.cycle;
  if (duration < 1 || duration > 730) {
    showToast('Enter a crop duration between 1 and 730 days.');
    durationInput.focus();
    return;
  }
  state.district = district;
  state.crop = cropSelect.value;
  state.duration = duration;
  state.result = calculateRisk(district, cropSelect.value, duration);
  state.screen = 'planner';
  saveState();
  renderAssessment(state.result);
  resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function toLitres(mm) {
  return Math.round(mm * 4046.856);
}

function showDossier() {
  const district = validDistrict(state.district ?? districtInput.value);
  const cropKey = state.crop || cropSelect.value;
  const crop = crops[cropKey];
  if (!district || !crop || !state.result || state.result.risk > 50) return;
  const mm = crop.waterMm;
  const litres = toLitres(mm);
  document.querySelector('#dossier-title').textContent = `${crop.icon} ${crop.name} blueprint`;
  document.querySelector('#dossier-district').textContent = district.toUpperCase();
  document.querySelector('#dossier-duration').textContent = `${state.duration || crop.cycle} days`;
  document.querySelector('#dossier-season').textContent = getClimate(district).label.toUpperCase();
  document.querySelector('#water-litres').textContent = litres.toLocaleString('en-IN');
  document.querySelector('#water-acre-inches').textContent = (mm / 25.4).toFixed(1);
  document.querySelector('#water-mm').textContent = mm.toLocaleString('en-IN');

  const stageNames = ['Sowing', 'Vegetative', 'Flowering', 'Maturity'];
  document.querySelector('#stage-list').innerHTML = crop.stages.map((share, index) => {
    const stageMm = Math.round(mm * share / 100);
    const stageLitres = Math.round(litres * share / 100);
    return `<div class="stage-row"><span class="stage-name">${stageNames[index]}</span><span class="stage-track"><span class="stage-fill" style="display:block;width:${share}%"></span></span><span class="stage-quantity"><strong>${stageLitres.toLocaleString('en-IN')} L</strong> · ${stageMm} mm</span></div>`;
  }).join('');
  document.querySelector('#conservation-guidance').textContent = crop.conserve;

  const soil = getSoil(district);
  document.querySelector('#soil-profile-name').textContent = soil.name;
  document.querySelector('#soil-profile-description').textContent = `${soil.texture} ${soil.drainage} ${soil.pH}`;
  document.querySelector('#soil-crop-fit').textContent = crop.fit;
  document.querySelector('#soil-ideal-description').textContent = crop.ideal;
  document.querySelector('#disease-list').innerHTML = crop.diseases.map((disease) => `<li>${disease}</li>`).join('');
  document.querySelector('#fertilizer-list').innerHTML = crop.nutrition.map((item) => `<li>${item}</li>`).join('');

  plannerScreen.hidden = true;
  dossierScreen.hidden = false;
  state.screen = 'dossier';
  saveState();
  document.querySelector('#nav-planner').classList.remove('is-current');
  document.querySelector('#nav-planner').removeAttribute('aria-current');
  document.querySelector('#nav-dossier').disabled = false;
  document.querySelector('#nav-dossier').classList.add('is-current');
  document.querySelector('#nav-dossier').setAttribute('aria-current', 'page');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPlanner() {
  dossierScreen.hidden = true;
  plannerScreen.hidden = false;
  state.screen = 'planner';
  saveState();
  document.querySelector('#nav-dossier').classList.remove('is-current');
  document.querySelector('#nav-dossier').removeAttribute('aria-current');
  document.querySelector('#nav-planner').classList.add('is-current');
  document.querySelector('#nav-planner').setAttribute('aria-current', 'page');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

districtInput.addEventListener('focus', () => { districtInput.placeholder = ''; });
districtInput.addEventListener('blur', () => { if (!districtInput.value) districtInput.placeholder = 'Select your district'; });
districtInput.addEventListener('input', () => { persistForm(); });
cropSelect.addEventListener('change', () => { persistForm(); });
durationInput.addEventListener('input', () => { persistForm(); });
document.querySelector('#analyze-button').addEventListener('click', assess);
document.querySelector('#connect-button').addEventListener('click', () => serialPort ? disconnectBoard() : connectBoard());
document.querySelector('#back-button').addEventListener('click', showPlanner);
document.querySelector('#nav-planner').addEventListener('click', showPlanner);
document.querySelector('#nav-dossier').addEventListener('click', showDossier);
document.querySelector('#new-assessment').addEventListener('click', () => {
  showPlanner();
  districtInput.focus();
});

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}

renderSensors();
restoreForm();