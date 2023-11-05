import mockUps from '@assets/images/image-mockups.png'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="mockups">
            <img src={mockUps} alt="mockups" />
        </div>
        <div className="hero-text">
            <h1 className="header-text">
                Next generation digital banking
            </h1>
        </div>
    </div>
  )
}

export default Hero