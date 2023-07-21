import { useState } from "react";
import * as Services from '../service/Assos.service'
/* eslint-disable */
export default function User({ setIsLoggedIn }) {
  const [asso, setAsso] = useState({
    name: '',
    src: '', 
    lien: '', 
    cat_id: '' 
  });
  const [addOrDelete, setAddOrDelete] = useState(true);


    const handleChange = (e) => {
      setAsso({...asso, [e.target.name]: e.target.value});
    };

    const adder = (e) => {
        e.preventDefault();
        Services.postAsso(asso)
        console.log(asso)
    }

    const deleter = (e) => {
      e.preventDefault();
      Services.deleteAsso(asso.name)
  }
  return (
    <>
    <div>
      <h1>Bonjour Admin ! </h1>
      <button onClick={() => setIsLoggedIn(false)}>Déconnection</button>
      <button onClick={() => setAddOrDelete(!addOrDelete)}>ajouter/suppprimer</button>
    </div>
      <div className="user-section">
          {addOrDelete ?
          <>
          <form className="login-form auth-form-container" onSubmit={adder}>
           <h2>Ajouter</h2>
              <label htmlFor="name">name</label>
              <input value={asso.name} onChange={handleChange}type="name" placeholder="ajouter un nom" id="name" name="name" />
              <label htmlFor="src">src</label>
              <input value={asso.src} onChange={handleChange} type="src" placeholder="source" id="src" name="src" />
              <label htmlFor="lien">lien</label>
              <input value={asso.lien} onChange={handleChange} type="lien" placeholder="lien" id="lien" name="lien" />
              <label htmlFor="cat_id">catégorie</label>
              <input value={asso.cat_id} onChange={handleChange} type="cat_id" placeholder="catégorie" id="cat_id" name="cat_id" />
              <p>catégories: 1= ecologie, 2=patrimoine, 3= pauvreté, 4= santé</p>
              <button type="submit">Créer</button>
          </form>
          </> : 
          <>
         <form className="login-form auth-form-container" onSubmit={deleter}>
          <h2>supprimer</h2>
             <label htmlFor="name"></label>
             <input value={asso.name} onChange={handleChange}type="name" placeholder="supprimer par nom" id="name" name="name" />
             <button type="submit">Supprimer</button>
         </form>
         </>}
      </div>
      </>
  );
}
