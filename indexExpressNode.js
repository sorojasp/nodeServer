const express = require ('express')
const appServer =express();
const morgan = require('morgan')
////
const routes = require('./routes')
const routesApi=require('./routesApi')
const static =require('static')
const path = require('path');
const bodyParser = require('body-parser');

//////////////////////////////////////////////////
//////////////// Configuraciones //////////////// 
//////////////// Settings ///////////////////////
/////////////////////////////////////////////////

/*FUnciones que permiten agregar variables  */

appServer.set('appName','miprimerServer')//aquí se crea la variable
// con le nombre de la aplicación. 

/** Ahora se va a configurar las vistas "views" */
appServer.set('view1',__dirname+'/views/view1')
//console.log(__dirname + '/views')

appServer.set('view engine','ejs')








///////////////////////////////////////////////////
/////////////////// Middlewares ///////////////////
///////////////////////////////////////////////////

/* Las Middlewares son funciones que le dan manejo a las
peticiones del cliente, trabajan conjuntamente con los 
routings */


appServer.use(morgan('dev'));

appServer.use(function(req,res,next){

console.log('request url:' + req.url)
next()

})

appServer.use( bodyParser.json() );       // to support JSON-encoded bodies
appServer.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 



appServer.post('/test-page', function(req, res) {

 


  
  
    //var nombre = req.body.Nombre_Persona,
    //key = parseInt(req.body.Codigo_Persona)+10;
    //console.log(`Hola ${nombre}`)
    //console.log(`Tu clave por diez es: ${key*20}`)
    
    //console.log(req.body)

    const Prueba=req.body

    


    elementoVacio={}

    if(Prueba==elementoVacio){
      console.log('Vacioooooooo')
    }

    console.log(typeof(Prueba))
    

    //res.json({
      //ok: true,
      //Prueba
    //})

    console.log(Prueba)

    
    res.sendStatus(200).json({Prueba})
});




appServer.use('/page',express.static(path.join(__dirname,'public')));


/* Estas funciones siempre tienen los siguientes parametros: req,res,next
Es decir que tiene un requerimiento del cliente "req", tiene que tener una 
respuesta "res" y un next para que continue   */

appServer.use(function(req,res,next){

    console.log("haz pasado por esta función")
    next()
    

    })


    appServer.use(morgan('combined'))

    appServer.use(routes)
    appServer.use('/api',routesApi)
    
   
    appServer.get('*',function(req,res){
     res.end('Archivo no encontrado')
    })

    
    


/////////////////////////////////////////////
//////////////////////////////////////////



//appServer.listen(3000)
//aquí se agrega una callback
appServer.listen(process.env.PORT,function(){
console.log("servidor funcionando")
}) /**
Hay que aclararle al servidor el puerto por el que va a escuchar

*/


