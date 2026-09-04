import Image from "next/image";
import MaterialIcon from "@/components/icons/MaterialIcon";

const PRODUCTS = [
  {
    name: "Keripik Pisang Tanduk",
    producer: "KWT Tani Subur Dusun 3",
    price: "Rp 18.000",
    badge: "Best Seller",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UHTkL7MA-C1NTcJeTI7x5xnbfcyS8cv7EdhMke2LT5_K3_GCSewSTIrikQdJ7kpdqKeXQB4yBTQlA4dTMPNPqWYcwBEoov84ATsRDwbqDA9mJ26fc7vtSH6wx9QGhwvMjLHDdSXxVvob61v9vCq1RY_4aIlwin8hOqsPjB9rjsnydm3nfGCTKUPicKwXbpPLjW2APQlRfAydT0VJb0cdkKrDtu7hnKSOp5u7S-Yg9qR1bmQOx8KstPNpDL",
  },
  {
    name: "Sayur Organik Lereng Lawu",
    producer: "Gapoktan Tirta Makmur",
    price: "Rp 15.000",
    badge: "Panen Segar",
    badgeClass: "bg-secondary-fixed text-on-secondary-container",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Wi_onYNUesHgguDxePuJom5IxMiYJZZw6UahKhvgHiiIaCcOgABPW-UFyabiiKjO42AdqCpPBRMPbAlSPQnNFkZOmGNTXTMJfn1RlXiaOQiijmkEs0tHIU0pVJxbxmbE3k359XoevkBaFoRaqIUxPFsG6aS1mesGUdQ3HEZxldQTZqqVDSLqTkghMSgzx4Jvqyb4yc8iw5VML7C12VME1sAxGD-7njFvfslBh_tfkYbKJ09MAH5PB2K3EM",
  },
  {
    name: "Madu Murni Lereng Lawu",
    producer: "Kelompok Sadar Hutan",
    price: "Rp 85.000",
    badge: "100% Murni",
    badgeClass: "bg-primary-fixed text-on-primary-fixed",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Wlh5pysWXF8-DgjtuZVe0wk8cAn1GIxjzki0lQ_0J8XRmhHo8CRG75RSKEmFNi9Gzb63Nbs3rkjY1tuP1CrVqryrDDIc6a94Mhi1g7tpF-Xsh-4XxuB4p6xjae-_1xGzfCg8cYf3abv_lUVpq5MtKte_IWodHSllh0ZI-D05LLUcCPD2pm0yta8Fd8RlwXQTJn8T3B40sq_-ZzybXxGhmyn5iMZ4PpmtuMwEkh-agUWor4lpVFHPpprvw-",
  },
  {
    name: "Kerajinan Anyaman Bambu",
    producer: "Pondok Kriya Dusun Krajan",
    price: "Rp 45.000",
    badge: "Kriya Warga",
    badgeClass: "bg-surface-container-lowest text-primary",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UHTkL7MA-C1NTcJeTI7x5xnbfcyS8cv7EdhMke2LT5_K3_GCSewSTIrikQdJ7kpdqKeXQB4yBTQlA4dTMPNPqWYcwBEoov84ATsRDwbqDA9mJ26fc7vtSH6wx9QGhwvMjLHDdSXxVvob61v9vCq1RY_4aIlwin8hOqsPjB9rjsnydm3nfGCTKUPicKwXbpPLjW2APQlRfAydT0VJb0cdkKrDtu7hnKSOp5u7S-Yg9qR1bmQOx8KstPNpDL",
  },
];

export default function UMKMSection() {
  return (
    <section
      className="w-full bg-surface-container-low py-16 md:py-24 relative"
      id="umkm"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-2">
            <MaterialIcon name="storefront" className="text-[18px]" />
            <span>Pemberdayaan Ekonomi Warga</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface">
            Daftar UMKM Desa
          </h2>
          <p className="text-on-surface-variant mt-3 text-base leading-relaxed">
            Produk olahan pangan organik, hasil tani segar lereng Gunung Lawu,
            dan kriya tradisional autentik persembahan para pelaku usaha mikro
            Desa Milangasri.
          </p>
        </div>

        {/* Spotlight Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-primary text-white shadow-xl">
          <div className="relative z-10 max-w-xl">
            <span className="px-4 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs uppercase tracking-wider">
              Hasil Bumi Mandiri Lawu
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-3 leading-tight">
              Sentra UMKM Berdaya Milangasri
            </h3>
            <p className="text-white/85 mt-3 leading-relaxed text-sm md:text-base">
              Mulai dari olahan keripik pisang lereng Lawu, emping melinjo
              renyah, hingga sayuran organik segar dipetik langsung dari kebun
              pekarangan warga dan didukung penuh oleh BUMDes Milangasri.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                className="px-5 py-2.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-surface-container transition-colors shadow-sm inline-flex items-center gap-2"
                href="#kontak"
              >
                <MaterialIcon name="phone_in_talk" className="text-[18px]" />
                <span>Hubungi BUMDes</span>
              </a>
            </div>
          </div>
          <div className="relative z-10 w-full md:w-80 h-48 md:h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
            <Image
              alt="Stan UMKM Produk Hasil Bumi Lokal Desa Milangasri"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UHTkL7MA-C1NTcJeTI7x5xnbfcyS8cv7EdhMke2LT5_K3_GCSewSTIrikQdJ7kpdqKeXQB4yBTQlA4dTMPNPqWYcwBEoov84ATsRDwbqDA9mJ26fc7vtSH6wx9QGhwvMjLHDdSXxVvob61v9vCq1RY_4aIlwin8hOqsPjB9rjsnydm3nfGCTKUPicKwXbpPLjW2APQlRfAydT0VJb0cdkKrDtu7hnKSOp5u7S-Yg9qR1bmQOx8KstPNpDL"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-xl transition-all flex flex-col group border border-surface-container-high"
            >
              <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                <Image
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={product.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className={`absolute top-2 right-2 px-2.5 py-1 rounded-full ${product.badgeClass} text-[11px] font-bold shadow-sm`}
                >
                  {product.badge}
                </span>
              </div>
              <h4 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                {product.name}
              </h4>
              <span className="text-xs text-on-surface-variant mt-1">
                {product.producer}
              </span>
              <div className="mt-4 pt-3 border-t border-surface-container-high flex items-center justify-between">
                <span className="font-extrabold text-secondary text-base">
                  {product.price}
                </span>
                <button
                  className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                  title="Beli Produk"
                >
                  <MaterialIcon
                    name="add_shopping_cart"
                    className="text-[18px]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
