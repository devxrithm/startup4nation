import React from 'react'
import NumberTicker from "@/components/ui/number-ticker";
import Card from './card';


const Milestone = () => {
    return (
        <>
            <div className="mt-[5rem]">
                <h1 className="text-4xl text-center font-semibold text-zinc-600">Milestone</h1>
                <div className="flex justify-center items-center gap-5">
                    <Card
                        num={1000}
                        name="community members"
                    />
                    <Card
                        num={5}
                        name="No of past events"
                    />
                    <Card
                        num={50}
                        name="No of sponsors"
                    />
                    <Card
                        num={1000}
                        name="Followers on social media"
                    />
                </div>
            </div>
        </>
    )
}

export default Milestone



