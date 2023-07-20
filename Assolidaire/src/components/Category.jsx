import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Popup from "./Popup";
import { useState } from "react";

export default function Category() {
  const selectedCategory = [
    {
      id: 1,
      subId: 1,
      name: "restos du coeur",
      img: "../src/assets/pauvrete/restos.png",
    },
    {
      id: 2,
      subId: 1,
      name: "Emmaus",
      img: "../src/assets/pauvrete/emmaus.png",
    },
    {
      id: 3,
      subId: 1,
      name: "Patrimoine",
      img: "../src/assets/pauvrete/secoursPopulaire.png",
    },
    {
      id: 4,
      subId: 2,
      name: "Santé",
      img: "../src/assets/pauvrete/restos.png",
    },
  ];

  const { id } = useParams();
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [title, setTitle] = useState("");
  return (
    <div className="allbg allSingleCat">
      <AiOutlineArrowLeft
        className="backArrow"
        onClick={() => navigate("/categories")}
      />
      <div className="categories">
        {selectedCategory.map(
          (oneCat) =>
            oneCat.subId === Number(id) && (
              <div
                key={oneCat.id}
                className="boxCategory"
                onClick={() => {
                  setOpenPopup(!openPopup);
                  setTitle(oneCat.name);
                }}
              >
                <h2>{oneCat.name}</h2>
                <img className="pictureSizeCategories" src={oneCat.img} />
                <Popup trigger={openPopup} setButton={setOpenPopup}>
                  <h3>Faire un don à {title}</h3>
                  <h3>this is whuiz%OBGHRU%Zgob</h3>
                </Popup>
              </div>
            )
        )}
      </div>
    </div>
  );
}
