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

// Configure proper headers for PDF downloads
app.use("/documents", (req, res, next) => {
  if (req.path.endsWith(".pdf")) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="' + path.basename(req.path) + '"',
    );
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
  }
  next();
});

// Serve static files from the build directory (including documents)
app.use(express.static(path.join(__dirname, "..", "build")));

// Health check endpoint
app.get("/ping", function (req, res) {
  return res.send("pong");
});

// Catch-all handler: send back React's index.html file for client-side routing
// EXCLUDE static file paths (documents, static, etc.) from React routing
app.get("/*", function (req, res) {
  // Don't serve React app for static file requests
  if (
    req.path.startsWith("/documents/") ||
    req.path.startsWith("/static/") ||
    req.path.startsWith("/img/") ||
    req.path.startsWith("/fonts/") ||
    req.path.endsWith(".pdf") ||
    req.path.endsWith(".jpg") ||
    req.path.endsWith(".png") ||
    req.path.endsWith(".css") ||
    req.path.endsWith(".js")
  ) {
    return res.status(404).send("File not found");
  }

  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
