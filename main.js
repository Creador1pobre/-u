var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie") 
      {
        console.log("tomando selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    /*Actualizar speak_data con el string "Tomando tu Selfie en 5 segundos"  */

    speak_data = "Tomando tu Selfie en 5 segundos"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
        /*Poner 5 segundos */
    }, 5000);
}
 
camera = document.getElementById("camera");


/*Crear function take_snapshot()  */
function take_snapshot()
{
    /*Llamar la funcion Webcam.snap  */
    Webcam.snap(function(data_uri){
        /*Actualizar el campo "result" */
        document.getElementById("result").innerHTML = '<img id="selfie_image" src"'+data_uri+'">';
        });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

