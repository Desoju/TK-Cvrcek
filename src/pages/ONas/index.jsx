import "./style.scss";
/*
import DavidPhoto from './leader_phots/DavidPhoto.jpg';
import JancaPhoto from './leader_phots/JancaPhoto.jpg';
import JindraPhoto from './leader_phots/JindraPhoto.jpg';
*/

export const ONas = () => {
  /*
  const leaders = ["Ruda", "David", "Janča", "Marťa", "Áňa", "Ondra", "Jindra", "Vojta"];
  const photos = [DavidPhoto, JindraPhoto, JancaPhoto];

  const leadersWithPhotos = leaders.map((leaderName, index) => ({
    name: leaderName,
    photo: photos[index],
  }));*/

  return (
    <div className="o_nas">
      <h1>O nás</h1>
      <p>
      V TK Cvrček věříme, že pobyt v přírodě je pro děti a mládež nesmírně důležitý. Učí je respektu k životnímu prostředí, rozvíjí jejich fyzickou a psychickou kondici a podporuje jejich kamarádství. Proto pořádáme letní tábory, víkendové výlety a další akce, na kterých se děti a mládež můžou s radostí pustit do nejrůznějších aktivit. Každý rok se těšíme na tábory pod stanem v krásné přírodě nedaleko Lysic u Brna. Tábory jsou skvělou příležitostí, jak se seznámit s novými kamarády a zažít nezapomenutelné dobrodružství.
      </p>
      <h3>Tým vedoucích</h3>
      <p>
      Naše parta vedoucích se skládá z mladých lidí s bohatými zkušenostmi s tábornictvím a pobytem v přírodě. Jsme zodpovědní, spolehliví a s úsměvem na tváři se vrháme do všech aktivit, které pro naše táborníky chystáme. Máme zkušenosti z dlouholetého fungování klubu TK Delfín, v němž jsme všichni vyrostli jako účastníci a postupně přešli do role vedoucích a instruktorů. Tábory i ostatní akce pořádáme ve svém volném čase vedle studia či práce, protože v tom vidíme smysl a chceme předávat naše zážitky z tábornického klubu dál.
      </p>
      {/*
      <ul>
        leadersWithPhotos.map((person, index) => (
          <li key={index}>
            <a href={`#${person.name}`}>{person.name}</a>
            <img src={person.photo} alt={person.name} />
          </li>
        ))
      </ul>*/}
    </div>
  );
};
