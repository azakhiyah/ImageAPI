const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
//const formData = new FormData();
//formData.append('NAME', file);

//const maxSize = 2 * 2024 * 2024;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //cb(null, __basedir + "/resources/static/assets/uploads");
    cb(null, __basedir + "/imagebucket/");
  },
  filename: function (req, file, cb)  {
    console.log("Received file : "+file.originalname);
    cb(null, file.originalname);
  },
});
// let uploadFile = multer({
//   storage: storage,
//   limits: { fileSize: maxSize },
//   //limits: { fileSize: 1048576 },
// }).single('file.png');
let uploadFile = multer ({ storage : storage}).single('NAME');

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;