import './index.scss';
import JaneStreet from '../../assets/images/janestreet.png';
import HackLogo from '../../assets/images/hacklogo.png';
import BoeingLogo from '../../assets/images/boeinglogo.png';
import NasaLogo from '../../assets/images/nasalogo.png';

const Experience = () => {
    return (
        <div className='experience'>
            <h1 data-aos="fade-in">Experience</h1>
            <div className="orgs">
                <div className="small-box">
                    <div className='white-box'>
                        <img src={JaneStreet} alt="JS Logo" />
                    </div>
                    <h3>Jane Street</h3>
                    <p>AMP Scholar/Participant</p>
                </div>
                <div className="small-box">
                    <div className='white-box'>
                        <img src={HackLogo} alt="Hack Logo" />
                    </div>
                    <h3>Hack4Impact</h3>
                    <p>Full-Stack Developer</p>
                </div>
                <div className="small-box">
                    <div className='white-box'>
                        <img src={BoeingLogo} alt="Boeing Logo" />
                    </div>
                    <h3>Boeing</h3>
                    <p>CorePlus Aerospace Intern</p>
                </div>
                <div className="small-box">
                    <div className='white-box'>
                        <img src={NasaLogo} alt="NASA logo" />
                    </div>
                    <h3>NASA</h3>
                    <p>HUNCH Participant</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;