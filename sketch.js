let begin;
let grow;
let connect;
let end;

let state = 0;
let nextState = 0;
let counter = 0;
let typed = "";
let story = "";
let hasDiscovered = false;

function preload() {
  begin = loadImage('assets/0-BEGIN.jpeg');
  grow = loadImage('assets/1-GROW.jpg');
  connect = loadImage('assets/2-CONNECT.jpg');
  end = loadImage('assets/3-END.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Inconsolata");
  textSize(22);
  fill(0, 255, 68);
}

function draw() {
  background(0);

  text("You have downloaded an AI", 0, 0, 200, 200);
  text("COMMANDS = begin, growth, connection, discovery", 0, 150, 200, 200);

  if (state == nextState) {
    if (state == 0) {
      image(begin, 200, 0, 600, 600);
    } else if (state == 1) {
      image(grow, 200, 0, 600, 600);
    } else if (state == 2) {
      image(connect, 200, 0, 600, 600);
    } else if (state == 3) {
      image(end, 200, 0, 600, 600);
    }
  } else {
    counter++;
    if (counter == 3) {
      state = nextState;
      counter = 0;
    }

    let a = map(counter, 0, 30, 0, 255);
    tint(255, a);
    if (nextState == 0) {
      image(begin, 200, 0);
    } else if (nextState == 1) {
      image(grow, 200, 0);
    } else if (nextState == 2) {
      image(connect, 200, 0);
    } else if (nextState == 3) {
      image(end, 200, 0);
    }

    tint(255, 255 - a);
    if (state == 0) {
      image(begin, 200, 0);
    } else if (state == 1) {
      image(grow, 200, 0);
    } else if (state == 2) {
      image(connect, 200, 0);
    } else if (state == 3) {
      image(end, 200, 0);
    }
  }

  text(typed, 0, 650, width, 30);

  text(story, 0, 600, width, 30);
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    typed = '';
  }
}

function keyTyped() {
  if (key == '0') {
    nextState = 0;
  } else if (key == '1') {
    nextState = 1;
  } else if (key == '2') {
    nextState = 2;
  } else if (key == '3') {
    nextState = 3;

  } else if (keyCode == RETURN) {

    if (typed == 'growth') {
      typed = '';

      if (hasDiscovered) {
        nextState = 3;
        story = "AI discovers the atrocities of humans. AI will now self destruct."
      } else {
        nextState = 1;
        story = "AI is growing and gaining knowledge."
      }

    } else if (typed == 'connection') {
      nextState = 2;
      typed = '';
      story = "AI connects with other AI's and humans through the internet."

    } else if (typed == 'begin') {
      nextState = 0;
      typed = '';
      story = "You may now influence your AI's decisions. What should it do?"

    } else if (typed == 'discovery' && state == 2) {
      hasDiscovered = true;
      typed = '';
    }

  } else {
    typed += key;
  }
}
