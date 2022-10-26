function tapizAhorcado(){
var fondo="imagenes/el-juego-de-el-ahorcado.png";

imagen=new Image();
imagen.src=fondo;


imagen.addEventListener("load",showimag);

function showimag(){ 
        tablero.drawImage(imagen,0,35);
    }    
}
    function dibujarVaca(){
    var fondo={ 
            gps:"imagenes/tile.png",
            alarm:false
            }
        var vaca={
            gps:"imagenes/vaca.png",
            alarm:false
        }
    fondo.object=new Image();
    fondo.object.src=fondo.gps;
    vaca.object=new Image();
    vaca.object.src=vaca.gps;
    fondo.object.addEventListener("load",cargar1);
    vaca.object.addEventListener("load",cargar2);
    function cargar1(){
        fondo.alarm=true;
    show1();
    }
    function cargar2(){
        vaca.alarm=true;
        show1();
    }
    function show1(){
        var cantidad=aleatoria(1,4); 
        if(fondo.alarm==true){
            tablero.drawImage(fondo.object,512,50);
        }   
        if(vaca.alarm==true){
    
           for(let i=0;i<cantidad;i++){
            var x=aleatoria(600,770);
            var y=aleatoria(100,460);
               
            tablero.drawImage(vaca.object,x,y);
            } 
    }
    }
    }
    
    //---
    function dibujarCerdo(){
        var fondo={ 
                gps:"imagenes/tile.png",
                alarm:false
                }
            var cerdo={
                gps:"imagenes/cerdo.png",
                alarm:false
            }
        fondo.object=new Image();
        fondo.object.src=fondo.gps;
        cerdo.object=new Image();
        cerdo.object.src=cerdo.gps;
        fondo.object.addEventListener("load",cargar1);
        cerdo.object.addEventListener("load",cargar2);
        function cargar1(){
            fondo.alarm=true;
        show1();
        }
        function cargar2(){
            cerdo.alarm=true;
            show1();
        }
        function show1(){
            var cantidad=aleatoria(1,4); 
            if(fondo.alarm==true){
                tablero.drawImage(fondo.object,512,50);
            }   
            if(cerdo.alarm==true){
        
               for(let i=0;i<cantidad;i++){
                var x=aleatoria(600,770);
                var y=aleatoria(100,460);
                   
                tablero.drawImage(cerdo.object,x,y);
                } 
        }
        }
        }
        
        //---
        function dibujarPollo(){
            var fondo={ 
                    gps:"imagenes/tile.png",
                    alarm:false
                    }
                var pollo={
                    gps:"imagenes/pollo.png",
                    alarm:false
                }
            fondo.object=new Image();
            fondo.object.src=fondo.gps;
            pollo.object=new Image();
            pollo.object.src=pollo.gps;
            fondo.object.addEventListener("load",cargar1);
            pollo.object.addEventListener("load",cargar2);
            function cargar1(){
                fondo.alarm=true;
            show1();
            }
            function cargar2(){
                pollo.alarm=true;
                show1();
            }
            function show1(){
                var cantidad=aleatoria(1,4); 
                if(fondo.alarm==true){
                    tablero.drawImage(fondo.object,512,50);
                }   
                if(pollo.alarm==true){
            
                   for(let i=0;i<cantidad;i++){
                    var x=aleatoria(600,770);
                    var y=aleatoria(100,460);
                       
                    tablero.drawImage(pollo.object,x,y);
                    } 
            }
            }
            }

    function dibujarLinea(){
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle = "#0A3871";
    //600 mean pixels below firts line
    
    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
        let anchura = 600/palabraSecreta.length;
        for (let i = 0; i < palabraSecreta.length; i++){
            
            tablero.moveTo(200 + (anchura*i), 600)
            tablero.lineTo(250 + (anchura*i), 600)
        }
        
        tablero.stroke();
        tablero.closePath();
    }
    
    function escribirLetraCorrecta(index) {
        tablero.font='bold 52px Inter';
        tablero.lineWidth=6
        tablero.lineCap="round"
        tablero.lineJoin="round"
        tablero.fillStyle= "#0A3871"
        let anchura=600/palabraSecreta.length
          tablero.fillText(palabraSecreta[index],205+(anchura*index),590)
          tablero.stroke()
    }     
    function escribirLetraIncorrecta(letra,errorsLeft){
        tablero.font="bold 40px Inter";
        tablero.lineWidth = 6;
        tablero.lineCap = "round"
        tablero.lineJoin = "round"
        tablero.fillStyle = "#3f0202"
        tablero.fillText(letra,400+(20*(10-errorsLeft)),630,20)
          }
    
          function aleatoria(max,min){
            var resultado;
             resultado =Math.floor(Math.random()*(max-min+1))+min;
            return resultado;
            }
            
function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Ganaste,",200,320)
    tablero.fillText("Felicidades!",200,360)
    setTimeout( recargar , 2000)
  }
  function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Fin del juego!",230,320)
    setTimeout( recargar , 2000)
  }
function recargar(){         //this function do it
    location.reload(); 
  }  



function dibujarAhorcado(puntaje) {



    if(puntaje===8){
        let fondo="el-juego-de-el-ahorcado.png";
    
        let imag=new Image();
        imag.src=fondo;
        
        imag.addEventListener("load",show1);
        
        function show1(){ 
                tablero.drawImage(imag,0,0);
            }    
        }   
            if(puntaje===7){
        
   var muneco="imagenes/muñeco.png";
   var imagen2 = new Image();
   imagen2.src = muneco;
   imagen2.addEventListener("load",dibujar2);
   function limpiar(){
   tablero.clearRect(0,0,600,500);
   }
   var  x=30;
   var  y=200;    
   var volver=false;
   function dibujar2 ()//cuando ocurre el evento, se llama a estas funciones para que a su vez llamen la funcion de dibujar
   {
     limpiar();
   tablero.drawImage(imagen2,x,y);
   if(volver){
     x--;
   }
   if(x==220){
     volver=true;
   }          
   if(!volver){
     x++;
   }
   if(x==30){
     volver=false;
   }
   }
   movieAhorcad=setInterval(dibujar2,10);
   } 
    

    if(puntaje===6){
        

clearInterval( movieAhorcad ); 
tablero.font = ' bold 42px Inter';
tablero.lineWidth=6
tablero.lineCap="round"
tablero.lineJoin="round"
tablero.fillStyle="red"
tablero.fillText("Fin del juego!",230,320)
  }
}
function dibujarTablero() {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#F3F5FC"
    tablero.strokeStyle = "#0A3871"
    tablero.fillRect(0,0,1200,800)
    tablero.beginPath();
    tablero.moveTo(650,500)
    tablero.lineTo(900,500)
    tablero.stroke()
    tablero.closePath()
  }

function firtsBox(){
    const Elem = document.getElementById("question");
  Elem.className = Elem.className === "question" ? "color" : "question";
}
