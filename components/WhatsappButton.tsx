type Props = {
  message: string;
};

export default function WhatsappButton({ message }: Props) {
  const phone = "6281234567890"; // ganti nomor WA

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
    >
      Pesan via WhatsApp
    </a>
  );
}
