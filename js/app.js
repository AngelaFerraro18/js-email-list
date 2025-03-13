//salvo in una variabile l'elemento ul che ospiterà la lista delle email
const emailListElement = document.getElementById('email-list');

//creo una variabile con una stringa vuota, dove andrò ad aggiungere gli elementi li
let emailItems = '';

//collegato axios lo uso per richiedere i dati all'API e faccio un ciclo for per generare 10 email randomiche
for (let i = 0; i < 10; i++) {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {

            //salvo in una variabile il valore che mi interessa (email)
            const result = response.data.response;

            //inserisco gli elementi li nella variabile vuota
            emailItems += `<li>${result} <i class="fa-regular fa-envelope"></i><i class="fa-regular fa-envelope-open"></i></li>`

            //inserisco gli elementi li creati nell'ul 
            emailListElement.innerHTML = emailItems;

        })
        .catch(error => {
            console.error(error);
        })
}

