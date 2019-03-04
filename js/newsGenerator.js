var predict = [
  { 'message': '[ПЬЯНЫЙ|10] [МУЖЧИНА]', 'sex': 'm' },
  { 'message': '[ПЬЯНАЯ|10] [ЖЕНЩИНА]', 'sex': 'f' },
  { 'message': '[ПЬЯНЫЕ|10] [ЛЮДИ]', 'sex': 'plural' },
  { 'message': '[ДВЕ|10] [ПЬЯНЫЕ|10] [ЖЕНЩИНЫ]', 'sex': 'plural' },

  { 'message': '[ПЬЯНЫЙ|10] [МУЖЧИНА] из [ГОРОДА]', 'sex': 'm' },
  { 'message': '[ПЬЯНАЯ|10] [ЖЕНЩИНА] из [ГОРОДА]', 'sex': 'f' },
  { 'message': '[ПЬЯНЫЕ|10] [ЛЮДИ] из [ГОРОДА]', 'sex': 'plural' },
  { 'message': '[ДВЕ|10] [ПЬЯНЫЕ|10] [ЖЕНЩИНЫ] из [ГОРОДА]', 'sex': 'plural' },

  { 'message': '[ПЬЯНЫЙ|10] [МУЖЧИНА] из [ГОРОДА], [РАСЧЛЕНИВШИЙ]', 'sex': 'm' },

  { 'message': '[ШКОЛЬНИК]', 'sex': 'm' },
  { 'message': '[ШКОЛЬНИЦА]', 'sex': 'f' }, // иногда не сходится со второй фразой, например "НЕ ПУСТИЛА МУЖА НА РЫБАЛКУ"
  { 'message': '[ДВЕ|10] [ШКОЛЬНИЦЫ]', 'sex': 'plural' },

  { 'message': '[ШКОЛЬНИК] из [ГОРОДА]', 'sex': 'm' },
  { 'message': '[ШКОЛЬНИЦА] из [ГОРОДА]', 'sex': 'f' },
  { 'message': '[ДВЕ|10] [ШКОЛЬНИЦЫ] из [ГОРОДА]', 'sex': 'plural' },

  { 'message': 'В [ГОРОДЕ] [ПЬЯНЫЙ|10] [МУЖЧИНА]', 'sex': 'm' },
  { 'message': 'В [ГОРОДЕ] [ПЬЯНАЯ|10] [ЖЕНЩИНА]', 'sex': 'f' },
  { 'message': 'В [ГОРОДЕ] [ПЬЯНЫЕ|10] [ЛЮДИ]', 'sex': 'plural' },
  { 'message': 'В [ГОРОДЕ] [ДВЕ|10] [ПЬЯНЫЕ|10] [ЖЕНЩИНЫ]', 'sex': 'plural' },

  { 'message': 'В [ГОРОДЕ] [ГРУППА_МУЖЧИН]', 'sex': 'plural' },

  { 'message': 'В [ГОРОДЕ] [ШКОЛЬНИК]', 'sex': 'm' },
  { 'message': 'В [ГОРОДЕ] [ШКОЛЬНИЦА]', 'sex': 'f' },
  { 'message': 'В [ГОРОДЕ] [ДВЕ|10] [ШКОЛЬНИЦЫ]', 'sex': 'plural' },

  { 'message': '[ПЬЯНЫЙ|10] [ЖИТЕЛЬ] [ГОРОДА]', 'sex': 'm' },
  { 'message': '[ПЬЯНАЯ|10] [ЖИТЕЛЬНИЦА] [ГОРОДА]', 'sex': 'f' },
  { 'message': '[ПЬЯНЫЕ|10] [ЖИТЕЛИ] [ГОРОДА]', 'sex': 'plural' },

  { 'message': '[ПЬЯНЫЙ|10] [ОМИЧ]', 'sex': 'm' },

  { 'message': '[ПЬЯНЫЙ|10] [ОМИЧ], [РАСЧЛЕНИВШИЙ]', 'sex': 'm' },

  { 'message': '[ПЬЯНЫЙ|10] [ОМИЧ] [С_ПРЕДМЕТОМ]', 'sex': 'm' },

  { 'message': '[МУЖЧИНА]', 'sex': 'm' },
  { 'message': '[ЛЮДИ]', 'sex': 'plural' },
  { 'message': '[ЖЕНЩИНА]', 'sex': 'f' },
  { 'message': '[ЖЕНЩИНЫ]', 'sex': 'plural' },
  { 'message': '[ШКОЛЬНИК]', 'sex': 'm' },
  { 'message': '[ШКОЛЬНИЦА]', 'sex': 'f' },

  { 'message': '[ОДНА_ПЛЮС_ОДНА]', 'sex': 'plural' },

  { 'message': '[ДВА] студента [ВУЗА]', 'sex': 'plural' },

];

