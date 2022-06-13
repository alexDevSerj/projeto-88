
// Crie uma variável canvas
var canvas = new fabric.Canvas('mycanvas')

//Defina as posições iniciais da bola e do buraco.
bally=0;
ballx=0;
holey=400;
holex=800;


blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		holeObj = Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top:holey,
			left:holex
		});
		canvas.add(holeObj);
	})
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ballObj = Img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);
		ballObj.set({
			top:bally,
			left:ballx
		});
		canvas.add(ballObj);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if((ballx==holex)&&(bally==holey)){
		canvas.remove(ballObj);

		document.getElementById("hd3").innerHTML="você atingiu o objetivo!!!";
		document.getElementById("mycanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
		if(bally >=0 ){
			bally = bally - blockImageHeight;
			console.log("altura da imagem do bloco - "+ blockImageHeight);
			console.log("quando a tecla direcional baicho é prossionada, x = " + ballx + ", y = "+bally);
			newImage();
			canvas.remove(ballObj);
	}
}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
		 if(bally <=450 ){
			 bally = bally + blockImageHeight;
			 console.log("altura da imagem do bloco - "+ blockImageHeight);
			 console.log("quando a tecla direcional baicho é prossionada, x = " + ballx + ", y = "+bally);
			 newImage();
			 canvas.remove(ballObj);
		 }
	}

	function left()
	{
			// Escreva o código para mover a bola para a esquerda.
			if(ballx >= 7){
				ballx = ballx - blockImageHeight;
				console.log("altura da imagem do bloco - "+ blockImageHeight);
				console.log("quando a tecla direcional baicho é prossionada, x = " + ballx + ", y = "+bally);
				newImage();
				canvas.remove(ballObj);
		}
	}

	function right()
	{
	
			// Escreva o código para mover a bola para a direita.
			if(ballx <= 1050){
				ballx = ballx + blockImageHeight;
				console.log("altura da imagem do bloco - "+ blockImageHeight);
				console.log("quando a tecla direcional baicho é prossionada, x = " + ballx + ", y = "+bally);
				newImage();
				canvas.remove(ballObj);
				
		}
	}
