import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";

const Login = () => {
  return (
    <div className="flex justify-center items-center max-h-[400px]">
      <button
        className="btn btn-info"
        onClick={() =>
          signIn("google", {
            // callbackUrl: "http://localhost:3000",
            callbackUrl: "https://pc-builder-gules.vercel.app",
          })
        }
      >
        Login with google
      </button>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
