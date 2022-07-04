
//init login 
let UserInfo = JSON.parse(localStorage.getItem('user'));
let DisplayLogin = document.getElementById('Username-display')
DisplayLogin.innerHTML = UserInfo.email;
let btnlogout = document.getElementById('btn-logout')
let UsercoinDisplay = document.getElementById('coins-display')
UsercoinDisplay.innerHTML = UserInfo.Coins;

//peticion a JSON
let articulos = [];
fetch('./data.json')
    .then(function (resp) {

        return resp.json()
    })
    .then(function (data) {
        articulos = data.items
    })
//toast
function ShowNews() {
    if (parseInt(UserInfo.Coins) > 0) {
        Toastify({

            text: `you have ${UserInfo.Coins} Coins to spend, open the shop!`,

            duration: 7000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                width: "300px",

            },
            onClick: function () {
                RenderCards(articulos);
                bSelect = false;
                containerCard.scrollIntoView({ block: "end", behavior: "smooth" });
            },
            offset: {
                x: 50,
                y: 50
            },



        }).showToast();

    }

}
setTimeout(ShowNews, 5000);







btnlogout.addEventListener('click', logout);

function logout() {
    window.location = "index.html";
}


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
let bSelect = true;

function check() {
    if (bSelect) {

        RenderCards(articulos)
        containerCard.scrollIntoView({ block: "end", behavior: "smooth" });
        bSelect= false;

    }

}


buttonSkins.addEventListener('click', check);




//Dynamic mall




const RenderCards = (array) => {
    if (bSelect) {

        for (const element of array) {

            let card = document.createElement('div')
            card.className = "card";
            card.innerHTML = `
                <img src="${element.img}" class="card-image" alt="">
                <h2>${element.skin}</h2>
                <div class="card-price">
                <div class="coin"></div>
                    <p> ${element.price}</p>
                    <button  type="button" class= "btn-Buycard"   id="${element.id}">BUY</button>
                </div>  `

            containerCard.appendChild(card);
        }
        //agrego los botones a un array por la clase
        btnBuycard = document.getElementsByClassName('btn-Buycard')
        // asigno eventos a cada boton
        for (const element of btnBuycard) {
            element.addEventListener('click', () => {


                const IDcard = element.id;
                const busqueda = articulos.find(element => element.id == IDcard)
                if (UserInfo.Coins >= busqueda.price) {

                    Swal.fire({
                        title: `sure you want to buy "${busqueda.skin}" for ${busqueda.price} coins?`,
                        showDenyButton: true,
                        confirmButtonText: 'Yes',
                        denyButtonText: 'No',
                    }).then((result) => {

                        if (result.isConfirmed) {

                            Swal.fire('Congrats!')
                            let data1 = parseInt(UserInfo.Coins) - busqueda.price;
                            UserInfo.Coins = data1;
                            localStorage.setItem("user", JSON.stringify(UserInfo));
                            UsercoinDisplay.innerHTML = UserInfo.Coins;

                        }

                    })


                } else {

                    Swal.fire('you don t have enough coins to buy this skin')

                }




            })

        }
    }
   




}

// COIN SECTION

let MSGerror = "";
let InputCoin = document.getElementById('inputValue')
let TextValue = document.getElementById('totalTEXT');
let buttonBuy = document.getElementById('btn-coinComprar')
let amountCoin = {
    coinamount: 0
}
// functions
InputCoin.oninput = () => {

    if (!isNaN(InputCoin.value)) {
        MainCoin.Totalprecio(InputCoin.value);
        TextValue.textContent = "USD " + MainCoin.precioFinal;

    } else {
        InputCoin.value = '';
        TextValue.textContent = "USD 0";
    }
}

buttonBuy.addEventListener('click', TargetSection);

function TargetSection() {
    if (InputCoin.value != "") {
        amountCoin.coinamount = InputCoin.value;
        localStorage.setItem('amount', JSON.stringify(amountCoin))
        window.location = "payment.html";

    } else {
        Swal.fire('Please insert amount')
    }


}


    



















