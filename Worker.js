export class Worker {
  constructor(name) {
    this.name = name;
  }

  runTask(task) {
    console.log(`[${this.name}] Running task: ${task}`);
    // Tambahkan logika sesuai kebutuhan
  }
}
