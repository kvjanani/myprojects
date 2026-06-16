export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
  ];

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
            text-white p-6 rounded-3xl shadow-2xl text-center
            font-bold hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}