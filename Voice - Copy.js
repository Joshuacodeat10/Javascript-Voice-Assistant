const btn = document.getElementById('btn');
const result = document.getElementById('result');

const SpeechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
    console.log('You can speak now');
}
 recognition.onresult = function(event){
     var text = event.results[0][0].transcript;
     console.log(text); 
     document.getElementById('result').innerHTML = text; 
     read(text);
 }     
 function getRandomSentenceMath () {
    var index= Math.floor(Math.random() * (sentences3.length));
    return sentences3[index];
}

var sentences3=[
    'two plus two',
    'five plus seven',
    'two plus six',
    'nine plus seven',
    'five plus seven',
    'eleven plus two',
    'twelve plus nine',
    'ten plus five',
    'eleven plus six',
    'ten plus four',
   ];

 function read(text){
     var speech =new  SpeechSynthesisUtterance();
     speech.text=text;
     speech.pitch=6000;

     if(text.includes('hello'))
     speech.text = getRandomSentenceMath ();
     else if(text.includes('mecury'))
     speech.text = 'Correct next question,Ganymede is a moon of which planet';
   
     else if(text.includes('dice'))
     speech.text =  Math.floor(Math.random() * 7);
       
     else if(text.includes('4'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('12'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('8'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     
     else if(text.includes('7'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('16'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('14'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('15'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('13'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('18'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('21'))
     speech.text = 'Correct next question ',getRandomSentenceMath ();
     else if(text.includes('name'))
     speech.text = 'My name is Robo Josh ';

     else
     speech.text = 'Wrong answer';
     window.speechSynthesis.speak(speech);
 }
