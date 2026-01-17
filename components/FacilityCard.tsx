import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  desc: string;
};

export default function FacilityCard({ icon, title, desc }: Props) {
  return (
    <div
      className="
        group flex flex-col items-center text-center
        w-full max-w-[280px]
        rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur
        p-7 shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl hover:border-green-200
      "
    >
      {/* ICON */}
      <div
        className="
          mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl
          bg-slate-50 ring-1 ring-slate-200/80
          transition duration-300
          group-hover:bg-green-50 group-hover:ring-green-200
        "
      >
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {desc}
      </p>

      <div className="mt-6 h-[3px] w-12 rounded-full bg-slate-100 transition group-hover:bg-green-200" />
    </div>
  );
}
