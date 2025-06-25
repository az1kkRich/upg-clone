import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("characteristics");

  const characteristics = [
    { name: "Тип клавиатуры", value: "Механическая" },
    { name: "Подключение", value: "USB" },
    { name: "Подсветка клавиатуры", value: "RGB" },
    { name: "Подставка для рук", value: "Нет" },
    { name: "Укладка кабеля", value: "Нет" },
    { name: "Количество клавиш", value: "87" },
    { name: "Размер клавиатуры", value: "362 x 136 x 42 мм" },
    { name: "Вес клавиатуры", value: "1310 г" },
    { name: "Тип переключателей", value: "G3ms Zircon Speed" },
    { name: "Торговая марка", value: "Dark Project" },
  ];

  const description = `
    DarkProject ALU87 — это механическая клавиатура с RGB-подсветкой,
    компактным дизайном и переключателями Zircon Speed для профессиональных геймеров.
    Светлая мощь — механика нового уровня DarkProject ALU87 Daylight — это компактная механическая клавиатура в светлом исполнении, которая объединяет высокую скорость, надёжность и стиль. Премиальный дизайн и металлический корпус делают её ярким элементом любого сетапа. Переключатели G3ms Zircon Speed — мгновенный отклик Оснащённая G3ms Zircon Speed, клавиатура обеспечивает ультрабыструю реакцию и плавное срабатывание. Эти линейные переключатели подойдут как для динамичных игр, так и для продуктивной работы. Формат TKL: свобода движения 87 клавиш без цифрового блока — идеальный баланс между функциональностью и компактностью. ALU87 Daylight оставляет больше пространства для мыши и других аксессуаров, что особенно ценно на геймерском столе. RGB-подсветка — индивидуальность в каждом нажатии Светлая клавиатура с яркой RGB-подсветкой смотрится особенно эффектно. Широкие возможности настройки позволят создать уникальный визуальный стиль под любое настроение. Надёжность в каждой детали Вес 1310 г и прочный корпус из алюминия обеспечивают устойчивость и долговечность. Габариты 362 x 136 x 42 мм делают клавиатуру удобной в использовании как дома, так и на турнирах.

Источник: https://upg.uz/product/darkproject-alu87-daylight-4602
© Upgrade
  `;

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      {/* Tabs */}
      <div className="flex border-b text-sm font-medium">
        <button
          onClick={() => setActiveTab("characteristics")}
          className={`px-4 py-2 border-b-2 ${
            activeTab === "characteristics"
              ? "border-pink-500 text-pink-600"
              : "border-transparent text-gray-600"
          }`}
        >
          Характеристики
        </button>
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 border-b-2 ${
            activeTab === "description"
              ? "border-pink-500 text-pink-600"
              : "border-transparent text-gray-600"
          }`}
        >
          Описание
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {activeTab === "characteristics" && (
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 w-1/2">Характеристика</th>
                <th className="p-3">Описание</th>
              </tr>
            </thead>
            <tbody>
              {characteristics.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === "description" && (
          <div className="text-gray-700 text-sm">{description}</div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
