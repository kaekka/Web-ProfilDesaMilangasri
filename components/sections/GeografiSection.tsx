import MaterialIcon from "@/components/icons/MaterialIcon";

const MAP_PINS = [
  {
    icon: "water_drop",
    label: "Ekowisata Mata Air",
    bgClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    position: "top-1/4 left-1/4",
  },
  {
    icon: "account_balance",
    label: "Kantor Balai Desa",
    bgClass: "bg-secondary-fixed text-on-secondary-container",
    position: "top-1/2 left-1/2 -translate-x-1/2",
  },
  {
    icon: "terrain",
    label: "Puncak Gunung Lawu",
    bgClass: "bg-primary-fixed text-on-primary-fixed",
    position: "top-1/3 right-1/4",
  },
];

export default function GeografiSection() {
  return (
    <section
      className="w-full bg-surface-container py-16 md:py-24 relative"
      id="geografi"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col max-w-xl">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
              <MaterialIcon
                name="location_on"
                className="text-[18px] text-tertiary"
              />
              <span>Peta Wilayah &amp; Titik Penting Desa Milangasri</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
              Map Milangasri
            </h2>
            <p className="text-on-surface-variant mt-2 text-base leading-relaxed">
              Jelajahi batas administratif, persebaran 12 mata air vulkanis,
              kantor balai desa, serta jalur aksesibilitas mulus dari Magetan
              menuju kawasan ekowisata lereng Gunung Lawu.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-surface-container-high">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <MaterialIcon name="thermostat" className="text-[22px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-on-surface">
                  18° - 24°C
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  Suhu Udara Sejuk
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-surface-container-high">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <MaterialIcon name="landscape" className="text-[22px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-on-surface">
                  840 mdpl
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  Elevasi Lereng
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-white border border-surface-container-highest">
          <div
            className="w-full h-96 md:h-[450px] bg-cover bg-center relative flex items-end p-6 md:p-8"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3oJq3kBDqky4IT-8JmWsSXiQqRyo_6kHdAh-ncQOzOZMb3oxceeIL8Tv9y7mUocmRa5S1qnmBI1NtGrJbEXU-UQAKalzZH7r8-crYLMxUDKQDT2KAKCh8_laFzhAFVPUdwEAlAbuax0H3P9V4om3tFNXWAv0pO0qHNasOHnuRvY9cv054FZJzswvF43iKhW1ywbkb5kRB0dBGzMJkueIj8qdReI8XQObWa4AbM_hR-swLSpGjAVt2Mw")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

            {/* Map Pins */}
            {MAP_PINS.map((pin) => (
              <div
                key={pin.label}
                className={`absolute ${pin.position} flex flex-col items-center group cursor-pointer`}
              >
                <div
                  className={`w-9 h-9 rounded-full ${pin.bgClass} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}
                >
                  <MaterialIcon name={pin.icon} className="text-[20px]" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white font-semibold text-[11px] mt-1.5 shadow">
                  {pin.label}
                </span>
              </div>
            ))}

            {/* Route Card */}
            <div className="relative z-10 w-full p-4 md:p-6 rounded-2xl bg-white/95 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 border border-white/50 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <MaterialIcon name="directions_car" className="text-[24px]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-base text-on-surface">
                    Rute Perjalanan Mudah
                  </span>
                  <span className="text-sm text-on-surface-variant">
                    Jalan aspal mulus, dapat dilalui kendaraan roda dua, mobil
                    pribadi, maupun minibus wisata.
                  </span>
                </div>
              </div>
              <a
                className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-white font-semibold text-sm flex items-center gap-2 shrink-0 shadow-sm transition-colors"
                href="https://maps.google.com/?q=Milangasri+Panekan+Magetan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MaterialIcon name="open_in_new" className="text-[18px]" />
                <span>Buka Petunjuk Arah</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
