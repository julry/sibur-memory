import mission from '../../../assets/images/mission.png';
import adaptation from '../../../assets/images/adaptation.png';
import animals2 from '../../../assets/images/animals2.png';
import cinema from '../../../assets/images/cinema.png';
import conference from '../../../assets/images/conference.png';
import coworking2 from '../../../assets/images/coworking2.png';
import ecology from '../../../assets/images/ecology.png';
import help from '../../../assets/images/help.png';
import meetings from '../../../assets/images/meetings.png';
import parties from '../../../assets/images/parties.png';
import respect from '../../../assets/images/respect.png';
import safity from '../../../assets/images/safity.png';
import sport2 from '../../../assets/images/sport2.png';
import sport3 from '../../../assets/images/sport3.png';
import sport4 from '../../../assets/images/sport4.png';
import team from '../../../assets/images/team.png';
import cinema2 from '../../../assets/images/cinema2.png';
import value from '../../../assets/images/value.png';
import nature2 from '../../../assets/images/nature2.png';
import worktravelling from '../../../assets/images/worktravelling.png';
import culture from '../../../assets/images/culture.png';
import motivation from '../../../assets/images/motivation.png';
import review from '../../../assets/images/review.png';
import forums from '../../../assets/images/forums.png';

export const cards21 = [
    { 
        imageName: 'card-2-1', 
        name: 'first', 
        id: 'first', 
        image: conference, 
        infoText: 'Сотрудники СИБУРа ездят на конференции. Ты можешь поехать обменяться знаниями с коллегами как в соседний город, так и в другую страну.'
    },
    { 
        imageName: 'card-2-2', 
        name: 'second', 
        id: 'second', 
        image: sport2, 
        infoText: 'Спорт — это не только здоровая конкуренция, но и командный дух! ' +
        'В СИБУРе, например, есть Школа футбола, которую возглавляет Дмитрий Сычёв — бывший игрок сборной России.'
    },
    { 
        imageName: 'card-2-3', 
        name: 'third', 
        id: 'third', 
        image: adaptation, 
        infoText: 'Никто не бросит стажёров одних погружаться в мир СИБУРа. У нас есть приложение «С нами», ' + 
        'с помощью которого все новички знакомятся с компанией, будущими задачами и коллегами в игровом формате.'
    }, 
    { 
        imageName: 'card-2-4', 
        name: 'fourth', 
        id: 'fourth', 
        image: team, 
        infoText: 'Специалисты СИБУРа — настоящая команда. Мы объединяем более 40000 профессионалов для создания умных решений.'
    },
    { 
        imageName: 'card-2-5', 
        name: 'fifth', 
        id: 'fifth', 
        image: parties, 
        infoText: 'Советы молодёжи — группы единомышленников на предприятиях, которые реализуют инициативы молодых ' +
        'специалистов СИБУРа. Недавно сотрудники организовали форум «Трансформация», направленный на развитие ' +
        'ESG-ценностей — бережного отношения к окружающим людям и среде.'
    }, 
    { 
        imageName: 'card-2-6', 
        name: 'sixth', 
        id: 'sixth', 
        image: help, 
        infoText: 'На производстве и сотрудники, и специальные IT-системы следят за тем, чтобы все соблюдали технику безопасности ' + 
        'и не подвергали опасности своё здоровье. Например, есть специальная система отслеживания ношения сотрудниками касок.'
    }, 
    { 
        imageName: 'card-2-7', 
        name: '7th', 
        id: '7th', 
        image: cinema,
        infoText: 'В СИБУРе сотрудники встречаются и на неформальных мероприятиях: на совместных походах в кино или театры.'
    }, 
    { 
        imageName: 'card-2-8', 
        name: '8th', 
        id: '8th', 
        image: ecology,
        infoText: 'СИБУР занимается газопереработкой, производством полиолефинов, пластика и эластомеров. Один из продуктов, ' +
        'который получается на выходе — каучук, который используется далее для производства, например, шин. А сколько шин можно изготовить ' +
        'из 1 тонны каучука?',
        isTask: true,
        buttons: [
            {
                text: '10000 шин',
                isCorrect: false,
                answerText: 'Неправильно! Из тонны каучука можно произвести 1000 шин.'
            },
            {
                text: '1000 шин',
                isCorrect: true,
                answerText: 'Правильно! 1000 шин можно произвести из тонны каучука.'
            }
        ]
    }, 
];

