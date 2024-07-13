import { images } from "../data/images.js";
const gallery = document.getElementById("gallery");

for (let i = 0; i < Object.keys(images).length; i++) {
  let div = document.createElement("div");
  div.className = 'container'
  div.innerHTML = addImg(
    images[i].name,
    images[i].date,
    images[i].author,
    images[i].path,
    images[i].link
  );
  gallery.appendChild(div);
}

function addImg(name, date, author, path, link) {
  return `<a
            class="container-link"
            href="${link}"
          >
            <img
              class="container-img"
              src="static/img/arts/${path}.webp"
              alt="${name}"
            />
            <div class="container-text">
              <p>
                <b>${name}</b><br />
                de ${author} (${date})
              </p>
            </div>
          </a>`;
}
