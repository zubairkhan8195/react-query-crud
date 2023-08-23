import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="bg-primary-100 h-screen flex items-center justify-center">
      <div className="flex w-[1350px] relative">
        {/* form div*/}
        <div className="bg-white w-[700px] p-7 rounded-l-[16px] shadow-[0px_2px_5px_rgba(0,0,0,.2)]">
          {/* logo */}
          <div className="flex justify-center items-center">
            <div className="inline-block rotate-[135deg] mt-5 mb-10">
              <Image
                src="/microsoft-icon.svg"
                width={24}
                height={24}
                alt="logo"
              />
            </div>
          </div>

          <div className="w-[400px] mx-auto">
            {/* heading */}
            <h1 className="text-2xl text-center font-bold tracking-wide">
              Create an account
            </h1>
            <p className="text-sm text-primary-200 text-center ">
              Start your 30 day free trail
            </p>
            {/* google sign */}
            <div className="flex items-center justify-center gap-3 cursor-pointer rounded-[30px] shadow-[0px_2px_5px_rgba(0,0,0,.2)] mt-7 py-2 ">
              <Image src="/Google.png" width={22} height={22} alt="Google" />
              <h4 className="text-base font-bold">Sign up with Google</h4>
            </div>
            {/* form */}
            <div>
              <div className="pt-5">
                <label className="text-sm font-bold pt-3">Name</label>
                <Input placeholder="What shall we call you?" />
              </div>
              <div className="pt-5">
                <label className="text-sm font-bold pt-3">Email address</label>
                <Input placeholder="you@domain.com" />
              </div>
              <div className="pt-5">
                <label className="text-sm font-bold pt-3">Gender</label>
                <Input placeholder="Gender.." />
              </div>
              <Button className="w-full bg-primary-300 rounded-[30px] font-bold mt-9 py-[10px]">
                Create account
              </Button>
              <p className="text-sm text-primary-200 mt-7 text-center">
                Been here before?
                <span className="text-base text-black pl-1 font-semibold">
                  Login
                </span>
              </p>
            </div>
          </div>
          {/* footer */}
          <div className="flex items-center justify-between mt-14">
            <p className="text-xs font-medium text-primary-200">
              © 2022 Rejiggle
            </p>
            <ul className="text-xs font-medium text-primary-200 flex items-center gap-4">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        {/* imag div */}
        <div className="gradient flex flex-col justify-center w-[650px] rounded-r-[16px] shadow-[0px_2px_5px_rgba(0,0,0,.2)] px-24">
          <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
            <Image
              src="/Figma-logo.svg.png"
              width={15}
              height={15}
              alt="figma-svg"
            />
          </div>
          <h1 className="text-[55px] font-semibold tracking-normal leading-[60px] mt-3">
            Save thousands <span className="block">of design hours</span>
          </h1>
          <p className="text-lg leading-6 text-primary-400 pt-5">
            join thousands of designer and mockup high-quality landing page in
            minutes.
          </p>
          <div className="flex mt-7 items-center">
            <Avatar src="/imag1.jpg" className="border border-white" />
            <Avatar
              src="/imag2.jpg"
              className="border border-white -translate-x-[10px]"
            />
            <Avatar
              src="/imag3.jpg"
              className="border border-white -translate-x-[20px]"
            />
            <Avatar
              src="/imag4.jpeg"
              className="border border-white -translate-x-[30px]"
            />
            <Avatar
              src="/imag5.webp"
              className="border border-white -translate-x-[40px]"
            />
            <p className="text-xs font-medium text-primary-200 -translate-x-[20px]">
              Join 60,000+ users
            </p>
          </div>
        </div>
        {/* arrorw-img */}
        <Image
          src="/Arror.svg"
          width={40}
          height={40}
          alt="arror-pic"
          className="absolute w-[250px] top-[72%] left-[45%]"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
