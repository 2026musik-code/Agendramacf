import { Worker } from '../Worker.js';

// Inisialisasi aplikasi
function main() {
  console.log("Agendramacf app is starting...");

  // Contoh penggunaan Worker
  const worker = new Worker("Agenda Worker");
  worker.runTask("Initialize agenda system");
}

// Jalankan aplikasi
main();
