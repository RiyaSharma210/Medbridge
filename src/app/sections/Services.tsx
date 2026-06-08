export default function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            NEET Counselling
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Choice Filling
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Admission Support
          </div>
        </div>
      </div>
    </section>
  );
}