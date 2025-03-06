const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Use CORS
app.use(cors());

// Logger middleware
app.all("*", (req, res, next) => {
  const date = new Date();
  console.log(
    `--> url:${req.url} status:${res.statusCode} ${date.toLocaleTimeString(
      "en-IN",
      {
        timeZone: "Asia/Kolkata",
        hour12: false,
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
    )}`
  );
  next();
});



// Serve static frontend files
app.use(express.static(path.join(__dirname, "/out")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "out", "index.html"));
});

// Start the HTTP server on port 80

app.listen(80, "0.0.0.0", () => {
  console.log(`API Gateway is running on port`);
});

