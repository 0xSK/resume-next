import styles from "../styles/knobs.module.scss";
import { contactData } from "../data/contact";

type ContactProps = {
  className?: string;
  align?: "left" | "right";
};

const Contact = ({
  className = "",
  align = "right",
}: ContactProps): JSX.Element => {
  return (
    <div className={`contact ${className}`}>
      {contactData.map((contactItem, index) => (
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
