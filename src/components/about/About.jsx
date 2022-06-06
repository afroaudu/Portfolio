import "./about.css"
import pexels from '../../images/photomanias.png';


const About = () => {
    return (
      <div>
        <h1 className='a-head'>ABOUT KELLY</h1>
        <div className='a'>
          <div className='a-left'>
            <p>
              
              Kelly has worked hard to acquire the education, experience and
              skills needed to become a Software Consultant and I am confident
              that I have what it takes to be one of the very best in this
              profession. I would like to put my expertise in this area to work
                        for your company. </p>
            <p>I have a bachelor’s degree in Software
              Engineering and I have five years of experience working as an
              engineer. I have acquired my license and knowledge of a wide
              variety of programming languages such as Pearl, C++, Java, Matlab,
              Falcon and Lynx. I also have extensive knowledge of computer
              systems, networks and a variety of software programs. I posses
              outstanding communication skills with the ability to read, write
                        and communicate verbally with other professionals.</p>
                <p> I am used to
              working alone but I have the interpersonal skills to work with a
              team when necessary. I also have active listening skills with the
              ability to stay focused on the issues at hand, which reduces
              misunderstandings and helps to keep operations running smoothly.
            </p>
          </div>
          <div className='a-right'>
            <img src={pexels} alt='' className='a-img' />
          </div>
        </div>
      </div>
    );
};

export default About;
