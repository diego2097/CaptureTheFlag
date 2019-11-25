class Mapa{
	constructor(){
		this.collider= new Mapa.Collider();
		
		this.colorFondo = "#000000"
		this.ancho = 500;
		this.alto =500;
		this.friccion=0.9;
		this.gravedad=2;
		//---------------------por ahora aquí, luego desde un JSON ----------
		this.columnas = 31;
		this.filas = 31;
		this.tamanioCasilla = 16;
		this.map= [1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,4.6,4.6,4.6,4.6,4.6,4.6,4.6,4.6,4.6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4.6,4.6,4.6,4.6,4.6,4.6,4.6,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,4.6,4.6,4.6,4.6,4.6,4.6,4.6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4.6,4.6,4.6,4.6,4.6,4.6,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,4.6,4.6,4.6,4.6,4.6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4.6,4.6,4.6,4.6,4.6,4.6,4.6,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,4.5,4.5,4.5,4.5,4.5,4.5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4.6,4.6,4.6,4.6,4.6,4.6,4.6,4.6,4.6,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,2.1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.3];
		this.layer="world";
		
		this.jugador = new Mapa.Jugador(50,100,16,16,20);
		this.bandera = new Mapa.ObjetoMovil(200,200,16,16);
		
	}
	manejarColisiones(jugador){
		if(jugador.x<0){
			jugador.x =0;
			jugador.velX=0;
		}else if(jugador.x+jugador.ancho > this.ancho){
			jugador.x =this.ancho - jugador.ancho;
			jugador.velX = 0;
		}
		if(jugador.y < 0){
			jugador.y=0;
			jugador.velY=0;
		}else if(jugador.y +jugador.alto > this.alto){
			jugador.saltando = false;
			jugador.y = this.alto - jugador.alto;
			jugador.velY=0;
		}
		
		var abajo,izquierda,derecha,arriba,valCasilla;
		//sup-izq
		arriba = Math.floor(jugador.getArriba() / this.tamanioCasilla);
		izquierda = Math.floor(jugador.getIzquierda() / this.tamanioCasilla);
		valCasilla = this.map[arriba * this.columnas + izquierda];
		this.collider.colisionar(valCasilla,jugador,izquierda*this.tamanioCasilla,arriba*this.tamanioCasilla,this.tamanioCasilla);
		//sup-der
		arriba = Math.floor(jugador.getArriba() / this.tamanioCasilla);
		derecha = Math.floor(jugador.getDerecha() / this.tamanioCasilla);
		valCasilla = this.map[arriba * this.columnas + derecha];
		this.collider.colisionar(valCasilla,jugador,derecha*this.tamanioCasilla,arriba*this.tamanioCasilla,this.tamanioCasilla);
		//inf-izq
		abajo = Math.floor(jugador.getAbajo() / this.tamanioCasilla);
		izquierda = Math.floor(jugador.getIzquierda() / this.tamanioCasilla);
		valCasilla = this.map[abajo * this.columnas + izquierda];
		this.collider.colisionar(valCasilla,jugador,izquierda*this.tamanioCasilla,abajo*this.tamanioCasilla,this.tamanioCasilla);
		//inf-der
		abajo = Math.floor(jugador.getAbajo() / this.tamanioCasilla);
		derecha = Math.floor(jugador.getDerecha() / this.tamanioCasilla);
		valCasilla = this.map[abajo * this.columnas + derecha];
		this.collider.colisionar(valCasilla,jugador,derecha*this.tamanioCasilla,abajo*this.tamanioCasilla,this.tamanioCasilla);
		
	}
	
	refrescar(){
	
		this.jugador.velY += this.gravedad;
		this.jugador.refrescar();
		
		this.jugador.velX *= this.friccion;
		this.jugador.velY *= this.friccion;

		this.manejarColisiones(this.jugador);
		if(this.jugador.tieneBandera){
			this.bandera.x=this.jugador.x;
			this.bandera.y=this.jugador.y;
		}else if(!this.jugador.tieneBandera){
			this.bandera.velY += this.gravedad;
		}
		this.bandera.refrescar();
		this.manejarColisiones(this.bandera);
		
		console.log("size "+ Object.keys(this.jugador.poder).length);
		
		if (Object.keys(this.jugador.poder).length > 0){
			for (var key in this.jugador.poder) {
				if (this.jugador.poder[key].fin == false){
					delete this.jugador.poder[key];
				}
				else{
					this.jugador.poder[key].refrescar();
				}
			}
		}
		
		partidaModulo.moverBandera(this.bandera.x,this.bandera.y);
		
		if(this.bandera.estaColisionando(this.jugador))
			this.jugador.cogerBandera();
	}
	
}

Mapa.Objeto = class {
	
	constructor(x,y,ancho,alto){
		this.ancho=ancho;
		this.alto=alto;
		
		this.x=x;
		this.y=y;
		this.xPrevFrame=x;
		this.yPrevFrame=y;
	}
	
	estaColisionando(objeto){
		return this.getDerecha() >= objeto.getIzquierda()&&
		       this.getAbajo() >= objeto.getArriba() &&
		       this.getIzquierda() <= objeto.getDerecha() &&
		       this.getArriba() <= objeto.getAbajo();
	}
	/**
	 * estos getters/setters obtienen y asignan las posisiones de los extremos del objeto.
	 */
	getAbajo(){return this.y + this.alto;}
	getIzquierda(){return this.x;}
	getDerecha(){return this.x +this.ancho;}
	getArriba(){return this.y;}
	//se usan para asignar a la posicion del jugador las posiciones de los extremos de las plataformas al colisionar con estas
	setAbajo(y){this.y = y - this.alto;}
	setIzquierda(x){this.x=x;}
	setDerecha(x){this.x=x -this.ancho;}
	setArriba(y){this.y=y;}
	
	
	getPrevAbajo(){return this.yPrevFrame + this.alto;}
	getPrevIzquierda(){return this.xPrevFrame;}
	getPrevDerecha(){return this.xPrevFrame +this.ancho;}
	getPrevArriba(){return this.yPrevFrame;}
	//se usan para asignar a la posicion del jugador las posiciones de los extremos de las plataformas al colisionar con estas
	setPrevAbajo(y){this.yPrevFrame = y - this.alto;}
	setPrevIzquierda(x){this.xPrevFrame=x;}
	setPrevDerecha(x){this.xPrevFrame=x -this.ancho;}
	setPrevArriba(y){this.yPrevFrame=y;}
}

