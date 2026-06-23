const toggleBtn = document.getElementById('theme-toggle');
const glitchElements = document.querySelectorAll('.glitch');
const langSwitch = document.getElementById('lang-switch');
const authorTitle = document.getElementById('author-title');
const bioContainer = document.getElementById('bio-container');
const cardsGrid = document.getElementById('cards-grid');

// Текущий язык по умолчанию
let currentLang = 'ru';

// База текстов сайта
const translations = {
    ru: {
        subtitle: "ГДЕ БРУТАЛЬНЫЕ БИТЫ ВСТРЕЧАЮТ ЧИСТЫЙ ДИЗАЙН",
        bio: [
            "2 года — создаю высокоскоростную электронную музыку, которая бьет как товарный поезд. FL Studio — мое главное оружие: сложная архитектура брейккора, сокрушительные рейв-гимны, техно, рок и поп-треки, которые живут на скорости 180+ BPM и не планируют замедляться.",
            "Тяжелые синты, слои дисторшна и ударные партии, которые взрывают мозг. Помимо звука, я живу цифровым дизайном — создаю графику для игр, UI-интерфейсы и концепты, стирающие грань между аудио- и визуальной идентичностью."
        ],
        cards: [
            { num: "01", title: "Кто ты", text: "Артур Маилянов. Разработчик, музыкант и создатель цифровых миров. Стремлюсь к перфекционизму во всем, что создаю." },
            { num: "02", title: "Твоя цель", text: "Создавать масштабные инди-игры с глубоким лором, кастомной графикой и мощным авторским саунд-дизайном. Ну и заработать с этого..." },
            { num: "03", title: "Как залетел в CAP Edu", text: "Узнал, когда в школу пришел преподаватель CAP Edu и рассказал нам об их проекте. Я записался, чтобы прокачать навыки программирования на Python, структурировать базу и перестать писать проекты «в стол»." },
            { num: "04", title: "Мой ментор", text: "Мой первый куратор Сара всегда поддерживала меня, помогала с написанием кода и разбором системных ошибок. Недавно у нас произошла плановая замена ментора, но её вклад в мою базу программирования был огромным." },
            { num: "05", title: "Путь А → Б", text: "От понимания базового синтаксиса до создания умных Telegram-ботов, проработки физики в Pygame и адаптивной веб-верстки." },
            { num: "06", title: "Хобби", text: "Написание музыки в FL Studio (Breakcore, Psytrance, Rave), а также рисование — от простых набросков до спрайтов и концепт-артов для будущих игр." },
            { num: "07", title: "Лучшие работы", text: "Модифицированный клон игры «Dino» на Pygame, функциональный бот-конвертер валют и авторские треки, например, «U▪️〰️▪️A»." },
            { num: "08", title: "GitHub", text: "Мой официальный профиль на GitHub. Здесь будет храниться исходный код моих проектов, репозитории с играми на Pygame и скрипты для Telegram-ботов.", isGit: true }
        ]
    },
    en: {
        subtitle: "WHERE BRUTAL BEATS MEET RAW DESIGN",
        bio: [
            "2 years deep in the machine — crafting high-velocity electronic music that hits like a freight train. FL Studio is my weapon of choice: intricate breakcore architectures, crushing rave anthems, techno, rock, and pop productions that live at 180+ BPM and refuse to slow down.",
            "Heavy synths, layered distortion, and mind-blowing drum patterns. Beyond the sound, I live in digital design — creating game graphics, UI interfaces, and concepts that blur the line between audio and visual identity."
        ],
        cards: [
            { num: "01", title: "Who are you", text: "Artur Mailyanov. Developer, music producer, and digital world creator. Driven by pure perfectionism in every single project." },
            { num: "02", title: "Your Goal", text: "To build massive indie games featuring immersive lore, stylized graphics, and custom atmospheric sound design." },
            { num: "03", title: "How I joined CAP Edu", text: "Found out when a CAP Edu instructor came to my school and told us about their program. I joined to level up my Python programming skills, structure my knowledge, and stop writing code 'for the drawer'." },
            { num: "04", title: "My Mentor", text: "My first mentor Sara was incredibly supportive, always helping me write clean code and debug system errors. We recently had a mentor rotation, but her impact on my programming foundation was huge." },
            { num: "05", title: "Path A → B", text: "From learning variables and loops to engineering Telegram bots, programming Pygame physics, and building web UIs." },
            { num: "06", title: "Hobbies", text: "Producing electronic music in FL Studio (Breakcore, Psytrance, Rave) and drawing — ranging from rough sketches to game sprites and concept art." },
            { num: "07", title: "Best Works", text: "An advanced 'Dino' game clone built with Pygame, a feature-rich currency converter bot, and original tracks like 'U▪️〰️▪️A'." },
            { num: "08", title: "GitHub", text: "My official GitHub profile. This is where I host my open-source code, Pygame repositories, and Telegram bot scripts.", isGit: true }
        ]
    }
};

// Функция отрисовки текстового контента на сайте
function renderContent(lang) {
    // 1. Меняем подзаголовок
    document.querySelector('[data-lang-key="subtitle"]').textContent = translations[lang].subtitle;
    
    // 2. Меняем имя автора над заголовком
    authorTitle.textContent = lang === 'ru' ? "Артур Маилянов" : "Artur Mailyanov";
    
    // 3. Меняем биографию
    bioContainer.innerHTML = translations[lang].bio.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // 4. Генерируем карточки конкурса
    cardsGrid.innerHTML = translations[lang].cards.map(card => {
        if (card.isGit) {
            return `
                <div class="card github-card">
                    <div class="card-num">${card.num}</div>
                    <h3>${card.title}</h3>
                    <p>${card.text}</p>
                    <a href="https://github.com/MRGrass2011/Artur-portfolio" target="_blank" class="git-btn">OPEN ARCHIVE</a>
                </div>
            `;
        }
        return `
            <div class="card">
                <div class="card-num">${card.num}</div>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>
        `;
    }).join('');
}

// Первичный запуск отрисовки сайта при открытии страницы
renderContent(currentLang);

// Клик по кнопке языка
langSwitch.addEventListener('click', () => {
    // Меняем язык
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    
    // Запускаем красивый глитч во время перевода
    glitchElements.forEach(el => el.classList.add('trigger-glitch'));
    
    // Переводим контент
    renderContent(currentLang);
    
    // Убираем глитч через 400мс
    setTimeout(() => {
        glitchElements.forEach(el => el.classList.remove('trigger-glitch'));
    }, 400);
});

// Магия переключения тем (Тёмный/Светлый Вайб)
toggleBtn.addEventListener('click', () => {
    glitchElements.forEach(el => el.classList.add('trigger-glitch'));
    document.body.classList.toggle('light-vibe');
    
    if (document.body.classList.contains('light-vibe')) {
        toggleBtn.textContent = '⚙️ DARK VIBE';
    } else {
        toggleBtn.textContent = '⚙️ LIGHT VIBE';
    }

    setTimeout(() => {
        glitchElements.forEach(el => el.classList.remove('trigger-glitch'));
    }, 400);
});