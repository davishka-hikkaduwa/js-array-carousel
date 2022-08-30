console.log("JS OK!");



const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];


//cancellare il contenuto presente nel .image-container
const imageContainer = document.querySelector('.image-container'); //assigning class image-container to imageContainer
console.log(imageContainer);
imageContainer.innerHTML = ' '; //replacing content of imageContainer with ' ' (nothing)

//dobbiamo sapere  quale immagine e attiva (visibile) (la prima dell'array)
let activeImageIndex = 0;
console.log(images[activeImageIndex]); //01.jpg

imageContainer.innerHTML = '';


//generiamo un nuovo innerHTML dall'array

//aggiungendo la classe .active dall immagine attiva

for (let i = 0; i < images.length; i++) {
    console.log(images[i]);
    console.log('indice immagine', i, 'indice attvo', activeImageIndex);
    let className;
    if (i === activeImageIndex) {
        classActiveName = ' active';
    }

    imageContainer.innerHTML += `<img class="item${classActiveName}" src="img/${images[i]}" alt="${images[i]}" />`

}

const next = document.getElementById('next');

next.addEventListener('click', function name() {
    console.log('sono stato cliccato');

    //se c'e una immagine dopo quella attiva incrementare activeImageIndex
    if (activeImageIndex < images.length) {
        activeImageIndex++;



        for (let i = 0; i < images.length; i++) {
            console.log(images[i]);

            let classActiveName = '';
            if (i === activeImageIndex) {
                classActiveName = ' active';
            }
            imageContainer.innerHTML += `<img class="item${classActiveName}" src="img/${images[i]}" alt="${images[i]}" />`

        }
    }

})

const previous = document.getElementById('previous');

previous.addEventListener('click', function name() {
    console.log('sono stato cliccato');

    //se c'e una immagine dopo quella attiva incrementare activeImageIndex
    if (activeImageIndex < images.length - 1) {
        activeImageIndex++;



        for (let i = 0; i < images.length; i++) {
            console.log(images[i]);

            let classActiveName = '';
            if (i === activeImageIndex) {
                classActiveName = ' active';
            }
            imageContainer.innerHTML += `<img class="item${classActiveName}" src="img/${images[i]}" alt="${images[i]}" />`

        }
    }

})








