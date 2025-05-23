import './_header.scss'
import '../../styles/_colors/_colors.scss'
import '../../styles/_layout/_layout.scss'
import '../../styles/_responsive/_responsive.scss'
import '../../styles/_fonts/_fonts.scss'
import GlideHeader from './GlideHeader'
import { useEffect } from 'react'
import Navigate from '../Navigate'

const Header = () => {
  useEffect(() => {
    GlideHeader()
  }, [])
  return (
    <header>
      <Navigate />
      <section className='mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
              <h1 className='mt-5'>Everything for your brand</h1>
              <h4 className='darkText'>Web development, Visual Design, UX/UI, & Marketing </h4>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='containerHero'>
                <img src='../img/circle.png' className='heroBg animationRotate' />
                <img src='../img/phone.png' className='phone' />
                {/* Begin: Carousel */}
                <div className='containerCarousel'>
                  <div className='glideHeader serviceCarousel'>
                    <div className='glide__track' data-glide-el='track'>
                      <ul className='glide__slides'>
                        <li className='glide__slide'>
                          <img src='../img/web-development.png' className='w-100' />
                          <h2 className='captionSlider'>Web development</h2>
                        </li>
                        <li className='glide__slide'>
                          <img src='../img/marketing.png' className='w-100' />
                          <h2 className='captionSlider'>Advertising</h2>
                        </li>
                        <li className='glide__slide'>
                          <img src='../img/socialMedia.png' className='w-100' />
                          <h2 className='captionSlider'>Marketing</h2>
                        </li>
                        <li className='glide__slide'>
                          <img src='../img/visualDesign.png' className='w-100' />
                          <h2 className='captionSlider'>Visual Design</h2>
                        </li>
                        <li className='glide__slide'>
                          <img src='../img/UX.png' className='w-100' />
                          <h2 className='captionSlider'>User Experience</h2>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End: Carousel */}
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-12'>
              <img src='../img/arrow.svg' className='arrow' />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
