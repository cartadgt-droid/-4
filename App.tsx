import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Leaf, 
  ShieldCheck, 
  Sparkles, 
  Truck,
  Camera,
  ExternalLink,
  MessageCircle,
  ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants & Data ---

const NAV_LINKS = [
  { name: 'Каталог', href: '#catalog' },
  { name: 'О нас', href: '#about' },
  { name: 'Доставка', href: '#delivery' },
  { name: 'Контакты', href: '#contacts' },
];

const PRODUCTS = [
  {
    id: 1,
    title: 'Сервировка',
    description: 'Салфетки на стол из джута и гиацинта для уютных ужинов.',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800',
    category: 'Home',
    ozon: 'https://www.ozon.ru/seller/alisenok/',
    wb: 'https://www.wildberries.ru/brands/2690791-alisenok'
  },
  {
    id: 2,
    title: 'Хранение',
    description: 'Интерьерные корзины из джута: порядок с любовью к природе.',
    image: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=800',
    category: 'Storage',
    ozon: 'https://www.ozon.ru/seller/alisenok/',
    wb: 'https://www.wildberries.ru/brands/2690791-alisenok'
  },
  {
    id: 3,
    title: 'Лето',
    description: 'Набор «Пляжная эстетика»: сумка, шоппер и косметичка.',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb3c370?auto=format&fit=crop&q=80&w=800',
    category: 'Summer',
    ozon: 'https://www.ozon.ru/seller/alisenok/',
    wb: 'https://www.wildberries.ru/brands/2690791-alisenok'
  }
];

const FEATURES = [
  { icon: Leaf, title: '100% натурально', text: 'Экологичные материалы высшего качества: джут, хлопок, гиацинт.' },
  { icon: ShieldCheck, title: 'Ручной контроль', text: 'Каждое изделие проходит тщательную проверку качества.' },
  { icon: Sparkles, title: 'Уникальный дизайн', text: 'Авторские решения, которые создают неповторимый уют.' },
  { icon: Truck, title: 'Быстрая доставка', text: 'Отправляем ваши заказы через популярные маркетплейсы.' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1594910413528-9430d89bb615?auto=format&fit=crop&q=80&w=600',
];

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-dark/60 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className="h-1 bg-terracotta mx-auto mt-6 rounded-full"
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {NAV_LINKS.slice(0, 2).map(link => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-terracotta transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif font-bold tracking-tight">
          АлисЁноК
        </div>

        {/* Desktop Links 2 */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {NAV_LINKS.slice(2).map(link => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-terracotta transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Spacer */}
        <div className="md:hidden w-6" />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream shadow-xl md:hidden flex flex-col items-center py-8 space-y-6"
          >
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif hover:text-terracotta transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-white rounded-3xl overflow-hidden button-shadow"
  >
    <div className="relative overflow-hidden aspect-[4/5]">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-serif mb-2">{product.title}</h3>
      <p className="text-dark/60 text-sm mb-6 leading-relaxed">{product.description}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a 
          href={product.ozon} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-terracotta text-white py-3 px-4 rounded-full text-center text-sm font-medium hover:bg-terracotta/90 transition-colors flex items-center justify-center gap-2"
        >
          Ozon <ExternalLink size={14} />
        </a>
        <a 
          href={product.wb} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 border border-dark/10 py-3 px-4 rounded-full text-center text-sm font-medium hover:bg-dark hover:text-white transition-all flex items-center justify-center gap-2"
        >
          Wildberries <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-terracotta/20 selection:text-terracotta">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/40 to-cream" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
              Эстетика природы <br />
              <span className="italic text-terracotta">в вашем доме</span>
            </h1>
            <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Авторские изделия из джута и гиацинта: от уютных салфеток <br className="hidden md:block" />
              до стильных пляжных наборов.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#catalog" 
                className="bg-dark text-white px-10 py-4 rounded-full text-lg font-medium hover-lift button-shadow flex items-center justify-center gap-2"
              >
                В каталог <ChevronRight size={20} />
              </a>
              <a 
                href="https://www.ozon.ru/seller/alisenok/" 
                target="_blank"
                className="bg-white text-dark border border-dark/10 px-10 py-4 rounded-full text-lg font-medium hover-lift button-shadow flex items-center justify-center gap-2"
              >
                На маркетплейс <ShoppingBag size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dark/30"
        >
          <div className="w-px h-12 bg-dark/20 mx-auto mb-2" />
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </motion.div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Создайте атмосферу тепла и уюта с нашими изделиями ручной работы">
            Каталог изделий
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-sand/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 button-shadow group-hover:bg-terracotta group-hover:text-white transition-colors duration-500">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling / Materials Section */}
      <section id="about" className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sand/5 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-terracotta font-medium tracking-widest uppercase text-sm mb-4 block">О материалах</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                Сила джута и магия <br /> водного гиацинта
              </h2>
              <div className="space-y-6 text-dark/70 text-lg leading-relaxed">
                <p>
                  Мы выбираем только 100% натуральные материалы. Джут — это невероятно прочное и износостойкое волокно, которое привносит в дом ощущение стабильности и связи с землей.
                </p>
                <p>
                  Водный гиацинт, в свою очередь, обладает удивительной мягкостью и неповторимой текстурой плетения. Вместе они создают тот самый «Scandi-Boho» уют, который делает дом местом силы.
                </p>
                <p className="italic">
                  «АлисЁноК» — это не просто вещи. Это история о любви к деталям, ручном труде и гармонии с окружающим миром.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594910413528-9430d89bb615?auto=format&fit=crop&q=80&w=1000" 
                  alt="Crafting Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl button-shadow hidden md:block max-w-xs">
                <p className="font-serif text-lg italic text-terracotta">
                  "Каждое плетение — это тепло человеческих рук"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Вдохновение для вашего дома в нашем профиле">
            Insta-Эстетика
          </SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group relative"
              >
                <img 
                  src={img} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-dark text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-serif mb-6">АлисЁноК</h2>
              <p className="text-white/50 max-w-md mb-8 leading-relaxed">
                Мы создаем товары, которые превращают обычные моменты в эстетическое удовольствие. Натуральные материалы, ручная работа и частичка души в каждом изделии.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-all">
                  <Camera size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-all">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-terracotta">Навигация</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-terracotta">Магазины</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.ozon.ru/seller/alisenok/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    OZON <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://www.wildberries.ru/brands/2690791-alisenok" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    Wildberries <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    Яндекс Маркет <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:row items-center justify-between gap-6 text-white/30 text-xs">
            <p>© {new Date().getFullYear()} «АлисЁноК». Все права защищены.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
