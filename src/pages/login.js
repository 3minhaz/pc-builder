import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";

const Login = () => {
  return (
    <div className="mx-auto">
      <button
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
