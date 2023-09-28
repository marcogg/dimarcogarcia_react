import Glide from '@glidejs/glide'
// import { useEffect } from 'react'
// import '../../../node_modules/@glidejs/glide/dist/glide.min.js'

const GlideClients = () => {
  const toArray = Array.from(document.querySelectorAll('.glideClients'))

  toArray.forEach((item, index) => {
    const slide = new Glide('.glideClients', {
      autoplay: 4000,
      perView: 2,
      hoverpause: true,
      bond: true,
      gap: 50,
      breakpoints: {
        1024: {
          perView: 1,
          gap: 10
        },
        768: {
          perView: 2,
          gap: 20
        },
        380: {
          perView: 1,
          gap: 20
        }
      }
    })
    return slide.mount()
  })
}

export default GlideClients
