const express = require("express");

const router = express.router();

router.route("/api/v1/recipe").get().post();

router.route("/api/v1/recipe/:id").patch().delete();
