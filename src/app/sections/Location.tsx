export default function Location() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Visit Our Office
        </h2>

        <p className="text-slate-500 text-lg mb-10 max-w-3xl mx-auto">
          Meet our counselling experts and get personalized guidance for your
          medical admission journey.
        </p>

        <div className="bg-[var(--card)] rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10">

          <div className="text-5xl mb-4">
            📍
          </div>

          <h3 className="text-2xl font-bold text-cyan-600 mb-4">
            MedBridge Office
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed">
            Geeta Nagar, Bypass Road
            <br />
            Akola, Maharashtra
          </p>

        </div>

      </div>
    </section>
  );
}