window.onload = runBackground;

x = 0;
y = 0;

SQUARE_AMOUNT = 10;

square_list = []

alert(square_list);

function changeSquarePos(square,ctx){
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(square.x, square.y, 80, 80);
}

function update(ctx){
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    for (let i=0; i<SQUARE_AMOUNT;i++){
        square_list.push({"x":((ctx.canvas.width)/SQUARE_AMOUNT) * i, "y":0})
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear screen

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, window.innerWidth, canvas.height);


    square_list.forEach((element) => 
        changeSquarePos(element, ctx)
    );

}

function runBackground(){
    canvas = document.getElementById('background');
    ctx = canvas.getContext('2d');
    

    setInterval(function(){
        update(ctx)
    }, 10);

}