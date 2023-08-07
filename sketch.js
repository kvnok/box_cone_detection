//send out lines which will collide with the walls
//have collisions color the walls
//have a fov value to be able to change to increase range of the cone

let screen_width = 960;
let screen_height = 960;
let box_size = 64;
let player_size = 32;
let amount_of_blocks = screen_width/box_size;
let dude;

function setup() {
  createCanvas(screen_width, screen_height);
  dude = new Player();
}

function draw()
{
  background('#FFFFFF');
  
  fill('#FFFFFF');
  for (let y = 0; y < amount_of_blocks; y++)
    for (let x = 0; x < amount_of_blocks; x++)
      rect(x * box_size, y * box_size, box_size);
  dude.display();
  dude.move();
}
