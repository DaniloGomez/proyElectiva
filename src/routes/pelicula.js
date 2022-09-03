const express = require('express')
const movie_routes = express.Router()

/*Crear una movie*/
movie_routes.post('/movie',(req,res)=>{})

/*Listar todas las movie*/
movie_routes.get('/movie',(req,res)=>{})

/*Consultar una movie en específico*/
movie_routes.get('/movie:idmovie',(req,res)=>{})

/*Actualizar una movie en específico*/
movie_routes.put('/movie:idmovie',(req,res)=>{})

/*Eliminar una movie en específico*/
movie_routes.delete('/movie:idmovie',(req,res)=>{})

module.exports = movie_routes