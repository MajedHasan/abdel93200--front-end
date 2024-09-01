import { FacebookIcon, LinkedinIcon, PinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e5e5e5] py-7">
      <div className="container mx-auto">
        {/* Footer Top */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <div>
              <Image
                src="/logo-black.png"
                alt="Logo Black"
                width={500}
                height={500}
                className="w-full h-fit max-w-[120px]"
              />
              <p className="font-bold text-md mt-4">Easy Casse</p>
              <p className="text-sm">
                Phone: +223456798765 <br /> Email: sample@hotmail.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Social media</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="flex items-center gap-2">
                  <FacebookIcon className="w-4" />
                  <span className="text-sm">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <PinIcon className="w-4" />
                  <span className="text-sm">Pinterest</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <TwitterIcon className="w-4" />
                  <span className="text-sm">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <LinkedinIcon className="w-4" />
                  <span className="text-sm">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href={"/"}>privacy policy</Link>
              <Link href={"/"}>terms conditions</Link>
              <Link href={"/"}>how to delete account</Link>
              <Link href={"/"}>Osclass Classifieds</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Change language</h3>
            <div></div>
          </div>
        </div>
        {/* Footer Top */}
        <hr className="border border-gray-300 mt-6" />
        <div className="flex lg:flex-row flex-col gap-10 items-center lg:justify-between justify-center mt-6">
          <div className="flex items-center gap-5 text-sm font-semibold">
            <Link href={""}>Contact Us</Link>
            <Link href={""}>Osclass Market</Link>
          </div>
          <p className="text-xs">
            Copyright © 2024 Easy Casse All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
