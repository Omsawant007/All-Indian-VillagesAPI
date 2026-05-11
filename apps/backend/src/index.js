require("dotenv").config();
const app = require("../api/index.js");
const PORT = process.env.PORT || 3000;

// Only listen locally — Vercel handles this in production
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`\n  Backend running on port ${PORT}`);
    console.log(`  Health: http://localhost:${PORT}/health\n`);
  });
}

module.exports = app;