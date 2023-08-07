class Player
{
  constructor()
  {
    this.x = screen_width/2 - player_size/2;;
    this.y = screen_height/2 - player_size/2;
    this.size = player_size;
    this.speed = 4;
  }
  move()
  {
    if (keyIsDown('W'.charCodeAt(0)))
      this.y -= this.speed;
    if (keyIsDown('A'.charCodeAt(0)))
      this.x -= this.speed;
    if (keyIsDown('S'.charCodeAt(0)))
      this.y += this.speed;
    if (keyIsDown('D'.charCodeAt(0)))
      this.x += this.speed;
  }
  display()
  {
    fill('#000000');
    rect(this.x, this.y, this.size);
  }
}
