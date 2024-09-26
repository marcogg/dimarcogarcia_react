import { useEffect } from 'react'
import './_info.scss'
import GlideClients from './GlideClients'

const Info = () => {
  useEffect(() => {
    GlideClients()
  }, [])

  return (
    <>
      <section id='aboutMe' className='mY-5'>
        <div className='container'>
          <div className='row justify-content-flex-end'>
            <div className='col-10 col-md-12 col-lg-12'>
              <h2>Creating, developing and expanding brands</h2>
              <h5 className='darkText'>For more than ten years</h5>
              <div className='divider' />
            </div>
          </div>
          <div className='row align-items-center mt-3'>
            <div className='col-8 col-md-10 col-lg-10' data-aos='flip-right'>
              <p className='darkText'>Hello! I am Marco Garcia and I've been <b>creating digital and physical user centered experiences since 2012</b>, working together with local, national and global brands; helping them in the process of adding value to their customer's
                lives, through marketing, advertising, web development, user experience and innovation.
              </p>
            </div>
            <div className='col-4 col-md-2 col-lg-2'>
              <img src='./img/marcoGarcia.png' className='d-block mX-auto w-100' />
            </div>
          </div>
        </div>
      </section>
      <section id='services' className='mY-5'>
        <div className='container'>
          <div className='row mt-3 w-100'>
            <div className='col-12 col-md-12 col-lg-12'>
              <h2 className='title text-left'>I can help you with</h2>
            </div>
          </div>
          <div className='row justify-content-between w-100 mt-4'>
            <div className='col-6 col-md-2 col-lg-2'>
              <div className='circle design'>
                <h2>Design</h2>
              </div>
            </div>
            <div className='col-6 col-md-2 col-lg-2'>
              <div className='circle mkt'>
                <h2>Marketing &amp; advertising</h2>
              </div>
            </div>
            <div className='col-6 col-md-2 col-lg-2'>
              <div className='circle webDev'>
                <h2>Web development</h2>
              </div>
            </div>
            <div className='col-6 col-md-2 col-lg-2'>
              <div className='circle userEx'>
                <h2>User experiences</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='glass' data-aos='fade-down'>
        <div className='container'>
          <div className='row w-100 mt-5'>
            <div className='col-6'>
              <h2 className='lightTitle text-left'>Some brands that I have boosted</h2>
            </div>
            <div className='col-5'>
              <div className='glideClients'>
                <div className='glide__track' data-glide-el='track'>
                  <ul className='glide__slides'>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients.svg' className='w-100 logoLight' />
                    </li>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients-02.svg' className='w-100 logoLight' />
                    </li>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients-03.svg' className='w-100 logoLight' />
                    </li>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients-04.svg' className='w-100 logoLight' />
                    </li>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients-05.svg' className='w-100 logoLight' />
                    </li>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients-06.svg' className='w-100 logoLight' />
                    </li>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients-07.svg' className='w-100 logoLight' />
                    </li>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients-08.svg' className='w-100 logoLight' />
                    </li>
                    <li className='glide__slide'>
                      <img src='./img/clients/clients-09.svg' className='w-100 logoLight' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src='./img/arrowHeadUp.svg' className='arrowHeadUp' />
        </div>
      </section>
    </>
  )
}

export default Info
