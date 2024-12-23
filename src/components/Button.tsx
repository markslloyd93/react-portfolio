import { Link } from "react-router-dom";

interface Props {
  buttonText: string;
  buttonLink: string;
}
function Button({ buttonText, buttonLink }: Props) {
  return (
    <Link
      to={buttonLink}
      className="bg-brand-blue text-brand-white font-interBold p-2.5 hover:ring hover:ring-brand-green focus:outline-none focus:ring focus:ring-brand-green"
    >
      {buttonText}
    </Link>
  );
}

export default Button;
