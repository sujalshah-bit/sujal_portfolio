import React from 'react'
import Link from "next/link";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
const HomePage = () => {
  return (
    <section className="min-h-[100vh]  relative">
        <div className=" px-2 sm:px-3 absolute h-full flex flex-col items-center sm:justify-center gap-12 sm:gap-10  lg:gap-32">
          <h2 className="sm:text-7xl text-[40px] font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Hey there! I'm Sujal Shah,
          </h2>
          <div className="flex flex-col gap-9">

          <p className="text-base sm:text-xl  sm:px-28 text-gray-500">
            
            a passionate MERN stack developer with a focus on building robust
            and scalable web applications. I'm thrilled to have you visit my
            home page. Allow me to give you a glimpse into my world of coding
            and creativity.I've honed my skills through numerous projects.
            Explore my portfolio to witness my commitment to delivering
            high-quality solutions. Let's bring your ideas to life!

          </p>
          <div className="flex flex-row  items-center gap-5 mt-10 md:px-28" >

            <Link
              href={"mailto:sujalshah28092004@gmail.com"}
              className="outline-none bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-white font-bold py-2 px-4 rounded"
            >
              Contact me!
            </Link>
            <Link href={"https://twitter.com/Sujal_explore"} target="_blank">
              <AiOutlineTwitter
              fill="white"
                size={40}
                className="bg-blue-400 rounded cursor-pointer hover:bg-black"
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/sujal-shah-55846a214/"} target="_blank">
              <AiFillLinkedin
              fill="white"
                size={40}
                className="bg-[#0A66C2] cursor-pointer hover:bg-black"
              />
            </Link>
          </div>
          </div>
        </div>
      </section>
  )
}

export default HomePage