import Image from "next/image";

type Props = {
  name: string;
  image: string;
  distance: string;
  desc: string;
};

export default function DestinationCard({
  name,
  image,
  distance,
  desc,
}: Props) {
  return (
    <div
      className="
        group overflow-hidden rounded-3xl border border-slate-200
        bg-white shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* distance badge */}
        <span
          className="
            absolute top-4 left-4 rounded-full
            bg-white/90 backdrop-blur
            px-4 py-1 text-sm font-semibold text-slate-800
            shadow
          "
        >
          {distance}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {desc}
        </p>
      </div>
    </div>
  );
}
