import { FC } from "react";

interface SectionHeaderProps {
  title: String;
  subTitle: String;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, subTitle }) => {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-wide text-yellow-400">
        {title}
      </h2>
      <p className="text-gray-400 mt-2">{subTitle}</p>
    </>
  );
};

export default SectionHeader;
