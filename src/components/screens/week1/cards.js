import plain from '../../../assets/images/plain.png';
import bus from '../../../assets/images/bus.png';
import graf from '../../../assets/images/graf.png';
import work from '../../../assets/images/work.png';
import balance from '../../../assets/images/balance.png';
import coworker from '../../../assets/images/coworker.png';
import leaf from '../../../assets/images/leaf.png';
import lab from '../../../assets/images/lab.png';
import money from '../../../assets/images/money.png';
import clock from '../../../assets/images/clock.png';
import prof from '../../../assets/images/prof.png';
import workers from '../../../assets/images/workers.png';
import sport from '../../../assets/images/sport.png';
import seasons from '../../../assets/images/seasons.png';
import engenier from '../../../assets/images/engenier.png';
import art from '../../../assets/images/art.png';
import animals from '../../../assets/images/animals.png';
import worker from '../../../assets/images/worker.png';
import nature from '../../../assets/images/nature.png';
import hobby from '../../../assets/images/hobby.png';
import gaming from '../../../assets/images/gaming.png';
import communication from '../../../assets/images/communication.png';
import working from '../../../assets/images/working.png';
import edu from '../../../assets/images/edu.png';

export const cards11 = [
    { 
        imageName: 'card-1-1', 
        name: 'travel', 
        id: 'travel', 
        image: plain, 
        infoText: 'Путешествия — одна из возможностей работы в СИБУРе! Посещай различные уголки страны вместе с коллегами во время командировок.',
    },
    { 
        imageName: 'card-1-2', 
        name: 'bus', 
        id: 'bus', 
        image: bus,
        infoText: 'Автобус спасает от переработок.\nКак только он прибывает развести сотрудников по домам, рабочий день автоматически заканчивается!',
    },
    { 
        imageName: 'card-1-3', 
        name: 'graf', 
        id: 'graf', 
        image: graf,
        infoText: 'Сотрудники работают по заранее утверждённому графику. Ты можешь планировать личные дела.',
    }, 
    { 
        imageName: 'card-1-4', 
        name: 'smena', 
        id: 'smena', 
        image: work,
        infoText: 'На предприятиях СИБУРа смена длится 12 часов с перерывом на обед: без переработок и лишних нагрузок. Ты сможешь выбирать как дневные, так и ночные смены, если ты любишь не спать в поздние часы.',
    },
    { 
        imageName: 'card-1-5', 
        name: 'balance', 
        id: 'balance', 
        image: balance,
        infoText: 'Сотрудники СИБУРа стремятся соблюдать баланс — уделяют время и работе, и личным делам. А ещё волонтёрят, занимаются спортом и проходят доп. обучения.',
    }, 
    { 
        imageName: 'card-1-6', 
        name: 'friend', 
        id: 'friend', 
        image: coworker,
        infoText: 'Среди коллег ты можешь встретить настоящих друзей, вместе с которыми ты будешь, например, сажать деревья или играть в баскетбол.',
    }, 
    { 
        imageName: 'card-1-7', 
        name: 'trees', 
        id: 'trees', 
        image: leaf,
        infoText: 'В СИБУРе ты можешь не только работать, но и заниматься общественно важной деятельностью — заботой об экологии, например, сажать деревья.',
    }, 
    { 
        imageName: 'card-1-8', 
        name: 'task', 
        id: 'task', 
        infoText: 'Чем занимаются лаборанты на предприятиях СИБУРа?',
        isTask: true,
        image: lab, 
        buttons: [
            {
                text: 'Проводят опыты и работают\nс цифрами',
                isCorrect: false,
                isFullWidth: true,
                answerText: 'А вот и нет! Лаборант проводит эксперименты, работает с новыми материалами и успевает отдыхать.'
            },
            {
                text: 'Занимаются теоретическим\nобзором химических составов',
                isCorrect: true,
                isFullWidth: true,
                answerText: 'Всё так! Лаборант проводит эксперименты, работает с новыми материалами и успевает отдыхать.'
            }
        ]
    }, 
  ];

