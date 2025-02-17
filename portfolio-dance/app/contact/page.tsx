import Image from "next/image";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-24">
      <Image
        src="/portrait.png"
        alt="Your Portrait"
        width={200}
        height={100}
        className="shadow-lg"
      />
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex space-x-6">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-600 hover:text-pink-700">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-700">
          <FaFacebook />
        </a>
        <a href="mailto:your.email@example.com" className="text-3xl text-gray-700 hover:text-gray-900">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
