import r1 from "./assets/models/risovaki/img1.jpg";
import r2 from "./assets/models/risovaki/img2.jpg";
import r3 from "./assets/models/risovaki/img3.jpg";

import rp1 from "./assets/models/risovaki-pro/img1.jpg";
import rp2 from "./assets/models/risovaki-pro/img2.jpg";
import rp3 from "./assets/models/risovaki-pro/img3.jpg";

export const risovakiImages = [
  { src: r1, alt: "Рисоваки — вид 1" },
  { src: r2, alt: "Рисоваки — вид 2" },
  { src: r3, alt: "Рисоваки — вид 3" },
];

export const risovakiProImages = [
  { src: rp1, alt: "Рисоваки Pro — вид 1" },
  { src: rp2, alt: "Рисоваки Pro — вид 2" },
  { src: rp3, alt: "Рисоваки Pro — вид 3" },
];

export const printers = [
  {
    title: "Рисоваки", // K10
    size: "155×200×175 мм",
    weight: "0.9 кг",
    plug: "TF карта",
    power: "12В, ≥ 2А (без адаптера)",
    slicer: "Easyware K9",
    href: "risovaki",
    img: r1,
  },
  {
    title: "Рисоваки Pro", // K7
    size: "175×235×270 мм",
    weight: "1.0 кг",
    plug: "TF карта + USB кабель",
    power: "12В, 30Вт (адаптер в комплекте)",
    slicer: "Easyware K7",
    href: "risovaki-pro",
    img: rp1,
  },
];

export const printers_highlight = [
  {
    id: "risovaki",
    title: "Рисоваки — твой первый шаг в мир 3D-печати",
    description:
      "Лёгкий, тихий и простой в использовании 3D-принтер начального уровня. Рисоваки работает с PLA и TPU, имеет автоматическую нарезку моделей и управление одной кнопкой. Идеально подходит для домашних занятий, творчества и первых проектов с детьми. Компактный размер, понятный софт и бесплатная библиотека моделей — начни печатать сразу.",
    ozonHref: "https://ozon.ru/your-k10-link",
    wildberriesHref: "https://wildberries.ru/your-k10-link",
    yandexHref: "https://market.yandex.ru/your-k10-link",
    images: risovakiImages,
  },
  {
    id: "risovaki-pro",
    title: "Рисоваки Pro — больше возможностей, такая же простота",
    description:
      "Рисоваки Pro — это мини-принтер с расширенным функционалом: быстрая печать, поддержка USB и TF карты, продвинутая версия софта и улучшенные размеры корпуса. Подходит не только для начинающих, но и для студентов и DIY-энтузиастов. В комплекте — адаптер, видеоуроки и всё, чтобы начать без лишних настроек.",
    ozonHref: "https://ozon.ru/your-k7-link",
    wildberriesHref: "https://wildberries.ru/your-k7-link",
    yandexHref: "https://market.yandex.ru/your-k7-link",
    images: risovakiProImages,
  },
];
