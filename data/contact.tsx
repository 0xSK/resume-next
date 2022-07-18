type ContactEntry = {
  url: string;
  text: string;
  icon: JSX.Element;
};

export const contactData: ContactEntry[] = [
  {
    url: "https://www.linkedin.com/in/0xsk/",
    text: "linkedin.com/in/0xsk",
    icon: (
      <span className="fa-stack">
        {/* <i className="fas fa-square fa-stack-2x fa-inverse" />
        <i className="fab fa-linkedin fa-stack-2x" style={{
            transform: "scale(0.9)",
          }} /> */}
        <i className="fas fa-square fa-stack-2x" />
        <i
          className="fab fa-linkedin-in fa-stack-1x fa-inverse"
          style={{
            transform: "scale(1.1)",
          }}
        />
      </span>
    ),
  },
  {
    url: "https://github.com/0xsk",
    text: "github.com/0xsk",
    icon: (
      <span className="fa-stack">
        <i className="fas fa-square fa-stack-2x" />
        <i
          className="fab fa-github fa-stack-1x fa-inverse"
          style={{
            transform: "scale(1.2)",
          }}
        />
      </span>
    ),
  },
  {
    url: "tel:+19735203290",
    text: "+1 973 520 3290",
    icon: (
      <span className="fa-stack">
        <i className="fas fa-square fa-stack-2x" />
        <i className="fas fa-phone fa-stack-1x fa-inverse" />
      </span>
    ),
  },
  {
    url: "mailto:i@0xsk.io",
    text: "i@0xsk.io",
    icon: (
      <span className="fa-stack">
        <i className="fas fa-square fa-stack-2x" />
        <i className="fas fa-paper-plane fa-stack-1x fa-inverse" />
      </span>
    ),
  },
  {
    url: "https://0xsk.io",
    text: "0xsk.io",
    icon: (
      <span className="fa-stack">
        <i className="fas fa-square fa-stack-2x" />
        <i className="fab fa-internet-explorer fa-stack-1x fa-inverse" />
      </span>
    ),
  },
];
