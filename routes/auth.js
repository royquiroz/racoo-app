const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  if (req.body.password.length < 5)
    return res.render("register", {
      err: true,
      msg: "Tu contraseña es demasiado corta"
    });
  if (!req.body.email.includes("@racoo.com.mx"))
    return res.render("register", {
      err: true,
      msg: "Tu correo electronico no es valido"
    });

  const { name, email, password } = req.body;
  User.register({ name, email }, password)
    .then(user => {
      res.redirect("/auth/login");
    })
    .catch(err => {
      res.status(500).render("register", { err, msg: err.message });
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/company",
    failureRedirect: "/auth/login"
  })
);

module.exports = router;
