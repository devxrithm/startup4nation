import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Navbar from "./navbar";
import Tooltip from "./tooltip";

export default async function Hero() {
    return (
        <>
        <Navbar/>
            <div className="relative min-h-[25rem] pt-36">

                <AnimatedGridPattern
                    numSquares={10}
                    maxOpacity={0.2}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-20",
                    )}
                />

                <div className="flex flex-col items-center justify-center">
                    <div className="z-20 flex min-h-14 items-center justify-center">
                        <div
                            className={cn(
                                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 font-semibold text-sm">
                                <span>✨ Welcome Back To</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-3 -mt-9">
                        <Image
                            src={"/logo.png"}
                            width={130}
                            height={130}
                            alt="logo"
                        />
                        <p className="z-10 whitespace-pre-wrap text-center text-7xl tracking-tighter text-gray-800 dark:text-white font-extrabold drop-shadow-lg	">
                            STARTUP<span className="text-7xl italic text-transparent text-stroke-black">4</span>NATION
                        </p>
                    </div>

                    <div className="-mt-10">
                        <h1 className="text-4xl md:text-4xl lg:text-2xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                            WHERE CRAZY BECOME <Cover>CREATIVE</Cover>
                        </h1>
                    </div>

                    <div className="absolute flex justify-center items-center gap-3 mt-32">
                        <button className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg flex items-center justify-center gap-1">
                            <IoCallOutline className="text-white text-xl " />
                            Contact Us
                        </button>
                        <button className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white text-sm transition duration-200 font-semibold flex items-center justify-center gap-1">
                            <FaWhatsapp className="text-green-500 text-xl font-extrabold" />
                            Join Community
                        </button>
                    </div>
<Tooltip/>
                </div>
            </div>

        </>
    );
}

