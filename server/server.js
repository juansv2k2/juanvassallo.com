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
const fs = require("fs");
const port = process.env.PORT || 3000;
const app = express();

// SUPER EXPLICIT PDF route - intercepts PDF requests FIRST
app.get("/documents/Vassallo-CV-website.pdf", (req, res) => {
  const filePath = path.join(
    __dirname,
    "..",
    "build",
    "documents",
    "Vassallo-CV-website.pdf",
  );

  console.log("PDF requested:", req.path);
  console.log("File path:", filePath);
  console.log("File exists:", fs.existsSync(filePath));

  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    console.log("File size:", stat.size);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.sendFile(filePath);
  } else {
    console.error("PDF file not found at:", filePath);
    res.status(404).send("PDF file not found");
  }
});

// Fallback for any other PDF in documents
app.get("/documents/:filename.pdf", (req, res) => {
  const fileName = req.params.filename + ".pdf";
  const filePath = path.join(__dirname, "..", "build", "documents", fileName);

  console.log("Generic PDF requested:", fileName);

  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.sendFile(filePath);
  } else {
    res.status(404).send("PDF not found");
  }
});

// Serve static files from the build directory (other files)
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
