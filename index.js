const header = document.getElementById('head');
const joke = document.getElementById('joke');
const button = document.getElementById('button');


const getJoke = () => {
    fetch('https://icanhazdadjoke.com/slack').then(response=>response.json()).then((json)=>{
        console.log(json.attachments[0].fallback);
        joke.innerHTML = json.attachments[0].fallback;
    })
};

button.addEventListener('click', ()=>{
    getJoke()
});