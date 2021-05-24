"use strict";

// Express and Router
const express = require("express");
const router = express.Router();
// Schema Models
const Character = require("./schema/Character");
const Animation = require("./schema/Animation");
const User = require("./schema/User")

router.route("/")
    .get((req, res) =>{
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });

router.route("/characters")
    /* 
        Auth to come
        // Quick & Dirty just need enough of an API
        // To build out Front-End for Character Form + 
        // Enable3D Model Viewer/Animation Rigger 
    */
    .get((req, res) => {
        console.log("GET /characters");
        Character.find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    })
    .post((req, res) => {
        console.log("POST /characters");
        // Get obj from req.body
        let newCharacter = req.body;

        // Validation handled in Front-End

        // Create Object and Save
        Character.create(newCharacter).save()
        .then((result => {
            res.status(201).send(result);
        }))
        .catch(err => {
            res.status(400).send(err);
        })
    });

module.exports = router;