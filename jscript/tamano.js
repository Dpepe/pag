var alt=0, anch=0;
var contenidos=document.getElementById("contenido");
var canvasEnvuelve=document.getElementById("envolturaCanvas");
var imagenCa=document.getElementById("canvasImg");
var imgLoad=document.getElementById("loader");


//var can=document.getElementById("miCanvas");

var figur1=document.getElementById('figuraFoot1'); 
var figur2=document.getElementById('figuraFoot2'); 
var figur3=document.getElementById('figuraFoot3'); 
var figur4=document.getElementById('figuraFoot4'); 
var figur5=document.getElementById('figuraFoot5'); 
var figur6=document.getElementById('figuraFoot6'); 
var figur7=document.getElementById('figuraFoot7'); 

var tagHead=document.getElementById('header'); 
var tagFoot=document.getElementById('footer');
var foot=document.getElementById('foot');
var tagAsid=document.getElementById('aside');
var pantalla=document.getElementsByTagName('body');
var figuraArch=document.getElementById("figurasArchivo");
var footDibujo=document.getElementById("footerDraw");
var log=document.getElementById("logo");
var tamanoImagen=document.getElementById("footimg");
var seccion=document.getElementById("section");

    var w=window.innerWidth ||  screen.width || document.documentElement.clientWidth ;

    var h=window.innerHeight || document.documentElement.clientHeigh || document.body.clientHeight;