var sets = {
  'МУЖЧИНА': [
    'азиат',
    'болельщик из стоп-листа ФСБ',
    'дебошир',
    'домушник',
    'тунеядец',
    'пенсионер с простреленной ногой',
    'баскетболист местного клуба',
    'азиат',
    'бизнесмен',
    'ветеран ВОВ',
    'Водитель [КАМАЗА]',
    'вор-форточник',
    'грузчик',
    'дворник',
    'директор зоопарка',
    'извращенец',
    'инвалид',
    'лысый самоубийца',
    'меценат',
    'миллионер',
    'министр',
    'мормон',
    'мужчина',
    'наркоман',
    'нищий',
    'охотник',
    'парень',
    'пенсионер',
    'пивовар',
    'пиротехник-самоучка',
    'пожилой учитель',
    'полицейский',
    'Председатель колхоза',
    'лейтенант',
    'программист',
    'протоиерей',
    'рабочий',
    'разнорабочий',
    'азиат',
    'рыбак',
    'сантехник',
    'сатанист',
    'священник',
    'сотрудник росгвардии',
    'социальный работник',
    'судья',
    'телеведущий',
    'транссексуал',
    'футболист',
    'хозяин конопляной лаборатории',
    'чеченец',
    'экспедитор',
    'юный поджигатель сараев',
  ],
  'МУЖЧИНЫ': [
    'адвокаты',
    'алгоголики',
    'бывшые заключенные',
    'коммунальщики',
    'наркоманы',
    'оппозиционеры',
    'преступники',
    'участники преступной группировки',

  ],
  'ГРУППА_МУЖЧИН': [
    'группа молодых людей',
    'группа томичей',
    'двое чеченцев',
  ],
  'ШКОЛЬНИК': [
    'детдомовец',
    'малолетний вредитель',
    'мальчик',
    'молодой человек',
    'подросток',
    'парень',
    'третьеклассник',
    'четвероклассник',
    'школьник',
  ],
  'ЖЕНЩИНА': [
    'владелица мебельного цеха',
    'воспитательница',
    'двукратная олимпийская чемпионка',
    'жена',
    'женщина',
    'женщина лёгкого поведения',
    'журналистка',
    'известная биатлонистка',
    'мошенница',
    'пенсионерка',
    'писательница',
    'посетительница салона красоты',
    'пьяная продавщица',
    'сотрудница свердловской железной дороги',
    'старушка',
    'уборщица ночного клуба',
    'учительница',
    'учительница физкультуры',
  ],
  'ЖЕНЩИНЫ': [
    'девушки',
    'мошенницы-гипнотизерши',
    'пенсионерки',
    'писательницы',
    'проститутки',
    'пьяные продавщицы',
    'учительницы',
    'посетительницы салона красоты',
    'студентки',
    'старушки',
    'женщины лёгкого поведения',
  ],
  'ШКОЛЬНИЦА': [
    'воспитанница детского дома',
    'девочка',
    'девушка',
    'отличница',
    'студентка',
    'школьница',
  ],
  'ШКОЛЬНИЦЫ': [
    'воспитанницы детского дома',
    'девочки',
    'девушки',
    'отличницы',
    'студентки',
    'школьницы',
  ],
  'ОДНА_ПЛЮС_ОДНА': [
    'беременная женщина с напарницей',
  ],
  'ЖИТЕЛЬ': [
    'глава администрации',
    'Депутат',
    'житель',
    'мэр',
    'почётный гражданин',
    'экс-мэр',
    'экс-прокурор',
  ],
  'ЖИТЕЛЬНИЦА': [
    'жительница',
    'уроженка',
  ],
  'ЖИТЕЛИ': [
    'жители',
    'двое жителей',
    'уроженцы',
  ],
  'МУЖА': ['мужа', 'свекровь', 'сестру'],
  'ОМИЧ': [
    'Донской казак',
    'Казах',
    'Кемеровчанин',
    'Китаец',
    'Нанаец',
    'Немец',
    'Омич',
    'Череповчанин',
    'Харьковчанин',
    'Ярославец',
  ],
  'ОМИЧИ': [
    'Омичи',
  ],
  'ПЕНСИОНЕРОВ': [
    'азиатов',
    'домушников',
    'тунеядцев',
    'баскетболистов местного клуба',
    'бизнесменов',
    'ветеранов ВОВ',
    'водителей',
    'грузчиков',
    'дворников',
    'детдомовцев',
    'жителей коттеджного посёлка',
    'молодых людей',
    'мормонов',
    'мужчин',
    'наркоманов',
    'нищих',
    'охотников',
    'пенсионеров',
    'подростков',
    'пожилых учителей',
    'полицейских',
    'свидетелей иеговы',
    'прихожан местной церкви',
    'программистов',
    'рабочих',
    'рыбаков',
    'сантехников',
    'сатанистов',
    'священников',
    'социальных работников',
    'футболистов',
    'чеченцев',
    'школьников',
  ],
  'ЛЮДИ': [
    'активисты Навального',
    'зоозащитники',
    'пожарные',
    'неизвестные',
    'полицейские',
    'посетители кафе',
    'украинские рыбаки',
    'фанаты макса коржа',
    'хакеры',
  ],
  'СОСЕДА': [
    '',
    'гуся',
    'двух павлинов',
    'двух прохожих',
    'двух студенток',
    'депутата',
    'козу',
    'корову',
    'кошку',
    'несколько зевак',
    'полицейского',
    'прохожего',
    'собаку',
    'соседа',
  ],
  'С_ПРЕДМЕТОМ': [
    'с лазерной указкой',
    'с топором',
  ],
  'ПУТИНЫМ': ['медведевым', 'президентом', 'губернатором', 'путиным', 'премьер-министром Канады'],
  'ЖЕНУ': ['ТЁЩУ', 'ЖЕНУ'],
  'КАМАЗА': [
    'автобуса',
    'белаза',
    'буксира',
    'камаза',
    'катка',
    'маршрутки',
    'мусоровоза',
    'скорой помощи',
    'трамвая',
  ],
  'МАРШРУТКУ': [
    'бетономешалку',
    'катафалк',
    'патрульный катер',
    'ПОЕЗД',
    'танк-экспонат времен ВОВ',
    'трамвай',
    'трактор',
    'троллейбус',
  ],
  'ГОРОДА': [
    'Амурской области',
    'Бобруйска',
    'Бурятии',
    'Владимирской области',
    'Воронежа',
    'Донецка',
    'Иваново',
    'Кавказа',
    'Калининграда',
    'Китая',
    'Колонии-поселения',
    'Костромы',
    'Кузбасса',
    'Крыма',
    'Мурманска',
    'Подмосковья',
    'Прибалтики',
    'Приморья',
    'Санкт-Петербурга',
    'Саратова',
    'Сочи',
    'Ставрополья',
    'Ульяновска',
    'Узбекистана',
    'Хабаровска',
    'Якутии',
    'Ярославской области',
  ],
  'САРАТОВСКИЙ': [
    'бобруйский',
    'кемеровский',
    'саратовский',
    'тверской',
  ],
  'САРАТОВСКАЯ': [
    'хабаровская',
    'иркутская',
    'московская',
    'краснодарская',
  ],
  'САРАТОВСКИЕ': [
    'новосибирские',
    'владивостокские',
    'сахалинские',
    'ростовские',
    'минские',
    'киевские',
  ],
  'ГОРОДЕ': [
    'Амурске',
    'Баку',
    'Воронеже',
    'Грозном',
    'Дальнегорске',
    'Екатеринбурге',
    'Краснодаре',
    'Казани',
    'Киргизстане',
    'Луганске',
    'Магадане',
    'Новосибирске',
    'Оренбурге',
    'Петербурге',
    'Реутове',
    'Самаре',
    'Ташкенте',
    'Узбекистане',
    'Челябинске',
    'Чите',
  ],
  'СОБАКУ': ['СОБАКУ', 'ЯЩИК ВОДКИ', 'ламу', 'льва из местного цирка', 'деньги дольщиков', 'теленка', 'более сотни коров'],
  'СВОЕГО_ЛЮБИМЦА': ['СОБАКУ', 'ЯЩИК ВОДКИ', 'любимого котёнка', 'домашнего фазана', 'деньги дольщиков', 'теленка', 'инвалида'],
  '15_ЛЕТНИЙ': [
    'агрессивно-настроенный',
    'пьяный',
  ].concat(Array(8).fill().map((v, i) => i + 10 + '-летний')),
  '15_ЛЕТНЯЯ': [
    'агрессивно-настроенная',
    'пьяная',
  ].concat(Array(8).fill().map((v, i) => i + 10 + '-летняя')),
  '15_ЛЕТНИЕ': [
    'агрессивно-настроенные',
    'пьяные',
  ].concat(Array(8).fill().map((v, i) => i + 10 + '-летние')),
  'ПЬЯНЫЙ': ['28-летний', 'пьяный', 'пожилой'],
  'ПЬЯНАЯ': ['28-летняя', 'пьяная', 'пожилая'],
  'ПЬЯНЫЕ': ['19-летние', '28-летние', 'пьяные', 'пожилые'],
  'НАДРУГАЛАСЬ': ['надругалась'],
  'ЛИШИЛСЯ': [
    'автомобиля',
    'волос',
    'денег',
    'документов',
    'жилища',
    'ноги',
    'пальца',
    'полового органа',
    'руки',
  ],
  'УБИЛИ': ['задушили', 'зарезали', 'застрелили', 'казнили', 'осквернили', 'подожгли', 'ранили', 'убили', 'унизили', 'утопили'],
  'УБИЛА': ['убила', 'ранила', 'казнила', 'унизила', 'осквернила', 'застрелила', 'задушила', 'утопила', 'зарезала'],
  'УБИЛ': ['убил ', 'ранил ', 'казнил ', 'унизил ', 'осквернил ', 'застрелил ', 'задушил', ' утопил ', 'зарезал'],
  'ВЗОРВАЛ': ['взорвал', 'поджёг', 'расстрелял'],
  'ВЗОРВАЛА': ['взорвала', 'подожгла', 'расстреляла'],
  'ВЗОРВАЛИ': ['взорвали', 'подожгли', 'расстреляли'],
  'УБИТЬ': ['НАПУГАТЬ', 'УБИТЬ'],
  'ВЕРНУТЬ_М': ['супругу', 'сожительницу', 'жену', 'девушку', 'честь семьи'],
  'ВЕРНУТЬ_Ж': ['супруга', 'сожителя', 'мужа', 'ребёнка-наркомана из клиники', 'честь семьи'],
  'ЖЕРТВУ': ['соседа', 'собаку', 'кошку', 'лягушку'],
  'СЛУЧАЙНО': ['слуйчайно', '', '', '', ''],
  'ДВА': ['Два', 'Три'],
  'ДВЕ': ['Две', 'Три'],

  'БУДКУ': ['свой гараж', 'гаражный кооператив', 'самогонный аппарат', 'рекламный щит', 'трансформаторную будку', 'беседку с молодежью'],
  'ВУЗА': ['филфака МГУ', 'Гнесинки'],
  'ГОРОДА': [
    'анадыря',
    'большого камня',
    'владивостока',
    'калужской области',
    'коттеджного посёлка',
    'крыма',
    'новороссийска',
    'провинциального городка',
    'тюмени',
    'челябинска',
    'якутска',
  ],
  'РАСЧЛЕНИВШИЙ': [
    'зверски расчленивший [ЖЕРТВУ]',
    'избивший инвалида',
    'сломавший мужчине ключицу',
    'стрелявший в прохожих из окна',
  ],
};

