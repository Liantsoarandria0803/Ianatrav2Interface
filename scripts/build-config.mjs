import { writeFileSync } from 'node:fs';

function normalizeApiBaseUrl(url) {
  const base = (url || 'https://ianatrav2.onrender.com/api/v1').replace(/\/+$/, '');
  return base.endsWith('/api/v1') ? base : `${base}/api/v1`;
}

const apiBaseUrl = normalizeApiBaseUrl(process.env.MAIA_API_BASE_URL);

writeFileSync(
  new URL('../config.js', import.meta.url),
  `window.MAIA_API_BASE_URL = ${JSON.stringify(apiBaseUrl)};\n`,
);
