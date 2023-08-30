class Manga{
    constructor(nombre,imagen,genero){
        this._nombre=nombre;
        this._imagen=imagen;
        this._genero=genero;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get nombre(){
        return this._nombre
    }
    set imagen(imagen){
        this._imagen=imagen;
    }
    get imagen(){
        return this._imagen;
    }
    set genero(genero){
        this._genero=genero;
    }
    get genero(){
        return this._genero;
    }

}

let mangas=[
    new Manga("Suicide Island","imagenes/5bf96d8526068.jpg","Seinen"),
    new Manga("Terraformars","imagenes/5e6ac05876a10.jpg","Seinen"),
    new Manga("Tales of Demonds<br>and Gods","imagenes/5d9609f30d308.jpg","Fantasia"),
    new Manga("GTO","imagenes/12486_TMOmanga015019.jpg","Seinen"),
    new Manga("Tengoku Daimakyou","imagenes/648660f3ee57b.jpg","Ciencia Ficcion"),
    new Manga("Suicide Island","imagenes/5bf96d8526068.jpg","Seinen"),
    new Manga("Terraformars","imagenes/5e6ac05876a10.jpg","Seinen"),
    new Manga("Tales of Demonds<br>and Gods","imagenes/5d9609f30d308.jpg","Fantasia"),
    new Manga("GTO","imagenes/12486_TMOmanga015019.jpg","Seinen"),
    new Manga("Tengoku Daimakyou","imagenes/648660f3ee57b.jpg","Ciencia Ficcion"),
    new Manga("Suicide Island","imagenes/5bf96d8526068.jpg","Seinen"),
    new Manga("Terraformars","imagenes/5e6ac05876a10.jpg","Seinen"),
    new Manga("Tales of Demonds<br>and Gods","imagenes/5d9609f30d308.jpg","Fantasia"),
    new Manga("GTO","imagenes/12486_TMOmanga015019.jpg","Seinen"),
    new Manga("Tengoku Daimakyou","imagenes/648660f3ee57b.jpg","Ciencia Ficcion"),
    new Manga("Suicide Island","imagenes/5bf96d8526068.jpg","Seinen"),
    new Manga("Terraformars","imagenes/5e6ac05876a10.jpg","Seinen"),
    new Manga("Tales of Demonds<br>and Gods","imagenes/5d9609f30d308.jpg","Fantasia"),
    new Manga("GTO","imagenes/12486_TMOmanga015019.jpg","Seinen"),
    new Manga("Tengoku Daimakyou","imagenes/648660f3ee57b.jpg","Ciencia Ficcion"),
    new Manga("Second Break","imagenes/62b77af450a47.jpg","Deportes")
]
//********************************CREAR Y CARGAR CARDS********************************** 
function cargarCards(){
    cardDiv=document.getElementById('cards-div')
    for(let i=mangas.length-1;i>=0;i--){
        let card=document.createElement("div");
        card.classList.add("card");

        let imagen=document.createElement("img");
        imagen.src=mangas[i].imagen;
        let h3=document.createElement("p")
        h3.classList.add("titulo-manga")
        h3.innerHTML=mangas[i].nombre;
        let generos=document.createElement("p")
        generos.classList.add("genero-manga")
        generos.innerHTML=mangas[i].genero;

        card.appendChild(generos)
        card.appendChild(imagen)
        card.appendChild(h3)
        cardDiv.appendChild(card)
        
    }
    cardDiv=document.getElementById('carrusel')
    for(let i=mangas.length-1;i>=0;i--){
        let card=document.createElement("div");
        card.classList.add("card");

        let imagen=document.createElement("img");
        imagen.src=mangas[i].imagen;
        let h3=document.createElement("p")
        h3.classList.add("titulo-manga")
        h3.innerHTML=mangas[i].nombre;
        let generos=document.createElement("p")
        generos.classList.add("genero-manga")
        generos.innerHTML=mangas[i].genero;

        card.appendChild(generos)
        card.appendChild(imagen)
        card.appendChild(h3)
        cardDiv.appendChild(card)
        
    }



}

cargarCards()

//*****************************CARRUSEL*************************************** 
let carrusel=document.getElementById('carrusel')
let intervalo= null;
let maxScrollLeft=carrusel.scrollWidth - carrusel.clientWidth;
console.log(maxScrollLeft)
let step= 0.9;
function funcCarrusel(){
    intervalo=setInterval(function(){
        carrusel.scrollLeft=carrusel.scrollLeft+step;
        if (carrusel.scrollLeft >= maxScrollLeft ){
            console.log("has llegado al final")
            step=step*-1;
        }
        else if(carrusel.scrollLeft<=0){
            console.log("has de empezar de neuvo")
            step=step*-1


        }
    },10)

}
funcCarrusel();

function stop (){
    clearInterval(intervalo)
}

carrusel.addEventListener("mouseover",function(){
    stop();
})
carrusel.addEventListener("mouseout",function(){
    funcCarrusel()
})
