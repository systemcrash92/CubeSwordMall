
//init login 
let UserInfo = JSON.parse(localStorage.getItem('user'));
let DisplayLogin = document.getElementById('Username-display')
DisplayLogin.innerHTML= UserInfo.email;
let btnlogout = document.getElementById('btn-logout')
let UsercoinDisplay = document.getElementById('coins-display')

btnlogout.addEventListener('click',logout);

function logout(){
    window.location = "index.html";
}


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
    },
    {
        skin: "Cube Magic",
        price: 1200,
        img: './images/Asset4.png',
        id: 4
    },
    {
        skin: "Popular Cube men",
        price: 1000,
        img: './images/Asset5.png',
        id: 5
    },
    {
        skin: "Shelby Cube",
        price: 1500,
        img: './images/Asset6.png',
        id: 6
    },
    {
        skin: "Princess Cube",
        price: 1000,
        img: './images/Asset7.png',
        id: 7
    },
    {
        skin: "Popular Cube woman",
        price: 1000,
        img: './images/Asset8.png',
        id: 8
    },
    {
        skin: "Firefighter Cube",
        price: 1200,
        img: './images/Asset9.png',
        id: 9
    },
    {
        skin: "Assassin Cube",
        price: 1500,
        img: './images/Asset10.png',
        id: 10
    },
    {
        skin: "Hero Cube",
        price: 1500,
        img: './images/Asset11.png',
        id: 11
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
    containerCard.scrollIntoView({block: "end", behavior: "smooth"});
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

        if(!isNaN(InputCoin.value) ){
            MainCoin.Totalprecio( InputCoin.value);
            TextValue.textContent="USD "+MainCoin.precioFinal;

        }else{
             InputCoin.value= '';
             TextValue.textContent="USD 0";
        }
       
       
    
    }
    
    
 
      
   
    

    

    







