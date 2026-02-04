/**
 * PRODUCTS DATA
 * 
 * This file contains the product catalog data.
 * In production, this should be replaced with an API call.
 * 
 * API Endpoint Structure (for future integration):
 * GET /api/products
 * 
 * Categories: bouquets, flowers, gifts, plants, accessories
 */

export const categories = [
  { id: 'all', name: 'Все', slug: 'all' },
  { id: 'bouquets', name: 'Букеты', slug: 'bouquets' },
  { id: 'flowers', name: 'Цветы', slug: 'flowers' },
  { id: 'gifts', name: 'Подарки', slug: 'gifts' },
  { id: 'plants', name: 'Комнатные растения', slug: 'plants' },
  { id: 'accessories', name: 'Аксессуары для дома', slug: 'accessories' },
];

export const products = [
  {
    id: 1,
    name: 'Нежный пионовый букет',
    price: 4500,
    category: 'bouquets',
    description: 'Воздушный букет из белых пионов с эвкалиптом. Идеален для романтического подарка.',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 2,
    name: 'Пастельные розы',
    price: 3200,
    category: 'bouquets',
    description: 'Нежный монобукет из розовых роз в пастельных тонах.',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 3,
    name: 'Орхидея Фаленопсис',
    price: 2800,
    category: 'flowers',
    description: 'Элегантная белая орхидея в керамическом горшке.',
    image: 'https://images.unsplash.com/photo-1566928407212-7b8d0f8436af?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 4,
    name: 'Тюльпаны микс',
    price: 1800,
    category: 'flowers',
    description: 'Яркий микс голландских тюльпанов 25 шт.',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 5,
    name: 'Подарочный набор "Уют"',
    price: 3500,
    category: 'gifts',
    description: 'Свеча ручной работы, чай и мед в крафтовой упаковке.',
    image: 'https://images.unsplash.com/photo-1602825389660-1f5f5f55c9af?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 6,
    name: 'Корзина цветов и конфет',
    price: 5200,
    category: 'gifts',
    description: 'Роскошная корзина с сезонными цветами и бельгийским шоколадом.',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac92f96f9b8?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 7,
    name: 'Фикус Лирата',
    price: 4200,
    category: 'plants',
    description: 'Стильное комнатное растение в плетёном кашпо.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0e?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 8,
    name: 'Монстера Делишиоса',
    price: 3800,
    category: 'plants',
    description: 'Трендовое растение с характерными листьями.',
    image: 'https://images.unsplash.com/photo-1612361615884-f6d2877eb849?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 9,
    name: 'Ваза керамическая',
    price: 2400,
    category: 'accessories',
    description: 'Ручная лепка, натуральная глина, минималистичный дизайн.',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 10,
    name: 'Плетёное кашпо',
    price: 1800,
    category: 'accessories',
    description: 'Натуральный ротанг, размер M (20 см диаметр).',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 11,
    name: 'Букет "Сельская свежесть"',
    price: 2900,
    category: 'bouquets',
    description: 'Полевые цветы с зеленью в крафт-упаковке.',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=750&fit=crop',
    inStock: true,
  },
  {
    id: 12,
    name: 'Гортензия белая',
    price: 2200,
    category: 'flowers',
    description: 'Объёмная ветка гортензии для монобукета.',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&h=750&fit=crop',
    inStock: true,
  },
];

export default products;
