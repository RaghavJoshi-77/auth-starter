import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { userTable } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
    try {
          const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username  and password are required" }, { status: 400 });
  }
  //eq for equality comparison
  const existUser = await db.select().from(userTable).where(eq(userTable.username, username)).execute();
  if (existUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  const user = await db.insert(userTable).values({
    username,
    password
  });
  console.log(user);
  
  return NextResponse.json({ message: "User registered successfully", user }, { status: 201 });
        
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

}