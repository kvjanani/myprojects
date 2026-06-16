import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 shadow-2xl">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <p className="text-pink-200 text-lg font-semibold tracking-wider">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-4">
              Janani V
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-100 mt-4">
              web Developer
            </h2>

            <p className="text-gray-200 mt-6 max-w-xl leading-relaxed">
              Passionate about building modern, responsive and
              user-friendly web applications using React,
              Next.js, TypeScript and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:scale-105 transition duration-300">
                View Projects
              </button>

              <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-purple-700 transition duration-300">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full"></div>

            <Image
                  src="/Profile.jpg"
                  alt="Janani Profile"
                  width={280}
                  height={280}
                  className="relative rounded-full border-4 border-white shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}