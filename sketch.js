var startButton;

function setup(){
  createCanvas(1435,785);
  background("Blue");

  textSize(20);
  text("Enter your name here: ",675,230);

  login = createInput('');
  login.style('font-style','bold');
  login.position(695,300,50,50);

  textSize(50);
  text("This is just a Game Title!",500,100);

  startButton = createButton("Start");
  startButton.style('font-size','26px');
  startButton.style('background-color', 'Orange');
  startButton.position(730,450,50,50);
  startButton.mousePressed(()=>{
    name1 = login.value();
    if(name1 === ""){
      push()
      textSize(20);
      fill("red")
      text ("Name can't be blank",675,400);
      pop()
      return false;   
    }
    else {
      startButton.mouseClicked(greeting);
      
    }
  });
}
function greeting(){ 
background("Blue");
startButton.hide();
login.hide();
greeting = createElement('h1');
greeting.html("Hello " + name1 + "!");
greeting.position(675,230);
  textSize(50);
text("This is just a Game Title!",500,100);
quizButton = createButton("Start the Quiz")
quizButton.style('font-size','30px');
quizButton.style('background-color', 'Red');
quizButton.style('font-weight', 'Bold');
quizButton.position(645,450,50,50);
quizButton.mouseClicked(Question1);
}

function Question1(){
  background("Purple");
  quizButton.hide();
  startButton.hide();
  login.hide();
  greeting.hide();
  Quest1 = createElement('h1');
  Quest1.html(" Under their white fur, what color is a polar bear's skin?");
  Quest1.style('background-color', 'white');
  Quest1.style('color', 'black');
  Quest1.position(300,100,100,20);
  
  q1opt1 = createButton("A: Black")
  q1opt1.style('font-size','26px');
  q1opt1.style('background-color', 'Black');
  q1opt1.style('color', 'Red');
  q1opt1.position(645,200,50,50);
  
  q1opt2 = createButton("B: Brown")
  q1opt2.style('font-size','26px');
  q1opt2.style('background-color', 'Purple');
  q1opt2.style('color', 'Black');
  q1opt2.position(645,300,50,50);

  q1opt3 = createButton("C: White")
  q1opt3.style('font-size','26px');
  q1opt3.style('background-color', 'White');
  q1opt3.style('color', 'Blue');
  q1opt3.position(645,400,50,50);

  q1opt4 = createButton("D: Red")
  q1opt4.style('font-size','26px');
  q1opt4.style('background-color', 'Red');
  q1opt4.style('color', 'Yellow');
  q1opt4.position(645,500,50,50);

  nextButton1 = createButton("Next Question")
  nextButton1.style('font-size','30px');
  nextButton1.style('background-color', 'Pink');
  nextButton1.style('color', 'Black');
  nextButton1.style('font-weight', 'Bold');
  nextButton1.position(1000,600,50,50);
  nextButton1.mouseClicked(Question2);
}

function Question2(){
  background("Yellow");
  quizButton.hide();
  startButton.hide();
  nextButton1.hide();
  login.hide();
  greeting.hide();
  Quest1.hide();
  q1opt1.hide();
  q1opt2.hide();
  q1opt3.hide();
  q1opt4.hide();
  
  Quest2 = createElement('h1');
  Quest2.html("How many compartments are in a cow's stomach?");
  Quest2.style('background-color', 'white');
  Quest2.style('color', 'black');
  Quest2.position(350,100,100,20);
  
  q2opt1 = createButton("A: 5")
  q2opt1.style('font-size','26px');
  q2opt1.style('background-color', 'Black');
  q2opt1.style('color', 'Red');
  q2opt1.position(645,200,50,50);
  
  q2opt2 = createButton("B: 2")
  q2opt2.style('font-size','26px');
  q2opt2.style('background-color', 'Purple');
  q2opt2.style('color', 'Black');
  q2opt2.position(645,300,50,50);

  q2opt3 = createButton("C: 3")
  q2opt3.style('font-size','26px');
  q2opt3.style('background-color', 'White');
  q2opt3.style('color', 'Blue');
  q2opt3.position(645,400,50,50);

  q2opt4 = createButton("D: 4")
  q2opt4.style('font-size','26px');
  q2opt4.style('background-color', 'Red');
  q2opt4.style('color', 'Yellow');
  q2opt4.position(645,500,50,50);

  nextButton2 = createButton("Next Question")
  nextButton2.style('font-size','30px');
  nextButton2.style('background-color', 'Pink');
  nextButton2.style('color', 'Black');
  nextButton2.style('font-weight', 'Bold');
  nextButton2.position(1000,600,50,50);
  nextButton2.mouseClicked(Question3);
}

