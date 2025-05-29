import './index.scss';
import Me from '../../assets/images/gracecircle.png';

const About = () => {
    return (
        <div className='about'> 
            <h1 data-aos="fade-in">About me</h1>
            <div className='content'>
                <div data-aos="fade-in" className='text'>
                    <h4>thank you for taking a look at my <b>portfolio!</b> here’s a little bit more about me...</h4>
                    <p><b>✻</b>  i’m a student at <b>cornell university</b> (c/o 2028) studying <b>cs with a minor in ai</b> </p>
                    <p><b>✻</b>  my passion in cs stems from my desire to <b>improve</b> the livelihood of others and to create a <b>positive mark</b> in this world using tech </p>
                    <p><b>✻</b>  i grew up in <b>olympia, wa</b> and on the other side of the screen you can find me <b>hiking</b> through the woods or <b>cooking</b> in the kitchen</p>
                </div>
                <img data-aos="fade-in" src={Me}></img>
            </div>
        </div>
    )
}

export default About;