import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const { userId } = await auth();

  if (userId != null) redirect("/");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
