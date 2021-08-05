import Image from "next/image";
import { signIn } from "next-auth/client";
function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        width={400}
        height={400}
        objectFit="contain"
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white cursor-pointer"
        onClick={signIn}
      >
        Login To Facebook
      </h1>
    </div>
  );
}

export default Login;
