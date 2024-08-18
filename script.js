let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSletct = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    // voices.forEach((voice, i) => (voiceSletct.options[i] = new option(voice.name, i)));
        voices.forEach((voice, i) => (voiceSletct.options[i] = new option(voice.name, i)))
    };



document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});