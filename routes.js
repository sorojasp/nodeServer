const express = require ('express')
router = express.Router();
const path = require('path');
const routesApi=require('./routesApi')



/////////////////////////////////////////
////////////////// Routing //////////////
/////////////////////////////////////////

router.get('/',function(req,res){

    /**   '/' esto significa que es la rura inicial
     * el servidor hace peticiones al servidor mediante el metodo get, esto
     * es **req** y nosotros le respondemos con un objeto **res** que 
     * significa response. 
     */

res.render('index.ejs');


});



// se va a agregar la ruta login 


router.get('/login',function(req,res){
res.end('here are your login')

})

router.get('/firstResponseHTML',function(req,res){

    res.sendFile(path.join(__dirname + '/views/view1/index.html'));
})



//Ahora se va a responder ante la petición de una rura que no existe. 






/* el servidor va buscando las rutas que esta solicitando el cliente 

hasta que encuentra la que coincide.*/

module.exports=router;
