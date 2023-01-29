import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const { data: session } = useSession();
  const id = session?.user?.id || "0";
  return (
    <>
      <div className="flex w-screen flex-col items-center">
        <h1 className="p-4 text-center text-6xl font-bold">User Profile</h1>
        <p className="p-4 text-center text-2xl font-bold">User ID: {id}</p>
        <p className="p-4 text-center text-2xl font-bold">
          Name: {session?.user?.name}
        </p>
        <p className="p-4 text-center text-2xl font-bold">
          <Image
            className="rounded-full border-4 border-black"
            src={session?.user?.image}
            alt="User Image"
            width={200}
            height={200}
          />
        </p>
      </div>
    </>
  );
};

export default Profile;
