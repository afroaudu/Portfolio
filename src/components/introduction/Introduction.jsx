import "../introduction/Intro.css"
import Kelly from "../../images/dorrells.png"


const Introduction = () => {
    return (
      <div className='i'>
        <div className='i-left'>
          <div className='i-left-wrapper'>
            <h1 className='i-intro'>Hello, I am Kelly Audu</h1>
            <div className='i-title'>
              <div className='i-title-wrapper'>
                <div className='i-title-item'>AWS EXPERT</div>
                <div className='i-title-item'>SOFTWARE CONSULTANT</div>
                <div className='i-title-item'>FULL-STACK ENGINEER</div>
                <div className='i-title-item'>WRITER</div>
                <div className='i-title-item'>FRONT-END DEVELOPER</div>
              </div>
            </div>
            <div className='i-desc'>
              I provide the necessary expertise to help businesses make
              important decisions about their digital technology and online
              presence. Since software choices often impact ecommerce, let me help your
              company protect their investments and
              increase sales.
            </div>
            <div className='i-left-wrapper-buttons'>
              <button className='i-left-wrapper-buttons-left'>
                {' '}
                Contact Us
              </button>
              <button className='i-left-wrapper-buttons-right'>
                {' '}
                Download Resume
              </button>
            </div>
          </div>
        </div>
        <div className='i-right'>
          <img src={Kelly} alt='' className='i-img' />
        </div>
      </div>
    );
};

export default Introduction;
