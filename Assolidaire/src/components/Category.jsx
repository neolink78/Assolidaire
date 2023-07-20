import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Popup from "./Popup";
import { useEffect, useState } from "react";
import * as Services from "../service/Assos.service";

export default function Category() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [assos, setAssos] = useState(null);

  const [link, setLink] = useState(null)
  const [name, setName] = useState(null)

  useEffect(() => {
    Services.getAssosByCategory(id).then((res) => {
      setAssos(res);
    });
  }, []);

  const opener = (link) => {
    setTimeout(() => {
      window.open(link);
    }, 3000);
  };

  return (
    <div className="allbg allSingleCat">
      <AiOutlineArrowLeft
        className="backArrow"
        onClick={() => navigate("/categories")}
      />
      <div className="categories">
        {assos?.map((oneCat) => (
          <div
            key={oneCat.id}
            className="boxCategory"
            onClick={() => {
              setLink(oneCat.lien)
              setName(oneCat.name)
              setOpenPopup(!openPopup);
            }}
          >
            <h2>{oneCat.name}</h2>
            <img className="pictureSizeCategories" src={`../${oneCat.src}`} />
            {openPopup && (
              <Popup trigger={openPopup} setButton={setOpenPopup}>
                <h3>Vous allez être redirigé vers le site de {name}</h3>
                <h3>Merci de votre visite et à bientôt !</h3>
                {opener(link)}
              </Popup>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
