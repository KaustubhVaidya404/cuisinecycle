const express = require("express");

const router = express.router();

router.route("/api/v1/user").get().post();

router.route("/api/v1/user/:id").patch().delete();