export const cards22 = [
{ 
    imageName: 'card-2-1', 
    name: 'first', 
    id: 'first', 
    image: coworking2, 
    infoText: 'Работа лаборанта и инженера-технолога не была бы возможна по отдельности: первый разрабатывает новые материалы, второй занимается их производством!'
},
{ 
    imageName: 'card-2-2', 
    name: 'second', 
    id: 'second', 
    image: respect, 
    infoText: 'Одно из базовых правил коллектива СИБУРа — уважение друг к другу.'
},
{ 
    imageName: 'card-2-3', 
    name: 'third', 
    id: 'third', 
    image: safity,
    infoText: 'Компания заботится о твоей безопасности: выдает всю необходимую экипировку ' +
   'и проводит регулярные инструктажи по безопасности на производстве.'
}, 
{ 
    imageName: 'card-2-4', 
    name: 'fourth', 
    id: 'fourth', 
    image: mission,
    infoText: 'Общая миссия — создать лучшее будущее для людей и планеты — объединяет сотрудников СИБУРа.'
},
{ 
    imageName: 'card-2-5', 
    name: 'fifth', 
    id: 'fifth',  
    image: animals2,
    infoText: 'Волонтёрство на мероприятиях однозначно сближает сотрудников СИБУРа. Вместе они делают добрые дела: помогают детям, организуют донорские акции, собирают мусор для переработки.'
},
{ 
    imageName: 'card-2-6', 
    name: 'sixth', 
    id: 'sixth', 
    image: sport3,
    infoText: 'Любовь к спорту объединяет сотрудников СИБУРа. Кстати, это одно из направлений деятельности советов молодёжи :)'
}, 
{ 
    imageName: 'card-2-7', 
    name: '7th', 
    id: '7th', 
    image: meetings,
    infoText: 'Ты можешь проводить время вместе со своими коллегами на уютных квартирниках. На таких мероприятиях ты сможешь ' +
    'не только пообщаться с друзьями, но и проявить свои таланты: прочитать стихи или спеть песни под гитару.'
}, 
{ 
    imageName: 'card-2-8', 
    name: '8th', 
    id: '8th', 
    image: sport4,
    infoText: 'Спорт — неотъемлемая часть корпоративной культуры СИБУРа. Регулярно занимаются спортом более 37% работников компании. ' +
    'А сколько сотрудников СИБУРа сдали нормативы ГТО за 3 месяца 2024 года?',
    isTask: true,
    buttons: [
        {
            text: '124',
            isCorrect: false,
            answerText: 'Больше! Нормативы ГТО сдали 245 человек, из них 124 получили знаки отличия.'
        },
        {
            text: '245',
            isCorrect: true,
            answerText: 'Именно! Нормативы ГТО сдали 245 человек, из них 124 получили знаки отличия.'
        }
    ]
}, 
];

export const cards23 = [
    { 
        imageName: 'card-2-1', 
        name: 'first', 
        id: 'first', 
        image: culture, 
        infoText: 'Культурные мероприятия, которые организуют в СИБУРе, — один из способов круто провести время с коллегами! ' +
        'Так, можно прийти на Квартирник, попеть песни, поиграть на музыкальных инструментах, выступить со стендапом или прочитать стихи.'
    },
    { 
        imageName: 'card-2-2', 
        name: 'second', 
        id: 'second', 
        image: forums,
        infoText: 'Совместные поездки на форумы сплочают как стажёров, так опытных сотрудников. Ты можешь посещать ' +
        'не только конференции внутри России, но и международные.'
    },
    { 
        imageName: 'card-2-3', 
        name: 'third', 
        id: 'third', 
        image: cinema2,
        infoText: 'Рабочие встречи — это, конечно, хорошо. Но ты можешь встретиться с коллегами и после работы ' +
        'в неформальной атмосфере: сыграть в баскетбол, пойти на волонтёрскую акцию или сходить в кино.'
    }, 
    { 
        imageName: 'card-2-4', 
        name: 'fourth', 
        id: 'fourth', 
        image: motivation,
        infoText: 'Всех нас мотивирует что-то разное — условия труда, оплата, коллектив, задачи — и это всё есть в СИБУРе. Выбирай своё!'
    },
    { 
        imageName: 'card-2-5', 
        name: 'fifth', 
        id: 'fifth', 
        image: review,
        infoText: 'Ты можешь поделиться обратной связью с руководителем по поводу рабочих процессов и повлиять на них. ' + 
        'Например, сейчас реализуется идея по автоматизации и роботизации процесса фасовки продукции терефталевой кислоты, ' +
        'предложенная на Форуме молодых специалистов СИБУРа в 2023 году.'
    },
    { 
        imageName: 'card-2-6', 
        name: 'sixth', 
        id: 'sixth', 
        image: value,
        infoText: 'Благодаря ценностям компании сотрудники чувствуют единство. СИБУР интегрировал в корпоративную культуру ' +
        'принципы, основанные на бережном отношении к окружающей среде, сотрудникам и клиентам.'
    }, 
    { 
        imageName: 'card-2-7', 
        name: '7th', 
        id: '7th', 
        image: nature2,
        infoText: 'СИБУР поддерживает ЗОЖ. В столовых на предприятии еда без сахара, соли, на пару — дешевле на 15%. ' + 
        'А также предусмотрены капсулы для сна, корпоративные психологи и комнаты психологической разгрузки.'
    }, 
    { 
        imageName: 'card-2-8', 
        name: '8th', 
        id: '8th', 
        image: worktravelling,
        infoText: 'В скольких городах ты сможешь побывать, если отправишься в командировку, чтобы посетить все предприятия СИБУРа?',
        isTask: true,
        buttons: [
            {
                text: '15',
                isCorrect: false,
                answerText: 'Неправильно, 22! Компания объединяет сотрудников из разных уголков страны, а благодаря командировкам можно познакомиться с коллегами из 22 разных городов.'
            },
            {
                text: '22',
                isCorrect: true,
                answerText: 'Верно! Компания объединяет сотрудников из разных уголков страны, а благодаря командировкам можно познакомиться с коллегами из 22 разных городов.'
            }
        ]
    }, 
];