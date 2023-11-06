import mockUps from '@assets/images/image-mockups.png';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="mockups">
        <div>
          <img src={mockUps} className="mockup-image" alt="mockups" />
        </div>
      </div>
      <div className="hero-text">
        <h1 className="header-text">Next generation digital banking</h1>
        <p className="header-description">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
      </div>
    </div>
  );
};

export default Hero;
