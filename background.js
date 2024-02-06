window.onload = runBackground;

x = 0;
y = 0;

SQUARE_AMOUNT = 100;
SPEED = 10
square_size=80

square_list = []

function drawSquares(square,ctx){
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(square.x, square.y, square_size, square_size);
}

function update(ctx){
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear screen

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, window.innerWidth, canvas.height);

    square_size = (ctx.canvas.width/SQUARE_AMOUNT)

    square_list = [] // reset list
    for (let i=0; i<SQUARE_AMOUNT;i++){
        square_list.push({"x":((ctx.canvas.width)/SQUARE_AMOUNT) * i, "y":0})
    }

    square_list.forEach((element) => 
        drawSquares(element, ctx)
    );

}

function runBackground(){
    canvas = document.getElementById('background');
    ctx = canvas.getContext('2d');
    

    setInterval(function(){
        update(ctx)
    }, SPEED); // update screen

}