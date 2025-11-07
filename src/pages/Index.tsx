import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-primary">ПРЕМИУМ СТРОЙ</h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-accent transition-colors">О компании</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-accent transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('process')} className="text-sm hover:text-accent transition-colors">Этапы работы</button>
            <button onClick={() => scrollToSection('team')} className="text-sm hover:text-accent transition-colors">Команда</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-accent transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-accent transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 text-primary">
            Консультация
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">Премиальное строительство</Badge>
          <h1 className="md:text-7xl font-bold mb-6 text-primary leading-tight text-7xl">
            Элитное строительство<br />и ремонт под ключ
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Воплощаем архитектурные шедевры для самых взыскательных клиентов.<br />
            Безупречное качество. Гарантия 10 лет.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Заказать консультацию
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="border-2">
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">О компании</Badge>
              <h2 className="text-5xl font-bold mb-6 text-primary">15 лет создаём совершенство</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Премиум Строй — это команда профессионалов высочайшего уровня, специализирующихся 
                на элитном строительстве и премиальном ремонте. Мы создаём пространства, 
                которые вдохновляют и служат десятилетиями.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">350+</div>
                  <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/3ea3401d-122f-45b9-8958-47822737d319/files/f95a8cda-7bb4-4506-b1e7-a5408293c646.jpg"
                alt="Премиальный интерьер"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Услуги</Badge>
            <h2 className="text-5xl font-bold text-primary mb-4">Полный спектр услуг</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От проектирования до финального декора — мы реализуем проекты любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Building2',
                title: 'Элитное строительство',
                description: 'Возведение загородных домов и коттеджей премиум-класса с использованием лучших материалов и технологий',
                features: ['Индивидуальное проектирование', 'Премиум материалы', 'Контроль качества']
              },
              {
                icon: 'Palette',
                title: 'Премиальный ремонт',
                description: 'Комплексный ремонт квартир и апартаментов в элитных жилых комплексах под ключ',
                features: ['Дизайн-проект', 'Европейское качество', 'Точные сроки']
              },
              {
                icon: 'Sparkles',
                title: 'Отделка и декор',
                description: 'Эксклюзивная отделка с использованием натурального камня, ценных пород дерева и дизайнерских материалов',
                features: ['Эксклюзивные материалы', 'Ручная работа', 'Уникальный дизайн']
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-2">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Портфолио</Badge>
            <h2 className="text-5xl font-bold text-primary mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — уникальное произведение архитектурного искусства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/3ea3401d-122f-45b9-8958-47822737d319/files/f63d3b96-64df-4659-8bc8-2977dc56c132.jpg',
                title: 'Резиденция в Рублевке',
                area: '850 м²',
                type: 'Загородный дом'
              },
              {
                image: 'https://cdn.poehali.dev/projects/3ea3401d-122f-45b9-8958-47822737d319/files/f95a8cda-7bb4-4506-b1e7-a5408293c646.jpg',
                title: 'Пентхаус в Москва-Сити',
                area: '420 м²',
                type: 'Апартаменты'
              },
              {
                image: 'https://cdn.poehali.dev/projects/3ea3401d-122f-45b9-8958-47822737d319/files/5cf6fffa-d155-4207-babb-128e9593ce18.jpg',
                title: 'Вилла на берегу моря',
                area: '1200 м²',
                type: 'Коттедж'
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scale-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">{project.type}</Badge>
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Icon name="Home" size={16} />
                    {project.area}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Процесс работы</Badge>
            <h2 className="text-5xl font-bold text-primary mb-4">Этапы реализации проекта</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачная и понятная система работы на каждом этапе
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: '01',
                title: 'Консультация и замер',
                description: 'Выезд специалиста, обсуждение пожеланий, профессиональные замеры объекта',
                icon: 'Ruler'
              },
              {
                number: '02',
                title: 'Проектирование',
                description: 'Разработка дизайн-проекта, 3D-визуализация, подбор материалов и согласование',
                icon: 'PenTool'
              },
              {
                number: '03',
                title: 'Договор и смета',
                description: 'Фиксированная смета, прозрачный договор, поэтапная оплата работ',
                icon: 'FileText'
              },
              {
                number: '04',
                title: 'Строительство',
                description: 'Реализация проекта бригадой профессионалов с еженедельными отчётами',
                icon: 'HardHat'
              },
              {
                number: '05',
                title: 'Контроль качества',
                description: 'Многоступенчатая проверка качества на каждом этапе выполнения работ',
                icon: 'CheckCircle2'
              },
              {
                number: '06',
                title: 'Сдача объекта',
                description: 'Финальная приёмка, устранение замечаний, гарантия 10 лет на все работы',
                icon: 'Award'
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start group animate-fade-in-up">
                <div className="flex-shrink-0 w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name={step.icon} className="text-accent" size={32} />
                </div>
                <div className="flex-grow">
                  <div className="text-6xl font-bold text-accent/20 mb-2">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Команда</Badge>
            <h2 className="text-5xl font-bold text-primary mb-4">Профессионалы своего дела</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наша команда — это опытные специалисты с международными сертификатами
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Александр Петров', role: 'Генеральный директор', experience: '20 лет опыта' },
              { name: 'Елена Соколова', role: 'Главный архитектор', experience: '15 лет опыта' },
              { name: 'Дмитрий Иванов', role: 'Прораб', experience: '18 лет опыта' },
              { name: 'Мария Волкова', role: 'Дизайнер интерьеров', experience: '12 лет опыта' }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{member.name}</h3>
                  <p className="text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm text-accent">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Отзывы</Badge>
            <h2 className="text-5xl font-bold text-primary mb-4">Что говорят наши клиенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Доверие клиентов — главная ценность нашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Сергей Михайлов',
                project: 'Загородный дом, 650 м²',
                text: 'Высочайший уровень профессионализма! Команда воплотила все наши мечты о загородном доме. Качество работ безупречное, каждая деталь продумана до мелочей.',
                rating: 5
              },
              {
                name: 'Анна Белова',
                project: 'Апартаменты, 280 м²',
                text: 'Благодарим за потрясающий ремонт нашей квартиры! Все сделано в срок, смета не изменилась. Особенно впечатлило внимание к деталям и работа дизайнера.',
                rating: 5
              },
              {
                name: 'Владимир Козлов',
                project: 'Коттедж, 520 м²',
                text: 'Сотрудничество с Премиум Строй превзошло все ожидания. Профессиональная команда, качественные материалы, идеальное исполнение. Рекомендую всем!',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-primary">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Контакты</Badge>
              <h2 className="text-5xl font-bold text-primary mb-6">Начнём сотрудничество</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут 
                для бесплатной консультации и выезда на замер.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-primary mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-primary mb-1">Email</div>
                    <div className="text-muted-foreground">info@premiumstroy.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-primary mb-1">Офис</div>
                    <div className="text-muted-foreground">г. Москва, Пресненская наб., 12</div>
                  </div>
                </div>
              </div>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Shield" className="text-accent flex-shrink-0" size={32} />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Гарантия качества</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Официальная гарантия 10 лет на все виды работ. Полное страхование объекта на весь период строительства.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="animate-scale-in shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Заявка на консультацию</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <Input 
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input 
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ПРЕМИУМ СТРОЙ</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Элитное строительство и премиальный ремонт с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Строительство домов</li>
                <li>Ремонт квартир</li>
                <li>Дизайн интерьеров</li>
                <li>Отделочные работы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@premiumstroy.ru</li>
                <li>Москва, Пресненская наб., 12</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            © 2024 Премиум Строй. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;