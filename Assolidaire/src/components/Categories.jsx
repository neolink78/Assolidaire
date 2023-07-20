import { useNavigate } from "react-router-dom";

export default function Categories() {
    const allcategories = [
        {
        id: 1,
        name: 'Repas',
        img: 'src/assets/pauvrete/restos.png',
        },
        {
        id: 2,
        name: 'Santé',
        img: 'src/assets/sante/sidaction.png'
    },{
        id: 3,
        name: 'Patrimoine',
        img: 'src/assets/patrimoine/artFrançais.png'
    },{
        id: 4,
        name: 'Environnement',
        img: 'src/assets/ecologie/LPO-env.png'
    }]

    const navigate = useNavigate();

  return (
    <div className="categories allbg">
      {allcategories.map((oneCat) => {
        return(
      <div  key={oneCat.id}
      className="boxCategory"
      onClick={() => navigate(`/categories/${oneCat.id}`)}>
        <h2>{oneCat.name}</h2>
        <img
          className="pictureSizeCategories"
          src={oneCat.img}
        />
      </div>)})}
    </div>
  );
}
