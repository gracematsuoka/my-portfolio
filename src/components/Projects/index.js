import './index.scss';
import Recovery from '../../assets/images/recovery.png';
import LifeCrash from '../../assets/images/lifecrash.png';
import Fit from '../../assets/images/fit.png';
import Found from '../../assets/images/found.png';
import iMovie from '../../assets/images/imovie.png';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-header" data-aos="fade-down">
                <h1>Projects</h1>
                <p>click below for <b>github</b> links 🔗</p>
            </div>
            <div className='horizontal-wrapper'>
                <div className='projects-wrapper'>
                    <div className='projects-container' id="left">
                        <a href='https://github.com/cornellh4i/ithaca-recovery' target="_blank" rel="noopener noreferrer" data-aos="fade-right">
                            <div className="box" id="recovery">
                                <img src={Recovery} alt="recovery" />
                                <h2>❊ Ithaca Recovery</h2>
                                <p>meeting schedule and organization platform to serve over 30,000 users at a local nonprofit organization</p>
                            </div>
                        </a>
                        <a href='https://github.com/gracematsuoka/Fit' target="_blank" rel="noopener noreferrer" data-aos="fade-right">
                            <div className="box" id="fit">
                                <img src={Fit} alt="fit" />
                                <h2>❊ Fit</h2>
                                <p>a virtual stylist integrating AI and user input to curate personalized outfits</p>
                            </div>
                        </a>
                        <a href="https://github.com/gracematsuoka/iMovie" target="_blank" rel="noopener noreferrer" data-aos="fade-right">
                            <div className="box" id="imovie">
                                <img src={iMovie} alt="imovie" />
                                <h2>❊ iMovie</h2>
                                <p>a dynamic movie database with search and save features as well as up-to-date movie recommendations</p>
                            </div>
                        </a>
                    </div>
                    <div className='projects-container' id="right">
                        <a href="https://github.com/gracematsuoka/LifeCrash" target="_blank" rel="noopener noreferrer" data-aos="fade-left">
                            <div className="box" id="lifecrash">
                                <img src={LifeCrash} alt="LifeCrash" />
                                <h2>❊ LifeCrash</h2>
                                <p>predicting future instability points with trained machine learning models and providing data-driven solutions</p>
                            </div>
                        </a>
                        <a href="https://github.com/Scott-Fukuda/Found-Backend-App" target="_blank" rel="noopener noreferrer" data-aos="fade-left">
                            <div className="box" id="found">
                                <img src={Found} alt="found" />
                                <h2>❊ Found</h2>
                                <p>a lost and found app where users can post lost items and other users can retrieve said items</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Projects;