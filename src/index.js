// Entry point aplikasi yang menggunakan Worker

// Inisialisasi worker
const worker = new Worker('./Worker.js');

// Kirim pesan ke worker
worker.postMessage({ action: 'calculate', payload: [1, 2, 3, 4, 5] });

// Terima pesan dari worker
worker.onmessage = (event) => {
  console.log('Hasil dari worker:', event.data);
};
