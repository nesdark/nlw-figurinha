const Modal = {
  open: function () {
    console.log("Modal aberta")
    document.body.classList.add("modal-open")
  },
  close: function () {
    document.body.classList.remove("modal-open")
  },
}

function createCard(user, description, trail) {
  let cards = document.querySelector("#cards")
  let card = document.createElement("div")
  card.classList.add("card")
  card.setAttribute("style", `background: var(--card-${trail});`)
  card.innerHTML = `
    <div class="user">
      <img src="./src/user.png" alt="Imagem do ${user}" />
    </div>
    <div class="bottom">
      <h3>${user}</h3>
      <p>${description}</p>
    </div>
  `
  cards.appendChild(card)
}

document.querySelector("form").addEventListener("submit", () => {
  event.preventDefault()
})

function generateCard() {
  const name = document.querySelector("#name").value
  const description = document.querySelector("#description").value
  const trail = document.querySelector("#trail").value

  createCard(name, description, trail)
}
