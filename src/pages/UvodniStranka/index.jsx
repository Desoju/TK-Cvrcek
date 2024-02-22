import './style.scss';
import logo from './../../images/logo.png';
import Logo_Cvrcek_Barev from './../../images/Logo_Cvrcek_Barev.png';

export const UvodniStranka = () => {
  return (
    <div>
      <img src={ logo } alt="logo České tábornické unie" />
      <img src={ Logo_Cvrcek_Barev } alt="logo TK Cvrček" />
    </div>
  );
};
