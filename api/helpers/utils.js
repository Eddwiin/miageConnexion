const multer = require("multer");

module.exports = {
  catchError: (res, err) => res.status(500).json({ error: err }),
  fileStorage: () => {
    return multer.diskStorage({
      // destination: (req, file, cb) => {
      //   cb(null, "assets/images/events");
      // },
      fileName: (req, file, cb) => {
        cb(null, file.originalname);
      }
    });
  }
};
