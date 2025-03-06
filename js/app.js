let select = document.getElementById("age");
for (let i = 5; i <= 99; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
};



document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();
    const userName = document.getElementById('name').value;
    const userAge = document.getElementById('age').value;
    const userKm = document.getElementById('km').value;  
    console.log(userName);
    console.log(userAge);
    console.log(userKm);
    // Calcolare il prezzo del biglietto :
    let fullPrice = userKm * 0.21;
    // Creare variabile prezzo finale :
    let finalPrice = 0;
    // Eventuale sconto :
    if (userAge < 18){
        finalPrice = fullPrice - (fullPrice / 100 * 20);
    } else if (userAge > 65){
        finalPrice = fullPrice - (fullPrice / 100 * 40);
    } else {
        finalPrice = fullPrice;
    };
    // Aggiustare il prezzo e verificare autenticità dell'output :
    // Output:
    let output = document.createDocumentFragment();
    if (isNaN(userKm) || isNaN(userAge) || userKm <= 0 || userAge <= 0){
        output = (`<div class="container d-flex justify-content-center mx-auto col-8 p-3 bg-light border border-5">
                <h3>Ops, c'è stato un problema</h3>
            </div>`);
    } else{
        output = `<div class="container row justify-content-around mx-auto col-8 p-3 bg-light border border-5">
                <div class="col-3 border-top border-bottom border-black border-3">
                     <img src="img/untitled_720.png" alt="qr code"style="height: 150px;">
                </div>
                <div class="col-9 border-top border-bottom border-black border-3 row">
                    <div class="row">
                        <div class="col-4">
                            <h5>Passeggero:</h5>
                            <p>${userName}</p>
                        </div>
                        <div class="col-4">
                            <h5>Costo:</h5>
                            <p>€${finalPrice.toFixed(2)}</p>
                        </div>
                        <div class="col-4">
                            <h5>Specifiche:</h5>
                            <p>Numero Treno: ${Math.floor(Math.random() * (99999 - 12345 + 1)) + 12345}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>Anni: ${userAge}</p>
                        </div>
                        <div class="col-4">
                            <p>Km: ${userKm}</p>
                        </div>
                        <div class="col-4">
                            <p>Carrozza: ${Math.floor(Math.random() * 10) + 1}</p>
                        </div>                   
                    </div>  
                </div>
             </div>`;
    };
    document.getElementById('output').innerHTML = output;
});