/**
 * @author Wildiney Di Masi <wildiney@gmail.com>.
 */
const tags = [
  {
    name: 'Kit Escolar Unicórnio',
    image: 'kit-escolar-unicornio1-2a8f064d260fbbd5d915691977160930-1024-1024.jpg',
    thumb: 'kit-escolar-unicornio1-2a8f064d260fbbd5d915691977160930-1024-1024-100x100.jpg',
    url: 'https://www.monicapalma.com.br/produtos/kit-escolar-vingadores-123-etiquetas/?variant=105166166'
  },
  {
    name: 'Kit Escolar Star Wars',
    image: 'kit-etiqueta-escolar-star-wars1-f122ffd54abdfaf68515691977960902-1024-1024.jpg',
    thumb: 'kit-etiqueta-escolar-star-wars1-f122ffd54abdfaf68515691977960902-1024-1024-100x100.jpg',
    url: 'https://www.monicapalma.com.br/produtos/kit-escolar-star-wars-123-etiquetas/?variant=105166139'
  },
  {
    name: 'Kit Escolar Dino 123',
    image: 'kit-etiqueta-escolar-dino-selvagem1-3a8af0b595aef87cc115691968500799-1024-1024.jpg',
    thumb: 'kit-etiqueta-escolar-dino-selvagem1-3a8af0b595aef87cc115691968500799-1024-1024-100x100.jpg',
    url: 'https://www.monicapalma.com.br/produtos/kit-escolar-dino-123-etiquetas/'
  },
  {
    name: 'Kit Escolar Dina',
    image: 'kit-etiqueta-escolar-dina1-4f1a49a9eead3ca2b615691967013737-1024-1024.jpg',
    thumb: 'kit-etiqueta-escolar-dina1-4f1a49a9eead3ca2b615691967013737-1024-1024-100x100.jpg',
    url: 'https://www.monicapalma.com.br/produtos/kit-escolar-dina-123-etiquetas/'
  },
  {
    name: 'Kit Escolar Vingadores',
    image: 'kit-etiqueta-escolar-fofinho-vingadores1-d23f1d3f168b384a5315691978705514-1024-1024.jpg',
    thumb: 'kit-etiqueta-escolar-fofinho-vingadores1-d23f1d3f168b384a5315691978705514-1024-1024-100x100.jpg',
    url: 'https://www.monicapalma.com.br/produtos/kit-bercario-vingadores-98-etiquetas/'
  },
]

const genMiniatures = () => {
  console.log('generating miniatures')
  let miniatures = document.createElement('ul');

  tags.map((tag) => {
    miniatures.innerHTML += `<li><img class="img_menu" src="img/${tag.thumb}" width="100" alt="${tag.name}" onclick="changeModel('img/${tag.image}','${tag.url}')"></li>`
  })
  document.getElementById('miniatures').appendChild(miniatures);
}

const changeName = (name) => {
  fields = document.getElementsByClassName("name");
  for (let i = 0; i < fields.length; i++) {
    fields[i].innerHTML = "<p>" + name + "</p>";
  }
}

const changeModel = (image, url) => {
  const tag = document.getElementsByClassName('tag')[0];
  tag.style.backgroundImage = "url('" + image + "')";
  const tag_url = document.getElementById('tag_url');
  tag_url.setAttribute('href', url);
}

const changeFont = () => {
  const e = document.getElementById('font');
  let option = e.options[e.selectedIndex].value;
  let names = document.querySelectorAll('.example .name p');
  for (let i = 0; i < names.length; i++) {
    names[i].style.fontFamily = option;
  }
}

const changeSize = () => {
  let value = document.getElementById('fontsize').value;
  let names = document.querySelectorAll('.example .name p');
  for (let i = 0; i < names.length; i++) {
    names[i].style.fontSize = value + "pt";
  }
  console.log(value)
}
document.addEventListener("DOMContentLoaded", function () {
  console.log("starting javascript");
  genMiniatures();

  const input_name = document.getElementById("input_name");
  input_name.addEventListener('keyup', (e) => {
    changeName(input_name.value);
  })
})

// if ("serviceWorker" in navigator) {
//   if (navigator.serviceWorker.controller) {
//     console.log("Active service worker found, no need to register");
//   } else {
//     // Register the service worker
//     navigator.serviceWorker
//       .register("../sw.js", {
//         scope: "./"
//       })
//       .then(function (reg) {
//         console.log("Service worker has been registered for scope: " + reg.scope);
//       });
//   }
// }
