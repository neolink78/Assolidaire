/* eslint-disable */
export default function User({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Bonjour Admin ! </h1>
      <button onClick={() => setIsLoggedIn(false)}>Déconnection</button>
    </div>
  );
}
