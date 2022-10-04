import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Protected from "../components/Protected";
import { signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession<any>();

  return (
    <Protected>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <title>Hoshin Labs</title>
        <meta
          name="Description"
          content="This challenge is designed to test your skills in next.js, typescript and css."
        />
      </Head>

      <div className="min-h-screen w-full flex justify-center px-4 md:px-10 items-center background-effect">
        <div className="max-w-7xl w-full min-h-[85vh] flex flex-col items-center gap-4  rounded-3xl justify-center">
          <p
            data-aos="fade-up"
            className="text-center text-white translate-y-4 text-lg"
          >
            Welcome <span className="italic ">{session?.user?.username}</span>{" "}
            to
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-extrabold  text-white text-6xl uppercase  text-center drop-shadow"
          >
            Hoshin Labs <span className="animate-ping">!</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-sm text-white text-center "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ex
            maiores hic quisquam ullam is
          </p>

          <button
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            type="button"
            onClick={() => signOut()}
            className="w-fit px-6 py-2 text-white rounded-3xl  border border-white text-base hover:bg-white hover:text-black duration-300 font-medium inline-flex gap-2 items-center"
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1667 3.83333L11.9917 5.00833L14.1417 7.16667H5.66675V8.83333H14.1417L11.9917 10.9833L13.1667 12.1667L17.3334 8L13.1667 3.83333ZM2.33341 2.16667H9.00008V0.5H2.33341C1.41675 0.5 0.666748 1.25 0.666748 2.16667V13.8333C0.666748 14.75 1.41675 15.5 2.33341 15.5H9.00008V13.8333H2.33341V2.16667Z"
                fill="currentColor"
              />
            </svg>
            Sign out
          </button>

          <div className="relative w-full max-w-xl">
            <Image
              src={"/assets/home-hero.png"}
              alt="login"
              layout="responsive"
              width={100}
              height={75}
              objectFit="contain"
              objectPosition={"center"}
            />
          </div>
        </div>
      </div>
    </Protected>
  );
};

export default Home;
