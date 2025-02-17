import { FC, ReactNode } from "react";

interface SectionHeaderProps {
  title: String;
  subTitle: String;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="max-w-5xl mx-auto text-center px-6">
      <h2 className="text-4xl font-bold tracking-wide text-yellow-400">
        {title}
      </h2>
      <p className="text-gray-400 mt-2">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
