"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthDemo() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Signed in as {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <button className="bg-blue-100 text-black rounded-xl" onClick={() => signIn("github")}>Sign in with GitHub</button>
          <button className="bg-blue-100 text-black rounded-xl" onClick={() => signIn("google")}>Sign in with Google</button>
        </>
      )}
    </div>
  );
}


