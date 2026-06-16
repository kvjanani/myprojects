import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 w-full max-w-5xl text-center shadow-2xl">

        <h1 className="text-5xl font-extrabold text-white mb-4">
          My Project Hub 🚀
        </h1>

        <p className="text-white/80 text-lg mb-10">
          Explore my Next.js projects and mini applications.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Resume */}
          <Link
            href="/resume"
            className="bg-white text-indigo-600 font-semibold p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="text-5xl mb-3">📄</div>
            <h2 className="text-xl font-bold">Resume</h2>
          </Link>

          {/* Routing */}
          <Link
            href="/routing"
            className="bg-white text-purple-600 font-semibold p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="text-5xl mb-3">🔗</div>
            <h2 className="text-xl font-bold">Routing Examples</h2>
          </Link>

          {/* Video Folder */}
          <Link
            href="/video"
            className="bg-white text-pink-600 font-semibold p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="text-5xl mb-3">📁</div>
            <h2 className="text-xl font-bold">Project Video</h2>
          </Link>

        </div>

      </div>
    </main>
  );
}