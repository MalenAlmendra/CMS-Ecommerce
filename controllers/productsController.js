const Product = require('../models').Product

module.exports={
    view:(req,res)=>{
        Product.findAll()
        .then(products=>{
            res.json(products)
        })
        .catch(err=>console.log(err))
    },

    create:(req,res)=>{
        let data={
            name:req.body.nombreProducto,
            description:req.body.descProducto,
            price:req.body.precioProducto,
            stock:req.body.cantidadProducto
        }
        Product.create(data)
        .then(prod=>res.status(200).send('200'))
        .catch(err=>res.status(400).send('400'))
        
    },
    destroy:(req,res)=>{
        Product.findOne({
            where:{
                id:req.body.id
            }
        })
        .then(product=>{
            if(product){
                product.destroy()
                res.send('El producto fue eliminado satisfactoriamente')
            }
        })
        .catch(err=>console.log(err))
    },
    update:(req,res)=>{
        let data={
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            stock:req.body.stock
        }
        Product.update(data,{
            where:{
                id:req.params.id
            }
        })
        .then(response=>{
            res.send(response)
        })
    }
}