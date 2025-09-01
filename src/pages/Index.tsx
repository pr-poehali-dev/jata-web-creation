import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full shadow-lg px-8 py-4">
        <div className="flex items-center justify-between space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Icon name="Building2" size={16} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-semibold text-slate-800">AKATA</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">О компании</a>
            <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Услуги</a>
            <a href="#partners" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Партнеры</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full screen with centered content */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/img/7f8098d1-41de-4c50-a825-18ff4427433e.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/60"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display font-bold text-white mb-8 leading-tight">
            Добро пожаловать в мир
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              японского качества
            </span>
          </h1>
          <p className="text-2xl text-blue-100 mb-6 max-w-4xl mx-auto font-light">
            Ваш надежный партнер по оптовым поставкам японских товаров в страны СНГ
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Мы специализируемся на организации прямых поставок любых товаров из Японии под ваш заказ. 
            От автомобилей и электроники до продуктов и аптечных товаров — мы открываем для вас доступ к лучшим образцам японской промышленности.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-lg font-medium shadow-2xl"
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Связаться с нами
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </section>

      {/* About Section - Modern layout */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-bold text-slate-800 mb-6">О нашей компании</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Наша компания выступает ключевым связующим звеном между японскими производителями и динамичными рынками стран СНГ. 
                    Наша основная деятельность сосредоточена на успешном освоении рынков Украины, Узбекистана, России и других стран Содружества для иностранных продавцов.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Мы глубоко понимаем как тонкости японского делового этикета и качества продукции, так и специфику потребительского спроса и логистики в странах СНГ, 
                    что делает нас идеальным партнером для взаимовыгодного сотрудничества.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl opacity-20"></div>
                <div className="relative bg-white p-12 rounded-3xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                      <div className="text-slate-600 font-medium">Лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                      <div className="text-slate-600 font-medium">Успешных поставок</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
                      <div className="text-slate-600 font-medium">Партнеров</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
                      <div className="text-slate-600 font-medium">Поддержка</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card grid with hover effects */}
      <section id="services" className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold text-slate-800 mb-6">Основные направления деятельности</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <CardHeader className="text-center p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <Icon name="Search" size={56} className="mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-xl font-semibold">Поиск рынков сбыта</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 text-center leading-relaxed">
                  Профессиональный анализ и поиск перспективных каналов сбыта для продукции японских компаний в России, Украине, Узбекистане и других странах СНГ.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <CardHeader className="text-center p-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <Icon name="Package" size={56} className="mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-xl font-semibold">Оптовые поставки под заказ</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 text-center leading-relaxed">
                  Организация полного цикла поставок: от поиска производителя в Японии и заключения контракта до доставки и таможенного оформления.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <CardHeader className="text-center p-8 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                <Icon name="TrendingUp" size={56} className="mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-xl font-semibold">Бизнес-консалтинг</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 text-center leading-relaxed">
                  Поиск, анализ и разработка перспективных бизнес-проектов для выхода на рынок Японии или стран СНГ.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <CardHeader className="text-center p-8 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                <Icon name="Languages" size={56} className="mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-xl font-semibold">Лингвистическое сопровождение</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-slate-600 text-center leading-relaxed">
                  Полный спектр услуг профессионального русско-японского перевода (включая устный на переговорах и письменный для документации).
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 font-medium">
                Мы открыты для рассмотрения любых коммерческих заказов и построения долгосрочного партнерства.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Modern layout with cards */}
      <section id="partners" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold text-slate-800 mb-6">Среди наших клиентов и партнеров</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Мы гордимся доверием, которое оказывают нам как крупные международные корпорации, так и частные компании. 
              Наш опыт позволяет нам эффективно работать с самыми разными отраслями.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
                  <CardTitle className="flex items-center text-2xl font-semibold">
                    <Icon name="Building2" size={32} className="mr-4" />
                    Японские производители
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {["Dai Ruber", "YKK", "SEIWA", "SEYKO SANGYO", "Bic Camera"].map((company, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        <p className="text-slate-700 font-medium">{company}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8">
                  <CardTitle className="flex items-center text-2xl font-semibold">
                    <Icon name="Store" size={32} className="mr-4" />
                    Дистрибьюторы и производители
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {["TD Russia", "Massandra", "NIVA Winery", "Novi Svet", "Чёрный хлеб", "YARKAT"].map((company, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                        <p className="text-slate-700 font-medium">{company}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-100 to-blue-100 p-8 rounded-3xl shadow-lg">
                <p className="text-lg text-slate-600 italic font-medium">
                  ... а также многие другие уважаемые организации и частные лица.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Split layout */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold text-slate-800 mb-6">Свяжитесь с нами</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мы всегда готовы обсудить ваши задачи и предложить оптимальное решение.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
                <CardTitle className="flex items-center text-2xl font-semibold">
                  <Icon name="Building2" size={32} className="mr-4" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                  <Icon name="MapPin" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-2">Адрес:</p>
                    <p className="text-slate-600">[Юридический адрес в Японии]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                  <Icon name="Phone" size={24} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-2">Телефон:</p>
                    <p className="text-slate-600">[Телефон с кодом страны]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl">
                  <Icon name="Mail" size={24} className="text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-2">Email:</p>
                    <p className="text-slate-600">[Электронная почта]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                  <Icon name="Calendar" size={24} className="text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-2">Дата основания:</p>
                    <p className="text-slate-600">[Дата основания]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-10">
                <CardTitle className="flex items-center text-2xl font-semibold">
                  <Icon name="Send" size={32} className="mr-4" />
                  Отправить сообщение
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10">
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="border-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 text-lg focus:ring-2 focus:ring-blue-500" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Email" 
                      type="email" 
                      className="border-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 text-lg focus:ring-2 focus:ring-purple-500" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Компания" 
                      className="border-0 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-4 text-lg focus:ring-2 focus:ring-pink-500" 
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение" 
                      rows={6} 
                      className="border-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 text-lg focus:ring-2 focus:ring-indigo-500" 
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl p-4 text-lg font-medium shadow-xl">
                    <Icon name="Send" size={20} className="mr-3" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Modern design */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-display font-bold text-white mb-8">Готовы начать сотрудничество?</h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-light">
            Отправьте нам запрос на интересующие вас товары, и мы оперативно подготовим для вас коммерческое предложение.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-semibold shadow-2xl"
          >
            <Icon name="FileText" size={24} className="mr-3" />
            Отправить заявку
          </Button>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Icon name="Building2" size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-display font-bold">AKATA</h3>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg">
            © 2024 AKATA Company. Ваш надежный партнер в японско-российском бизнесе.
          </p>
        </div>
      </footer>
    </div>
  );
}