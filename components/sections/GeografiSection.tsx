"use client";

import { useState, useEffect } from "react";
import MaterialIcon from "@/components/icons/MaterialIcon";

export default function GeografiSection() {
  const [temperature, setTemperature] = useState<string | null>(null);

  useEffect(() => {
    // Desa Milangasri coordinates (~7.60°S, 111.38°E)
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-7.60&longitude=111.38&current=temperature_2m&timezone=Asia%2FJakarta"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.current?.temperature_2m != null) {
          setTemperature(`${Math.round(data.current.temperature_2m)}°C`);
        }
      })
      .catch(() => {
        setTemperature("—");
      });
  }, []);

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
                  {temperature ?? "..."}
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  Suhu Saat Ini
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-surface-container-high">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <MaterialIcon name="landscape" className="text-[22px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-on-surface">
                  840 m
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  Elevasi Lereng
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-white border border-surface-container-highest">
          <iframe
            className="w-full h-96 md:h-[500px] border-0"
            src="https://maps.google.com/maps?q=Desa+Milangasri,+Panekan,+Magetan,+Jawa+Timur&t=m&z=14&output=embed&iwloc=near"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Desa Milangasri, Panekan, Magetan"
          />

        </div>
      </div>
    </section>
  );
}
