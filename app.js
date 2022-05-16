let UserInfo ={
    user : "",
    Coins :0,
}

let Index=0;



class Skin{

    constructor(precio,skinId,nombre){
        this.precio = parseInt(precio);
        this.skinId = parseInt(skinId);
        this.nombre = toString(nombre);
        this.vendido = false;

    }
    vender(){
        this.vendido = true;
    }
}

class Coin{

    constructor(precio,descuento,cantidad){
        this.precio = parseFloat(precio);
        this.descuento = parseInt(descuento);
        this.precioFinal = precio;
        this.cantidad = parseInt(cantidad);
        this.biScompraSucces= false;
    }

    Totalprecio(){
        this.precio = this.precio *this.cantidad;
        this.precioFinal = this.precio
        this.precio = this.precio*this.descuento/100;
        this.precioFinal = this.precioFinal -this.precio;
    }
    Comprado(){
        this.biScompraSucces = true;
           if(this.biScompraSucces){
               UserInfo.Coins = UserInfo.Coins+this.cantidad;
        }
    }

    

  
}
    const CubeHipster = new Skin(1000,1,"Cube Hispter");
    const CubeBurgues = new Skin(1000,2,"Burgues Cube");
    const CubeRagnar = new Skin (1000,3,"Ragnar Cube");
    const MainCoin = new Coin(0.01,0,1000);

    //logica test

    while(!MainCoin.biScompraSucces){

        UserInfo.user=toString( prompt("ingrese su usuario"));
        MainCoin.cantidad = parseInt(prompt("Ingrese la cantidad de COINS que desea comprar"));
        MainCoin.Totalprecio();
        prompt("El precio final es USD "+MainCoin.precioFinal,);
        Index =parseInt( prompt("Inserte 1 parar comprar 0 para cancelar"));
        switch(Index){
            case 1: MainCoin.Comprado();
                    alert("Gracias por la compra el total de sus coins es de "+UserInfo.Coins);
                    
                 break
                case 2:alert("Vuelva pronto!");
            break
        }
        





    }
  