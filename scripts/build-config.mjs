import { writeFileSync } from 'node:fs';

const apiBaseUrl = process.env.MAIA_API_BASE_URL || 'http://localhost:8000/api/v1';

writeFileSync(
  new URL('../config.js', import.meta.url),
  `window.MAIA_API_BASE_URL = ${JSON.stringify(apiBaseUrl)};\n`,
);
