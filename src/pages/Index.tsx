import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const technologies = [
    {
      id: 'ml',
      title: 'Машинное обучение',
      icon: 'Brain',
      description: 'Машинное обучение (Machine Learning, ML) представляет собой подраздел искусственного интеллекта, который позволяет компьютерным системам обучаться на основе данных без явного программирования.',
      details: 'Основные подходы включают обучение с учителем (supervised learning), где алгоритм обучается на размеченных данных с известными правильными ответами; обучение без учителя (unsupervised learning), которое выявляет скрытые закономерности в неразмеченных данных; и обучение с подкреплением (reinforcement learning), где агент учится принимать решения путем взаимодействия со средой. Современные алгоритмы машинного обучения применяются в рекомендательных системах, прогнозировании временных рядов, классификации объектов и многих других задачах.',
      applications: ['Прогнозирование спроса', 'Детекция мошенничества', 'Персонализация контента', 'Кредитный скоринг']
    },
    {
      id: 'nn',
      title: 'Нейронные сети',
      icon: 'Network',
      description: 'Искусственные нейронные сети моделируют работу биологических нейронов человеческого мозга, создавая многослойные архитектуры для решения сложных задач распознавания образов.',
      details: 'Глубокое обучение (Deep Learning) использует многослойные нейронные сети с десятками или сотнями слоев. Сверточные нейронные сети (CNN) специализируются на обработке изображений и видео, выявляя пространственные иерархии признаков. Рекуррентные нейронные сети (RNN) и их современные варианты, такие как LSTM и GRU, эффективны для последовательных данных и временных рядов. Трансформеры, лежащие в основе современных языковых моделей, используют механизм внимания для обработки последовательностей любой длины.',
      applications: ['Распознавание лиц', 'Медицинская диагностика по снимкам', 'Автономное вождение', 'Генерация изображений']
    },
    {
      id: 'nlp',
      title: 'Обработка естественного языка',
      icon: 'MessageSquare',
      description: 'NLP (Natural Language Processing) позволяет компьютерам понимать, интерпретировать и генерировать человеческий язык в текстовой и речевой форме.',
      details: 'Современные языковые модели, основанные на архитектуре трансформеров (BERT, GPT, T5), достигли беспрецедентных результатов в понимании контекста и генерации связного текста. Технологии NLP включают токенизацию, лемматизацию, векторное представление слов (word embeddings), анализ тональности, извлечение именованных сущностей, машинный перевод и суммаризацию текстов. Эти методы находят применение в виртуальных ассистентах, чат-ботах, системах автоматического перевода и анализа отзывов клиентов.',
      applications: ['Чат-боты и виртуальные ассистенты', 'Машинный перевод', 'Анализ тональности текста', 'Автоматическое реферирование']
    },
    {
      id: 'cv',
      title: 'Компьютерное зрение',
      icon: 'Eye',
      description: 'Computer Vision обеспечивает способность машин анализировать и интерпретировать визуальную информацию из окружающего мира с точностью, часто превосходящей человеческое восприятие.',
      details: 'Компьютерное зрение объединяет методы обработки изображений, машинного обучения и глубоких нейронных сетей для решения задач детекции, сегментации, классификации и трекинга объектов. Современные модели, такие как YOLO, Mask R-CNN и Vision Transformers, обрабатывают изображения в реальном времени. Применения включают распознавание лиц в системах безопасности, медицинскую диагностику по рентгеновским снимкам и МРТ, контроль качества на производстве, дополненную реальность и автономное вождение транспортных средств.',
      applications: ['Системы видеонаблюдения', 'Дополненная реальность', 'Контроль качества продукции', 'Роботическое зрение']
    }
  ];

  const applications = [
    {
      id: 'medicine',
      title: 'Медицина и здравоохранение',
      icon: 'Heart',
      description: 'Искусственный интеллект революционизирует медицинскую диагностику, позволяя выявлять заболевания на ранних стадиях с высокой точностью.',
      content: 'Алгоритмы компьютерного зрения анализируют медицинские изображения (рентген, МРТ, КТ) для выявления патологий, часто обнаруживая признаки заболеваний, невидимые человеческому глазу. Системы предиктивной аналитики прогнозируют риски развития заболеваний на основе генетических данных и истории болезни. Роботизированные хирургические системы выполняют высокоточные операции с минимальным вмешательством. Виртуальные медицинские ассистенты помогают пациентам отслеживать симптомы и принимать лекарства. Разработка новых препаратов ускоряется благодаря ИИ-моделированию молекулярных взаимодействий.',
      impact: '87% точность в диагностике рака кожи, сокращение времени разработки препаратов на 50%'
    },
    {
      id: 'finance',
      title: 'Финансы и банковское дело',
      icon: 'TrendingUp',
      description: 'В финансовом секторе ИИ применяется для анализа рисков, обнаружения мошенничества и алгоритмической торговли.',
      content: 'Системы машинного обучения анализируют миллионы транзакций в реальном времени, выявляя подозрительные операции и предотвращая финансовые преступления. Алгоритмы кредитного скоринга оценивают платежеспособность заемщиков на основе множества факторов, включая нетрадиционные источники данных. Роботы-советники (robo-advisors) предоставляют персонализированные инвестиционные рекомендации, доступные широкой аудитории. Высокочастотная алгоритмическая торговля использует ИИ для принятия торговых решений в микросекундном диапазоне. Чат-боты автоматизируют клиентское обслуживание в банках, обрабатывая типовые запросы круглосуточно.',
      impact: 'Снижение мошенничества на 60%, обработка 95% клиентских запросов без участия человека'
    },
    {
      id: 'transport',
      title: 'Транспорт и логистика',
      icon: 'Truck',
      description: 'Автономные транспортные средства и интеллектуальные системы управления трафиком меняют будущее мобильности.',
      content: 'Беспилотные автомобили используют комбинацию компьютерного зрения, лидаров, радаров и глубокого обучения для навигации в сложных дорожных условиях. Системы прогнозирования трафика оптимизируют маршруты доставки в реальном времени, сокращая время в пути и расход топлива. Умные светофоры адаптируются к текущей загруженности дорог, уменьшая пробки. В авиации ИИ используется для прогнозирования технического обслуживания, оптимизации расписания рейсов и управления воздушным движением. Дроны с ИИ доставляют посылки в труднодоступные районы и выполняют инспекцию инфраструктуры.',
      impact: 'Сокращение аварий на 90% (прогноз), снижение выбросов CO2 на 40%'
    },
    {
      id: 'education',
      title: 'Образование и обучение',
      icon: 'GraduationCap',
      description: 'Персонализированные образовательные платформы адаптируют учебный процесс под индивидуальные потребности каждого студента.',
      content: 'Адаптивные системы обучения анализируют успеваемость учащихся и автоматически подстраивают сложность материала, темп обучения и методы подачи информации. Виртуальные наставники на базе ИИ предоставляют круглосуточную поддержку, отвечая на вопросы и объясняя сложные концепции. Автоматизированная проверка работ освобождает преподавателей от рутинных задач, позволяя сосредоточиться на индивидуальной работе со студентами. Системы анализа учебных данных выявляют учащихся, находящихся в группе риска, и рекомендуют интервенции. Виртуальная и дополненная реальность с ИИ создают иммерсивные образовательные опыты.',
      impact: 'Повышение успеваемости на 30%, сокращение отсева студентов на 25%'
    }
  ];

  const research = [
    {
      title: 'Трансформеры и языковые модели',
      institution: 'OpenAI, Google Research, Meta AI',
      year: '2017-2024',
      description: 'Разработка архитектуры трансформеров стала прорывом в обработке естественного языка, породив семейство больших языковых моделей (LLM). Модели GPT, BERT, T5 и их последователи демонстрируют способность понимать контекст, генерировать связный текст, переводить языки, писать код и решать сложные задачи рассуждения. Исследования фокусируются на масштабировании моделей, повышении эффективности обучения, устранении галлюцинаций и обеспечении безопасности систем.',
      impact: 'Революция в NLP, создание ChatGPT и подобных систем'
    },
    {
      title: 'Мультимодальные нейросети',
      institution: 'Stanford University, MIT CSAIL',
      year: '2021-2024',
      description: 'Мультимодальные модели объединяют обработку текста, изображений, аудио и видео в единую архитектуру, позволяя системам понимать и генерировать контент в различных форматах. CLIP, DALL-E, Flamingo и GPT-4V демонстрируют впечатляющие способности в задачах визуального вопрос-ответа, генерации изображений по текстовым описаниям и понимания сложных визуальных сцен. Исследования направлены на улучшение согласованности между модальностями и расширение типов обрабатываемых данных.',
      impact: 'Новые возможности в генерации контента и понимании сложных данных'
    },
    {
      title: 'Обучение с подкреплением',
      institution: 'DeepMind, UC Berkeley',
      year: '2013-2024',
      description: 'Методы глубокого обучения с подкреплением (Deep RL) позволили агентам достигать сверхчеловеческих результатов в играх (AlphaGo, Dota 2, StarCraft II) и решать сложные задачи управления роботами. Исследования в области multi-agent RL, offline RL и world models расширяют применимость технологии к реальным задачам робототехники, автономного вождения и оптимизации промышленных процессов. Особое внимание уделяется sample efficiency и безопасности обучения.',
      impact: 'Достижение сверхчеловеческого уровня в сложных стратегических играх'
    },
    {
      title: 'Нейросимволический ИИ',
      institution: 'IBM Research, Cambridge University',
      year: '2019-2024',
      description: 'Нейросимволический подход объединяет сильные стороны нейронных сетей (обучение из данных, распознавание образов) и символьного ИИ (логический вывод, интерпретируемость, использование знаний). Это направление обещает создание более надежных и объяснимых систем, способных к абстрактному рассуждению и применению здравого смысла. Исследования включают интеграцию графов знаний в нейронные архитектуры, дифференцируемое программирование и системы автоматического доказательства теорем.',
      impact: 'Повышение интерпретируемости и надежности ИИ-систем'
    }
  ];

  const perspectives = [
    {
      title: 'Общий искусственный интеллект (AGI)',
      timeframe: '2030-2050',
      description: 'Искусственный общий интеллект (Artificial General Intelligence, AGI) представляет собой гипотетическую систему ИИ, способную выполнять любую интеллектуальную задачу, которую может выполнить человек. В отличие от узкоспециализированного ИИ, который превосходит людей в конкретных задачах, AGI обладает способностью к обобщению знаний, переносу обучения между доменами, абстрактному мышлению и самосовершенствованию. Достижение AGI остается одной из главных целей исследований в области ИИ.',
      challenges: ['Создание архитектур с общим рассуждением', 'Обеспечение безопасности и контроля', 'Этические и социальные последствия', 'Энергоэффективность вычислений']
    },
    {
      title: 'Квантовое машинное обучение',
      timeframe: '2025-2035',
      description: 'Квантовые компьютеры обещают экспоненциальное ускорение определенных типов вычислений, что может революционизировать машинное обучение. Квантовые нейронные сети, квантовые алгоритмы оптимизации и квантовая обработка данных теоретически способны решать задачи, недоступные классическим компьютерам. Гибридные классически-квантовые алгоритмы уже демонстрируют перспективные результаты в задачах химии, материаловедения и оптимизации.',
      challenges: ['Масштабирование квантовых систем', 'Коррекция квантовых ошибок', 'Разработка квантовых алгоритмов МО', 'Интеграция с существующей инфраструктурой']
    },
    {
      title: 'Neuromorphic Computing',
      timeframe: '2025-2030',
      description: 'Нейроморфные вычисления имитируют архитектуру и принципы работы биологического мозга, создавая специализированные чипы с искусственными нейронами и синапсами. Эти системы обещают на порядки более высокую энергоэффективность по сравнению с традиционными процессорами при выполнении задач ИИ. Intel Loihi, IBM TrueNorth и другие нейроморфные чипы уже демонстрируют впечатляющие результаты в задачах распознавания образов и управления роботами в реальном времени.',
      challenges: ['Разработка программных фреймворков', 'Стандартизация архитектур', 'Обучение spike-based моделей', 'Промышленное производство']
    },
    {
      title: 'Federated Learning и Edge AI',
      timeframe: '2024-2028',
      description: 'Федеративное обучение позволяет тренировать модели на распределенных данных без их централизации, обеспечивая приватность и снижая нагрузку на сеть. Edge AI переносит вычисления ИИ на периферийные устройства (смартфоны, IoT-датчики, камеры), обеспечивая низкую задержку и автономность. Эти технологии критически важны для медицины (конфиденциальность данных пациентов), умных городов и автономных систем, работающих в условиях ограниченной связности.',
      challenges: ['Гетерогенность устройств', 'Коммуникационная эффективность', 'Защита от adversarial attacks', 'Оптимизация моделей для edge-устройств']
    }
  ];

  const learningMaterials = [
    {
      level: 'Начальный уровень',
      icon: 'BookOpen',
      materials: [
        {
          title: 'Введение в машинное обучение',
          description: 'Базовые концепции МО: типы обучения, алгоритмы классификации и регрессии, оценка моделей. Практические примеры на Python с библиотеками scikit-learn и pandas.',
          duration: '4 недели',
          topics: ['Supervised vs Unsupervised Learning', 'Линейная и логистическая регрессия', 'Деревья решений и случайный лес', 'Кросс-валидация и метрики качества']
        },
        {
          title: 'Основы нейронных сетей',
          description: 'Архитектура искусственных нейронов, прямое и обратное распространение, функции активации. Построение простых нейросетей с использованием TensorFlow/PyTorch.',
          duration: '3 недели',
          topics: ['Перцептрон и многослойные сети', 'Градиентный спуск', 'Backpropagation', 'Регуляризация и dropout']
        }
      ]
    },
    {
      level: 'Средний уровень',
      icon: 'Layers',
      materials: [
        {
          title: 'Глубокое обучение',
          description: 'Продвинутые архитектуры: CNN для изображений, RNN/LSTM для последовательностей, трансформеры для NLP. Transfer learning и fine-tuning предобученных моделей.',
          duration: '8 недель',
          topics: ['Сверточные и рекуррентные сети', 'Attention mechanism', 'GANs и VAEs', 'Практики обучения глубоких моделей']
        },
        {
          title: 'Обработка естественного языка',
          description: 'Современные методы NLP: токенизация, embeddings (Word2Vec, GloVe, BERT), sentiment analysis, машинный перевод. Работа с большими языковыми моделями.',
          duration: '6 недель',
          topics: ['Трансформеры и BERT', 'GPT и языковые модели', 'Named Entity Recognition', 'Text generation и summarization']
        }
      ]
    },
    {
      level: 'Продвинутый уровень',
      icon: 'Rocket',
      materials: [
        {
          title: 'Reinforcement Learning',
          description: 'Теория и практика обучения с подкреплением: марковские процессы, Q-learning, policy gradient методы, actor-critic алгоритмы. Применение в играх и робототехнике.',
          duration: '10 недель',
          topics: ['MDPs и Bellman equations', 'DQN и Rainbow', 'PPO и TRPO', 'Multi-agent RL']
        },
        {
          title: 'Исследовательские проекты в ИИ',
          description: 'Самостоятельная исследовательская работа: выбор актуальной проблемы, обзор литературы, разработка решения, эксперименты, написание научной статьи.',
          duration: '12 недель',
          topics: ['Научная методология', 'Воспроизводимые эксперименты', 'Анализ state-of-the-art', 'Публикация результатов']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Brain" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold">AI Research Portal</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => setActiveSection('main')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => setActiveSection('tech')} className="text-sm hover:text-primary transition-colors">Технологии</button>
              <button onClick={() => setActiveSection('apps')} className="text-sm hover:text-primary transition-colors">Применение</button>
              <button onClick={() => setActiveSection('research')} className="text-sm hover:text-primary transition-colors">Исследования</button>
              <button onClick={() => setActiveSection('future')} className="text-sm hover:text-primary transition-colors">Перспективы</button>
              <button onClick={() => setActiveSection('learn')} className="text-sm hover:text-primary transition-colors">Обучение</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="outline">Академический портал</Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Искусственный интеллект: возможности и потенциал
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Комплексное исследование современных технологий искусственного интеллекта, их практического применения и перспектив развития. Академический подход к изучению машинного обучения, нейронных сетей и когнитивных вычислений.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" className="text-accent mb-2" size={40} />
                <CardTitle>Инновации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Передовые исследования в области глубокого обучения, трансформеров и мультимодальных моделей</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Globe" className="text-primary mb-2" size={40} />
                <CardTitle>Применение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Практическое использование ИИ в медицине, финансах, транспорте и образовании</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="TrendingUp" className="text-accent mb-2" size={40} />
                <CardTitle>Будущее</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Перспективы развития AGI, квантового машинного обучения и нейроморфных систем</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Cpu" className="text-primary" size={32} />
            <h2 className="text-4xl font-bold">Технологии искусственного интеллекта</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {technologies.map((tech) => (
              <AccordionItem key={tech.id} value={tech.id} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Icon name={tech.icon as any} className="text-primary" size={28} />
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{tech.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-4">
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">{tech.details}</p>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="CheckCircle" size={20} className="text-accent" />
                        Ключевые применения:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary">{app}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Briefcase" className="text-primary" size={32} />
            <h2 className="text-4xl font-bold">Области применения</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {applications.map((app) => (
              <Card key={app.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={app.icon as any} className="text-accent" size={32} />
                    <CardTitle className="text-2xl">{app.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">{app.content}</p>
                  <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                    <p className="text-sm font-semibold flex items-center gap-2">
                      <Icon name="BarChart" size={18} className="text-primary" />
                      Влияние и результаты:
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">{app.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Microscope" className="text-primary" size={32} />
            <h2 className="text-4xl font-bold">Научные исследования</h2>
          </div>
          <div className="space-y-6">
            {research.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <Badge variant="outline">{item.year}</Badge>
                  </div>
                  <CardDescription className="text-sm">
                    <Icon name="Building" size={16} className="inline mr-2" />
                    {item.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">{item.description}</p>
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <p className="text-sm font-semibold text-accent mb-1">Научное влияние:</p>
                    <p className="text-sm">{item.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Sparkles" className="text-primary" size={32} />
            <h2 className="text-4xl font-bold">Перспективы развития</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {perspectives.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <Badge className="bg-primary">{item.timeframe}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">{item.description}</p>
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="AlertCircle" size={18} className="text-accent" />
                      Ключевые вызовы:
                    </p>
                    <ul className="space-y-2">
                      {item.challenges.map((challenge, cidx) => (
                        <li key={cidx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="GraduationCap" className="text-primary" size={32} />
            <h2 className="text-4xl font-bold">Обучающие материалы</h2>
          </div>
          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="beginner">Начальный</TabsTrigger>
              <TabsTrigger value="intermediate">Средний</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
            </TabsList>
            {learningMaterials.map((level, idx) => (
              <TabsContent key={idx} value={idx === 0 ? 'beginner' : idx === 1 ? 'intermediate' : 'advanced'}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon name={level.icon as any} className="text-accent" size={28} />
                    <h3 className="text-2xl font-semibold">{level.level}</h3>
                  </div>
                  {level.materials.map((material, midx) => (
                    <Card key={midx}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl">{material.title}</CardTitle>
                          <Badge variant="secondary">{material.duration}</Badge>
                        </div>
                        <CardDescription className="text-base mt-2">{material.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-secondary/20 p-4 rounded-lg">
                          <p className="font-semibold mb-3 text-sm">Основные темы курса:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {material.topics.map((topic, tidx) => (
                              <div key={tidx} className="flex items-start gap-2 text-sm">
                                <Icon name="ChevronRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Brain" size={20} className="text-primary" />
            AI Research Portal — Академический ресурс об искусственном интеллекте
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
