import Image from "next/image";

export default function Home() {
  return (
    <section className="relative max-w-screen-xl px-4 py-4 mx-auto md:px-8">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>

      <div className="relative z-10 items-center gap-5 lg:flex">
        {/* Text Content */}
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl font-semibold text-gray-800 md:text-4xl">
            Bringing Sustainability Online With{" "}
            <span className="text-indigo-600">EcoLife Solutions</span>
          </h3>
          <p className="mt-3 leading-relaxed text-gray-500">
            EcoLife Solutions is excited to build its first online presence,
            offering a seamless platform for eco-conscious customers.
            Specializing in eco-friendly products, the website will make
            sustainable living more accessible while prioritizing
            functionality, security, and user experience.
          </p>
          <a
            className="inline-flex items-center px-4 py-2 mt-5 font-medium text-indigo-600 rounded-full bg-indigo-50"
            href="/contact"
          >
            Contact us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1 mx-auto mt-5 sm:w-9/12 lg:mt-0 lg:w-auto">
          <Image
            src="https://i.postimg.cc/kgd4WhyS/container.png"
            alt="EcoLife Solutions Container"
            width={500} // Adjust to your design requirements
            height={500} // Adjust to your design requirements
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
