import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Services from "../service/Assos.service";
export default function Categories() {
  const navigate = useNavigate();
  const [asso, setAsso] = useState(null);
  useEffect(() => {
    Services.getFirstAssoWithItsCat().then((res) => {
      console.log(res)
      setAsso(res);
    });
  }, []);

  return (
    <div className="categories allbg">
      {asso?.map((oneCat, idx) => {
        return (
          <div
            key={oneCat.id}
            className="boxCategory"
            onClick={() => navigate(`/categories/${idx + 1}`)}
          >
            <h2>{oneCat.category_name}</h2>
            <img className="pictureSizeCategories" src={oneCat.src} />
          </div>
        );
      })}
    </div>
  );
}
