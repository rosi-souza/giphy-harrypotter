const renderGif = document.querySelector('.gif');
const hammer = new Hammer(renderGif);

const getGif = () => {
  fetch('https://api.giphy.com/v1/gifs/random?api_key=v81rL9Z6TnWHxoqSV0sz3IbrGQkrB3Gr&tag=harrypotter&rating=G')
    .then(response => response.json())
    .then((data) => {
      renderGif.className = 'gif'
      const dataGif = data.data
      renderGif.innerHTML = `
        <div class="content">
          <img class="gif" src="${dataGif.image_url}" />
        </div>`
  })
}

const transitionRigth = () => {
  renderGif.className = "transition-rigth"
}

const transitionLeft = () => {
  renderGif.className = "transition-left"
}

hammer.on('swiperight', transitionLeft)
hammer.on('swipeleft', transitionRigth)
getGif();

renderGif.addEventListener("animationend", getGif);
renderGif.addEventListener("webkitAnimationEnd", getGif);
