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
        output = (`informazioni fornite non valide.
            possibili motivazioni:
            - anni utente < 0
            - anni utente != number
            - numero chilometri < 0
            - numero di chilometri != number`);
    } else{
        output = `<div class="container row g-2 justify-content-around mx-auto col-8 p-3 bg-light border border-5">
        Il prezzo finale per l'utente di età ${userAge} e distanza da percorrere di ${userKm}Km è di €${finalPrice.toFixed(2)}
        </div>`;
    };
    document.getElementById('output').innerHTML = output;
});