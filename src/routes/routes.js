const express = require("express");
const router = express.Router();
const {
  sisterInfo,
  brotherInfo,
  home,
  jsonInfo, 
  first,
  postHome
} = require("../contollers/controller.js");

router.get("/", home);

router.post('/', postHome)

router.get("/sis", sisterInfo);

router.get("/bro", brotherInfo);

router.get('/info', jsonInfo)

router.get('/first', first)

module.exports = router ;
