import React from 'react'
import Image from "next/image";

const About = () => {
    return (
        <>
            <div className="min-w-full h-[25rem] mt-52 px-16 absolute">
                <div className="border-1 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-md bg-zinc-50 py-10 ">
                    <div className="text-center">
                        <h1 className='text-4xl font-semibold'>About Startup4Nation</h1>
                    </div>
                    <div className="flex justify-center items-center gap-5 mt-5">
                        <div className="w-[45%] border-r border-gray-600 p-3 pl-3">
                            <p className='text-wrap text-lg font-sans text-justify'>
                                We are a startup team that works on ideas, works on related technology and works on business development, works on how we can implement an idea in the real market, and takes those ideas to hackathons or idea competitions so that we can analyze how good our idea is and whether it is working or not. Apart from that we also attend events and virtual events by some really known people who are into entrepreneurship and also we work for individual’s personality and business required skills.
                            </p>
                        </div>
                        <div className="">
                            <Image
                                src={"/logo.png"}
                                width={230}
                                height={230}
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About