var action = {
  'm': [
    '[ВЗОРВАЛ] [БУДКУ]',
    'боролся с неприятным запахом в туалете',
    'взял в заложницы тещу',
    'вломился в чужой дом',
    'выстрелил в сожительницу из ружья',
    'выстрелил мужчине в глаз',
    'готовил ужин',
    'залез в дом пенсионерки',
    'в порыве страсти зарезал собутыльницу',
    'заготовил на зиму 3 кг марихуаны',
    'записался на шугаринг',
    'захватил сосны на участке соседей',
    'зашел в строительную фирму',
    'избил несовершеннолетнего',
    'изнасиловал кондуктора',
    'изнасиловал коллектора',
    'купил аккордеон',
    'напал на офис микрозаймов',
    'напоил кота самогонкой',
    'нашёл две гранаты',
    'незаконно охотился на косуль',
    'обесточил посёлок',
    'ОБЛИЛСЯ БЕНЗИНОМ, ЗАГОРЕЛСЯ',
    'обнаружил в подвале скелет',
    'ограбил автомат с игрушками',
    'ограбил супругов, приютивших его на ночь',
    'отравился этанолом',
    'ПОДЖЕГ СВОИ ДОКУМЕНТЫ',
    'поджёг не ту аптеку',
    'подорвался на корпоративе',
    'позарился на самокат соседа',
    'попался на краже велосипеда',
    'поссорился с бабушкой',
    'пошёл на рыбалку',
    'провёл ночь в гнезде аиста',
    'провёл ночь в муравейнике',
    'прочитал лекцию о сексуальной ориентации',
    'пытался провезти [СВОЕГО_ЛЮБИМЦА] в чемодане',
    'РАЗВЕЛ КОСТЕР В МЕТРО',
    'раздал свою зарплату бомжам',
    'ранил ножом двоих полицейских',
    'напал на прохожего с огнетушителем в руках',
    'сбежал из кареты скорой помощи',
    'сбежал из психушки',
    'собирал валежник',
    'убирался в квартире',
    'УГНАЛ [МАРШРУТКУ]',
    'УКРАЛ [СОБАКУ]',
    'украл выручку',
    'украл катафалк, увёз его в деревню',
    'утопил знакомую в ванной',
    'хвастался в Instagram брендовыми вещами',
    'ХОТЕЛ [УБИТЬ] [ЖЕНУ]',
    'хотел устроиться на работу в детский сад',
  ],
  'f': [
    '[ВЗОРВАЛА] [БУДКУ]',
    'брала взятки',
    'взяла в заложники тестя',
    'вломилась в чужой дом',
    'готовила ужин',
    'забрала ёлку в отделении банка',
    'заколола мужа во время застолья',
    'избила новогодней ёлкой директора школы',
    'избила детей скакалкой',
    'не пустила мужа на рыбалку',
    'ОБЛИЛась БЕНЗИНОМ, ЗАГОРЕЛась',
    'ограбила автомат с игрушками',
    'отдала зарплату аферисту',
    'ПОДожгла СВОИ ДОКУМЕНТЫ',
    'пыталась украсть продукты в подгузнике',
    'РАЗВЕЛа КОСТЕР В МЕТРО',
    'раздала зарплату детям-сиротам',
    'сбежала из психушки',
    'сломала самогонный аппарат мужа',
    'снялась обнажённой',
    'снялась в порно',
    'совершила ДТП с трактором',
    'убила сестру банкой муки',
    'УГНАЛА [МАРШРУТКУ]',
    'УКРАЛА [СОБАКУ]',
    'поймала [СОБАКУ]',
    'гонялась за соседским ребёнком',
    'фотографировала льва в цирке',
    'ХОТЕЛа [УБИТЬ] [МУЖА]',
  ],
  'plural': [
    'взорвали [БУДКУ]',
    'вломились в чужой дом',
    'выманили у студентки 2 млн рублей',
    'задержали подростка с автоматом Калашникова',
    'заказали убийство директора',
    'избили на концерте полицейского',
    'изнасиловали кондитера',
    'ограбили автомат с игрушками',
    'осквернили могилу неизвестного солдата',
    'подожгли гаражный кооператив',
    'ПОДожгли СВОИ ДОКУМЕНТЫ',
    'подрались из-за трусов в секонд-хенде',
    'пошли на рыбалку',
    'провезли в метро гроб',
    'пытались покончить с собой',
    'РАЗВЕЛи КОСТЕР В МЕТРО',
    'раздали свою зарплату бомжам',
    'сбежали из психушки',
    'сломали самогонный аппарат',
    'угнали бетономешалку',
    'УГНАЛИ МАРШРУТКУ, НАБРАЛИ ПАССАЖИРОВ',
    'угнали танк-экспонат времен ВОВ',
    'угнали трактор',
    'угнали у фермера стадо баранов',
    'УКРАЛИ [СОБАКУ]',
    'УКРАЛИ чемодан, набитый дошираком',
    'украли ларёк "Твоя любимая шаверма"',
    'украли льва из местного цирка',
    'украли несколько тонн сигарет',
    'украли у горожан 20 млн рублей',
    'устроили поножовщину с Дедом Морозом',
  ]
};

