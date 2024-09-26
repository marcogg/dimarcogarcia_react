import './_portfolio.scss'
import Spinner from '@/components/Spinner'
import Cards from '@/components/Cards'
import { useProjectContext } from '@/context/ProjectContext'
import CategoryTabs from '../CategoryTabs/CategoryTabs'

const Portfolio = () => {
  // Context use
  const context = useProjectContext()

  return (
    <>
      <section className='mY-5' id='projects'>
        <div className='container'>
          <div className='row w-100'>
            <div className='col-12 col-md-6 col-lg-6'>
              <h2 className='title text-left'>Projects</h2>
            </div>
          </div>
          <div className='row w-100 noWrap mY-5'>
            <CategoryTabs />
          </div>
          <div className='row w-100'>
            <div className='projects' id='projects'>
              {context.loading
                ? <Spinner />
                : context.projectList.map(project => (
                  <Cards
                    key={project._id}
                    {...project}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
