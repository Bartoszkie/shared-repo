/**
 * @name ContactButton
 * @description This is the showcase only component. All of it's dependencies are mocked. 
 */

import clsx from "clsx";
import { useState } from "react";
import { Send } from "../Send";
import { Button } from "../Button";
import { Close } from "../Close";

interface ContactButtonProps {
  scrollTop: number;
}

const ContactForm = () => {
  return null;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ scrollTop }) => {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div
      className={clsx("contact-form", {
        "contact-form--open": formVisible,
        "contact-form--minimized": scrollTop > 200,
      })}
    >
        <button className="contact-form__show-button" onClick={() => setFormVisible(true)}>
            <span className="contact-form__show-button-label">Contact Us</span>
            <Send className="contact-form__show-button-icon" width={20} height={20} />
        </button>
        {formVisible && (
            <form className="contact-form__form">
                <header>
                    <h1>Let's do some stuff!</h1>
                    <Button variant="text" onClick={() => setFormVisible(false)}>
                        <Close width={20} height={20} />
                    </Button>
                </header>
                <ContactForm />
            </form>
        )}
    </div>
  );
};
