import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads"); // Specify the folder where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
  },
});

const upload = multer({ storage });

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle file upload
app.post("/upload", upload.single("myFile"), (req, res) => {
  // req.file contains information about the uploaded file
  console.log("File uploaded:", req.file.originalname);
  res.send("File uploaded successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