var cambiodepantalla=function(){
     if(w<=360){
		anch=340;
        alt=360;
        seccion.style.width="340px";
        tagAsid.style.display="none";//ocultamos asid en tamaños pequeños
        canvasEnvuelve.style.height="360px"; 
        canvasEnvuelve.style.width="340px";

       
        console.log("width "+ tagHead.style);
        tagHead.style.width="350px";
        tagFoot.style.display="none";
        //tagFoot.style.width="350px";
        tagHead.style.marginLeft="8px";
        tagFoot.style.marginLeft="8px";
        tagAsid.style.marginLeft="100px";
        //contenidos.style.height="800px";//1200
        contenidos.style.width="360px";
        contenidos.style.marginLeft="7px";
        footDibujo.style.height="100px";
        figuraArch.style.marginLeft="10px";
        figuraArch.style.display="block";
        figuraArch.style.marginTop="20px";
        console.log("360");
        log.style.marginLeft="38px";
        figur1.style.width="70px";
        figur1.style.height="70px";
        figur2.style.width="70px";
        figur2.style.height="70px";
        figur3.style.width="70px";
        figur3.style.height="70px";
        figur4.style.width="70px";
        figur4.style.height="70px";
        figur5.style.width="70px";
        figur5.style.height="70px";
        figur6.style.width="70px";
        figur6.style.height="70px";
        figur7.style.width="70px";
        figur7.style.height="70px";
        foot.style.width="340px";
      



	}
	
 	else if(w<=640){
		anch=600;
        alt=400;
        seccion.style.width="600px";
        tagAsid.style.display="none";
        canvasEnvuelve.style.width="600px";
        canvasEnvuelve.style.height="400px";
        tagHead.style.width="600px";
        tagFoot.style.width="600px";
        tagHead.style.marginLeft="8px";
        tagFoot.style.marginLeft="8px";
        tagAsid.style.marginLeft="15px";
        contenido.style.marginLeft="5px";
        contenido.style.width="600px";
        footDibujo.style.height="50px";
        figuraArch.style.marginLeft="250px";
        figuraArch.style.marginTop="-45px";
        figuraArch.style.width="350px";
        
       //figuraArch.style.display="inline-block";//para eliminar anuncio
        //figuraArch.style.marginTop="20px";
 		console.log("640");
        log.style.marginLeft="280px";
        figur1.style.width="65px";
        figur1.style.height="74px";
        figur2.style.width="74px";
        figur2.style.height="74px";
        figur3.style.width="74px";
        figur3.style.height="74px";
        figur4.style.width="74px";
        figur4.style.height="74px";
        figur5.style.width="74px";
        figur5.style.height="74px";
        figur6.style.width="74px";
        figur6.style.height="74px";
        figur7.style.width="74px";
        figur7.style.height="74px";
        foot.style.width="590px";
     
		
	}else if(w<=768){
		anch=730;
        alt=450;
        seccion.style.width="730px";
        tagAsid.style.display="none";//ocultamos asid en tamaños pequeños
        canvasEnvuelve.style.width="730px";//530
        canvasEnvuelve.style.height="450px";//450
        tagHead.style.width="750px";
        tagFoot.style.width="750px";
        tagHead.style.marginLeft="8px";
        tagFoot.style.marginLeft="8px";
        tagAsid.style.marginLeft="5px";
        contenido.style.marginLeft="5px";
        contenido.style.width="750px";
        footDibujo.style.height="50px";
        figuraArch.style.marginLeft="100px";
        figuraArch.style.width="350px";//esta siempre se desacomoda

        
        //figuraArch.style.display="block";//quitamos el anuncio
        log.style.marginLeft="400px";
      


        //figuraArch.style.marginLeft="0px";
         console.log("768");
         figur1.style.width="94px";
        figur1.style.height="94px";
        figur2.style.width="94px";
        figur2.style.height="94px";
        figur3.style.width="94px";
        figur3.style.height="94px";
        figur4.style.width="94px";
        figur4.style.height="94px";
        figur5.style.width="94px";
        figur5.style.height="94px";
        figur6.style.width="94px";
        figur6.style.height="94px";
        figur7.style.width="94px";
        figur7.style.height="94px";
        foot.style.width="730px";

      
	}else if(w<=800){
		anch=550;
        alt=450;
        seccion.style.width="550px";
        canvasEnvuelve.style.width="550px";
        canvasEnvuelve.style.height="450px";
        tagHead.style.width="750px";
        tagFoot.style.width="750px";
        tagAsid.style.marginLeft="15px";
       
        contenido.style.width="750px";
        contenido.style.marginLeft="15px";
        console.log("800");
         //figuraArch.style.marginLeft="0px";
        log.style.marginLeft="230px";
        figuraArch.style.display="block";

        figur1.style.width="69px";
        figur1.style.height="69px";
        figur2.style.width="69px";
        figur2.style.height="69px";
        figur3.style.width="69px";
        figur3.style.height="69px";
        figur4.style.width="69px";
        figur4.style.height="69px";
        figur5.style.width="69px";
        figur5.style.height="69px";
        figur6.style.width="69px";
        figur6.style.height="69px";
        figur7.style.width="69px";
        figur7.style.height="69px";
        foot.style.width="550px";
    
      
	}else if(w<=980){
		anch=650;
        alt=450;
        canvasEnvuelve.style.width="650px";
        canvasEnvuelve.style.height="450px";
        seccion.style.width="650px";
        tagHead.style.width="920px";
        tagFoot.style.width="920px";
      
        tagAsid.style.marginLeft="20px";
  
        contenido.style.width="920px";
        //figuraArch.style.marginLeft="200px";
         console.log("980");
         figuraArch.style.marginLeft="50px";
        //figuraArch.style.display="block";
   
        console.log("980");
        log.style.marginLeft="320px";

        figur1.style.width="83px";
        figur1.style.height="83px";
        figur2.style.width="83px";
        figur2.style.height="83px";
        figur3.style.width="83px";
        figur3.style.height="83px";
        figur4.style.width="83px";
        figur4.style.height="83px";
        figur5.style.width="83px";
        figur5.style.height="83px";
        figur6.style.width="83px";
        figur6.style.height="83px";
        figur7.style.width="83px";
        figur7.style.height="83px";
        foot.style.width="650px";
      
        console.log("tamaño es 980");
      
	}
	else if(w<=1100){
		anch=700;//700
        alt=450;
        tagHead.style.width="950px";
        tagFoot.style.width="950px";
        seccion.style.width="700px";
        canvasEnvuelve.style.width="700px";
        canvasEnvuelve.style.height="450px";
        console.log("1100");
        log.style.width="150px";
        log.style.height="50px";
        figur1.style.width="120px";
        figur1.style.height="120px";
        figur2.style.width="120px";
        figur2.style.height="120px";
        figur3.style.width="120px";
        figur3.style.height="120px";
        figur4.style.width="120px";
        figur4.style.height="120px";
        figur5.style.width="120px";
        figur5.style.height="120px";
        figur6.style.width="120px";
        figur6.style.height="120px";
        figur7.style.width="120px";
        figur7.style.height="120px";
        foot.style.width="950px";
        console.log("tamaño es 1100");

        figuraArch.style.marginLeft="100px";
    
    }
	else {

        
		figur1.style.width="140px";
        figur1.style.height="140px";
        figur2.style.width="140px";
        figur2.style.height="140px";
        figur3.style.width="140px";
        figur3.style.height="140px";
        figur4.style.width="140px";
        figur4.style.height="140px";
        figur5.style.width="140px";
        figur5.style.height="140px";
        figur6.style.width="140px";
        figur6.style.height="140px";
        figur7.style.width="140px";
        figur7.style.height="140px";

		anch=800;//700
        alt=450;
    
        foot.style.width="1050px";//imagenesabajo
        tagFoot.style.width="1050px";
        tagFoot.style.height="10px"
        canvasEnvuelve.style.width="800px";
        canvasEnvuelve.style.height="450px";
        console.log("1100");
        log.style.width="150px";
        log.style.height="50px";
        
        tagHead.style.width="1050px";

      

      

        contenidos.style.width="1050px";

	}

    return 1;
}
cambiodepantalla();