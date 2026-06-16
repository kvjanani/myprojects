import Link from "next/link";

export default function RoutingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Routing Examples 🚀
          </h1>

          <p className="text-white/80 text-lg">
            Explore different mini applications built with Next.js
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <Link
            href="/routing/todo"
            className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-blue-600">
              Todo 
            </h2>
            <p className="text-gray-600 mt-2">
              Add and manage daily tasks.
            </p>
          </Link>

          <Link
            href="/routing/counter"
            className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="text-5xl mb-4">🔢</div>
            <h2 className="text-2xl font-bold text-green-600">
              Counter
            </h2>
            <p className="text-gray-600 mt-2">
              Increase and decrease values.
            </p>
          </Link>

          <Link
            href="/routing/search"
            className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-purple-600">
              Search 
            </h2>
            <p className="text-gray-600 mt-2">
              Search and filter items instantly.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}