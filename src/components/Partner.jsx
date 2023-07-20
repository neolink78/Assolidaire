import emailjs from "emailjs-com"
import { useRef } from "react";

export default function Partner () {

    const form = useRef(null)
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_5n6a1pi",
            "template_pp3kp54",
            e.target, '8BcS0szK968K1Xnej'
          )
          .then(
            (result) => {
              console.info(result.text);
              
              form.current.reset();
            },
            (error) => {
              console.error(error.text);
              
            }
          );}

          return (
            <div className="allPartners">
             <form
             className="Partner"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <input
                type="text"
                placeholder="username"
                id="text"
                name="name"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="email@example.com"
                id="email"
                name="user_email"
              />
            </div>
            <div>
              <textarea
                placeholder="Type your text here"
                name="message"
              />
            </div>
            <input
              type="submit"
              value="Send"
            />
          </form>
            </div>
          )
}