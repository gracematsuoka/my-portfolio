import './index.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <div className='home-btn'>
                    <a href="#home">grace matsuoka</a>
                </div>
                    <div className='rest'>
                    <a href="#projects">projects</a>
                    <a href="#experience">experience</a>
                    <a href="#about">about</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;