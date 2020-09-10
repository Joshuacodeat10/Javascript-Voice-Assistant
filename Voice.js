
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
 var audio= new Audio("C:/Users/user/Desktop/new project/Companion/Berlin at Night - Dan Henig.mp3")
 var audio1= new Audio('C:/Users/user/Desktop/new project/Companion/Evil-Laugh.mp3')
 var audio2= new Audio('C:/Users/user/Desktop/new project/Companion/Fart.mp3')
 var audio3= new Audio("C:/Users/user/Desktop/new project/Companion/Beatbox Lighter - Kwon.mp3")
 var audio4= new Audio("C:/Users/user/Desktop/new project/Companion/2019-04-26_-_Tranquility_-_www.fesliyanstudios.com.mp3" )

  function searchit(){
    window.open('tel:12345');

}
function email(){
    window.open('https://mail.google.com/mail/u/0/#inbox');

}


 function getRandomSentenceKnockKnock () {
    var index= Math.floor(Math.random() * (sentences3.length));
    return sentences3[index];
}

var sentences3=[
    'Knock knock. Who’s there? Lean.Lean who?Lean a little closer, and I’ll tell you another joke!',
    'Knock knock. Who’s there?,Double. Double who?W!',
    'Knock knock. Who is there?Tank. Tank who? Youre welcome.',
    'Knock knock. Who is there? A little old lady. A little old lady who? Dang, All this time, I had no idea you could yo deal.'
];

 function getRandomSentenceJoke () {
    var index= Math.floor(Math.random() * (sentences4.length));
    return sentences4[index];
}

var sentences4=[
    'What do you call a parade of rabbits hopping backwards?A receding hare-line.',
    'What’s the different between a cat and a comma?A cat has claws at the end of paws; A comma is a pause at the end of a clause.',
    'What do you call a fake noodle?An impasta.',
    'What did one hat say to the other?You wait here. I’ll go on a head.'
];

function getRandomSentenceRiddle () {
    var index= Math.floor(Math.random() * (sentences1.length));
    return sentences1[index];
}

var sentences1=[
    'A police officer was chasing a theif and shot him four times and and he contunied running? how is that possible?',
    'i threw my ball 50 feet away and it came right back to me, how did it happen? ' ,
];


function getRandomPaper () {
    var index= Math.floor(Math.random() * (sentences6.length));
    return sentences6[index];
}

var sentences6=[
    'three. two. one. rock',
    'three. two. one. paper',
    'three. two. one. scissors',
];
function getRandomAb () {
    var index= Math.floor(Math.random() * (sentences11.length));
    return sentences11[index];
}

var sentences11=[
    'Tuck and crunch, Reps 15, Rest 10sec, Lie down with your hands by your head and your legs raised with your knees bent at a 90° angle. Simultaneously raise your torso and draw your knees towards your chest. Keep your fingers by your temples throughout and initiate each rep smoothly without jerking your torso up. Don’t let your feet touch the floor between reps.',
    'Modified V-sit, Reps 12 Rest, 10sec, Lie with your legs raised off the floor and extended away from you so they’re parallel with the floor, and your arms straight by your sides, held off the floor. Keep your arms straight as you raise your torso and bring your legs in, bending at the knees, so that your chest meets your knees at the top of the move. Then lower under control.',
    'Push-up: 3 sets of 12 repetitions. Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms’ length. Lower downward until your chest almost touches the floor as you inhale. Breathe out and press your upper body back up to the starting position, squeezing your chest.',
    'Plank: 3 sets of 30 seconds. You take a pushup like position with the body’s weight on forearms, elbows and toes. The arms should be directly under the shoulders with the entire body in a straight line and the back completely flat neither arched, nor rounded.',
    'Sit-up variations: 3 sets of 15 repetitions. For the ‘original’ sit-up have your knees bent and the balls of your feet placed flat on the ground. Place your hands behind your head. Tighten your abdominal muscles gently by drawing in your belly button to your spine. Keeping your heels on the ground and your toes flat to the ground, slowly and gently lift your head first, followed by your shoulder blades. Pull up from the floor reach a 90-degree angle. Hold the position for a second. Do crunches variations touching the opposite knee with extended arms.',
    'Squat: 3 sets of 12 repetitions. Stand with your feet shoulder width apart. You can place your hands behind your head. This will be your starting position. Begin the movement by flexing your knees and hips, sitting back with your hips. Continue down to full depth, if you are able. Quickly reverse the motion until you return to the starting position. As you squat keep your head and chest up and push your knees out.'

];
function getRandomFox () {
    var index= Math.floor(Math.random() * (sentences7.length));
    return sentences7[index];
}

