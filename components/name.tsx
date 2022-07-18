import styles from "../styles/knobs.module.scss";

type NameProps = {
  hindi?: boolean;
};

const Name = ({ hindi = false }: NameProps): JSX.Element => (
  <h1 className={`name ${hindi && "with-hindi"}`}>
    <span className="english">Shreyas Kishore</span>
    {hindi && (
      <>
        <span className="middot"> &middot; </span>
        <span className="hindi font-hindi">श्रेयस किशोर</span>
      </>
    )}
  </h1>
);

export default Name;
