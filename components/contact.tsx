import styles from "../styles/knobs.module.scss";
import { contactData } from "../data/contact";
import { ResumeEntry } from "./resumeentry";

type ContactProps = {
  className?: string;
  align?: "left" | "right";
  reverse?: boolean;
};

const Contact = ({
  className = "",
  align = "right",
  reverse = false,
}: ContactProps): JSX.Element => {
  if (reverse) {
    var contactDataOrdered = contactData.slice().reverse();
  }
  else {
    var contactDataOrdered = contactData;
  }
  return (
    <div className={`contact ${className}`}>
      {contactDataOrdered.map((contactItem, index) => (
        <p
          key={index}
          className={`
          ${align === "left" ? "text-left" : "text-right"}
        `}
        >
          {align === "left" && (
            <span className="icon left">{contactItem.icon} </span>
          )}
          <span className="text">
            <a href={contactItem.url} target="_blank" rel="noopener noreferrer">
              {contactItem.text}
            </a>
          </span>
          {align === "right" && (
            <span className="icon right"> {contactItem.icon}</span>
          )}
        </p>
      ))}
    </div>
  );
};

export default Contact;
