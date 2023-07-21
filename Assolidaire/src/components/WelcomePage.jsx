import { Carousel } from "antd";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import * as Services from '../service/Assos.service';

export default function WelcomePage() {
  const [data, setData] = useState(null)
  const [random, setRandom] = useState(Math.floor(Math.random() * data?.length));
  const [stop, setStop] = useState(null)

  const opener = () => {setTimeout(() => {
    window.open(data[stop].lien);
  }, 3000)}

  useEffect(() => {
    Services.getAssos().then((res) => {setData(res)})
  }, []);
  
  !stop  &&
   setTimeout(() => {
    setRandom(Math.floor(Math.random() * data?.length))
   }, 100)
  if (!data) {
    return <div>loading ...</div>
  }
  return (
    <div className="allbg">
      <Carousel  className="carousel">
        <div>
          <img className="insideCarousel" src="../src/assets/Carousel/carousel1.PNG"/>
        </div>
        <div>
        <img className="insideCarousel" src="../src/assets/Carousel/carousel2.PNG"/>
        </div>
        <div>
        <img className="insideCarousel" src="../src/assets/Carousel/carousel3.PNG"/>
        </div>
      </Carousel>
      <div className="randomizer-text">
        <h1>Le don aléatoire</h1>
        <h3>
          Vous vous sentez être une âme charitable mais ne savez pas à qui donner ?
          Faites confiance à {"l'aléatoire"} !
        </h3>
      </div>
      <div className="randomizer-pictures">
        <button className="button-don" onClick={() => 
         setStop(Math.floor(Math.random() * data.length))}>Je donne !</button>
         <img
         className="pictureSize"
         src={`${stop ? data[stop]?.src : data[random]?.src}`} 
         alt={`${stop ? data[stop]?.name : data[random]?.name}`}></img>;
      </div>
         {stop && <Popup trigger={Boolean(stop)} setButton={setStop}>
          <h3>Vous allez être redirigé vers le site de {data[stop].name}</h3>
          {
            opener()
          }
          <h4>Merci de votre visite et à bientôt !</h4>
          
         </Popup>}
    </div>
  );
}
