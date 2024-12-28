
"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useState, useEffect } from 'react'




export default function AnimatedTestimonialsDemo() {

    const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Kshitiz Sharma",
            designation: "Founder & CEO at Startup4Nation",
            src: "/kshitiz.jpg",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Ujjwal Katiyar",
            designation: "TechLead at Startup4Nation",
            src: "/ukcode.jpg",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Sazid Sheikh",
            designation: "Developer at Startup4Nation",
            src: "/sazid.jpg",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "Khushi Jaiswani",
            designation: "Engineering Lead at DataPro",
            src: "/khushi.jpg",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <>
            <div className="mt-[45rem]">
                <h1 className="text-4xl text-center font-semibold text-zinc-600">Meet Startup4Nation Team</h1>
              {
                isClient && <AnimatedTestimonials testimonials={testimonials} />
              }  
            </div>

        </>

    );
}
