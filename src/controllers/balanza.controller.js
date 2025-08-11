const express = require('express');
const router = express.Router();
const balanzaService = require('../services/balanza.service');

router.get('/peso', (req, res) => {
  res.json({ peso: balanzaService.getPeso() });
});

module.exports = router;