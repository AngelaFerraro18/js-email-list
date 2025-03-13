
//collegato axios lo uso per richiedere i dati all'API
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => {
    let emailList = [];
    for (let i = 0; i < 10; i++){
        const result = response.data.response;
        emailList.push(result);
    }
    console.log(emailList);

    //salvo in una variabile l'elemento ul che ospiterà la lista delle email
    const emailListElement = document.getElementById('email-list');
    console.log(emailListElement);
    
    //creo una variabile con una stringa vuota, dove andrò ad aggiungere gli elementi li
    let emailItems = '';
    
    //faccio un ciclo forEach per iterare sull'array creato in precedenza e inserire gli elementi li nella variabile vuota
    emailList.forEach(email => {
        emailItems += `<li>${email}</li>`
    })
    console.log(emailItems);

    //inserisco gli elementi li creati nell'ul 
    emailListElement.innerHTML = emailItems;
}) 
.catch(error => {
    console.error (error);
})