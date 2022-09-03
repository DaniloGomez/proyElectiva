/* Importamos librería de express*/
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config({path: '.env'})
const conectarDB = require("C:/Users/danil/Documents/biblioteca/config/db.js");

/* Creamos el servidor*/
const app = express()

//Conectamos con la base de datos
conectarDB()

/* Habilitamos express.json*/
app.use(express.json({extended:true}))

//Creamos el puerto
const PORT = process.env.PORT || 4000;

//Iniciamos el servidor
app.listen(PORT, ()=>{console.log('Connect with the port ', PORT)})