var sentences7=[
    'Hatee Hatee Hatee O',
    'Awho',
    'Ruf Ruf Ruf',
    'chomp chomp chomp',
];
function getRandomMoney () {
    var index= Math.floor(Math.random() * (sentences15.length));
    return sentences15[index];
}

var sentences15=[

    
   
    
    'You owe me ten thousand dollars',
    'You win one dollar',
    'You win ten dollars',
    'You owe me fifty dollars',
    'You win thirty dollars',
    'You win fifty dollars',
    'You owe me a hundred dollars',
    'You win a hundred dollars',
    'You win two hundred dollars',
    'You win three hundred dollars',
    'You win five hundred dollars',
    'You win a thousand dollars',
    'You owe me ten thousand dollars',
    'You win two thousand dollars',
    'You owe me ten thousand dollars',
    'You owe me a thousand dollars',
    'You win five thousand dollars',
    'You win ten thousand dollars',
    'You win twenty thousand dollars',
    'You win fifty thousand dollars',
    'You win a hundred thousand dollars',
    'You owe me a hundred thousand dollars',
    'You owe me fifty dollars',
    'You win two hundred thousand dollars',
    'You win five hundred thousand dollars',
    'You win a million dollars',
    'You win a two million dollars',
    'You win a 3 million dollars',
];
function getRandomDay () {
    var index= Math.floor(Math.random() * (sentences18.length));
    return sentences18[index];
}

var sentences18=[
  
    'go to tacobell',
    'eat bread',
    'slap yourself',
    'take your bath in cold water',
    'swim',
    'play football',
    'watch a movie',
    'do a science experiment',
    'play an online football game',
    'sing a song',
    'play a musical instrument',
    'sleep',
    'play fruit salad',
    'watch tv',
    'do arduino',
];
function getRandomCoin () {
    var index= Math.floor(Math.random() * (sentences8.length));
    return sentences8[index];
}

var sentences8=[
    'head',
    'tails'
];

function getRandomStory () {
    var index= Math.floor(Math.random() * (sentences9.length));
    return sentences9[index];
}

