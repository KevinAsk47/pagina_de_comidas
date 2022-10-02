fetch("./informacion.json")
    .then(response => response.json())
    .then(data => myProgram(data));

function myProgram(info) {

    var containerCards = document.getElementById("cards")

    var comidas = info.informacion.comidas

        comidas.map((comida) => {

            containerCards.innerHTML += `
            <div class="cards-1">
                <div class="icono">
                <img class="img-icono" src="./img/comida-sana.png">
            </div>
            <div class="informacion" style=" background-image: url(${comida.img});">
                <h5 class="sub-cartas">${comida.titulo}</h5 class="sub-cartas">
                <p>${comida.sub_titulo}</p>
                <button class="redondo">Ver</button>
            </div>
            </div>`

        })


    console.log(comidas);









}