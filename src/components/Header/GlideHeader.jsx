import Glide from '@glidejs/glide'

const GlideHeader = () => {
  const toArray = Array.from(document.querySelectorAll('.glideHeader'))

  toArray.forEach((item, index) => {
    const slide = new Glide('.glideHeader', {
      autoplay: 4000,
      perView: 1,
      hoverpause: true,
      bond: true,
      gap: 50,
      breakpoints: {
        1024: {
          perView: 1,
          gap: 10
        },
        768: {
          perView: 1,
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

export default GlideHeader
