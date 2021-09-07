class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");
    this.input2= createInput("").attribute("placeholder", "Enter Correct Option No..");
    this.button = createButton('Submit');
    this.play = createButton('Click to read question')
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2");
  }
  
    
   
  
  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("🎮The Gamers Quiz🎮");
    this.title.position(420, 0);
    
    
    this.question.html("Question:- How much did Rockstar Games cost to develop GTA V? " );
    
    

    this.question.position(300, 55);
    this.option1.html("1: 250  (million USD)" );
    this.option1.position(500, 100);
    this.option2.html("2: 320+ (million USD)" );
    this.option2.position(520, 130);
    this.option3.html("3: 265 (million USD)" );
    this.option3.position(540, 160);
    this.option4.html("4: 316  (million USD)" );
    this.option4.position(570, 190);

    this.input1.position(396, 299);
    this.input2.position(690, 299);
    this.button.position(550, 368);
    this.play.position(50,50);
    this.button.class("customButton");
    this.input2.class("customButton2");
    this.input1.class("customButton2");
    this.title.class("title")
    this.question.class("text");
    this.option1.class("text2")
    this.option2.class("text2")
    this.option3.class("text2")
    this.option4.class("text2")
    this.play.class("customButton")
this.button.mousePressed(()=>{
      
       this.message.html("😀Thank You, Your Answer Has Been Submitted");
      this.message.position(250, 400);
     this.play.hide();
      this.message.class("message");
     //this.input2.hide();
     //this.input1.position(550, 299);
     this.input1.position(550, 368);
     this.input2.position(550, 368);
    });

    this.play.mousePressed(()=>{
      sound.play();
    });
  }
}


