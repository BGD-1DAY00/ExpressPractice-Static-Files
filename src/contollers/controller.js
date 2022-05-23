const path = require("path");
const mongoose = require('mongoose')
const model = require('../routes/dbSchema')
const home = (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
};

const brotherInfo = (req, res) => {
  res.sendFile(path.join(__dirname, "../indexThree.html"));
};

const sisterInfo = (req, res) => {
  res.sendFile(path.join(__dirname, "../indexTwo.html"));
};

const jsonInfo = (req, res) => {
  res.json({ one: req.hello, two: req.be, three: req.here, four: req.not });
};

const first = (req, res) => {
  res.sendFile(path.join(__dirname, "../../indexFour.html"));
};

const postHome = async(req, res)=>{
    try{
    const user = await model.create(req.body)
    console.log(user)
    }catch(e){
        console.log(e.message)
    }
}

module.exports = { home, sisterInfo, brotherInfo, jsonInfo, first, postHome};
