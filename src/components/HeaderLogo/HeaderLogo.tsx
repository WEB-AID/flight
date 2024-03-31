import logo from '../../assets/logo.png';
import './HeaderLogo.css';

export default function HeaderLogo() {
  return (
    <header className="headerContainer">
      <img src={logo} alt="" />
    </header>
  );
}
