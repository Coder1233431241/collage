camera=document.getElementById("camera");
Webcam.set({
    width : 360,
    height : 250,
    image_format:'jpeg',
    jpeg_quality: 90
});
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textbox=document.getElementById("voice");
function start(){
    textbox.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    var content=event.results[0][0].transcript;
    textbox.innerHTML=content;
    speak();
}
function speak(){
var synth=window.speechSynthesis;
Webcam.attach(camera);

}