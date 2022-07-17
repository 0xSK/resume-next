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
    <div className={`${className}`}>
      {contactData.map((contactItem, index) => (
        <p
          key={index}
          className={`
          ${align === "left" ? "text-left" : "text-right"}
        `}
        >
          {align === "left" && (
            <span className="text-xs">{contactItem.icon} </span>
          )}
          <a href={contactItem.url} target="_blank" rel="noopener noreferrer">
            {contactItem.text}
          </a>
          {align === "right" && (
            <span className="text-xs"> {contactItem.icon}</span>
          )}
        </p>
      ))}
    </div>
  );
};

export default Contact;
