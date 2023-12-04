import Stack from '../../assets/techstack.png';

function About() {

    return (
      <>
        <div>
            <h2 className="about-me-heading">About Me</h2>
              <div className='about-container'>
                <p>
                I am a full stack developer who is passionate about creating innovative and user-friendly web applications. Through my portfolio, I aim to showcase my progress, demonstrate my enthusiasm for coding, and contribute to projects that make a difference. If you want to collaborate on a project or just want to say hi, feel free to reach out to me on LinkedIn or via email.
                </p>
              </div>
              <figure>
                <img src={Stack} alt="Tech Skills" className="tech-skills-image" />
              </figure>
        </div>
      </>
    );

}

export default About;