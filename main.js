




const btn = document.querySelector('#btn')
btn.addEventListener("click", () => {

    imgPoke()
    atributos()




})





//funçoes
const img = document.querySelector('#card2')
const inp = document.querySelector('#pokeName')
const nomePokemon = (pokemon) => {


    img.innerHTML = `<img src=${pokemon.sprites.front_default} class= "pokeCard" >`



}




const imgPoke = async () => {

    try {
        const inp = document.querySelector('#pokeName').value
        const url = `https://pokeapi.co/api/v2/pokemon/${inp}/`
        const promises = await fetch(url)
        const pokemon = await promises.json()
        nomePokemon(pokemon)

    } catch (error) {
        console.error(error)
    }

}
const atributos = async () => {
    const p1 = document.querySelector('#p1');
    const p2 = document.querySelector('#p2');
    p2.style.color = 'black'
    p2.style.fontWeigth = 'bolder'

    const p3 = document.querySelector('#p3');
    const p4 = document.querySelector('#p4');
    const p5 = document.querySelector('#p5');


    try {
        const inp = document.querySelector('#pokeName').value;

        const url = `https://pokeapi.co/api/v2/pokemon/${inp}/`;
        const promises = await fetch(url);
        const final = await promises.json();
        //habilidades
        p1.innerHTML = '<mark>habilidades</mark>' + ' ' + final.abilities[0].ability.name + ' / ' + final.abilities[1].ability.name;
        //nome
        p2.innerText = ' ' + final.name;
        //tipo
        p3.innerText = ' ' + final.types[0].type.name;
        //peso
        p4.innerHTML = '<mark>peso</mark>' + ' ' + final.weight + 'kg';
        //altura
        p5.innerHTML = '<mark>altuta</mark>' + ' ' + final.height;
    } catch (error) {
        console.error(error)
        alert('invalido')
        document.querySelector('#pokeName').value = ''
        document.querySelector('#pokeName').focus()
    }

}

function handleInput(e) {
    var ss = e.target.selectionStart;
    var se = e.target.selectionEnd;
    e.target.value = e.target.value.toLowerCase();
    e.target.selectionStart = ss;
    e.target.selectionEnd = se;
}
handleInput()




