
/* eslint-disable */
export default function Popup({ trigger, children, setButton, link }) {
  return (
    trigger && (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => setButton(false)}>
            close
          </button>
          
          {children}
        </div>
      </div>
    )
  );
}
