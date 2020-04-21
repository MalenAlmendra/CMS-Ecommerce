const express=require('express')
const app=express()
const bodyParser=require('body-parser')

let port=process.env.PORT || 8899

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//Middlewares

//Routes
const productRoutes=require('./routes/productRoutes')
app.use(productRoutes)



app.listen(port,()=>{
    console.log(`Escuchando en el puerto: ${port}`)
})