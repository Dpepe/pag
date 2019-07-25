      

(function(s){
   

var d = document;
var miApp = miApp || {};
miApp.sub = (function(){
    var ancho, alto, pantalla, altoPantallaDos, anchoDePantalla, altosDePantalla = function(){
        return typeof window.innerHeight !== "undefined" ? window.innerHeight:  typeof window.screen.width !== "undefined" ? window.screen.width: d.documentElement.clientHeight;
    }
    anchoDePantalla = function (){
        return typeof window.innerWidth !== "undefined" ? window.innerWidth: typeof window.screen.width !== "undefined" ? window.screen.width: d.documentElement.clientWidth;
    }
    altoPantallaDos = function(){
     
        if (typeof window.innerWidth !== 'undefined') {
            console.log("aqui inner")
           alto = window.innerHeight;
           ancho = window.innerHeight;
        }
        else if ((typeof d.documentElement !== 'undefined') && (typeof d.documentElement.clientHeight !== 'undefined') && (document.documentElement.clientHeight !== 0) ){
            alto = d.documentElement.clientHeight;
            ancho = d.documentElement.clientWidth;
            console.log("aqui client")
        }
        else{
            console.log("aqui ecreen")
            alto = window.screen.height;
            ancho = window.screen.width;
        }

        return {width:ancho, height:alto};
    }
    return{
        foo: function(un){
            
        },
        width: function(){
         console.log("offsetHeight ",  window.innerHeight);
         pantalla = altoPantallaDos();
         return anchoDePantalla() || pantalla.width;
        },
        height: function(){
            //establecer altura con scrollHeight, clientheight y offsetHeight, window.innerHeight, document.documentElement.clientHeight
            console.log("offsetHeight ",  window.innerHeight);
            pantalla = altoPantallaDos();
            return altosDePantalla() || pantalla.height;
        },
        ide: function(un){
            console.log( typeof document.getElementById(un) + " : " +document.getElementById(un))
            var ss= document || "hola;"
            console.log("sss", ss);
            try{
                    if (!document.querySelector(un)) {};
            }catch(e){
            console.log("Error Message: " + e.message + "Error codigo"+ e.number + "Error Name: " + e.name)
            }
            finally {

}
            
            console.log("querySelector ",   document.querySelector(un));
            console.log("querySelectorAll ",  document.querySelectorAll(un));

            return document.getElementById(un) !== null ? document.getElementById(un): typeof document.querySelector(un) !== "undefined" ? document.querySelector(un): document.querySelectorAll(un)[0]; 
        }
    }
}());


miApp.esplore = (function(modu){

modu.probando = function(){
    return "probando";
  }
  modu.adddevento=function(el, ev, fn){
    if(el.addEventListener) {
           el.addEventListener(ev,fn,false);
        }else if(el.attachEvent){
           el.attachEvent("on"+ev, fn);
        }else{
           el["on"+ev]=fn;
        }
  }

return modu;
})(miApp || {});

var node =  document.documentElement.parentNode.firsCh;
console.log("node ", node);
miApp.plm = (function (s){
    s.valore="hola me estoy fugando";//variable global
    var valores="la fuga dos";
    s.bar=function(dos){
        return document.getElementsByTagName(dos);
    }
    s.anch = function(){
        return miApp.sub.width();
    }
    

  s.sele = function(sel){
    se=+document.getElementById("seleccion").value;
  }
  //comienza a poner un color de fondo blanco
  s.f = function() {
	  ctx.fillStyle="#f9f9f9";
	  ctx.fillRect(0, 0, anch,  alt);
	  ctx.fill();
     miApp.plm.cPush(); /********ffffffffffffffffffffffffffffffffffffffffffff66*******************/
	}
      
	s.imageCargarDespues = function() {
  
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    miApp.plm.cPush();
	}
	/*s.circulo = function(e) {
		ctx.beginPath();
		ctx.fillStyle = col;
		ctx.arc(e.clientX, e.clientY, 20, 0, Math.PI*2, false);
		ctx.fill();
	}*/
 
		var MINIMO    = 1.0;
    var isMouseDown=false;
      
    var CURVA = 0.9;  // 0.9
    var MAXIMODE =150.0;//250
    var MINIMODIBUJO  = 0.0;
    var MOVIMIENTOCIRCULAR = 0.55; // 0.55
    var VELOCIDADDELLAPIZ    = 0.4;//0.4
  
    var WIDTH       = 0.5;  
    var ANGULED = 0; 
		var odelx, odely; 
    var cordenadax = 0.0;
		var cordenaday = 0.0;
		var velocidax = 0.0;
		var velociday = 0.0;
		var velocidad = 0.0;
		var accesox = 0.0;
		var accesoy = 0.0;
		var acc = 0.0;
		var angx = 0.0;
		var angy = 0.0;
		var mass = 0.0;
		var drag = 0.0;
		var ultx = 0.0;
		var ulty = 0.0;
    var mx, my;
		var fixedangle = ANGULED; 

 
	var setpos = function(x,y) {
    cordenadax = x;
    cordenaday = y;
    ultx = x;
    ulty = y;
    velocidax = 0.0;
    velociday = 0.0;
    accesox = 0.0;
    accesoy = 0.0;
  }
 var flerp=function(f0,f1,p) {
    return ((f0*(1.0-p))+(f1*p));
  }
  var apply = function(mx,my) {
    var mass, drag;
    var fx, fy, force;
    mass = flerp(MINIMO,MAXIMODE,CURVA);
    drag = flerp(MINIMODIBUJO,VELOCIDADDELLAPIZ,MOVIMIENTOCIRCULAR*MOVIMIENTOCIRCULAR);
    fx = mx-cordenadax;
    fy = my-cordenaday;
    acc = Math.sqrt((fx*fx)+(fy*fy));
    if(acc<0.000001)
      return 0;
    accesox = fx/mass;
    accesoy = fy/mass;
    velocidax += accesox;
    velociday += accesoy;
    velocidad = Math.sqrt(velocidax*velocidax+velociday*velociday);
    if(velocidad<0.000001) 
      return 0; 
    angx = -velociday;
    angy = velocidax;
    angx /= velocidad;
    angy /= velocidad;
    if(fixedangle) {
      angx = 0.6;
      angy = 0.2;
    }
    velocidax = velocidax*(1.0-drag);
    velociday = velociday*(1.0-drag);
    ultx = cordenadax;
    ulty = cordenaday;
    cordenadax = cordenadax+velocidax;
    cordenaday = cordenaday+velociday;
    return 1;       
  }
  s.init=function(){
  
    setInterval(function () {
      doTimer()
    }, 1);
  }
  function is_touch_device() {
    return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0)
    );
  }
  s.onMouseDown=function(e) {
    isMouseDown=true;
    if (navigator.userAgent.indexOf('Firefox') ==-1) {
      var target;
      if (is_touch_device()) {
        target = e.touches[0];
      }else{
        target = e;
      }
      var offset = canvas.getBoundingClientRect();
      mx = target.clientX - offset.left;
      my = target.clientY - offset.top;
      setpos(mx,my);
      ultx = 0.0;
      ulty = 0.0;
    }
    setpos(mx,my);
    return false;
  }

  //Plumon principal movimiento 
  s.onMouseMove=function(e){
    var target;
    if (navigator.userAgent.indexOf('Firefox') !=-1) {
          target = e;
    } else if (Modernizr.touch) {
       target = e.touches[0];
    } else {
   
      target = e;
    }
    var offset = canvas.getBoundingClientRect();
    mx = target.clientX - offset.left;
    my = target.clientY - offset.top;
    return false
  }

  s.onMouseUp=function(event){
    isMouseDown = false;
    ctx.closePath();
    return false;
  }
  
  var doTimer=function(){
    if (isMouseDown && apply(mx,my)) {
        draw();
        return 1;
    }
  }
  
  var draw=function(){

    var delx, dely; 
    var wid;
    var px, py, nx, ny;

    wid = 0.0004-velocidad;
    wid = wid*WIDTH;
  
    delx = angx*wid;
    dely = angy*wid;

    px = ultx;
    py = ulty;
    nx = cordenadax;
    ny = cordenaday;
    
    ctx.beginPath();
    ctx.save();
    //ctx.globalAlpha = 0.1;
    ctx.fillStyle=colorNeon;
    ctx.shadowColor =col;
    ctx.shadowBlur =resplandor;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    ctx.arc((px+delx),(py+dely),se, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();  // change to context.stroke(); to see what is being drawn
    ctx.restore();
   
  }
  s.pinceldos=function(){

  }

	s.onClear=function(){
    ctx.fillStyle = "#f9f9f9";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    setStyle();
  }

  s.onSave=function(){
  
    var dataURL = canvas.toDataURL();

    document.getElementById('canvasImg').src = dataURL;
    
    imagenCa.style.borderWidth="5px";
    imagenCa.style.borderStyle="solid";
    imagenCa.style.borderColor="#807f26"
   if(w<=360){
window.scroll(0,650);
   }else{
window.scroll(0,200);
   }
    
    window.localStorage.canvasImage = canvas.toDataURL(); 
  }

  s.loadCanvas = function() {
    var img = new Image(); 
    img.src = window.localStorage.canvasImage; 
    img.onload = function() { 
      ctx.drawImage(img, 0, 0); 
    } 
  } 

  function setStyle(){
    ctx.lineWidth   = 1.0;
    ctx.strokeStyle = "#f9f9f9";
    ctx.fillStyle   = "#f9f9f9";
    ctx.fillStyle="#f9f9f9";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
  }

  s.fue=function(e){
    var target;
    if (navigator.userAgent.indexOf('Firefox') !=-1) {
          target = e;
    } else if (Modernizr.touch) {
       target = e.touches[0];
    } else {
   
      target = e;
    }
    var offset = canvas.getBoundingClientRect();
    var s = target.clientX - offset.left;
    var t = target.clientY - offset.top;
    lastPoint = { x:s, y:t };
  }
  s.fuego=function(e){

    var target;
    if (navigator.userAgent.indexOf('Firefox') !=-1) {
          target = e;
    } else if (Modernizr.touch) {
       target = e.touches[0];
    } else {
   
      target = e;
    }
    var offset = canvas.getBoundingClientRect();
    var s = target.clientX - offset.left;
    var t = target.clientY - offset.top;
    if (verificar) {
      ctx.beginPath();
      ctx.strokeStyle="red";
      ctx.fillStyle="red";
      ctx.lineWidth =se;
     
      ctx.shadowColor = "red"; 
      ctx.shadowBlur = 35;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 2;
      ctx.moveTo(lastPoint.x,lastPoint.y);
      ctx.lineTo(s-3,t-3);
      ctx.stroke();
  
      ctx.strokeStyle="red";
      ctx.lineWidth = se+10;
      var c = (s + s+5) / 2;
      var d = (t+ t+1*0.1) / 2;
      ctx.quadraticCurveTo(s,t, c, d);
      ctx.stroke();
      ctx.strokeStyle="yellow";
      ctx.lineWidth = 4;
      ctx.shadowColor = "yellow"; 
      ctx.shadowBlur = 50;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
  
      ctx.moveTo(lastPoint.x,lastPoint.y);
      ctx.lineTo(s,t);
      ctx.stroke();
      lastPoint = { x: e.clientX-offset.left, y:  e.clientY-offset.top };
    };
  } 
  s.circulosColores=function(e){
     var target;
    if (navigator.userAgent.indexOf('Firefox') !=-1) {
          target = e;
    } else if (Modernizr.touch) {
       target = e.touches[0];
    } else {
   
      target = e;
    }
    var offset = canvas.getBoundingClientRect();
    var s = target.clientX - offset.left;
    var t = target.clientY - offset.top;
    ctx.lineWidth = 1;
    var colorEstroke='rgb(' +
    parseInt(Math.random() * 255) + ',' +
    parseInt(Math.random() * 255) + ',' +
    parseInt(Math.random() * 200+150) + ')';
    var r = Math.random()*255+255>>0;
    var g = Math.random()*255>>0;
    var b = Math.random()*255>>0;

    var colorCir = "rgba("+r+", "+g+", "+b+", 0.7)";
    ctx.strokeStyle=colorEstroke;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 2;
    ctx.shadowColor = colorEstroke;
      if (verificar) {
        for(var i=0;i<2;i++){
          ctx.fillStyle=colorCir;
          var p=Math.random()*10;
          var o=Math.random()*10;
          var q=Math.random()*5+se;//1 a 5
          ctx.beginPath();
          ctx.arc(s+i+p,t+o,q,0,Math.PI*2);
          ctx.fill();
          ctx.stroke();
        }
      }
  }
  
  var cPushArray = new Array();
  var cStep ;
  cStep= -1;  
	s.cPush=function(){
    cStep++;
   	if (cStep<cPushArray.length) {
    	cPushArray.length=cStep;
    }
    cPushArray.push(document.getElementById('miCanvas').toDataURL("imagenes/fondogrande.png"));
	  document.title = cStep + ":" + cPushArray.length;
	}
  s.cUndo=function() {
    if (cStep > 0) {
      cStep--;
  	  var canvasPic = new Image();
  	  canvasPic.src = cPushArray[cStep];
  	  canvasPic.onload = function() {
        ctx.drawImage(canvasPic, 0,0);
  	  }
  	  document.title = cStep + ":" + cPushArray.length;
    }
  }
  s.cRedo=function() {
    if (cStep < cPushArray.length - 1) {
  	  cStep++;
  	  var canvasPic = new Image();
  	  canvasPic.src = cPushArray[cStep];
  	  canvasPic.onload = function() {
  	    ctx.drawImage(canvasPic, 0,0);
  	  }
  	  document.title = cStep + ":" + cPushArray.length;
    }
  }
     
  s.comp=function(){
    if (cStep>5) {
    }else{
   
    };
    
  }
 

  return s;
}(miApp || {}));
 miApp.plm.init();
  window.miApp = miApp;






  var canvas, ctx;
      var verificar=false;
  

 canvas=miApp.sub.ide('miCanvas');
      ctx=canvas.getContext('2d');
      canvas.width=anch;
      canvas.height=alt;
    var agregar=miApp.sub.ide("htmle");
    var cont=miApp.sub.ide("contenedor");
    var cancela=miApp.sub.ide("cancelar");
    cont.style.width="80px";
    cont.style.height="20px";
  
    for (var i = 0; i < 72; i++) {
      eli=document.createElement("p");
      agregar.appendChild(eli);
    };

  
    var colorprimero="blue";
    var l=0.1;
    var cua=document.getElementsByTagName("p");
    colores={
      uno:[
      "#FF99FF", "#FF66FF", "#FF00FF", "#B36CFF", "#9933FF", "#9900FF", "#AAFFFF", "#00FFFF", "#00CCFF", "#FFD8AD", "#D0A783", "#836953", 
      "#FFFFCC", "#FFFF66", "#FFFF00", "#FF878D", "#FF3D5D", "#FF1111", "#66FF99", "#66FF66", "#00FF00", "#00CCFF", "#0066FF", "#0000CC", 
      "#ACFFC3", "#03C03C", "#2A8000", "#FFCD76", "#FFB347", "#FF9F00", "#1abc9c ", "#2ecc71", "#3498db","#9b59b6", "#34495e", "#16a085",
      "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c511", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", 
      "#bdc3c7", "#7f8c8d", "#f1c511", "#f1c511", "#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000", "#FF116F", "#00FFA8",
      "#C1FF00", "#32592B", "#59234A", "#588C4B", "#74B3B8", "#27444A", "#C6BD3B", "#1E9294", "#EDB4C7", "#D1EDAA", "#CBC6FF", "#00FFA8"
      
      ]
    }
    
    for (var i = 0; i < cua.length; i++) {
    cua[i].style.backgroundColor=colores.uno[i];
    }

    miApp.esplore.adddevento(cont, 'click', function(e){
      cont.style.width="290px";
      cont.style.height="290px";
      agregar.style.display="block";
      cancela.style.display="block";
      cancela.style.height="15px";
      cancela.style.width="15px";
       cont.style.backgroundColor="#1a1a1a";
    });

    miApp.esplore.adddevento(cont, 'click', function(e){
      var e=e||window.event
        var el=e.target || e.srcElement;
      if(el.nodeName.toLowerCase()!=="img"){
        return false;
      }

      cont.style.width="80px";
      cont.style.height="20px";
      cont.style.backgroundColor="#1a1a1a";
      agregar.style.display="none";
       cancela.style.display="none";

      cont.style.overflow="hidden";
    });
    miApp.esplore.adddevento(agregar, 'click', function(e){
        var e=e||window.event
        var el=e.target || e.srcElement;
      if(el.nodeName.toLowerCase()!=="p"){
        return false;
      }
        col=el.style.backgroundColor;
        var verificar=document.getElementById("verificar");
        
      if (typeof e.stopPropagation === "function") {
        e.stopPropagation();
      }
        e.cancelBubble = true;
    

      if (typeof e.preventDefault === "function") {
        e.preventDefault();
      }
        e.returnValue = false;
    });

    var fig, save, clear;
    save = document.getElementById('save');
    miApp.esplore.adddevento(save, 'click', function(){
        miApp.plm.onSave();
    });
   
    clear = document.getElementById('clear');
    miApp.esplore.adddevento(clear,'click',function(){
        verifiBorrar=false;
        miApp.plm.onClear();
    });
    
    var verifiBorrar=false;
    var agregarImagen=document.getElementById("pared");
    miApp.esplore.adddevento(agregarImagen,"click", function(){
       miApp.plm.imageCargarDespues();
       verifiBorrar=true;
    });

    var se=2;
    var loadStorage=document.getElementById("loadstore");
    miApp.esplore.adddevento(loadStorage,'click',function(){
      miApp.plm.loadCanvas();
    });
     if (navigator.userAgent.indexOf('MSIE') !=-1) {
      loadStorage.style.display="none";
   }
    
    
     fig="plumon"; 
     var plumas=document.getElementById("brochas");

    miApp.esplore.adddevento(plumas,'click',function(e){
      var e = e || window.event;
      var el= e.target || e.srcElement;
      if(el.nodeName.toLowerCase()=="img"){
        var plumonbrocha= el.getAttribute('data-action') || el.id;
        fig = plumonbrocha;
      }
      return fig;
    });
 
    var borra=document.getElementById("borrar");
    miApp.esplore.adddevento(borra,'click',function(){
      if (verifiBorrar) {
        col="black";
      }else{
         col="#f9f9f9";
      }
        fig="plumon"; 
    });
    var neon=document.getElementById("neone");
    var colorNeon=col;
    var resplandor=1;
    miApp.esplore.adddevento(neon,'click', function(){

    });
    var sele=document.getElementById("seleccion");
    miApp.esplore.adddevento(sele,'click',function(e){
      se=+sele.value;
       miApp.plm.sele(se)
    });
    if (!Modernizr.touch) {
      var clickevent= 'mousedown';
      var clickmove= 'mousemove';
      var clickup= 'mouseup';
    }else if (navigator.userAgent.indexOf('Firefox') !=-1) {
      var clickevent= 'mousedown';
      var clickmove= 'mousemove';
      var clickup= 'mouseup'; 
    }else{
      var clickevent= 'touchstart';
      var clickmove= 'touchmove';
      var clickup= 'touchend';
    }
    
    canvas.addEventListener('touchmove', function(event) {
    event.preventDefault();
    }, false);

   
    miApp.esplore.adddevento(canvas, clickevent, function(e){
      verificar = true;
      if (fig=="plumon") {
        colorNeon=col;
        resplandor=5;
        miApp.plm.onMouseDown(e);
        return false;
      };
      if (fig=="fuegoPlumo") {
        miApp.plm.fue(e);
        return false;
      };
      if (fig=="neone") {
        miApp.plm.onMouseDown(e);
        colorNeon="white";
        resplandor=25;
          return false
      };
      if (fig=="circulosVarios"){
        //se=2;
        return false;
      }
    });
    //$( "#miCanvas" ).mousemove(function( e ) {
    miApp.esplore.adddevento(canvas, clickmove, function(e){
     if (fig=="plumon") {
          miApp.plm.onMouseMove(e);
    
          return false
      };

      if (fig=="fuegoPlumo") {
          miApp.plm.fuego(e);
          return false
      };
       if (fig=="neone") {
     
        miApp.plm.onMouseMove(e);
        return false
      };
      if (fig=="circulosVarios"){
        miApp.plm.circulosColores(e);
        return false;
      }
    });
  
 
    var win= document.getElementById('contenido');
    miApp.esplore.adddevento(window, 'selectstart', function(e){
      e.preventDefault();
      return false;
    });
   
    function suporteCanvas(){
      return !!document.createElement('canvas').getContext;
    }
  
    function supportsToDataURL(){
      if(!suporteCanvas()){
         return false;
      }

      var c = document.createElement("canvas");
      var data = c.toDataURL("image/png");
      return (data.indexOf("data:image/png") == 0);
    }
    
    miApp.esplore.adddevento(window,'resize',function(){
      miApp.plm.comp();
    });

 
    var col="red";
  

    if(supportsToDataURL()){
    
   
    }else{
    var imge=document.getElementById("ima");
      imge.style.display="none";
    var regre=document.getElementById("regresar");
      regre.style.display="none";
    var adela=document.getElementById("adelantar");
      adela.style.display="none";
    }
    miApp.esplore.adddevento(canvas, clickup, function(event){
      verificar =false;
      if(supportsToDataURL()){
       miApp.plm.cPush();
      };
      ctx.closePath();  
      miApp.plm.onMouseUp();
    });
    miApp.esplore.adddevento(canvas, 'mouseleave', function(e){
      ctx.closePath();     
      miApp.plm.onMouseUp();
    });

  miApp.plm.f();
 window.onload=function(){
loadeImg.style.display="none";
};

	
})();