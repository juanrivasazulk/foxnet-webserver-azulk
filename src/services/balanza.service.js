const net = require('net');
require('dotenv').config();

class BalanzaService {
  constructor() {
    this.client = new net.Socket();
    this.ultimoPeso = '0.00 kg';
    this.connect();
  }

  connect() {
    this.client.connect(
      process.env.BALANZA_PORT,
      process.env.BALANZA_IP,
      () => console.log(`Conectado a bascula en ${process.env.BALANZA_IP}:${process.env.BALANZA_PORT}`)
    );

    this.client.on('data', (data) => {
      const rawData = data.toString().trim();
      this.ultimoPeso = this.parsePeso(rawData);
      console.log('Peso actual:', this.ultimoPeso);
    });

    this.client.on('error', (err) => {
      console.error('Error en bascula:', err.message);
    });
  }

  parsePeso(rawData) {
    if (!rawData.startsWith('=')) return rawData;
    const cleanData = rawData.replace(/[=_]/g, '');
    const inverted = cleanData.split('').reverse().join('');
    return `${inverted} kg`;
  }

  getPeso() {
    return this.ultimoPeso;
  }
}

module.exports = new BalanzaService();