function Question3(){
  background("Orange");
  quizButton.hide();
  startButton.hide();
  nextButton2.hide();
  login.hide();
  greeting.hide();
  Quest2.hide();
  q2opt1.hide();
  q2opt2.hide();
  q2opt3.hide();
  q2opt4.hide();

  Quest3 = createElement('h1');
  Quest3.html(" How long does it take a sloth to digest a meal?");
  Quest3.style('background-color', 'white');
  Quest3.style('color', 'black');
  Quest3.position(370,100,100,20);
  
  q3opt1 = createButton("A: 1 week")
  q3opt1.style('font-size','26px');
  q3opt1.style('background-color', 'Black');
  q3opt1.style('color', 'Red');
  q3opt1.position(645,200,50,50);
  
  q3opt2 = createButton("B: 3 weeks")
  q3opt2.style('font-size','26px');
  q3opt2.style('background-color', 'Purple');
  q3opt2.style('color', 'Black');
  q3opt2.position(645,300,50,50);

  q3opt3 = createButton("C: 2 weeks")
  q3opt3.style('font-size','26px');
  q3opt3.style('background-color', 'White');
  q3opt3.style('color', 'Blue');
  q3opt3.position(645,400,50,50);

  q3opt4 = createButton("D: 5 weeks")
  q3opt4.style('font-size','26px');
  q3opt4.style('background-color', 'Red');
  q3opt4.style('color', 'Yellow');
  q3opt4.position(645,500,50,50);

  nextButton3 = createButton("Next Question")
  nextButton3.style('font-size','30px');
  nextButton3.style('background-color', 'Pink');
  nextButton3.style('color', 'Black');
  nextButton3.style('font-weight', 'Bold');
  nextButton3.position(1000,600,50,50);
  nextButton3.mouseClicked(Question4);
}

function Question4(){
  background("Red");
  quizButton.hide();
  startButton.hide();
  nextButton3.hide();
  login.hide();
  greeting.hide();
  Quest3.hide();
  q3opt1.hide();
  q3opt2.hide();
  q3opt3.hide();
  q3opt4.hide();
  Quest4 = createElement('h1');
  Quest4.html(" What is the name of the fastest land animal?");
  Quest4.style('background-color', 'white');
  Quest4.style('color', 'black');
  Quest4.position(400,100,100,20);
  
  q4opt1 = createButton("A: Artic Fox")
  q4opt1.style('font-size','26px');
  q4opt1.style('background-color', 'Black');
  q4opt1.style('color', 'Red');
  q4opt1.position(645,200,50,50);
  
  q4opt2 = createButton("B: Pronghorn Antelope ")
  q4opt2.style('font-size','26px');
  q4opt2.style('background-color', 'Purple');
  q4opt2.style('color', 'Black');
  q4opt2.position(645,300,50,50);

  q4opt3 = createButton("C: Cheetah")
  q4opt3.style('font-size','26px');
  q4opt3.style('background-color', 'White');
  q4opt3.style('color', 'Blue');
  q4opt3.position(645,400,50,50);

  q4opt4 = createButton("D: Panther")
  q4opt4.style('font-size','26px');
  q4opt4.style('background-color', 'Red');
  q4opt4.style('color', 'Yellow');
  q4opt4.position(645,500,50,50);

  nextButton4 = createButton("Next Question")
  nextButton4.style('font-size','30px');
  nextButton4.style('background-color', 'Pink');
  nextButton4.style('color', 'Black');
  nextButton4.style('font-weight', 'Bold');
  nextButton4.position(1000,600,50,50);
  nextButton4.mouseClicked(endResults);
}

function endResults() {
  background("Green");
  quizButton.hide();
  startButton.hide();
  nextButton4.hide();
  login.hide();
  greeting.hide();
  Quest4.hide();
  q4opt1.hide();
  q4opt2.hide();
  q4opt3.hide();
  q4opt4.hide();
  textSize(30);
  text("And you're FINAL results are...",500,100);
  textSize(30);
  text("Congrats!",600,400);
  endGame = createButton ("End Quiz")
  endGame.style('font-size','30px');
  endGame.style('background-color', 'Red');
  endGame.style('color', 'Black');
  endGame.style('font-weight','Bold');
  endGame.position(1000,600,50,50);
  
}

