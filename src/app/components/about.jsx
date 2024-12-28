import React from 'react'
import Image from "next/image";

const About = () => {
    return (
        <>
            <div className="min-w-full h-[25rem] mt-52 px-16 absolute">
                <div className="border-1 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-md bg-zinc-50 py-10 ">
                    <div className="text-center">
                        <h1 className='text-4xl text-center font-semibold text-zinc-600'>About Startup4Nation Community</h1>
                    </div>
                    <div className="flex justify-center items-center gap-5 mt-5">
                        <div className="w-[45%] border-r border-gray-600 p-3 pl-3">
                            <p className='text-wrap text-lg text-justify text-zinc-600'>
                                We are a startup team that works on ideas, works on related technology and works on business development, works on how we can implement an idea in the real market, and takes those ideas to hackathons or idea competitions so that we can analyze how good our idea is and whether it is working or not. Apart from that we also attend events and virtual events by some really known people who are into entrepreneurship and also we work for individual’s personality and business required skills.
                            </p>
                        </div>
                        <div className="">
                            <Image
                                src={"/logo.png"}
                                width={280}
                                height={280}
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