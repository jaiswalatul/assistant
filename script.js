let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    // mamking a objet f speech synsthesi
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=0.9
    text_speak.pitch=1
    text_speak.volume=1
     text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    
    if(hours>=0  && hours<=12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<=16){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}

window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition

let recognition= new speechRecognition()

recognition.onresult=(event)=>{

    let curr_idx=event.resultIndex
    let transcript=event.results[curr_idx][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand (message){
    btn.style.display="flex"
    voice.style.display="none"
   if(message.includes("hello") || message.includes("hey") ){
    speak("hello sir what i can help you?")
   }

   else if(message.includes("who are you")){
    // speak("i am atul sir randi")
    speak("i am virtual assistant  , created by mr. Atul Sir")
   }
   else if(message.includes("open youtube")){
    speak("opening youtube....")
    window.open("https://www.youtube.com/",)
   }
   else if(message.includes("open google")){
    speak("opening google")
        window.open("https://www.google.com/")
   }
   else if(message.includes("open instagram")){
    speak("opening instagram....")
        window.open("https://www.instagram.com/")
   }
   else if(message.includes("open facebook")){
    speak("opening facebook")
        window.open("https://www.facebook.com/")
   }
  
   else if(message.includes("open calculator")){
      speak("opening calculator")
      window.open("calculator://")
   }
   else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
    
 }
 else if(message.includes("date") || message.includes("day")){
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
    
 }

   else{

    
    message=message.replace("shifra","")
    message=message.replace("shipra","")
    speak(`this is what i found on internet regarding ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
   }


}

