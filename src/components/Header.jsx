import Image from "./Image";
import { IMAGE_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-linear-to-b from-black z-10">
      <Image src={IMAGE_URL.netflixLogo} alt="Netflix Logo" className="w-48" />
    </div>
  );
};

export default Header;
