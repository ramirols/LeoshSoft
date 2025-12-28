import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesRight } from "react-icons/im";

const testimonials = [
  {
    name: "Carlos Fernández",
    role: "Dueño de Negocio",
    message:
      "Trabajamos con LeoryenSoft y crearon una web rápida, moderna y totalmente optimizada para nuestro negocio. Desde el primer mes aumentaron los clientes.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "María Valdivia",
    role: "Emprendedora",
    message:
      "El nivel de detalle y profesionalismo fue increíble. Quedé muy feliz con mi landing page. muy recomendable",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Viviana Vargas",
    role: "Dueña de Negocio",
    message:
      "Necesitábamos una web corporativa seria y optimizada. El resultado superó expectativas.",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Andrea Ríos",
    role: "Marketing Manager",
    message:
      "Ahora la web carga rápido y convierte mejor. Fue una gran decisión.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            Opiniones reales de personas que confiaron en nuestro trabajo y obtuvieron resultados.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          spaceBetween={32}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="
                h-full p-8 rounded-3xl
                bg-white/70 backdrop-blur
                border border-gray-100
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                group
                flex flex-col justify-between
                cursor-pointer
                py-16
              ">
                <div>
                  <ImQuotesRight className="
                    w-10 h-10 mb-6
                    text-blue-500/30
                    group-hover:text-blue-500
                    transition-colors
                  " />

                  <p className="text-gray-700 leading-relaxed text-lg">
                    “{t.message}”
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="
                      w-14 h-14 rounded-full object-cover
                      ring-2 ring-transparent
                      group-hover:ring-blue-500/40
                      transition-all duration-500
                    "
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Paginación minimal */}
      <style jsx global>{`
        #testimonials .swiper-pagination {
          bottom: 0px !important;
        }
        #testimonials .swiper-pagination-bullet {
          background: #C0C0C0 !important;
          opacity: 1;
        }
        #testimonials .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 18px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}