export const cards12 = [
{ 
    imageName: 'card-1-1', 
    name: 'money', 
    id: 'money', 
    image: money, 
    infoText: 'Стажировка в СИБУРе — оплачиваемая, а это значит, что точно будет возможность заниматься любимыми хобби и активностями вне работы :)'
},
{ 
    imageName: 'card-1-2', 
    name: 'clock', 
    id: 'clock', 
    image: clock,
    infoText: 'На производствах СИБУРа сотрудники работают с 8 до 20 с перерывом на обед, а забрать работу домой не получится. Так что никаких переработок!',
},
{ 
    imageName: 'card-1-3', 
    name: 'prof', 
    id: 'prof', 
    image: prof,
    infoText: 'Ты можешь демонстрировать профессиональные навыки как в рабочее время, так и вне его, соревнуясь с коллегами по отрасли.',
}, 
{ 
    imageName: 'card-1-4', 
    name: 'workers', 
    id: 'workers',
    image: workers, 
    infoText: 'Ты можешь стать частью молодёжного движения в СИБУРе: сейчас организации действуют ' + 
    'на 15 предприятиях. Они занимаются творческими, профессиональными, волонтёрскими или спортивными проектами.'
},
{ 
    imageName: 'card-1-5', 
    name: 'sport', 
    id: 'sports',
    image: sport, 
    infoText: 'Спорт — важная часть жизни. Ты можешь участвовать в различных спортивных мероприятиях, ' + 
    'например, «Лыжня СИБУРа», или вступить во внутренние команды по баскетболу, волейболу, футболу и другим видам спорта.',
},
{ 
    imageName: 'card-1-6', 
    name: 'seasons', 
    id: 'seasons', 
    image: seasons,
    infoText: 'Стажировки в СИБУРе длятся круглый год, так что ты сам решаешь, в какой момент приступать к работе.',
}, 
{ 
    imageName: 'card-1-7', 
    name: 'engenier', 
    id: 'engenier', 
    image: engenier,
    infoText: 'Машинисты центрального теплового щита занимаются поддержанием температуры по всему предприятию. Их функции очень важны ' + 
    'для остальных сотрудников, но машинисты тоже должны отдыхать, поэтому их смены чередуются: два рабочих дня — два выходных.',
}, 
{ 
    imageName: 'card-1-8', 
    name: 'art', 
    id: 'art', 
    image: art,
    infoText: 'В СИБУРе есть место творчеству! Сотрудники занимаются ' +
    'бачатой, снимают клипы, записывают песни. И даже есть Свободный молодёжный театр. ' +
    'В каком городе он находится? Подсказка, это родина Д.И.Менделеева :)',
    isTask: true,
    buttons: [
        {
            text: 'Тобольск',
            isCorrect: true,
            answerText: 'Да! Именно в Тобольске родился известный химик.',
        },
        {
            text: 'Тюмень',
            isCorrect: false,
            answerText: 'В Тобольске! Именно там родился известный химик.',
        }
    ]
}, 
];

export const cards13 = [
    { 
        imageName: 'card-1-1', 
        name: 'animals', 
        id: 'animals', 
        image: animals, 
        infoText: 'Работая в СИБУРе, ты можешь успевать уделять время волонтёрству. Сотрудники помогают бездомным животным, детям, пенсионерам, занимаются донорством и экологической помощью.'
    },
    { 
        imageName: 'card-1-2', 
        name: 'worker', 
        id: 'worker', 
        image: worker, 
        infoText: 'Сварщики в СИБУРе занимаются настоящей магией: превращают различные сплавы и металлы в трубопроводы, лестницы, котлы. ' +
        'Но и магия в компании только по расписанию, волшебники вне рабочих часов отдыхают и набираются сил!'
    },
    { 
        imageName: 'card-1-3', 
        name: 'nature', 
        id: 'nature',
        image: nature, 
        infoText: 'Сотрудники СИБУРа придерживаются здорового образа жизни. Компания проводит сезонные фестивали спорта с участием ' +
        'звёзд мирового и российского масштаба.'
    }, 
    { 
        imageName: 'card-1-4', 
        name: 'hobby', 
        id: 'hobby', 
        image: hobby,
        infoText: 'Работая в СИБУРе, ты сможешь найти время на хобби. А с реализацией некоторых занятий поможет сама '+
        'компания: ты можешь вступать в спортивные секции или клубы по изучению иностранных языков.'
    },
    { 
        imageName: 'card-1-5', 
        name: 'gaming', 
        id: 'gaming', 
        image: gaming,
        infoText: 'Работа в СИБУРе — это не скучно. Ты можешь участвовать в различных конкурсах: ' + 
        'профессиональных, интеллектуальных, спортивных и развлекательных.'
    },
    { 
        imageName: 'card-1-6', 
        name: 'communication', 
        id: 'communication', 
        image: communication,
        infoText: 'В СИБУРе ты объединишь работу и хобби. В компании есть внутренняя сеть — интранет «Клик». Там ты найдешь сообщества ' + 
        'по интересам и вместе с коллегами будешь изучать английский, обсуждать книги и фильмы, заниматься спортом или танцами.'
    }, 
    { 
        imageName: 'card-1-7', 
        name: 'working', 
        id: 'working', 
        image: working,
        infoText: 'В компании всё чётко по сменам: ты будешь знать, когда и сколько ты работаешь, чтобы построить свои собственные планы.'
    }, 
    { 
        imageName: 'card-1-8', 
        name: 'edu', 
        id: 'edu', 
        image: edu,
        infoText: 'Сколько дополнительных курсов может пройти сотрудник СИБУРа?',
        isTask: true,
        buttons: [
            {
                text: 'Около 400',
                isCorrect: true,
                answerText: 'Верно! В корпоративном университете СИБУРа есть более 400 различных курсов: от тайм-менеджмента до развития инженерно-технической экспертизы.'
            },
            {
                text: 'Около 100',
                isCorrect: false,
                answerText: 'Больше! В корпоративном университете СИБУРа есть более 400 различных курсов: от тайм-менеджмента до развития инженерно-технической экспертизы.'
            }
        ]
    }, 
];