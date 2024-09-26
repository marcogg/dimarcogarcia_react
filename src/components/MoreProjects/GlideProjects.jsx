import Glide from '@glidejs/glide'

const GlideProjects = () => {
  const toArray = Array.from(document.querySelectorAll('.glideProjects'))

  toArray.map(async (item, index) => {
    const slideProjects = await new Glide('.glideProjects', {
      autoplay: 4000,
      perView: 1,
      hoverpause: true,
      bond: true,
      gap: 50,
      breakpoints: {
        1024: {
          perView: 4,
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
    return slideProjects.mount()
  })
}

export default GlideProjects

// import Glide from '@glidejs/glide'
// import { useProjectContext } from '../../context/ProjectContext'

// const GlideProjects = () => {
//   const context = useProjectContext()
//   // const toArray = Array.from(document.querySelectorAll('.glideProjects'))

//   context.projectList.map((item, index) => {
//     const slide = new Glide('.glideProjects', {
//       autoplay: 4000,
//       perView: 1,
//       hoverpause: true,
//       bond: true,
//       gap: 50,
//       breakpoints: {
//         1024: {
//           perView: 4,
//           gap: 10
//         },
//         768: {
//           perView: 1,
//           gap: 20
//         },
//         380: {
//           perView: 1,
//           gap: 20
//         }
//       }
//     })
//     return slide.mount()
//   })
// }

// export default GlideProjects
