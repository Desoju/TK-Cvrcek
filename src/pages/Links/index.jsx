import discord from "./../../images/icons/discord.png";
import facebook from "./../../images/icons/facebook.png";
import instagram from "./../../images/icons/instagram.png";
import "./style.scss";

export const Links = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/tk_cvrcek/?igsh=azRmdG9lMm9meWRl&fbclid=IwAR2F7QwT9j9UwIzQxODJTbEebNAeNYjUCtsuI8VNd8m2_lZ3OXH8XMJsgxU"
    );
  };
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=61555326507157");
  };
  const handleDiscordClick = () => {
    window.open(
      "https://discord.com/invite/urJt2Faqtu?fbclid=IwAR12vuwZRmMEdU9nf9u7XYuQJWv7cDNKrckTSFXMYJT4I-6o9PrT5W2XwBs"
    );
  };
  return (
    <div className="links">
      <img
        className="links__link"
        src={instagram}
        alt="logo instagramu"
        onClick={handleInstagramClick}
      />
      <img
        className="links__link"
        src={facebook}
        alt="logo facebooku"
        onClick={handleFacebookClick}
      />
      <img
        className="links__link"
        src={discord}
        alt="logo discordu"
        onClick={handleDiscordClick}
      />
    </div>
  );
};

/*


*/
