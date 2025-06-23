import { FaInstagram, FaYoutube, FaTelegram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700">
      <div className="container mx-auto px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-b pb-6">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-black">
              <span className="text-black">UPG</span>
              <span className="text-pink-500">RADE</span>
            </h2>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Компания</h3>
            <ul className="space-y-1">
              <li>Контакты</li>
              <li>О нас</li>
              <li>Почему мы?</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2">Услуги</h3>
            <ul className="space-y-1">
              <li>Апгрейд</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2">Поддержка</h3>
            <ul className="space-y-1">
              <li>Доставка</li>
              <li>Способ оплаты</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold mb-2">Проекты</h3>
            <ul className="space-y-1">
              <li>Блогеры</li>
              <li>Игровые клубы</li>
              <li>Киберспорт</li>
            </ul>
          </div>
        </div>

        {/* Contacts */}
        <div className="grid md:grid-cols-3 gap-6 py-6">
          <div>
            <h4 className="font-semibold">📞 Телефоны</h4>
            <p>+998 (99) 124-24-24</p>
            <p>+998 (97) 124-24-24</p>
          </div>

          <div>
            <h4 className="font-semibold">📍 Адреса</h4>
            <p>г. Ташкент, ул. Навои 37</p>
            <p>г. Ташкент, ТРЦ Малика, Магазин 24</p>
          </div>

          <div>
            <h4 className="font-semibold">🕒 Режим работы</h4>
            <p>Ежедневно с 10:00 до 20:00</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap items-center justify-between border-t pt-4 mt-4 text-xs text-gray-600">
          <div className="flex space-x-6">
            <a href="#" className="flex items-center space-x-1 hover:text-pink-500">
              <FaInstagram className="text-pink-500" />
              <span>Instagram</span>
              <span className="text-gray-400">177 тыс.</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-red-500">
              <FaYoutube className="text-red-500" />
              <span>Youtube</span>
              <span className="text-gray-400">114 тыс.</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-400">
              <FaTelegram className="text-blue-400" />
              <span>Telegram</span>
              <span className="text-gray-400">23.4 тыс.</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-pink-600">
              <FaTiktok className="text-black" />
              <span>Tik Tok</span>
              <span className="text-gray-400">30 тыс.</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
