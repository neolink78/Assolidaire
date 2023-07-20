import { Carousel } from "antd";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import { Link } from "react-router-dom";
const allPictures = [
  {
    id: 1,
    src: "src/assets/ecologie/greenpeace.jpg",
    alt: "greenpeace",
    link: "https://faire-un-don.greenpeace.fr/?codespec=7010N000000XjfO"
  },
  {
    id: 2,
    src: "src/assets/sante/Arc-santé.png",
    alt: "arc",
    link: "https://donner.fondation-arc.org/dons/~mon-don?_cv=1"
   
  },
  {
    id: 3,
    src: "src/assets/sante/médecins.png",
    alt: "medecins",
    link: "https://soutenir.msf.fr/faire-un-don/~mon-don?ns_ira_cr_arg=IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyPwETAZH%2BfJoZzZSLb0kPOpP5Y9vp3n4apjYFfuy8Grlj9hP3a72xFPt6G2Q3hoScwQKG%2B1BzqwWq8TXE24LU7dC7AFTc%2FWE6vWDKhiFHvwxh8Mt4ZA4ZCWtNQNWyfuSaKbg%2FQaxF7h4lw5%2BKcOxsVNrlwfjElQL3pvFcfqXfY%2B5IufZYera6AxZhbqhuYtCgNyzVn2fMlPgYt8W6CMBbybu10uY4rIW6IjN5%2FWj%2FgpuXjB4afGyKPJtFtK0fLRX%2F8pRRd9dTkYgUAU4EumWP6prOijQwBlI8mFry5WUsKLI2ig33CMA1LjdlJgkkqVNbMwONoxB8Nf0yd88fkkhhoLyzhfhI5nYPOjYrI%2FHDEFlLozWzmZhOPUEdrQAFoFSj8vFjvltlk3gLvDoPFZzhU2Nqn3VTYe%2BsWeM0MoIktFXw%3D%3D&esv_source=Google&esv_medium=SEA_Brand&esv_campaign=W%2A%2AW00001&esv_term=medecins+sans+frontiere&gad=1&gclid=CjwKCAjwtuOlBhBREiwA7agf1krxQIWWljqqnMSsGFGDbpED8hA6f14KNrTwXwmN6ApC3Wyfi8vNHRoCMBsQAvD_BwE&_cv=1"
  },
  {
    id: 4,
    src: "src/assets/sante/rechercheMedicale.png",
    alt: "rechercheMedicale",
    link: "https://www.frm.org/nous-soutenir/faire-un-don?_gl=1*j66rfj*_up*MQ..*_ga*MTAyMDgwOTc0MS4xNjg5ODQ0Mjc1*_ga_VZRMK09MJ5*MTY4OTg0NDI3NS4xLjEuMTY4OTg0NDI3Ny4wLjAuMA..&gclid=CjwKCAjwtuOlBhBREiwA7agf1rFIwD3UjXXwtqjiIsRtpAM6539tCTgrbyIolAh4irYZtt_wVhL0QxoCYAcQAvD_BwE"
  },
  {
    id: 5,
    src: "src/assets/ecologie/LPO-env.png",
    alt: "LPO",
    link: "https://www.lpo.fr/s-engager-a-nos-cotes/donner-a-la-lpo/faire-un-don/faites-un-don-a-la-lpo-france"
  },
  {
    id: 6,
    src: "src/assets/sante/sidaction.png",
    alt: "sidaction",
    link: "https://don.sidaction.org/"
  },
];
export default function WelcomePage() {
  const [random, setRandom] = useState(Math.floor(Math.random() * allPictures.length));
  const [stop, setStop] = useState(false)


  stop === false &&
   setTimeout(() => {
    setRandom(Math.floor(Math.random() * allPictures.length))
   }, 100)
   
  return (
    <div className="allbg">
      <Carousel className="carousel">
        <div>
          <h3 className="insideCarousel">bouffe</h3>
        </div>
        <div>
          <h3 className="insideCarousel">santé</h3>
        </div>
        <div>
          <h3 className="insideCarousel">patrimoine</h3>
        </div>
      </Carousel>
      <div className="randomizer-text">
        <h1>Le don aléatoire</h1>
        <h3>
          Vous vous sentez être une âme charitable mais ne savez pas à qui donner ?
          Faites confiance à l'aléatoire !
        </h3>
      </div>
      <div className="randomizer-pictures">
         <img
         className="pictureSize"
         src={`${allPictures[random].src}`} 
         alt={`${allPictures[random].alt}`}></img>;
         <button onClick={() => 
          
          setStop(true)}>Je donne !</button>
         </div>
         <Popup trigger={stop} setButton={setStop} link={allPictures[random].link}>
          <h3>Vous allez être redirigé vers le site de {allPictures[random].alt}</h3>
          {useEffect(() => {
            setTimeout(() => {
              window.open(allPictures[random].link);
            }, 3000);
          }, [stop===true])}
          <h4>Merci de votre visite et à bientôt !</h4>
          
         </Popup>
    </div>
  );
}
