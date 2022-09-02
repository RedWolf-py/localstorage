const demo = document.querySelectorAll('.d');

demo.forEach(el => {
  let divs = el
  
  divs.addEventListener('mouseover', (e) => {
    let clicada = e.target.id
    if (clicada) {
      divs.classList.remove('t')
    }
  })
  divs.addEventListener('mouseleave', (e) => {
    let clicada = e.target.id
    if (clicada) {
      divs.classList.remove('t')
    }
    divs.classList.remove('tr')
  })
})