Mapa.ObjetoMovil = class extends Mapa.Objeto{
	constructor(x,y,ancho,alto){
		super(x,y,ancho,alto);
		
		this.color = "#ff0000";
		
		this.velX=0;
		this.velY=0;	
		
	}
	
	moverseIzq(){
		this.velX-=this.pasoVelX;
	}
	
	moverseDer(){
		this.velX+=this.pasoVelX;
	}
	
	refrescar(){
		this.xPrevFrame=this.x;
		this.yPrevFrame=this.y;
		this.x += this.velX;
		this.y += this.velY;
		
	}
}

//Mapa.Bandera = class extends Mapa.ObjetoMovil{
//	constructor(x,y,ancho,alto){
//		super(x,y,ancho,alto);
//	}
//	refrescar(){
//		if(jugador.tieneBandera){
//			
//		}else
//	}
//};

Mapa.Jugador = class extends Mapa.ObjetoMovil{
	constructor(x,y,ancho,alto,vida){
		super(x,y,ancho,alto);
		this.pasoVelX=0.6;
		this.saltando = true;
		this.piso = false;
		this.poder = {};	
		this.vida=vida;
		this.tieneBandera = false;
		this.puntos=0;
	}
	
	saltar(){
		if(!this.saltando){
			this.saltando = true;
			this.velY -= 20;
		}
	}
	
	cogerBandera(){
		this.tieneBandera=true;
	}
	refrescar(){
		this.xPrevFrame=this.x;
		this.yPrevFrame=this.y;
		this.x += this.velX;
		this.y += this.velY;
		
		if(this.tieneBandera){
			this.puntos++;		
		}
		if(this.xPrevFrame !=this.x || this.yPrevFrame!=this.y-3){
			partidaModulo.mover(Math.floor(this.x),Math.floor(this.y)-3);
		}
	}
	manejarColisiones(poder){
		var nick = poder.id.split(",")[0];
		if (appModule.readCookie() != nick){
			if (Math.abs(poder.x - this.x) <0.05  && Math.abs(poder.y-this.y) < 0.05){
				this.vida = vida - poder.damage;

			}
		}
	}
	
}


Mapa.Poder = class extends Mapa.ObjetoMovil{
	constructor(x,y,xf,yf,ancho,alto,fin,id){
		super(x,y,ancho,alto)
		this.activo = false;
		this.drecorrida = 0;
		this.damage = 0; 
		this.xf = xf;
		this.yf = yf;
		this.m = 0; 
		this.b = 0;
		this.tipo = "";
		this.id = id;   
		this.fin = fin; 
	}

	construirRecta(){
		this.m = (this.yf-this.y)/(this.xf-this.x); 
		this.b = (this.x * -1 * this.m) + this.y;
	}
}

Mapa.Poder.Disparo = class extends Mapa.Poder{
	constructor(x,y,xf,yf,ancho,alto,fin,id){
		super(x,y,xf,yf,ancho,alto,fin,id)
		this.damage = 20; 
		this.tipo = "Disparo";
		this.construirRecta();
	}

	refrescar(){
		//Este if revisa que el poder haya llegado a su destino. 
		if (Math.abs(this.x-this.xf) > 0.09 || Math.abs(this.y-this.yf) > 0.09){
			if (this.x > this.xf) {
				this.x--;
				this.y = this.m*this.x+this.b;
				partidaModulo.moverBala(this.id,this.x,this.y);
				//console.log("x = "+ x + " y = "+ y); e.getTime()
			  }
			  else if (this.x < this.xf){
				this.x++;
				this.y = this.m*this.x+this.b;
				partidaModulo.moverBala(this.id,this.x,this.y);
				//console.log("x = "+ x + " y = "+ y);  e.getTime()
			  }
			  else{ 
				if (this.y < this.yf) this.y++;
				else this.y--;
				partidaModulo.moverBala(this.id,this.x,this.y);
				//console.log("x = "+ x + " y = "+ y)  e.getTime()
			  }
		}
		else {
			partidaModulo.colisionBala(this.id);
			this.fin = false;
		}	 
	}
}

Mapa.Collider = class {
	
	constructor(){
		this.colisionar = function(posPlataforma,jugador,casillaX,casillaY,tamanioCasilla){
			if(posPlataforma!==-1)
				this.manejarColisionesPlataformaArriba(jugador,casillaY);
		}
	}
	
	manejarColisionesPlataformaAbajo(){
		
	}
	
	manejarColisionesPlataformaIzquierda(){
		
	}
	
	manejarColisionesPlataformaDerecha(){
		
	}

	manejarColisionesPlataformaArriba(jugador,arribaPlataforma){
		if(jugador.getAbajo() > arribaPlataforma && jugador.getPrevAbajo() <= arribaPlataforma){
			jugador.setAbajo(arribaPlataforma);
			jugador.velY = 0;
			jugador.saltando = false;
		}
	}
	
}