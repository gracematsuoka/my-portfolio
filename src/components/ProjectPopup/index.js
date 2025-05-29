import './index.scss';
import close from '../../assets/images/close.svg';
import recovery from '../../assets/images/recovery.png';

const ProjectPopup = () => {
    return (
        <div className='project-popup'>
            <div className='popup-container'>
                <div className='top'>
                    <img src={recovery} alt="recovery"/>
                    
                </div>
                <div className='description'>
                    
                </div>
                <button className='close-button'>
                    <img src={close} alt="Close"/>
                </button>
            </div>
        </div>
    );
}

export default ProjectPopup;