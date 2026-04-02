type SectionHeaderProps = {
  title: string;
  hr?: boolean;
  className?: string;
};

const SectionHeader = ({
  title,
  hr = true,
  className = "",
}: SectionHeaderProps): JSX.Element => {
  return (
    <div className={`section-header ${className}`}>
      <h2>{title}</h2>
      {hr && <hr />}
    </div>
  );
};

export default SectionHeader;
