let UserInfo ={
    user : "",
    Coins :0,
}

let Index=0;

//arrays
const items = [{skin:"Hipster cube",price:1000},{skin:"Ragnar Cube",price:1000},{skin:"Burgues Cube",price:1000}];



//clases

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
    //Herencias
    const MainCoin = new Coin(0.01,0,1000);

    //logica test

    UserInfo.user=toString( prompt("ingrese su usuario"));
    bCanbuyskins = false;
    //Seccion compra de Coins

    while(!MainCoin.biScompraSucces){

        // el usuario primero debe comprar coins para poder adquirir skins
        MainCoin.cantidad = parseInt(prompt("Ingrese la cantidad de COINS que desea comprar"));
        MainCoin.Totalprecio();
        alert("El precio final es USD "+MainCoin.precioFinal);
        Index =parseInt( prompt("Inserte \n 1 - para comprar \n 0 - para cancelar"));
        switch(Index){
            case 1: MainCoin.Comprado();
                    alert("Gracias por la compra! \n El total de sus coins es de "+UserInfo.Coins);
                    bCanbuyskins= true;
                 break
            case 0: alert("Vuelva pronto!");
            MainCoin.biScompraSucces = true;
             break }
            
    };    
     // Seccion compra de Skins

    while(bCanbuyskins){        
        if(Index = 1){
            const Skinsdisponibles =[];
            items.forEach(element => {
            Skinsdisponibles.push(element.skin,"\n")});// agrego las skins disponibles en un array
            
            const select = prompt("Las skins disponibles son: \n"+Skinsdisponibles+" Escriba el nombre de la skin que desea comprar").toLowerCase();// muestro las skins disponibles
            let value = 0; 
            let bItemFind = false;
            items.forEach(element => {
                if(select == element.skin.toLowerCase()){// agrego el precio de la skin sellecionada
                    value = element.price;
                    bItemFind = true;
                }
            });
                // consulto si su saldo es suficiente para comprar la skin o si el item que escribio fue el correcto
                if(UserInfo.Coins >= value & bItemFind){
                   const comprastate= parseInt( prompt("Su valor es de "+ value+" Inserte:\n 1- para comprar\ 0- para cancelar"));
                    switch(comprastate){            
                        case 1:UserInfo.Coins= UserInfo.Coins - value;
                            alert("Gracias por su compra! sus coins disponibles es de "+UserInfo.Coins)
                            bCanbuyskins = false;
                            break;
                        case 2: alert("Vuelva pronto!");
                                bCanbuyskins= false;
                                break;     
                    }
                }else if (bItemFind) {
                    alert("Lo sentimos su saldo de Coins es insuficiente para esta compra, intente nuevamente!")
                    break
                } else {
                    
                    alert("No existe ningun skin con el nombre "+select+" intente nuevamente");
                }
                    
                

            


            };
            

          };      
       

       
        

    
  