var conclusion = {
  'm': [
    'в неадекватном состоянии',
    'и [СЛУЧАЙНО] оскорбил [ПЕНСИОНЕРОВ]',
    'и [СЛУЧАЙНО] [УБИЛ] [СОСЕДА]',
    'и был задержан за мошенничество',
    'и уволился',
    'и выиграл в лотерею',
    'И ЕДВА НЕ ЛИШИЛСЯ [ЛИШИЛСЯ]',
    'и пел матерные частушки',
    'и поджег квартиру',
    'и получил пулю в живот',
    'и просил встречи с [ПУТИНЫМ]',
    'и угнал шесть автомобилей',
    'и украл кошелек с деньгами',
    'и уехал выпивать в деревню',
    'и уехал на товарняке во Владивосток',
    'И УМЕР',
    'и умер от удара током',
    'и устроил пенную вечеринку',
    'и чуть не убил [СВОЕГО_ЛЮБИМЦА]',
    'спасая [СВОЕГО_ЛЮБИМЦА]',
    'чтобы вернуть [ВЕРНУТЬ_М]',
    'чтобы войти в книгу рекордов Гинесса',
    'чтобы его оставили в покое',
    'чтобы замести следы изготовления самогона',
    'чтобы защитить свою честь',
    'чтобы отомстить',
    'ЧТОБЫ СОГРЕТЬСЯ',
    'чтобы уладить конфликт с соседом',
  ],
  'f': [
    'и [СЛУЧАЙНО] [УБИЛА] [СОСЕДА]',
    'и оскорбила [ПЕНСИОНЕРОВ]',
    'и выиграла в лотерею',
    'и выложила фото в инстраграмм',
    'и едва не лишилась [ЛИШИЛСЯ]',
    'и живёт одна уже несколько месяцев',
    'и материлась невпопад',
    'и НАДРУГАЛАСЬ над соседом',
    'И ПОПРОСИЛа НЕ БЕСПОКОИТЬ',
    'И ПРИ ЭТОМ СМЕЯЛась',
    'и скрывается от правосудия',
    'и требовала аудиенции с [ПУТИНЫМ]',
    'И УМЕРла',
    'ради веселья',
    'с особой жестокостью',
    'спасая [СВОЕГО_ЛЮБИМЦА]',
    'чтобы вернуть [ВЕРНУТЬ_Ж]',
    'чтобы вернуть мужа',
    'чтобы войти в книгу рекордов Гинесса',
    'чтобы её не заподозрили в измене',
    'чтобы её оставили в покое',
    'чтобы уладить конфликт с соседкой',
    'ЧТОБЫ СОГРЕТЬСЯ',
  ],
  'plural': [
    'в знак протеста против произвола христиан',
    'и [СЛУЧАЙНО] [УБИЛИ] [СОСЕДА]',
    'и оскорбили [ПЕНСИОНЕРОВ]',
    'И ЕДВА НЕ ЛИШИЛись конечностей',
    'и пели матерные частушки',
    'И ПОПРОСИЛи НЕ БЕСПОКОИТЬ',
    'И ПРИ ЭТОМ СМЕЯЛись',
    'и отправились гулять по железнодорожным путям',
    'и прострелили ногу преступнику с ножом',
    'и скрываются от правосудия',
    'и добивались встречи с [ПУТИНЫМ]',
    'И УМЕРли',
    'и устроили стрельбу из пневматики',
    'ради веселья',
    'с особой жестокостью',
    'с целью друг друга убить',
    'спасая [СВОЕГО_ЛЮБИМЦА]',
    'угрожая оружием',
    'чтобы войти в книгу рекордов Гинесса',
    'чтобы их оставили в покое',
    'чтобы наладить дружеские отношения',
    'чтобы уладить конфликт с соседями',
    'ЧТОБЫ СОГРЕТЬСЯ',
  ]
};

