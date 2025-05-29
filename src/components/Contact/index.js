import github from '../../assets/images/githublogo.png';
import linkedin from '../../assets/images/linkedinlogo.png';
import mail from '../../assets/images/mail.png';
import './index.scss';

const Contact = () => {
    const copyEmail = () => {
        const email = 'gracelmatsuoka@gmail.com';
        navigator.clipboard.writeText(email)
            .then(() => {
                alert('Email copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy email: ', err);
            });
    }

    return (
        <div className='contact'>
            
            <img 
                className='mail' src={mail} alt="mail" 
                onClick={copyEmail}
            />
            <a href='https://www.linkedin.com/in/grace-matsuoka/' target="_blank" rel="noopener noreferrer">
                <img className='linked' src={linkedin} alt="linkedin" />
            </a>
            <a href='https://github.com/gracematsuoka' target="_blank" rel="noopener noreferrer">
                <img className='git' src={github} alt="github" />
            </a>
        </div>
    )
}

export default Contact