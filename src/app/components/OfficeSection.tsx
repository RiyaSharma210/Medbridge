import Image from "next/image";

export default function OfficeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <div className="flex justify-center items-center gap-3 mb-4">

            <Image
              src="/logo.png"
              alt="MedBridge Logo"
              width={60}
              height={60}
            />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Our Office
            </h2>

          </div>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Visit MedBridge Consultancy for personalized counselling and
            expert guidance for medical admissions.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl border border-slate-200">

          <Image
            src="/office1.png"
            alt="MedBridge Office"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />

        </div>

      </div>
    </section>
  );
}