function MadNews() {
  this.getPerson = function () {
    this.predict = JSON.parse(JSON.stringify(predict));
    var variants = multiplyPerson(this.predict, sets);
    var seed = variants[Math.floor(Math.random() * variants.length)];
    this.sex = seed['sex'];
    return seed.message.toUpperCase();
  };

  this.getAction = function () {
    if (!this.action) {
      this.action = JSON.parse(JSON.stringify(action));
    }
    if (!this.action[this.sex].length) {
      this.action[this.sex] = JSON.parse(JSON.stringify(action[this.sex]));
    }
    return multiply(extract_sentense(this.action[this.sex].splice(Math.floor(Math.random() * this.action[this.sex].length), 1)[0])).toUpperCase();
  };
  this.getConclusion = function () {
    if (!this.conclusion) {
      this.conclusion = JSON.parse(JSON.stringify(conclusion));
    }
    if (!this.conclusion[this.sex].length) {
      this.conclusion[this.sex] = JSON.parse(JSON.stringify(conclusion[this.sex]));
    }
    return multiply(extract_sentense(this.conclusion[this.sex].splice(Math.floor(Math.random() * this.conclusion[this.sex].length), 1)[0])).toUpperCase();
  };

  function multiply(template) {
    var content = template || '';
    var matches = content.match(/\[[а-яА-Я\w]*\]/g);
    if (matches) {
      matches.forEach(function (match) {
        var randomSet = sets[match.substr(1).substr(0, match.length - 2)];
        randomSet = randomSet[Math.floor(Math.random() * randomSet.length)];
        content = content.replace(match, randomSet.trim());
      });
    }
    return content;
  }

  // @todo: use this function for generate instead multiply()
  function multiplyPerson(templates, sets) {
    //console.log('mull', templates, sets)
    var results = [];
    templates.forEach(template => {
      var matches = template.message.match(/\[([а-яА-Я\w]*)(\|(\d+))*\]/);
      var substitution = matches ? matches[1] : undefined;

      if (substitution) {
        var substitutionWithWeight = matches[0];
        var weight = matches[3];

        var partials = [];
        var set = sets[substitution];
        if (set === undefined) {
          debugger;
        }
        set.forEach((variant) => {
          if (!weight || Math.random() < weight / 100) {
            partialSubstituted = template.message.replace(substitutionWithWeight, variant.trim());
            partials.push({ 'message': partialSubstituted, 'sex': template.sex });
          }
        });

        results = results.concat(multiplyPerson(partials, sets));
      } else {
        results.push(template);
      }
    });
    //console.log('return', results)
    return results;
  }

  function extract_sentense(content) {
    var matches = content.match(/\[[а-яА-Я\w]*\]/g);
    if (matches) {
      matches.forEach(function (code) {
        code = code.substr(1).substr(0, code.length - 2);
        var randomSet = sets[code];
        randomSet = randomSet[Math.floor(Math.random() * randomSet.length)];
        content = content.replace('[' + code + ']', randomSet).trim();
      });
    }
    return content;
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  var madness = new MadNews();
  GetMad();
  document.querySelector('#stage_refresh a').addEventListener('click', function (e) {
    GetMad();
    return false;
  });

  function GetMad() {
    document.querySelector('#stage_a0 p').innerText = madness.getPerson();
    document.querySelector('#stage_b0 p').innerText = madness.getAction();
    document.querySelector('#stage_c0 p').innerText = madness.getConclusion();
  }
});


