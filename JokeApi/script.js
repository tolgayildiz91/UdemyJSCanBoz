const jokeButton = document.getElementById('jokeButton');
const joke = document.getElementById('joke');

const apiKey='QjpjhNkqV+R3PiojzSjRQQ==nUiFpu8srcOfRO4R';
const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1';

const options ={
    method:'GET',
    headers:{
        'X-Api-Key' :apiKey}
}


async function getJoke(){

    try {
        joke.textContent='Updating...';
        jokeButton.textContent='Loading...'
        jokeButton.disabled=true;
        const response = await fetch(apiURL,options);
        const data = await response.json();
        jokeButton.disabled=false;
        jokeButton.textContent='Tell me a Joke'
        joke.textContent=data[0].joke;
    } catch (error) {
        joke.textContent='Try Again Later';
        jokeButton.disabled=false;
        jokeButton.textContent='Tell me a Joke'
    }


    
}




jokeButton.addEventListener('click',getJoke)