import discord from "./../../images/icons/discord.png";
import facebook from "./../../images/icons/facebook.png";
import instagram from "./../../images/icons/instagram.png";

export const Links = () => {
  return(
    <div className="odkazy">
        <a href="https://www.instagram.com/tk_cvrcek/?igsh=azRmdG9lMm9meWRl&fbclid=IwAR2F7QwT9j9UwIzQxODJTbEebNAeNYjUCtsuI8VNd8m2_lZ3OXH8XMJsgxU"><img className="odkazy__odkaz" src={instagram} alt="logo instagramu" onclick="window.open('https://www.instagram.com/tk_cvrcek/?igsh=azRmdG9lMm9meWRl&fbclid=IwAR2F7QwT9j9UwIzQxODJTbEebNAeNYjUCtsuI8VNd8m2_lZ3OXH8XMJsgxU'); return false;" /></a>
        <a href="https://discord.com/invite/urJt2Faqtu?fbclid=IwAR12vuwZRmMEdU9nf9u7XYuQJWv7cDNKrckTSFXMYJT4I-6o9PrT5W2XwBs"><img className="odkazy__odkaz" src={discord} alt="logo discordu" /></a>
        <a href="https://www.facebook.com/profile.php?id=61555326507157"><img className="odkazy__odkaz" src={facebook} alt="logo facebooku" /></a>
      </div>
  )
};