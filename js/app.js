console.log('ciao');

//collegato axios lo uso per richiedere i dati all'API
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => {
    let emailList = [];
    for (let i = 0; i < 10; i++){
        const result = response.data.response;
        // console.log(result);
        emailList.push(result);
    }
    console.log(emailList);
})
.catch(error => {
    console.error (error);
})