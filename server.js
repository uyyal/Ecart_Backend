const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Enable CORS for all routes (so frontend can call backend)
server.use(cors());

// Default middlewares (logger, static, etc.)
server.use(middlewares);

// JSON Server router
server.use(router);

// Dynamic port for Render or fallback to 8080
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
});
