export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl text-white hover:scale-105 transition">

          <h3 className="text-2xl font-bold">
            Smart Crop Advisory System for Small and Marginal Farmers
          </h3>

          <p className="mt-4">
           Technology Stack-
            Frontend-
            Next.js,
            React,
            Tailwind CSS.
            Backend-
            Node.js
          </p>

        </div>

        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl text-white hover:scale-105 transition">

          <h3 className="text-2xl font-bold">
            Portfolio Website
          </h3>

          <p className="mt-4">
            Personal portfolio built with Next.js and TypeScript.
          </p>

        </div>

      </div>
    </section>
  );
}