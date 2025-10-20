(function () {
  const progressEl = document.getElementById('progress-bar');
  const progressTextEl = document.getElementById('progress-text');
  const phraseEl = document.getElementById('phrase');
  const phrasesBlock = document.getElementById('phrases-block');
  const countryEl = document.getElementById('country');

  // Progress loops 0 -> 90 then restarts, color from gray to black
  let progress = 0; // percentage
  const progressTarget = 90;
  const tickMs = 50; // faster to feel lively

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function toHex(n) {
    const h = clamp(Math.round(n), 0, 255).toString(16).padStart(2, '0');
    return h;
  }

  function computeBarColor(p) {
    // Start at #bfbfbf and as p -> 60, toward black #000000 for contrast on white
    const start = 191;
    const factor = clamp(p / progressTarget, 0, 1); // 0..1
    const value = Math.round(start * (1 - factor)); // to 0 at 60
    const hex = `#${toHex(value)}${toHex(value)}${toHex(value)}`;
    return hex;
  }

  function stepProgress() {
    progress = Math.min(progress + 1, progressTarget);
    const pct = (progress / 100) * 100; // use % for width UI
    progressEl.style.width = `${progress}%`;
    progressEl.style.backgroundColor = computeBarColor(progress);
    progressTextEl.textContent = `${progress}%`;

    if (progress < progressTarget) {
      setTimeout(stepProgress, tickMs);
    } else {
      // restart
      setTimeout(() => {
        progress = 0;
        stepProgress();
      }, 400);
    }
  }

  // Kick off after first frame
  requestAnimationFrame(() => setTimeout(stepProgress, 300));

  // Phrase rotation: load frases.txt from root; display random line gradually
  async function loadPhrases() {
    try {
      const res = await fetch('frases.txt', { cache: 'no-store' });
      if (!res.ok) throw new Error('No se pudo cargar frases.txt');
      const text = await res.text();
      const lines = text
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      return lines.length > 0 ? lines : [
        'Innovación en progreso…',
        'Construyendo el futuro en grises y negros…',
        'Ajustando engranajes…',
        'Optimizando experiencias…',
        'Casi listos…'
      ];
    } catch (err) {
      return [
        'Innovación en progreso…',
        'Construyendo el futuro en grises y negros…',
        'Ajustando engranajes…',
        'Optimizando experiencias…',
        'Casi listos…'
      ];
    }
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function showPhrase(text) {
    phraseEl.classList.remove('show');
    // small delay for transition out
    setTimeout(() => {
      phraseEl.textContent = text;
      phraseEl.classList.add('show');
    }, 80);
  }

  // Cycle through provided palette with 80% transparency and shared text color
  const phrasePalette = ['#427B34', '#347B6D', '#6D347B', '#7B3442'];
  let paletteIndex = 0;
  let currentPhraseTextColor = phrasePalette[0];

  function hexToRgbParts(hex) {
    const h = hex.replace('#', '');
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  function hexToRgba(hex, alpha) {
    const { r, g, b } = hexToRgbParts(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function nextPaletteHex() {
    const hex = phrasePalette[paletteIndex % phrasePalette.length];
    paletteIndex = (paletteIndex + 1) % phrasePalette.length;
    return hex;
  }

  function updatePhrasesBackground() {
    const nextHex = nextPaletteHex();
    currentPhraseTextColor = nextHex;
    phrasesBlock.style.background = hexToRgba(nextHex, 0.8);
  }

  // Countries animation cycling
  const countries = ['Colombia', 'Brasil', 'Estados Unidos'];
  let countryIndex = 0;
  function syncCountryColorToPhraseBg() {
    countryEl.style.color = currentPhraseTextColor; // exact same hue as phrase bg (opaque)
  }

  function showNextCountry() {
    const text = countries[countryIndex % countries.length];
    countryIndex = (countryIndex + 1) % countries.length;
    syncCountryColorToPhraseBg();
    countryEl.textContent = text;
    countryEl.classList.remove('show');
    void countryEl.offsetWidth; // reflow to restart animation
    countryEl.classList.add('show');
  }

  (async function () {
    const phrases = await loadPhrases();
    showPhrase(pickRandom(phrases));
    updatePhrasesBackground();
    const phraseIntervalMs = 3000;
    setInterval(() => {
      showPhrase(pickRandom(phrases));
      updatePhrasesBackground();
      // ensure country text color updates exactly when background changes
      syncCountryColorToPhraseBg();
    }, phraseIntervalMs);

    // Countries animation: a bit slower movement (2s) while still cycling cada 3s
    countryEl.style.setProperty('--country-anim-duration', `2000ms`);
    // initial sync with the initial background color
    syncCountryColorToPhraseBg();
    showNextCountry();
    setInterval(() => {
      showNextCountry();
    }, phraseIntervalMs);
  })();
})();


