import Header from "./Header";
import Image from "./Image";
import LoginForm from "./LoginForm";
import { IMAGE_URL } from "../utils/constants";

const Login = () => {
  return (
    <div className="relative h-screen">
      <Header />

      <Image
        src={IMAGE_URL.netflixBackground}
        alt="Netflix Background"
        className="absolute h-screen w-full object-cover"
      />

      <LoginForm />
    </div>
  );
};

export default Login;
