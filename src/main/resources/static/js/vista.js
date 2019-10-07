class Vista{
	constructor(canvas){
		this.buffer = document.createElement("canvas").getContext("2d");
		this.context = canvas.getContext("2d");
			
			
			this.dibujarJugador = function(x,y,ancho,alto,color){
				this.buffer.fillStyle = color;
				this.buffer.fillRect(Math.floor(x),Math.floor(y),ancho,alto);
			};
			this.llenarCanvas = function(color){
				this.buffer.fillStyle = color;
				this.buffer.fillRect(0,0,this.buffer.canvas.width,this.buffer.canvas.height);
			};
			this.renderizar=function(){
				this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);

			};
			this.redimensionar = function(ancho,alto,razonAltoAncho){
				
				if(alto/ancho > razonAltoAncho){
					this.context.canvas.height = ancho * razonAltoAncho;
					this.context.canvas.width = ancho;
				}else{
					this.context.canvas.height = alto;
					this.context.canvas.width = alto/razonAltoAncho;
				}
				
				this.context.imageSmoothingEnabled = false;
				
			};
	}
}