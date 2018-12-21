const express = require("express");
const router = express.Router();
const Company = require("../models/Company");
const validations = require("../helpers/validations");

router.get("/", validations.isLoggedIn, (req, res) => {
  Company.find({ isDelete: false })
    .then(companys => {
      res.status(200).json({
        companys
      });
    })
    .catch(err => {
      res.status(500).json({
        err,
        msg: "Ocurrio un error y no se pudieron mostrar las empresas"
      });
    });
});

router.post(
  "/",
  /*validations.isLoggedIn,*/ (req, res) => {
    Company.create(req.body)
      .then(company => {
        res.status(200).json({
          company
        });
      })
      .catch(err => {
        res.status(500).json({ err, msg: "No se pudo guardar la empresa" });
      });
  }
);

module.exports = router;
