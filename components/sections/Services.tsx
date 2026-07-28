export default function Services({ id }: { id?: string }) {
  const services = [
    { name: "Стрижка Фейд", price: "1000 ₽" },
    { name: "Классическая стрижка", price: "800 ₽" },
    { name: "Детская стрижка", price: "800 ₽" },
    { name: "Стрижка насадками", price: "700 ₽" },
    { name: "Стрижка под ножницы", price: "1100 ₽" },
    { name: "Окантовка", price: "300 ₽" },
    { name: "Моделирование бороды", price: "800 ₽" },
    { name: "Стрижка бороды", price: "600 ₽" },
    { name: "Окантовка бороды", price: "300 ₽" }
  ];

  return (
    <section id={id} className="py-20 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-[#D4A05A]">Услуги</span> и цены
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Все цены указаны за одну услугу
        </p>

        <div className="grid gap-4">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-5 bg-[#222] rounded-lg border border-gray-800 hover:border-[#D4A05A] transition-all"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              </div>
              <span className="text-xl font-bold text-[#D4A05A] mt-2 sm:mt-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}