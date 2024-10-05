// import React from "react";
// import Image from "next/image";
// const page = () => {
//   return (
//     <div className="bg-gray-100 h-screen flex items-center justify-center">
//       <div className="text-3xl w-1/2 px-8">
//         <Image
//           src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" // External URL
//           alt="facebook"
//           width={320}
//           height={320}
//         />
//         <p className="ml-8 -mt-3">
//           Facebook helps you connect and share with the people in your life.
//         </p>
//       </div>

//       {/* right side */}
//       <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
//         <input
//           className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-500"
//           type="text"
//           placeholder="Email address or phone number"
//         />
//         <input
//           className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-500"
//           type="password"
//           placeholder="Password "
//         />
//         <button className="bg-blue-600 hover:bg-blue-500 my-2 rounded-md py-2 text-xl text-white font-bold">
//           Log in
//         </button>
//         <p className="text-blue-500 text-sm text-center hover:underline cursor-pointer">
//           Forgotten Password?
//         </p>
//         <span className=" my-2 text-center">
//           <hr />
//         </span>
//         <button className="w-fit mx-auto bg-green-600 hover:bg-green-500 my-2 rounded-md py-2 px-2 text-xl text-white font-bold">
//           Create new account
//         </button>
//       </div>
//     </div>
//   );
// };

// export default page;

// /pages/page.tsx

import { Button } from "@/comp3/button";
import { Input } from "@/comp3/input";
import { Card, CardContent, CardFooter } from "@/comp3/card";
import Link from "next/link";

const FacebookLogin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center p-4">
      <div className="md:w-1/2 max-w-md mb-8 md:mb-0 md:mr-8">
        <h1 className="text-blue-500 text-5xl md:text-6xl font-bold mb-4">
          facebook
        </h1>
        <p className="text-2xl md:text-3xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="w-full max-w-md">
        <Card className="w-full">
          <CardContent className="space-y-4 pt-6">
            <Input
              type="text"
              placeholder="Email address or phone number"
              className="w-full"
            />
            <Input type="password" placeholder="Password" className="w-full" />
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xl py-6">
              Log in
            </Button>
            <div className="text-center">
              <Link href="#" className="text-blue-500 hover:underline text-sm">
                Forgotten password?
              </Link>
            </div>
            <div className="border-t border-gray-300 my-4" />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              variant="outline"
              className="bg-green-500 hover:bg-green-600 text-white border-none text-lg px-4 py-3"
            >
              Create new account
            </Button>
          </CardFooter>
        </Card>
        <div className="text-center mt-6 text-sm">
          <Link href="#" className="font-bold hover:underline">
            Create a Page
          </Link>{" "}
          for a celebrity, brand, or business.
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-8">
        Welcome to the facebook login page
      </h1>
      <FacebookLogin />
    </div>
  );
}
