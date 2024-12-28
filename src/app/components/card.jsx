import React from 'react'
import NumberTicker from "@/components/ui/number-ticker";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlinePublic } from "react-icons/md";

const Card = ({ name, num }) => {
    return (
        <>
            <div className="flex items-center justify-center gap-6">

                <div className="shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-black w-52 h-44 flex flex-col items-center justify-center rounded-lg mx-auto mt-10 gap-2">
                    {name == "community members" ? <FaPeopleGroup className='text-5xl text-white' />:""}
                    {name == "No of past events" ? <MdEmojiEvents  className='text-5xl text-white' />:""}
                    {name == "No of sponsors" ? <GiReceiveMoney  className='text-5xl text-white' />:""}
                    {name == "Followers on social media" ? <MdOutlinePublic  className='text-5xl text-white' />:""}

                    <p className=" whitespace-pre-wrap text-5xl font-semibold tracking-tighter text-white dark:text-white">
                        <NumberTicker value={num} />+
                    </p>
                    <p className='text-zinc-100 text-sm'>{name}</p>
                </div>

            </div>
        </>
    )
}

export default Card