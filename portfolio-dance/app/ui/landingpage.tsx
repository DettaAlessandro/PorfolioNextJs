import Image from "next/image";

export default function LandingPage(){
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="md:w-1/2 flex justify-center">
                <Image 
                    src="/portrait.png" 
                    alt="Your Portrait" 
                    width={400} 
                    height={500} 
                    className="shadow-lg"
                />
                </div>
                {/* Right Side - Text */}
                <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-white">About me</h1>
                    <p className="mt-4 text-lg text-white">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                   
                    </p>
                </div>
            </div>
        </section>
    )
}