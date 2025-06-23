import React from "react";

const stats = [
  { highlight: "Лидеры", text: "на игровом рынке" },
  { highlight: "500 положительных", text: "отзывов" },
  { highlight: "32 киберспортивных", text: "турнира" },
  { highlight: "Топовые блогеры", text: "выбирают нас" },
  { highlight: "60 компьютерных клубов", text: "под ключ" },
];

const AboutCompany = () => {
  return (
    <div className="bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left side: Image */}
        <img
          src="https://files.ox-sys.com/cache/original/image/36/94/94/3694947a86fda51618fea2564bd2a93232511cd2b749880349a06870cdf80e87.jpg"
          alt="Team"
          className="rounded-xl w-full object-cover"
        />

        {/* Right side: Text */}
        <div>
          <h2 className="text-2xl font-bold mb-4">О компании</h2>
          <p className="text-gray-700 mb-4">
            С 2009 года мы продаем компьютерную технику в Узбекистане. Мы –
            официальные партнеры многих международных компаний, что гарантирует
            качество нашей продукции.
          </p>
          <p className="text-gray-700 mb-4">
            Наши опытные сотрудники всегда готовы помочь с выбором техники. В
            нашем шоуруме представлен широкий ассортимент товаров.
          </p>
          <p className="text-gray-700 mb-6">
            Мы предлагаем доставку по всей республике и поддерживаем все виды
            оплаты для вашего удобства.
          </p>
          <button className="border border-pink-500 text-pink-600 px-4 py-2 rounded hover:bg-pink-50 transition">
            Узнать больше
          </button>
        </div>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 hover:bg-gray-200 transition rounded-xl p-6 flex flex-col justify-between"
          >
            <p className="font-bold text-pink-600 mb-1">{item.highlight}</p>
            <p className="text-sm text-gray-700 mb-3">{item.text}</p>
            <span className="text-xl text-gray-600 mt-auto">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompany;
