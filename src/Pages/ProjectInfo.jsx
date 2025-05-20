/* eslint-disable react/prop-types */
import { useProjectContext } from '../context/ProjectContext'
import Spinner from '../components/Spinner'
import './_projectInfo.scss'
import Navigate from '../components/Navigate'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import CardsMoreProjects from '../components/CardsMoreProjects'
import CategoryTabs from '../components/CategoryTabs'
import Footer from '../components/Footer/Footer'
import BreakLine from '../components/BreakLine/BreakLine'
import { useEffect, useState } from 'react'

const ProjectInfo = ({ ...props }) => {
  // useEffect(() => {
  //   console.log(context.projectFeatured)
  // console.log(context.projectFeatured.challenge)
  // console.log(context.loading)
  // }, [])

  const context = useProjectContext()
  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      // Nos aseguramos de que el contexto ya tenga los datos cargados
      if (context.projectFeatured && context.projectFeatured.galleryImages) {
        // Si por alguna razón es promesa, podrías hacer await aquí, pero parece ser un array simple
        const loadGallery = await setGalleryImages(context.projectFeatured.galleryImages)
        return loadGallery
      }
    }
    getImages()
  }, [context.projectFeatured, window.location]) // Dependencia correcta: cuando cambie el proyecto, vuelve a ejecutar

  return (
    <>
      <Navigate />
      {context.loading
        ? <Spinner />
        : (
          <div>
            {/* <div className='textureProjects' /> */}
            <section className='bgProjects'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-12 col-md-6 col-lg-6'>
                    <h5 className='year'>{`${context.projectFeatured.year}`}</h5>
                    <h1 className='title'>{`${context.projectFeatured.projectName}`}</h1>
                    <p className='brand'>{`${context.projectFeatured.brand}`}</p>
                  </div>
                  <div className='col-12 col-md-6 col-lg-6'>
                    <img className='image img-fluid' src={`${context.projectFeatured.image}`} />
                  </div>
                </div>
              </div>
              {/* The challenge */}
              <div className='container'>
                <div className='row mt-4 justify-content-left'>
                  <div className='col-12 col-md-12 col-lg-12'>
                    <h3 className='subtitle'>About the problem</h3>
                    <p className='bodyText'><BreakLine text={`${context.projectFeatured.challenge}`} /></p>
                  </div>
                </div>
                {/* The approach */}
                <div className='row mt-4'>
                  <div className='col-12 col-md-12 col-lg-12'>
                    <h3 className='subtitle'>The solution</h3>
                    <p className='bodyText'><BreakLine text={`${context.projectFeatured.approach}`} /></p>
                  </div>
                </div>
                {/* The impact */}
                <div className='row mt-4'>
                  <div className='col-12 col-md-12 col-lg-12'>
                    <h3 className='subtitle'>The impact</h3>
                    <p className='bodyText'><BreakLine text={`${context.projectFeatured.impact}`} /></p>
                  </div>
                </div>
                {/* The impact */}
                {/* image gallery */}
                <div className='row mt-4'>
                  <div className='display-grid'>
                    {galleryImages
                      ? galleryImages.map((img) => (
                        <img
                          className='img-fluid border-radius-20 galleryImg'
                          src={img}
                          key={img}
                          alt='Gallery'
                        />
                      ))
                      : (<p className=''>No extra images for this project</p>)}
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-12 col-md-12 col-lg-12'>
                    <h3 className='subtitle'>Skills and software used in this project</h3>
                    <div className='pillsContainer'>
                      {context.projectFeatured.skills
                        ? context.projectFeatured.skills.map((skill) => <p className='pills' key={skill}>{`${skill}`}</p>)
                        : <p className=''>No skills required</p>}
                    </div>
                  </div>
                </div>
                {/* More Projects */}
                <div className='row mt-4'>
                  <div className='col-12 col-md-12 col-lg-12 mt-4'>
                    <h3 className='subtitle'>More related projects</h3>
                    {/* Category Tabs */}
                    <div className='row mt-4'>
                      <div className='col-12 col-md-12 col-lg-12'>
                        <CategoryTabs />
                      </div>
                    </div>
                    <CardsMoreProjects />
                  </div>
                </div>
              </div>
            </section>
          </div>
          // eslint-disable-next-line indent
        )}
      {/* More Projects Carousel */}
      <ScrollToTop />
      {/* Footer */}
      <Footer />
    </>
  )
}
export default ProjectInfo