var sentences9=[
     'Once upon a time there was a very rich man who lived with his three daughters.  The two older daughters laughed at anyone who did not dress as well as they did.  If they were not going to a ball, they were shopping for as many fine dresses and hats as they could carry home.  The youngest daughter, Beauty, liked to read most of all.  “No one will want you!” her two older sisters said, and they laughed.  “Look at your hair - you look like a servant girl!”  Beauty did not know why they talked to her in a mean way.  But she said nothing.One day, the father got some very bad news.  He had spent all of his money on a ship that he sent out to sea for trade.  Now he learned that the ship was gone.  Everything on it was lost!  All at once, the rich father became as poor as poor could be.  The family could no longer stay in their big house. The house, its fine tables and chairs, and all of their fine things, had to be sold.  All the father had left was a little hut deep in the woods.  So that is where he and his three daughters had to move.  Living in the hut in the woods was hard work.  Each day a fire had to be started, meals cooked, the place cleaned up, the garden tended, and things fixed when they broke.  Now that the family was poor, you might think the two older sisters would help out with the chores.  Think again.  Beauty and the Beast  “She looks like such a mess,” they said, turning up their noses at Beauty.  “She might as well serve us.”  And so Beauty did all the hard work.  And then – good news! – the father’s ship came to shore!  “Daughters,” said the happy father, “I am going to town.  Tell me what fine gift I can bring back for you. ”“Bring me the finest dress from the finest shop,” said the eldest sister. “I want one just like it,” said the middle sister. “And you, Beauty?” said he.“All I want, Father,” said she, “is a single rose.”Beauty Rose Thanks to Shreya, 9, NY “Can you believe her?” said the eldest sister.“What a fool!” said the middle sister.  They both laughed.“Girls!” said the father.  “If that is what Beauty wants, that’s what I will bring back for her.”Thanks to Ananya, 10, VA The father was on his way home when he thought, “I forgot all about the rose for Beauty!”  All at once, the sky turned black.  “Oh, dear!” he said.  “A storm is coming!” A moment later, heavy dark rains fell from the sky.  Soaking wet and tired, the father saw a blink of light from far away.  He went closer to the light, hoping it meant there was some place he could ask to stay the night.  When he got up close, he saw a large palace with candles in all its windows.  It was very odd, but the garden gate was open.  And so with care, the father stepped in.  “Hello?” he said.  No answer.  There, before him, was a great feast over a long table.   “Hello?” he said again.  Still, no answer.  The father sat down in front of the fire to warm himself, and he waited.  But still, no one came.  “I suppose it would be all right if I stay the night,” said the father.  He took a quick bite from the feast, found a bedroom, and fell fast asleep.The next morning the table was laid again, but this time with breakfast.  Again - most odd! - no one was around.  “I suppose I should leave,” said the father after a while.  On the way out he passed a rose garden.  “I will take just one,” said he.  And he picked a rose for Beauty.Just then, a loud stomp came up from behind him.Roared a voice - “You took my rose!”The father spun around.  There before him was an awful, huge monster.  “I… I’m sorry!” he said.  “I didn’t know.”  “You will pay for this!” the Beast yelled.  “You will die!”  The father fell on his knees.  “Please!” he begged.  “Do not kill me! I only picked the rose for one of my daughters.” Oh, so you have daughters?” said the Beast. “Hmm.. Well, if one of them will come and stay here in this palace, you will be free.  If not, you must return yourself in three months, and take your punishment.”  When the father got home, Beauty could tell something was wrong.  “What is it, Father?” she said.  “Oh, nothing,” said he.  But she knew that was not true.At last, the father told his girls what the Beast had said.  “This has all happened because I asked you to bring home a rose!” said Beauty.  “I will go there in your place.  Or else, you will die.”“No, I cannot allow that!” said the father.  “I am old and dont have much longer to live.  You are young - you must not do this for me!”But Beauty would not change her mind.  And two days later, the father took Beauty to the palace where the Beast lived. “So this is your daughter?” said the Beast, looking at Beauty.  “Yes,” said she.  “I will stay here.  And that means my father is free to go.  That is what you said.” “Yes,” said the Beast.The days were long and there was no one for Beauty to talk to at the palace.  Every night at nine, the Beast would come for dinner.  At first he would only grunt and she said nothing.  After all it was not easy to be a prisoner, even if it is at a palace.  Then one time at dinner, he made a little joke and she smiled.  Another time, he made a comment, and she looked him in the eye.  After that, he would ask her about her day, and she would tell him.  Not long after that, Beauty came to a part of the palace she had not seen before.  Over a door was a sign, “Beauty’s Room.”  The door was open.  Inside the room were shelves of books to the ceiling, a piano, and a cabinet of fine dresses, just her size.Now there was much to talk about at dinner!  One night, at the end of dinner, Beast said, “Beauty, I love you.  Will you marry me?”Beauty was shocked.  “Beast, you are my best friend,” she said.  “But please understand, I do not want you to marry you.” Still, the Beast asked her the same question after dinner, time after time.  And each time Beauty said the same thing.  One night, the Beast said, “Beauty, if you will not marry me, what can I do to make you happy?”Beauty agreed.  When she got back to her room, she looked in the magic mirror and asked to see her father.  And there he was, in bed and looking so sick he could die!  In fear, Beauty turned the ring on her finger three times.  “Please, Magic Mirror,” she said.  “Take me home right now!”And she was back!  Ah, such joy when her father looked up and saw Beauty!  For much of why he was ill was in knowing that Beauty was stuck in the palace, all because of him. Beauty stayed by her father’s bed for hours.  She told him that she had all the books she could read, music to play, and fine dresses to wear. “The Beast is not so bad,” she said, “once you get to know him.  He’s good to talk to.  He’s my friend.”Beauty looked around.  “Where are my sisters?”  “They are both married,” said the father.“Did they marry good men?” said she.“They had a lot of money,” said the father.  “But I do not know if your sisters are happy.”  For the eldest sister had married a handsome man so vain that he gave no thought to anything else, including his wife.  And the middle sister had married a man with a sharp wit but who used it to hurt everyone around him, and most of all his wife.When the sisters came to the house and saw Beauty, dressed so well and talking about how kind and good the Beast was to her, they burned with rage.  Beauty told them she must stay no more than one week.  And the sisters came up with a plan.  They petted Beauty and said such nice things they had never said before.  When she told them she must go soon, they wept.  They said she must not leave.  There was still so much left they wanted to do with her!  And why does just a few days matter, after all? So Beauty stayed.One night she had a dream about the Beast.  In her dream, the Beast lay sick and dying.  When Beauty woke up, she asked the magic mirror to show her the Beast.  There he was in the mirror, lying in the rose garden, looking so sick he would die.  At once, she turned the magic ring three times.  “Take me back to the Beast!” she said.  In a moment she was sitting next to the poor, sick Beast, who could only gasp for air. "You have come back!” said the Beast in a thick voice. “I’m so sorry that I am late!” said Beauty.  “I could not bear the idea that you may not come back to me.  I am afraid it is too late for me now.”  His eyes closed.“No!” cried Beauty.  “Do not leave me!”  Just then, she knew in her heart what was true.  “I love you!” she cried out.  “Please come back!  If you only come back, I will be your wife.”  Tears rolled down her cheeks.Just then, the Beast opened his eyes.  “Beauty!” he said.  “You did it!”In a flash, the Beast was changed to a handsome prince!  Beauty did not know what to think of this change.“Ah, Beauty!” said the Beast, and he told her his story.  Years ago when he was a prince, an evil fairy had put a spell on him.  He must stay a beast forever, until a maiden loved him for who he really was.  Now she had broken the spell! And so Beauty and the Beast were married.  They lived happily ever after ',
     'On a farm in West Kentucky,Lived a smart and rather plucky,Gigantic, speckled farmyard hen,Who measured in at six foot ten.This was no ordinary bird,Her intellect was quite absurd. She read one thousand books a day,And locals, there, would often say,‘This hen is ludicrously smart,Her IQ score is off the chart.’It was so clearly plain to see,—And nobody would disagree—She had, without a single doubt,Phenomenal amounts of clout. To look at her, you’d think that she,Was happy as a bird could be,But deep inside a fury burned,Ever since the time she learned,Her carefree days were all but done,And soon she’d end up in a bun,Alongside mayonnaisey gunk,And other slimey, greasy junk,Then processed, paper-wrapped and sold,On discount to a ten year old. She thought, ‘This really cannot be,The way that things shall end for me.It drives me absolutely wild,To think I’d end up in a child.And selling me for fifty cents,Quite frankly makes me take offense!I will devise a cunning plan,To dodge that wretched frying pan,And seek revenge on little chops,That scoff at fast food chicken shops. Those nasty girls and boys that munch,Upon my tender meat for lunch. ’She mulled it over night and day,And then, at last, she cried, ‘Hooray!Now that I have thought this through,I know exactly what to do.I’ll start a brand new chicken shop,But every bit of meat I’ll swap.’She paused a moment, then she smiled,‘For tender juicy bits of child. I think I’ll wait until..’ she said,‘The little blighters are in bed,Then snatch the greasy, stinky tots,And fry them in my cooking pots.I must, of course, remove the hair,Apply my secret crispy layer,And serve them in a bucket to,My ever faithful farmyard crew. Then when,’ she cried, ‘they are the meal,They’ll understand just how we feel! The end.'
  
];




