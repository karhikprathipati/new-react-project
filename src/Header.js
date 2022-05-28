import ReactLogo from './react-logo.png';
import './index.css';
function Header() {
    return (
        <header>
            <nav className='navbar'>

                <img classname='item' src={ReactLogo} width="100px" height="100px"></img>

                <div className='items'>
                    <p className='item'>Pricing</p>
                    <p className='item'>Contact</p>
                    <p className='item'>About</p>
                    <p className='item'>Support</p>
                </div>
            </nav>
        </header>
        
    );
}
export default Header;