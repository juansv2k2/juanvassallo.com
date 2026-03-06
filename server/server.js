// const path = require("path");
// const express = require("express");
// const app = express();
// const publicPath = path.join(__dirname, "..", "build");
// const port = process.env.PORT || 3000;
// app.use(express.static(publicPath));
// app.get("*", (req, res) => {
//     res.sendFile(path.join(publicPath, "index.html"));
// });
// app.listen(port, () => {
//     console.log("Server is up!");
// });

const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

// Configure proper headers for PDF serving (but don't force download)
app.use("/documents", (req, res, next) => {
  if (req.path.endsWith(".pdf")) {
    res.setHeader("Content-Type", "application/pdf");
    // Remove Content-Disposition to let JavaScript handle download
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
  }
  next();
});

// Serve static files from the build directory (including documents)
// This MUST come BEFORE the catch-all route to serve PDFs properly
app.use(express.static(path.join(__dirname, "..", "build")));

// Health check endpoint
app.get("/ping", function (req, res) {
  return res.send("pong");
});

// Catch-all handler: send back React's index.html file for client-side routing
// This serves the React app for any route that isn't a static file
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