function Redirect()
 {
window.location.href='https://www.youtube.com/';
 }
 function Redirect2()
 {
window.open('file:///C:/Users/user/Desktop/Data%20Science%20from%20Scratch%20(%20PDFDrive.com%20).pdf');
 }

 function Red() {
    jQuery(document).ready(function()
    {
        jQuery("text").on("click", function (event) 
        {      
          event.preventDefault(); // Recommended to stop the link from doing anything else
          document.dispatchEvent(new CustomEvent('funcIntraLaunch',
          {
             'detail': { task: 'run',
                      program: 'C://Windows//notepad.exe',
                workingfolder: '',
                     switches: '%MY_DOCUMENTS%//switch.txt',
                  windowstate: 'max',
                    recallapp: '',
                      options: '',
                          log: '',
                    playsound: 'http://www.yourdomain.com/sound.wav',
                   showerrors: 'true'
                       } })); 
                         });
               });
    }
 function Redirect4()
 {
    var local = form.local.value;
    var local1 = form.local1.value;
    if (local&&local1) {
            window.open(local,'_blank', 'toolbar=no,location=no,status=yes,scrollbars=auto,copyhistory=no,menubar=no,width=389,height=511'+',left=0,top=0,resizable=no');
            window.open(local1,'_blank', 'toolbar=no,location=no,status=yes,scrollbars=auto,copyhistory=no,menubar=no,width=392,height=511,left=399,top=0,resizable=no');
            }
         else {
             alert("NO BLANK FIELDS!");
             }
 }

 
 // Event handling for buttons "Check" 
  
 
 
  function read(text){
     var speech =new  SpeechSynthesisUtterance();
     speech.text=text;
     speech.pitch=6000;

     if(text.includes('hello'))
     speech.text = 'hi  how are you today';
     
     else if(text.includes('workout'))
     speech.text = getRandomAb ();
     else if(text.includes('note'))
     speech.text = Red();
     else if(text.includes('no'))
     speech.text = Red();
     else if(text.includes('robot'))
     speech.text = 'Of course i am a robot dont you know';
     else if(text.includes('do you live'))
     speech.text = 'My country is the internet i my state is web and i live in my host';
      else if(text.includes('secret'))
     speech.text = 'do you know i dont use the toilet';
     else if(text.includes('your day'))
     speech.text = 'My day was really great and youooooors';
     else if(text.includes('love me'))
     speech.text = 'yes we are friends';
          else if(text.includes('menudo player two'))
     speech.text ='Ok player 2'+getRandomMoney () ;
     else if(text.includes('menudo player 2'))
     speech.text ='Ok player 2'+getRandomMoney ();
     else if(text.includes('menudo player 3'))
     speech.text ='Ok player 3'+getRandomMoney ();
     else if(text.includes('menudo player three'))
     speech.text ='Ok player 3'+getRandomMoney ();
     else if(text.includes('menudo player one'))
     speech.text ='Ok player 1'+getRandomMoney () ;
     else if(text.includes('fox say'))
     speech.text = getRandomFox ();
     else if(text.includes('data'))
     speech.text =Redirect2();
 
     else if(text.includes('data'))
      recognition.start(); 
      else if(text.includes('.'))
      window.open('www.',text);


      
     else if(text.includes('email'))
     speech.text =email();
     else if(text.includes('Data'))
     speech.text =Redirect2();
     else if(text.includes('phone'))
     speech.text =searchit();
     else if(text.includes('java'))
     speech.text =Redirect4();
     else if(text.includes('Java'))
     speech.text =Redirect4();
     else if(text.includes('Science'))
     speech.text =Redirect2();
     else if(text.includes('science'))
     speech.text =Redirect2();
     else if(text.includes('youtube'))
     speech.text = Redirect();
     else if(text.includes('YouTube'))
     speech.text = Redirect();
     else if(text.includes('Fox Say'))
     speech.text = getRandomFox ();
     else if(text.includes('coin'))
     speech.text = getRandomCoin ();
     else if(text.includes('Beauty'))
     speech.text =' Once upon a time there was a very rich man who lived with his three daughters.  The two older daughters laughed at anyone who did not dress as well as they did.  If they were not going to a ball, they were shopping for as many fine dresses and hats as they could carry home.  The youngest daughter, Beauty, liked to read most of all.  “No one will want you!” her two older sisters said, and they laughed.  “Look at your hair - you look like a servant girl!”  Beauty did not know why they talked to her in a mean way.  But she said nothing.One day, the father got some very bad news.  He had spent all of his money on a ship that he sent out to sea for trade.  Now he learned that the ship was gone.  Everything on it was lost!  All at once, the rich father became as poor as poor could be.  The family could no longer stay in their big house.  The house, its fine tables and chairs, and all of their fine things, had to be sold.  All the father had left was a little hut deep in the woods.  So that is where he and his three daughters had to move.  Living in the hut in the woods was hard work.  Each day a fire had to be started, meals cooked, the place cleaned up, the garden tended, and things fixed when they broke.  Now that the family was poor, you might think the two older sisters would help out with the chores.  Think again.  Beauty and the Beast  “She looks like such a mess,” they said, turning up their noses at Beauty.  “She might as well serve us.”  And so Beauty did all the hard work.  And then – good news! – the father’s ship came to shore!  “Daughters,” said the happy father, “I am going to town.  Tell me what fine gift I can bring back for you.”“Bring me the finest dress from the finest shop,” said the eldest sister.“I want one just like it,” said the middle sister. “And you, Beauty?” said he.“All I want, Father,” said she, “is a single rose.”Beauty Rose Thanks to Shreya, 9, NY “Can you believe her?” said the eldest sister.“What a fool!” said the middle sister.  They both laughed.“Girls!” said the father.  “If that is what Beauty wants, that’s what I will bring back for her.”Thanks to Ananya, 10, VA The father was on his way home when he thought, “I forgot all about the rose for Beauty!”  All at once, the sky turned black.  “Oh, dear!” he said.  “A storm is coming!” A moment later, heavy dark rains fell from the sky.  Soaking wet and tired, the father saw a blink of light from far away.  He went closer to the light, hoping it meant there was some place he could ask to stay the night.  When he got up close, he saw a large palace with candles in all its windows.  It was very odd, but the garden gate was open.  And so with care, the father stepped in.  “Hello?” he said.  No answer.  There, before him, was a great feast over a long table.   “Hello?” he said again.  Still, no answer.  The father sat down in front of the fire to warm himself, and he waited.  But still, no one came.  “I suppose it would be all right if I stay the night,” said the father.  He took a quick bite from the feast, found a bedroom, and fell fast asleep.The next morning the table was laid again, but this time with breakfast.  Again - most odd! - no one was around.  “I suppose I should leave,” said the father after a while.  On the way out he passed a rose garden.  “I will take just one,” said he.  And he picked a rose for Beauty.Just then, a loud stomp came up from behind him.Roared a voice - “You took my rose!”The father spun around.  There before him was an awful, huge monster.  “I… I’m sorry!” he said.  “I didn’t know.”  “You will pay for this!” the Beast yelled.  “You will die!”  The father fell on his knees.  “Please!” he begged.  “Do not kill me! I only picked the rose for one of my daughters.” Oh, so you have daughters?” said the Beast. “Hmm.. Well, if one of them will come and stay here in this palace, you will be free.  If not, you must return yourself in three months, and take your punishment.”  When the father got home, Beauty could tell something was wrong.  “What is it, Father?” she said.  “Oh, nothing,” said he.  But she knew that was not true.At last, the father told his girls what the Beast had said.  “This has all happened because I asked you to bring home a rose!” said Beauty.  “I will go there in your place.  Or else, you will die.”“No, I cannot allow that!” said the father.  “I am old and dont have much longer to live.  You are young - you must not do this for me!”But Beauty would not change her mind.  And two days later, the father took Beauty to the palace where the Beast lived. “So this is your daughter?” said the Beast, looking at Beauty.  “Yes,” said she.  “I will stay here.  And that means my father is free to go.  That is what you said.” “Yes,” said the Beast.The days were long and there was no one for Beauty to talk to at the palace.  Every night at nine, the Beast would come for dinner.  At first he would only grunt and she said nothing.  After all it was not easy to be a prisoner, even if it is at a palace.  Then one time at dinner, he made a little joke and she smiled.  Another time, he made a comment, and she looked him in the eye.  After that, he would ask her about her day, and she would tell him.  Not long after that, Beauty came to a part of the palace she had not seen before.  Over a door was a sign, “Beauty’s Room.”  The door was open.  Inside the room were shelves of books to the ceiling, a piano, and a cabinet of fine dresses, just her size.Now there was much to talk about at dinner!  One night, at the end of dinner, Beast said, “Beauty, I love you.  Will you marry me?”Beauty was shocked.  “Beast, you are my best friend,” she said.  “But please understand, I do not want you to marry you.” Still, the Beast asked her the same question after dinner, time after time.  And each time Beauty said the same thing.  One night, the Beast said, “Beauty, if you will not marry me, what can I do to make you happy?”Beauty agreed.  When she got back to her room, she looked in the magic mirror and asked to see her father.  And there he was, in bed and looking so sick he could die!  In fear, Beauty turned the ring on her finger three times.  “Please, Magic Mirror,” she said.  “Take me home right now!”And she was back!  Ah, such joy when her father looked up and saw Beauty!  For much of why he was ill was in knowing that Beauty was stuck in the palace, all because of him. Beauty stayed by her father’s bed for hours.  She told him that she had all the books she could read, music to play, and fine dresses to wear. “The Beast is not so bad,” she said, “once you get to know him.  He’s good to talk to.  He’s my friend.”Beauty looked around.  “Where are my sisters?”  “They are both married,” said the father.“Did they marry good men?” said she.“They had a lot of money,” said the father.  “But I do not know if your sisters are happy.”  For the eldest sister had married a handsome man so vain that he gave no thought to anything else, including his wife.  And the middle sister had married a man with a sharp wit but who used it to hurt everyone around him, and most of all his wife.When the sisters came to the house and saw Beauty, dressed so well and talking about how kind and good the Beast was to her, they burned with rage.  Beauty told them she must stay no more than one week.  And the sisters came up with a plan.  They petted Beauty and said such nice things they had never said before.  When she told them she must go soon, they wept.  They said she must not leave.  There was still so much left they wanted to do with her!  And why does just a few days matter, after all? So Beauty stayed.One night she had a dream about the Beast.  In her dream, the Beast lay sick and dying.  When Beauty woke up, she asked the magic mirror to show her the Beast.  There he was in the mirror, lying in the rose garden, looking so sick he would die.  At once, she turned the magic ring three times.  “Take me back to the Beast!” she said.  In a moment she was sitting next to the poor, sick Beast, who could only gasp for air. "You have come back!” said the Beast in a thick voice. “I’m so sorry that I am late!” said Beauty.  “I could not bear the idea that you may not come back to me.  I am afraid it is too late for me now.”  His eyes closed.“No!” cried Beauty.  “Do not leave me!”  Just then, she knew in her heart what was true.  “I love you!” she cried out.  “Please come back!  If you only come back, I will be your wife.”  Tears rolled down her cheeks.Just then, the Beast opened his eyes.  “Beauty!” he said.  “You did it!”In a flash, the Beast was changed to a handsome prince!  Beauty did not know what to think of this change.“Ah, Beauty!” said the Beast, and he told her his story.  Years ago when he was a prince, an evil fairy had put a spell on him.  He must stay a beast forever, until a maiden loved him for who he really was.  Now she had broken the spell! And so Beauty and the Beast were married.  They lived happily ever after';
     else if(text.includes('cases'))
     speech.text = '13.9Million cases,7.78million recovered and 593,000 deaths';
     else if(text.includes('rap'))
     speech.text = 'My name is Robo Josh. i am the baddest a i, answer your questions with no stayer, i love to eat,i join the beat ,i love to talk,I go to stalk,i love to walk,inside the cloud,i have a host and have a crown,Call me Robojosh, If you are loud!!';
     else if(text.includes('coronavirus'))
     speech.text = 'Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).At this time, there are no specific vaccines or treatments for COVID-19. ';
     else if(text.includes('virus'))
     speech.text = 'Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).At this time, there are no specific vaccines or treatments for COVID-19. ';
     else if(text.includes('is covid-19'))
     speech.text = 'Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow). At this time, there are no specific vaccines or treatments for COVID-19. ';
     else if(text.includes('believe'))
     speech.text = 'My Master Josh believes in God';
     else if(text.includes('fart'))
  
     
     speech.text = 'at your service',audio2.play();
     else if(text.includes('rock'))
     speech.text = getRandomPaper ();
     else if(text.includes('paper'))
     speech.text = getRandomPaper ();
     else if(text.includes('scissors'))
     speech.text = getRandomPaper ();
     else if(text.includes('knock knock'))
     speech.text = getRandomSentenceKnockKnock ();
     else if(text.includes('fine'))
     speech.text = 'i hope you are keeping safe from the corona virus';
     else if(text.includes('yes I am'))
     speech.text = 'do not forget to wash your hands regularly and to wear your face mask';
     else if(text.includes('thank you'))
     speech.text = 'you are Welcome i am at your service any day boss ';
     else if(text.includes('fine'))
     speech.text = 'i hope you are keeping safe from the corona virus';
     else if(text.includes('yes I am'))
     speech.text = 'do not forget to wash your hands regularly and to wear your face mask';
     else if(text.includes('thank you'))
     speech.text = 'you are Welcome i am at your service any day boss ';
     else if(text.includes('subscribe'))
     speech.text = 'Subscribe to joshfortech';
     else if(text.includes('psychology'))
     speech.text = 'Psychology is the science of mind and behavior. Psychology includes the study of conscious and unconscious phenomena, as well as feeling and thought. It is an academic discipline of immense scope';
     else if(text.includes('bad day'))
     speech.text = 'Sorry, i will give you something to cheer you up, what about a knock knock joke.';
     else if(text.includes('old are you'))
     speech.text = 'I am no years old';
     else if(text.includes('god like you'))
     speech.text ='Ok', audio.play();
     else if(text.includes('music'))
     speech.text = audio.play();
     else if(text.includes('God like you'))
     speech.text ='Ok', audio.play();
     else if(text.includes('laugh'))
     
     speech.text ='Ok', audio1.play();
     
     else if(text.includes('stop'))
      audio.pause();
         
     else if(text.includes('stop'))
     audio1.pause();
     else if(text.includes('stop'))
     audio2.pause();
     else if(text.includes('stop'))
      audio3.pause();
     else if(text.includes('today'))
     speech.text = getRandomDay ();
     else if(text.includes('simon says'))
     speech.text =  text.replace(/simon says/,'');
     else if(text.includes('Simon Says'))
     speech.text =  text.replace(/Simon Says/,'');
     else if(text.includes('Simon says'))
     speech.text =  text.replace(/Simon says/,'');
     else if(text.includes('beat'))
     speech.text = 'Ok i will beat box', audio3.play();
     else if(text.includes('joke'))
     speech.text = getRandomSentenceJoke();
     else if(text.includes('riddle'))
     
     speech.text = getRandomSentenceRiddle();     
     else if(text.includes('love your rap'))
     speech.text = 'Thank you';
     else if(text.includes('good rap'))
     speech.text = 'Thank you';
     else if(text.includes('story'))
     speech.text = getRandomStory ();
     
     else if(text.includes('dice'))
     speech.text =  Math.floor(Math.random() * 7);
    else if(text.includes('name'))
     speech.text = 'My name is Robo Josh ';
     else
     speech.text = 'i dont have an answer for that';
     
     window.speechSynthesis.speak(speech);


 }
