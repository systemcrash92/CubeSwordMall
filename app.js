let UserInfo = {
    user: "",
    Coins: 0,
}
let UserCoin = document.getElementById('user-coin');



let Index = 0;

//arrays
const items = [
    {
        skin: "Hipster cube",
        price: 1000,
        img: './images/Asset1.png',
        id: 1
    }
    ,
     {
        skin: "Burgues Cube",
        price: 1000,
        img: './images/Asset2.png',
        id: 2
    }
    ,
    {
        skin: "Ragnar Cube",
        price: 1000,
        img: './images/Asset3.png',
        id: 3
    }
];



//clases

class Coin {

    constructor(precio) {
        this.precio = parseFloat(precio);
        this.precioFinal = precio;
        this.biScompraSucces = false;
        this.standarValue = precio;
    }

    Totalprecio(cantidad) {
       this.precio = this.standarValue;
        this.precio = this.precio * cantidad;
        this.precioFinal = this.precio
        //this.precioFinal = this.precioFinal - this.precio;
    }
    Comprado() {
        this.biScompraSucces = true;
        if (this.biScompraSucces) {
            UserInfo.Coins = UserInfo.Coins + this.cantidad;
        }
    }




}
let containerCard = document.getElementById('containermall')
//Herencias
const MainCoin = new Coin(0.01);

//buttons
const buttonSkins = document.getElementById('btn-SkinsID')
//buttons events
bSelect = true;
function check(){
    if(bSelect){
        
        RenderCards(items);
        bSelect = false;
    }
}


buttonSkins.addEventListener('click',check);




//Dynamic mall


const RenderCards = (array) => {
    for (const element of array) {

        let card = document.createElement('div')
        card.className ="card";
        card.innerHTML=`
            <img src="${element.img}" class="card-image" alt="">
            <h2>${element.skin}</h2>
            <div class="card-price">
            <div class="coin"></div>
                <p> ${element.price}</p>
                <a href="#">COMPRAR</a>
            </div>  `
        

        containerCard.appendChild(card);  
        }

    }
    // COIN SECTION

    let MSGerror = "";
    let InputCoin = document.getElementById('inputValue')
    let TextValue = document.getElementById('totalTEXT');
    InputCoin.oninput= ()=>{
        //console.log(InputCoin.value)
        MainCoin.Totalprecio( InputCoin.value);
        console.log(MainCoin.precioFinal)
        TextValue.innerHTML="TOTAL USD "+MainCoin.precioFinal;
        
        
    
    }
    
    
 
      
   
    

    

    







