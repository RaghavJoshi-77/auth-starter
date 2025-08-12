"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function WelcomePage() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <h1 className="text-2xl">
          Please sign in to access the app. 
          
        </h1>
         <Link className="text-blue-500 text-2xl" href="/sign-in"><button className="bg-white rounded-sm">Sign In</button></Link>
      </div>
    );
  }
  console.log(session);
  if (!session.user) {
    return <div>User information is not available.</div>;
    
  }
  return (
    <div>
      <h1>Welcome to the App!</h1>
      {session && <p>Hello, {session.user.name}!</p>}
    </div>
  );
}
