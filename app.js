const closeIcon = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')
const cta = document.querySelectorAll('.cta')
const content = document.querySelector('.content')

closeIcon.addEventListener('click', () => {
  content.style.display = 'block'
  overlay.style.display = 'none'
})

cta.forEach(cta =>
  cta.addEventListener('click', () => {
    content.style.display = 'none'
    overlay.style.display = 'flex'
  })
)
