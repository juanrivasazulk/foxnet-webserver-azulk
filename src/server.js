const app = require('./app');
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`escuchando en http://localhost:${PORT}`);
});