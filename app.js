let container = document.querySelector('#container');

let link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for(let i=1;i<=151;i++){
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');

  const newImg = document.createElement('img');
  newImg.src=`${link}${i}.png`;

  const label = document.createElement('span');
  label.innerHTML= `${i}`;

  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}