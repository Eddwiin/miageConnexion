const multer = require("multer");
const path = require("path");
const fs = require("fs");

module.exports = ({ urlToSave }) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      const dirToCheck = rootDirname + "/" + urlToSave;
      if (!fs.existsSync(dirToCheck)) {
        fs.mkdirSync(dirToCheck, { recursive: true });
      }

      cb(null, urlToSave);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname +
          "-" +
          (req.params.id || req.query.id) +
          path.extname(file.originalname)
      );
    }
  });
};
