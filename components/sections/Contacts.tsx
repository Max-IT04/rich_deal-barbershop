export default function Contacts() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-[#D4A05A]">Контакты</span> и локация
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Приходите или свяжитесь удобным способом
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка - контакты */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Свяжитесь с нами</h3>
            
            <div className="space-y-4">
              <a href="tel:+79991234567" className="flex items-center gap-4 p-4 bg-[#222] rounded-lg hover:bg-[#333] transition-all">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-sm text-gray-400">Телефон</p>
                  <p className="text-white font-medium">+7 (928) 650-11-21</p>
                </div>
              </a>

              <a href="https://vk.ru/26bar_ber26" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#222] rounded-lg hover:bg-[#333] transition-all">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-sm text-gray-400">ВКонтакте</p>
                  <p className="text-white font-medium">@26bar_ber26</p>
                </div>
              </a>

              <a href="https://t.me/your_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#222] rounded-lg hover:bg-[#333] transition-all">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-sm text-gray-400">Мессенджер Макс</p>
                  <p className="text-white font-medium">@your_messenger</p>
                </div>
              </a>
            </div>

            {/* График работы */}
            <div className="p-4 bg-[#222] rounded-lg">
              <h4 className="text-sm text-gray-400 mb-2">🕐 График работы</h4>
              <p className="text-white">Пн-Пт: 10:00 – 21:00</p>
              <p className="text-white">Сб-Вс: 11:00 – 19:00</p>
            </div>
          </div>

          {/* Правая колонка - карта */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Как нас найти</h3>
            <div className="rounded-lg overflow-hidden border border-gray-800 h-[300px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%https://yandex.ru/maps/-/CTRRQNpH&source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта барбершопа"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              📍 г. Михайловск, ул. Ленина 161/3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}