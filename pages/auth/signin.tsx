import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Router from "next/router";

const Signin: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // const { email, password } = uesrInfo;
    // validate your user info

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response != undefined) {
        const status = response.ok;
        const error = JSON.stringify(response.error);

        console.log(response);

        if (status) {
          setError("");
          Router.push("/");
        } else {
          setError(error.replace(/\"/g, ""));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
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

      <div className="min-h-screen w-full h-full px-4 md:px-10 flex justify-center items-center bg-gradient-to-br from-[#e2d3e8]  to-[#f27081] relative">
        <div className=" text-center py-4 lg:px-4 absolute top-10 effect-bounce hover:animate-none  ">
          <div
            className="px-3 py-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
              NOTE
            </span>
            <span className="mr-2 text-left flex-auto">
              email: Bloom@gmail.com , password: Hoshinlabs
            </span>
          </div>
        </div>

        <div className="max-w-md w-full h-fit rounded-3xl flex justify-center items-center bg-white/80 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="max-w-sm w-full p-5 gap-4 flex-col flex justify-center "
          >
            <div className="relative w-full">
              <Image
                src={"/assets/login_avatar.png"}
                alt="login"
                layout="responsive"
                width={100}
                height={80}
                objectFit="contain"
                objectPosition={"center"}
              />
            </div>

            <div className=" flex items-center py-2 px-3  rounded-3xl bg-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_60_22)">
                  <path
                    d="M48 48C56.84 48 64 40.84 64 32C64 23.16 56.84 16 48 16C39.16 16 32 23.16 32 32C32 40.84 39.16 48 48 48ZM48 56C37.32 56 16 61.36 16 72V80H80V72C80 61.36 58.68 56 48 56Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_60_22">
                    <rect width="96" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full outline-none border-none  placeholder:text-sm pl-2 "
                required
              />
            </div>

            <div className=" flex items-center py-2 px-3 bg-white rounded-3xl">
              <svg
                width="20"
                height="20"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_61_25)">
                  <path
                    d="M72 32H68V24C68 12.96 59.04 4 48 4C36.96 4 28 12.96 28 24V32H24C19.6 32 16 35.6 16 40V80C16 84.4 19.6 88 24 88H72C76.4 88 80 84.4 80 80V40C80 35.6 76.4 32 72 32ZM48 68C43.6 68 40 64.4 40 60C40 55.6 43.6 52 48 52C52.4 52 56 55.6 56 60C56 64.4 52.4 68 48 68ZM60.4 32H35.6V24C35.6 17.16 41.16 11.6 48 11.6C54.84 11.6 60.4 17.16 60.4 24V32Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_61_25">
                    <rect width="96" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <input
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="on"
                className="w-full outline-none border-none  placeholder:text-sm pl-2"
                required
              />

              <div
                onClick={() => setShow(!show)}
                className="cursor-pointer opacity-25"
              >
                {!show ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_87_25)">
                      <path
                        d="M11 4.125C6.41663 4.125 2.50246 6.97583 0.916626 11C2.50246 15.0242 6.41663 17.875 11 17.875C15.5833 17.875 19.4975 15.0242 21.0833 11C19.4975 6.97583 15.5833 4.125 11 4.125ZM11 15.5833C8.46996 15.5833 6.41663 13.53 6.41663 11C6.41663 8.47 8.46996 6.41667 11 6.41667C13.53 6.41667 15.5833 8.47 15.5833 11C15.5833 13.53 13.53 15.5833 11 15.5833ZM11 8.25C9.47829 8.25 8.24996 9.47833 8.24996 11C8.24996 12.5217 9.47829 13.75 11 13.75C12.5216 13.75 13.75 12.5217 13.75 11C13.75 9.47833 12.5216 8.25 11 8.25Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_87_25">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_87_28)">
                      <path
                        d="M11 6.41667C13.53 6.41667 15.5833 8.47 15.5833 11C15.5833 11.5958 15.4641 12.155 15.2533 12.6775L17.93 15.3542C19.3141 14.1992 20.405 12.705 21.0741 11C19.4883 6.97583 15.5741 4.125 10.9908 4.125C9.70746 4.125 8.47913 4.35417 7.34246 4.76667L9.32246 6.74667C9.84496 6.53583 10.4041 6.41667 11 6.41667ZM1.83329 3.91417L3.92329 6.00417L4.34496 6.42583C2.82329 7.60833 1.63163 9.185 0.916626 11C2.50246 15.0242 6.41663 17.875 11 17.875C12.4208 17.875 13.7775 17.6 15.015 17.105L15.4 17.49L18.0858 20.1667L19.25 19.0025L2.99746 2.75L1.83329 3.91417ZM6.90246 8.98333L8.32329 10.4042C8.27746 10.5967 8.24996 10.7983 8.24996 11C8.24996 12.5217 9.47829 13.75 11 13.75C11.2016 13.75 11.4033 13.7225 11.5958 13.6767L13.0166 15.0975C12.4025 15.4 11.7241 15.5833 11 15.5833C8.46996 15.5833 6.41663 13.53 6.41663 11C6.41663 10.2758 6.59996 9.5975 6.90246 8.98333V8.98333ZM10.8533 8.26833L13.7408 11.1558L13.7591 11.0092C13.7591 9.4875 12.5308 8.25917 11.0091 8.25917L10.8533 8.26833Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_87_28">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
            </div>

            <div>
              <div className="text-sm text-slate-700 ml-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-2"
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label htmlFor="remember">remember me</label>
              </div>
            </div>

            {error != "" ? (
              <p className="text-red-500 text-sm text-center">{error}</p>
            ) : null}

            <div className="mt-2 flex w-full justify-around gap-3 relative ">
              <button
                type="submit"
                className="w-full px-6 py-2 text-white  rounded-3xl  btn-grad"
              >
                Login
              </button>
            </div>

            <p className="text-center text-sm text-slate-700 hover:text-black cursor-pointer">
              forgot your password ?
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
