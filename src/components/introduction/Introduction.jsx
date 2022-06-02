import "../introduction/Intro.css"
import Kelly from "../../images/young.webp"


const Introduction = () => {
    return (
      <div className='i'>
        <div className='i-left'>
          <div className='i-left-wrapper'>
            <h1>Hello, I am Kelly Audu</h1>
            <h5>
              AWS Backend Software Engineer || Software Consultant
              <h5>with over 6 years of industry experience</h5>
            </h5>
            <div className='i-left-wrapper-buttons'>
              <button className='i-left-wrapper-buttons-left'> Contact Us</button>
              <button className="i-left-wrapper-buttons-right"> Download Resume</button>
            </div>
          </div>
        </div>
            <div className='i-right'>
                <img src={Kelly} alt="" className="i-img" />
            </div>
      </div>
    );
};

export default Introduction;
