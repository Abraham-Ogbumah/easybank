import OnlineBank from '@assets/images/icon-online.svg'
import Budgetting from '@assets/images/icon-budgeting.svg'
import Onboarding from '@assets/images/icon-onboarding.svg'
import FastAPI from '@assets/images/icon-api.svg'

const AboutUs = () => {
  return (
    <div>
      <h1>Why choose Easybank</h1>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <div>
        <div className="icon-container">
            <img src={OnlineBank} alt="online bank icon" />
        </div>
        <h2>Online Banking</h2>
        <p>
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </div>

      <div className="feature">
        <div className="icon-container"><img src={Budgetting} alt="budgetting icon" /></div>
        <h2>Simple Budgeting</h2>
        <p>
          See exactly where your money goes each month. Receive notifications
          when you're close to your hitting limits.
        </p>
      </div>

      <div className="feature">
        <div className="icon-container"><img src={Onboarding} alt="Onboarding icon" /></div>
        <h2>Fast Onboarding</h2>
        <p>
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>

      <div className="feature">
        <div className="icon-container"><img src={FastAPI} alt="fastAPI icon" /></div>
        <h2>Open API</h2>
        <p>
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
