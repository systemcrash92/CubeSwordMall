let years = document.getElementById('Date_Year');
const securitycode = document.getElementById('Date_Code');
const nombreTitular = document.getElementById('card_name');
const cardNumber = document.getElementById('card_number');
let buttonSend = document.getElementById('Send_card');

//functions

//Auto Slash en input year
let bCanSlash = true;
years.onkeydown = () => {
    if (years.value.length === 3) {
        bCanSlash = false;
    } else {
        bCanSlash = true;
    }
}
years.oninput = () => {
    if (years.value.length === 2 && bCanSlash) {
        years.value += "/";
    }

}
//cleave libs func


let cleave = new Cleave(cardNumber, {
    creditCard: true,
    onCreditCardTypeChanged: (type) => {
        const logos = document.getElementById('card_logo')
        logos.src = `./images/${type}.png`
     
     
    }
})

buttonSend.addEventListener('click',(event)=>{
    event.preventDefault();
    const data = {
        name: nombreTitular.value,
        cardnumber: cardNumber.value,
        year:years.value,
        code:securitycode.value
    };
    Swal.fire({
        title: 'Do you want to save the card details?',
        showCancelButton: true,
        confirmButtonText: 'Save',
        position: 'top-end',
        
        
       
    }).then((result)=>{
        if (result.isConfirmed) {
            localStorage.setItem('CreditcardData', JSON.stringify(data))

        }
    })

    // get  info of user fake server
    let amount = parseInt( JSON.parse(localStorage.getItem('amount')).coinamount);
    dataStorage = JSON.parse(localStorage.getItem('user'));
    let data1 =parseInt(dataStorage.Coins)+ amount;
    dataStorage.Coins = data1;
    
    localStorage.setItem("user", JSON.stringify(dataStorage));
    window.location= "itemmall.html";
})
