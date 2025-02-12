import './_spinner.scss'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='spinnerContainer'>
        <img src='../../../img/loader.png' className='spinner' />
      </div>
    </div>
  )
}

export default Spinner
