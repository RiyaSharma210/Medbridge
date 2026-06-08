import Image from "next/image";

export default function OfficeSection() {
  return (
    <section className="flex flex-col items-center gap-6 py-10">

      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
        <h1 className="text-2xl font-bold">Our Office</h1>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/office1.png"
          alt="Office"
          width={800}
          height={500}
        />
      </div>

    </section>
  );
}