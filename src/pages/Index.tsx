import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Underwater Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/img/4db42642-8410-4413-bc71-3ee56ba1b76e.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-teal-400/30 to-blue-600/40"></div>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent"></div>
        {/* Floating bubbles */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-cyan-300/40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-teal-300/30 rounded-full animate-bounce delay-700"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen bg-white/80 backdrop-blur-sm">
      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-300/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={24} className="text-primary" />
              <h1 className="text-2xl font-bold text-accent">AKATA</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#partners" className="text-foreground hover:text-primary transition-colors">Партнеры</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-accent/5 to-background py-20">
        <div className="absolute inset-0 bg-[url('/img/e216a602-8222-4d66-8951-8498033d2882.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6 leading-tight">
              Добро пожаловать в мир
              <span className="text-primary block">японского качества</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ваш надежный партнер по оптовым поставкам японских товаров в страны СНГ
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              Мы специализируемся на организации прямых поставок любых товаров из Японии под ваш заказ. 
              От автомобилей и электроники до продуктов и аптечных товаров — мы открываем для вас доступ к лучшим образцам японской промышленности.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-accent mb-8 text-center">О нашей компании</h2>
            <div className="text-lg text-foreground leading-relaxed space-y-6">
              <p>
                Наша компания выступает ключевым связующим звеном между японскими производителями и динамичными рынками стран СНГ. 
                Наша основная деятельность сосредоточена на успешном освоении рынков Украины, Узбекистана, России и других стран Содружества для иностранных продавцов.
              </p>
              <p>
                Мы глубоко понимаем как тонкости японского делового этикета и качества продукции, так и специфику потребительского спроса и логистики в странах СНГ, 
                что делает нас идеальным партнером для взаимовыгодного сотрудничества.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-accent mb-12 text-center">Основные направления деятельности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Search" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-accent">Поиск рынков сбыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Профессиональный анализ и поиск перспективных каналов сбыта для продукции японских компаний в России, Украине, Узбекистане и других странах СНГ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Package" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-accent">Оптовые поставки под заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Организация полного цикла поставок: от поиска производителя в Японии и заключения контракта до доставки и таможенного оформления.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="TrendingUp" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-accent">Бизнес-консалтинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Поиск, анализ и разработка перспективных бизнес-проектов для выхода на рынок Японии или стран СНГ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Languages" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-accent">Лингвистическое сопровождение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Полный спектр услуг профессионального русско-японского перевода (включая устный на переговорах и письменный для документации).
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-foreground font-medium">
              Мы открыты для рассмотрения любых коммерческих заказов и построения долгосрочного партнерства.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-accent mb-8 text-center">Среди наших клиентов и партнеров</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-foreground text-center mb-8">
              Мы гордимся доверием, которое оказывают нам как крупные международные корпорации, так и частные компании. 
              Наш опыт позволяет нам эффективно работать с самыми разными отраслями.
            </p>
            
            <div className="bg-[url('/img/96f29735-c429-4010-8ee9-307c6c4de356.jpg')] bg-cover bg-center rounded-lg h-64 mb-12 opacity-80"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-accent flex items-center">
                    <Icon name="Building2" size={24} className="text-primary mr-2" />
                    Японские производители
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-foreground">
                    <p>• Dai Ruber</p>
                    <p>• YKK</p>
                    <p>• SEIWA</p>
                    <p>• SEYKO SANGYO</p>
                    <p>• Bic Camera</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-accent flex items-center">
                    <Icon name="Store" size={24} className="text-primary mr-2" />
                    Дистрибьюторы и производители
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-foreground">
                    <p>• TD Russia</p>
                    <p>• Massandra</p>
                    <p>• NIVA Winery</p>
                    <p>• Novi Svet</p>
                    <p>• Чёрный хлеб</p>
                    <p>• YARKAT</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-center text-muted-foreground mt-8 italic">
              ... а также многие другие уважаемые организации и частные лица.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-accent mb-8 text-center">Свяжитесь с нами</h2>
          <p className="text-lg text-center text-foreground mb-12 max-w-2xl mx-auto">
            Мы всегда готовы обсудить ваши задачи и предложить оптимальное решение.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-accent flex items-center">
                  <Icon name="Building2" size={24} className="text-primary mr-2" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-accent">Адрес:</p>
                    <p className="text-muted-foreground">[Юридический адрес в Японии]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-accent">Телефон:</p>
                    <p className="text-muted-foreground">[Телефон с кодом страны]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-accent">Email:</p>
                    <p className="text-muted-foreground">[Электронная почта]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Calendar" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-accent">Дата основания:</p>
                    <p className="text-muted-foreground">[Дата основания]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-accent flex items-center">
                  <Icon name="Send" size={24} className="text-primary mr-2" />
                  Отправить сообщение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="border-border" />
                  </div>
                  <div>
                    <Input placeholder="Email" type="email" className="border-border" />
                  </div>
                  <div>
                    <Input placeholder="Компания" className="border-border" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={5} className="border-border" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Отправьте нам запрос на интересующие вас товары, и мы оперативно подготовим для вас коммерческое предложение.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-accent hover:bg-background/90">
            <Icon name="FileText" size={20} className="mr-2" />
            Отправить заявку
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent/5 border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Building2" size={24} className="text-primary" />
            <h3 className="text-2xl font-bold text-accent">AKATA</h3>
          </div>
          <p className="text-muted-foreground">
            © 2024 AKATA Company. Ваш надежный партнер в японско-российском бизнесе.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}