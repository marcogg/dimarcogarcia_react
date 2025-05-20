import { useState } from 'react'
import './_footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const sendMail = (e, token) => {
    e.preventDefault()
    document.getElementById('demo-form').submit()
  }

  return (
    <>
      <footer>
        <div className='container footer'>
          <div className='row w-100'>
            <div className='col-12 col-md-6 col-lg-6'>
              <h2 className='title text-left'>Contact me</h2>
              <img src='../../../img/footer.svg' className='img-footer' />
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <form onSubmit={sendMail} />
              <div className='form-group'>
                <input type='text' name='name' placeholder='Full Name' id='texto' value={formData.name} onChange={handleChange} />
                <input type='email' name='email' placeholder='email' id='email' value={formData.email} onChange={handleChange} />
                <select name='service' id='service' value={formData.service} onChange={handleChange}>
                  <option value=''>Choose a service of your interest</option>
                  <option value=''>Design</option>
                  <option value=''>Web Design / Development</option>
                  <option value=''>Visual Design</option>
                  <option value=''>Spatial design</option>
                  <option value=''>Research and Strategy</option>
                  <option value=''>Other</option>
                </select>
                <input type='tel' name='phone' placeholder='Phone' id='email' value={formData.phone} onChange={handleChange} />
              </div>
              <div className='form-group'>
                <button className='btn btn-block' type='submit'>
                  → Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
