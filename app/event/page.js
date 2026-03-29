export default function Event() {
  const events = [
    {
      title: "Pendakian Massal Gn. Gede",
      date: "15 Agustus 2026",
      status: "Akan Datang",
    },
    {
      title: "Latihan Gabungan Water Rescue",
      date: "20 September 2026",
      status: "Akan Datang",
    },
    { title: "Aksi Bersih Pantai", date: "5 Juni 2026", status: "Selesai" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
        Agenda & Event
      </h1>

      <div className="space-y-6">
        {events.map((agenda, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-600 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {agenda.title}
              </h2>
              <p className="text-gray-500 font-medium">{agenda.date}</p>
            </div>
            <span
              className={`mt-4 md:mt-0 px-4 py-1 rounded-full text-sm font-semibold ${agenda.status === "Selesai" ? "bg-gray-200 text-gray-600" : "bg-emerald-100 text-emerald-700"}`}
            >
              {agenda.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
