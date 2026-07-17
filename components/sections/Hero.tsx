import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-20 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#D4A05A]">RICH DEAL</span>
            <br />
            BARBERSHOP
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            Стильные стрижки и бороды. Работаем с душой.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button href="https://vk.ru/26bar_ber26" variant="primary">
              Записаться
            </Button>
            <Button href="https://t.me/your_link" variant="secondary">
              Написать в мессенджер
            </Button>
          </div>
          <p className="text-sm text-gray-500 pt-4">
            📞 +7 (928) 650-11-21
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#D4A05A]">
            <img
              src="/barber-photo.jpg"
              alt="Барбер"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}