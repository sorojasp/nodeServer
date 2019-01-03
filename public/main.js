var FormsFds=document.getElementById("FormFds")



//////////////////////////////////////////////////////
//////////SE DEFINE LA CLASE PERSONAS ////////////////
//////////////////////////////////////////////////////
class Personas{
    contructor(nombre, correo){
        this.nombre;
        this.correo;
        this.genero;
        this.numeroContacto;
        this.location
        }

         getNombre(){
             return this.nombre;
        }

        getCorreo(){
            return this.correo;
        }

        getNumeroContacto(){
            return this.numeroContacto
         }

         getLocation(){

            return this.location
         }

    }


//////////////////////////////////////////////////////
//////////SE DEFINE LA CLASE Estudiantes /////////////
//////////////////////////////////////////////////////   
    
class Estudiantes extends Personas{
    constructor(nombre, correo,genero,numeroContacto,location,carrera,semestre){
        super(nombre, correo,genero,numeroContacto,location)
        this.carrera;
        this.semestre;
    }
        getCarrera(){
            return this.carrera;
            
        }    
        //////////////////////////////////////////////////////
        //////////SE DEFINE LA CLASE Docentes ////////////////
        //////////////////////////////////////////////////////
        

        getSemestre(){
            return this.semestre;

           
        }
    
    
    }
    
//////////////////////////////////////////////////////
//////////SE DEFINE LA CLASE Docentes ////////////////
//////////////////////////////////////////////////////

class Docentes extends Personas{

    constructor(nombre, correo,genero,numeroContacto,location,organization){
        super(nombre, correo,genero,numeroContacto,location)
        this.organization;
    }

    getOrganization(){

        return this.organization;
    }


}


//////////////////////////////////////////////////////
///// se define la clase R con atributos L y R ///////
//////////////////////////////////////////////////////

class R {

    constructor(DepenFuncionales,atributos){
        this.DepenFuncionales;
        this.atributos
        
    }

    getL(){
        return this.DepenFuncionales
    }

    getAtributos(){
        return this.atributos
    }

 

    calculaCierreDescriptor(descriptor, DepenFuncionales)
    {
        

       var implicanteDerivacion=descriptor;
       var DependenciasFuncionales=DepenFuncionales;
       var i=0,j=0,k=0,m=0,n=0;
       var derivable="No es derivable";
     
          // se coloca 1 si en el espacio de la matriz DependenciasFuncionalesFinales
          //si esta relacionada de forma transitiva,
       
       var contadorAtributosIguales=0;
       var contadorAtributosIguales2=0;
       var concatenaImplicadoEnCierre=0;
       //var comparador=[];
       //comparador[0]="a";
       //delete comparador[0];
       //console.log("comparador=" + comparador[0])

    
        //implicanteDerivacion.length //
        //while ((i!=DependenciasFuncionales.length)&(DependenciasFuncionales[i]!=comparador[0])){
        while (i!=DependenciasFuncionales.length){
        
        console.log("inicia ciclo")
        console.log("tamaño dependencias funcionales" + DependenciasFuncionales.length)
        console.log("i=" + i)
        console.log(DependenciasFuncionales)
                
         k=0;
    
       concatenaImplicadoEnCierre=0
       var DependenciasFuncionalesSeparadas= DependenciasFuncionales[i].split("->");
       var implicanteDF=DependenciasFuncionalesSeparadas[0];
       var implicadoDF=DependenciasFuncionalesSeparadas[1];
       implicanteDF=implicanteDF.split(",");
       implicadoDF=implicadoDF.split(",");
       
       
       console.log("dependencia Funcional a evaluar" + DependenciasFuncionales[i]);
    
       while(k!=implicanteDerivacion.length){
           j=0;
           
        while (j!=implicanteDF.length){
    
     if(implicanteDerivacion[k]==implicanteDF[j]){
            contadorAtributosIguales++;
            if(contadorAtributosIguales==implicanteDF.length){
                console.log("resultado Final" + implicadoDF);

                DependenciasFuncionales.splice(i, 1);
                console.log("Dependencias Funcionales finales" + DependenciasFuncionales);
                console.log("el tamaño de las dependencias funcionales es =" + console.log("tamaño dependencias funcionales" + DependenciasFuncionales.length))
                implicanteDerivacion= implicanteDerivacion.concat(implicadoDF);
                console.log("cierre :  " + implicanteDerivacion);
                concatenaImplicadoEnCierre=1;
                console.log("dependencias funcionales" + DependenciasFuncionales )
                
                
    
            }
        }
    
        
        j++;    
    }
        k++;
       
       }
       contadorAtributosIguales=0;
       if (concatenaImplicadoEnCierre==1){
           
           i=0;
      
       }else{
        i++;

       }
       
    
       
    
    }
    
    i=0;
    implicanteDerivacion.sort()
    
    return implicanteDerivacion;
    
    }
    




}



    

document.getElementById("submit-id-signup").addEventListener("click", function(){
FormsFds.style.visibility = "visible";
    if (document.getElementById("id_select_1").checked == true){

        document.getElementById("Ptry").innerHTML= document.getElementById("id_username").value
    }

});

document.getElementById("calculateTransitiveClose").addEventListener("click", function(){
    document.getElementById("Ptry").innerHTML="HOLA";

  var Re=document.getElementById("inputR").value;
  var Descriptor=document.getElementById("inputDescriptor").value;
      Descriptor=Descriptor.split(",");
  
 
    //Con el metodo (split) lo que se hace es separar los atributos de las 
    //dependencias funcionales en matriz llamada arrayT_L , de tal forma que
    // arrayT_L[0] son los atributos y arrayT_L[] son  las Dependencias funcionales
    var arrayAtributos_DependenciasFuncionales = Re.split(";");
    atributos=arrayAtributos_DependenciasFuncionales[0];
    DependenciasFuncionales=arrayAtributos_DependenciasFuncionales[1];

    //Con esta parte del código se separan los atributos (T) y las depedencias
    //funcionales (L), cada uno se guarda eN un espacio de un vector. 
    atributos=atributos.split(",");
    DependenciasFuncionales=DependenciasFuncionales.split(" ");

    R1=new R(DependenciasFuncionales,atributos);
    cierre=R1.calculaCierreDescriptor(Descriptor, DependenciasFuncionales)
    document.getElementById("Ptry").innerHTML=cierre;


   

});






//class Pelicula{
  //  constructor(nombre,id){
    //    this.nombre=nombre;
    //    this.id=id;
    //}

//}

//const peliculaUno= new Pelicula("El eterno resplandor de una  mente" ,2);

//console.log(peliculaUno);

//class Serie extends Pelicula{ //extendemos los métodos y los atributos de la 
    //classe películas

    //constructor(nombre,id,capitulo){
        //super(nombre,id)//esto se hace para que pueda usar los atributos de la clase película


    //}

    //reproducirCapitulo(){

        //return ("reproduciendo capitulo No1 de" + this.nombre);
    //}


//}


//const serieUno= new Serie("Casa de papél",4)

//console.log(serieUno.reproducirCapitulo())




/////////////////////////////////////////

//id_username
//id_email
//id_password1
//id_username
//id_password2
//id_gender_1
//id_gender_2
//id_number
//id_location
//id_terms
