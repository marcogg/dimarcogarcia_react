/* eslint-disable react/prop-types */
// import { useEffect } from 'react'
import { useProjectContext } from '../context/ProjectContext'
import Spinner from '../components/Spinner'
import './_projectInfo.scss'
import Navigate from '../components/Navigate'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import CardsMoreProjects from '../components/CardsMoreProjects'
import { useNavigate } from 'react-router-dom'
import CategoryTabs from '../components/CategoryTabs'
import Footer from '../components/Footer/Footer'

const ProjectInfo = ({ ...props }) => {
  // useEffect(() => {
  //   console.log(context.projectFeatured)
  // console.log(context.projectFeatured.challenge)
  // console.log(context.loading)
  // }, [])

  const context = useProjectContext()
  const navigate = useNavigate()

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
                    <p className='bodyText'>{`${context.projectFeatured.challenge}`}</p>
                  </div>
                </div>
                {/* The approach */}
                <div className='row mt-4'>
                  <div className='col-12 col-md-12 col-lg-12'>
                    <h3 className='subtitle'>The solution</h3>
                    <p className='bodyText'>{`${context.projectFeatured.approach}`}</p>
                  </div>
                </div>
                {/* The impact */}
                <div className='row mt-4'>
                  <div className='col-12 col-md-12 col-lg-12'>
                    <h3 className='subtitle'>The impact</h3>
                    <p className='bodyText'>{`${context.projectFeatured.impact}`}</p>
                  </div>
                </div>
                {/* The impact */}
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
