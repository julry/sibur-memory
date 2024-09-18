import activityF from '../../../assets/images/activityF.png';
import adviceF from '../../../assets/images/adviceF.png';
import ecologyF from '../../../assets/images/ecologyF.png';
import equalityF from '../../../assets/images/equalityF.png';
import polymersF from '../../../assets/images/polymersF.png';
import sportF from '../../../assets/images/sportF.png';

export const cards41 = [
    { 
        imageName: 'card-4-1', 
        name: 'first', 
        id: 'first', 
        image: equalityF, 
        infoText: 'В СИБУРе есть «Сообщество равных возможностей», которое выступает против какой-либо дискриминации ' +
        'на работе. А как звали первую в мире женщину, получившую диплом химика?',
        isTask: true,
        buttons: [
            {
                text: 'Анна Волкова',
                isCorrect: true,
                isFullWidth: true,
                answerText: 'Не совсем. Правильный ответ первый: Волкова получила диплом в 1870г, а Кюри только в 1891 году поступила в Сорбонну.'
            },
            {
                text: 'Мария Склодовская-Кюри',
                isCorrect: false,
                isFullWidth: true,
                answerText: 'Да! Волкова получила диплом в 1870г, а Кюри только в 1891 году поступила в Сорбонну.'
            }
        ]
    },
    { 
        imageName: 'card-4-2', 
        name: 'second', 
        id: 'second', 
        image: sportF, 
        infoText: 'В СИБУРе любят командный спорт, и в прошлом году на одном ' + 
        'из соревнований сотрудники выступили дважды — летом и зимой. О каких соревнованиях речь?',
        isTask: true,
        buttons: [
            {
                text: 'ЗаБег.РФ',
                isCorrect: false,
                isFullWidth: true,
                answerText: 'О Гонке Героев! Участники летом прошли полосу препятствий в 10 км и 8 км зимой. А в полумарафоне ' + 
                'ЗаБег.РФ сотрудники могли сами выбрать комфортную длину трассы и принимали участие индивидуально.'
            },
            {
                text: 'Гонка Героев',
                isCorrect: true,
                isFullWidth: true,
                answerText: 'Именно! Участники летом прошли полосу препятствий в 10 км и 8 км зимой. А в полумарафоне ' + 
                'ЗаБег.РФ сотрудники могли сами выбрать комфортную длину трассы и принимали участие индивидуально.'
            }
        ]
    },
    { 
        imageName: 'card-4-3', 
        name: 'third', 
        id: 'third', 
        image: adviceF, 
        infoText: 'На каждом предприятии СИБУРа есть советы молодёжи. Участники делают рабочую среду комфортнее ' +
        'для молодых специалистов и проводят разные мероприятия для поддержки work-life balance. А чем точно ' +
        'не занимаются советы молодёжи?',
        isTask: true,
        buttons: [
            {
                text: 'Организацией квизов',
                isCorrect: true,
                isFullWidth: true,
                answerText: 'Всё верно! Совет молодёжи организует в том числе и квизы для сотрудников. Один из последних форматов — игра «Где логика?».'
            },
            {
                text: 'Сбором анкет для соц. опросов',
                isCorrect: false,
                isFullWidth: true,
                answerText: 'Совет молодёжи организует в том числе и квизы для сотрудников. Один из последних форматов — игра «Где логика?».'
            }
        ]
    },
    { 
        imageName: 'card-4-4', 
        name: 'forth', 
        id: 'forth', 
        image: polymersF, 
        infoText: 'Где производится наибольший объём базовых полимеров в России?',
        isTask: true,
        buttons: [
            {
                text: 'Тобольск',
                isCorrect: true,
                isFullWidth: true,
                answerText: '«ЗапСибНефтехим» — один из крупнейших нефтегазохимических комплексов в мире, лидер по выпуску базовых полимеров в России. Он находится на родине Менделеева — в городе Тобольск'
            },
            {
                text: 'Нижнекамск',
                isCorrect: false,
                isFullWidth: true,
                answerText: '«ЗапСибНефтехим» — один из крупнейших нефтегазохимических комплексов в мире, лидер по выпуску базовых полимеров в России. Он находится на родине Менделеева — в городе Тобольск'
            }
        ]
    },
    { 
        imageName: 'card-4-5', 
        name: 'fifth', 
        id: 'fifth', 
        image: ecologyF, 
        infoText: 'В СИБУРе заботятся об окружающей среде: занимаются контролем промышленных выбросов ' + 
        'и переработкой. А за что компания получила награду на Зелёной премии в 2023 году?',
        isTask: true,
        buttons: [
            {
                text: 'За пластиковую упаковку',
                isCorrect: true,
                isFullWidth: true,
                answerText: 'Всё так! Компания получила первое место за пластиковую упаковку Vivilen, созданную из вторичного сырья. Так пластик не выбрасывается, а многократно используется.'
            },
            {
                text: 'За снижение уровня отходов',
                isCorrect: false,
                isFullWidth: true,
                answerText: 'Не совсем! Компания получила первое место за пластиковую упаковку Vivilen, созданную из вторичного сырья. Так пластик не выбрасывается, а многократно используется.'
            }
        ]
    },
    { 
        imageName: 'card-4-6', 
        name: '6th', 
        id: '6th', 
        image: activityF,
        infoText: 'Каждый восьмой сотрудник СИБУРа участвует в волонтерских акциях.\n' + 
        'А в скольких городах компания провела такие акции?',
        isTask: true,
        buttons: [
            {
                text: 'Более 35',
                isCorrect: true,
                isFullWidth: true,
                answerText: 'Именно так! Волонтёры СИБУРа провели акции в более чем 35 городах России: от Переславля-Залесского до Комсомольска-на-Амуре.'
            },
            {
                text: 'Более 10',
                isCorrect: false,
                isFullWidth: true,
                answerText: 'Больше! Волонтёры СИБУРа провели акции в более чем 35 городах России: от Переславля-Залесского до Комсомольска-на-Амуре.'
            }
        ]
    }, 
];