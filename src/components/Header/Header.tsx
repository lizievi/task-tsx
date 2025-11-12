import "./header.css";
interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <h1 className="h-40 text-5xl font-extrabold neon-animated transition-all duration-300 flex items-center justify-center text-black">
        {title}
      </h1>
      <h2></h2>
    </>
  );
};
