import Image from "next/image";

const students = [
  {
    name: "Zoiba",
    course: "MBBS",
    college: "IIMSR, Jalna",
    image: "/student4.jpeg",
  },
  {
    name: "Anika Gupta",
    course: "MBBS",
    college: "Guru Ram Rai Medical College and Hospital",
    image: "/student6.jpeg",
  },
  {
    name: "Sangharsh",
    course: "BAMS",
    college: "Dr. Gode Medical College, Amravati",
    image: "/student2.jpeg",
  },
  {
    name: "Tanvi",
    course: "BAMS",
    college: "Nagpur",
    image: "/student5.jpeg",
  },
  {
    name: "Piyush",
    course: "BDS",
    college: "RKDF College, Bhopal",
    image: "/student3.jpeg",
  },
  {
    name: "Sejal",
    course: "BHMS",
    college: "Chamunda College, Jalgaon",
    image: "/student1.jpeg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Successful Students
          </h2>

          <p className="text-slate-500 mt-4 text-lg max-w-3xl mx-auto">
            Dreams achieved through dedication, hard work and expert guidance.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {students.map((student, index) => (
            <div
              key={index}
              className="bg-[var(--card)] rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-[280px] w-full bg-slate-100">

                <div className="absolute top-3 left-3 z-10 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                  Success Story
                </div>

                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-contain p-2"
                />

              </div>

              <div className="p-5 text-center">

                <h3 className="text-xl font-bold text-foreground">
                  {student.name}
                </h3>

                <span
                  className={`inline-block px-4 py-1 rounded-full text-white text-sm font-semibold mt-3 ${
                    student.course === "MBBS"
                      ? "bg-blue-600"
                      : student.course === "BAMS"
                      ? "bg-green-600"
                      : student.course === "BDS"
                      ? "bg-purple-600"
                      : "bg-orange-500"
                  }`}
                >
                  {student.course}
                </span>

                <p className="text-slate-500 mt-3 text-sm">
                  {student.college}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}