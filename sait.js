// Переменная для хранения текущего активного подраздела
let currentKit = 'overall';

// 1. Функция переключения вкладок китов
function switchKit(kitId) {
    currentKit = kitId;
    
    // Сбрасываем текст в поиске при переключении вкладки
    const searchInput = document.getElementById('playerSearch');
    if (searchInput) searchInput.value = '';

    const sections = document.querySelectorAll('.leaderboard-section');
    const tabs = document.querySelectorAll('.kit-tab');

    // Скрываем все разделы
    sections.forEach(sec => {
        sec.classList.remove('active');
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(10px)';
    });
    
    // Убираем активный статус у всех кнопок-вкладок
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Включаем нужный раздел
    const targetSection = document.getElementById(kitId);
    if (targetSection) {
        targetSection.classList.add('active');
        setTimeout(() => {
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
        }, 50);
    }

    // Делаем активной кнопку, на которую кликнули
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Перерисовываем таблицы для корректного отображения
    renderLeaderboards();
}

// 2. База данных: Ключи базы строго синхронизированы со всеми новыми вкладками
const playersData = {
    overall: [
        { rank: 1, name: "waerqs", points: 60, region: "RU", tiers: ["HT1"] },
        { rank: 2, name: "prom1seee_", points: 60, region: "RU", tiers: ["HT1"] }
    ],
    sword: [
        { rank: 1, name: "waerqs", points: 60, region: "RU", tiers: ["HT1"] },
        { rank: 2, name: "prom1seee_", points: 60, region: "RU", tiers: ["HT1"] }
    ],
    vanilla: [],
    mace: [],
    nethop: [],
    nethpot: [],
    pot: [],
    uhc: [],
    axe: [],
    smp: []
};

// 3. Функция автоматического вывода игроков с поддержкой фильтрации поиска
function renderLeaderboards(filterText = '') {
    Object.keys(playersData).forEach(kit => {
        const tbody = document.querySelector(`#${kit} tbody`);
        if (!tbody) return; // Если у вкладки текстовая заглушка без tbody, скрипт её не трогает

        tbody.innerHTML = ''; 

        // Фильтруем игроков по введенному тексту (без учета регистра букв)
        const filteredPlayers = playersData[kit].filter(player => 
            player.name.toLowerCase().includes(filterText.toLowerCase())
        );

        // Если поиск пустой внутри активной таблицы
        if (filteredPlayers.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #666;">Игрок не найден</td></tr>`;
            return;
        }

        filteredPlayers.forEach(player => {
            const tr = document.createElement('tr');
            
            const TiersHtml = player.tiers.map(t => 
                `<span class="tier-tag tier-${t.toLowerCase()}">${t}</span>`
            ).join('');

            const avatarLetters = player.name.substring(0, 2).toUpperCase();

            tr.innerHTML = `
                <td class="rank rank-${player.rank}">${player.rank}.</td>
                <td>
                    <div class="player-cell">
                        <div class="avatar">${avatarLetters}</div>
                        <div class="player-info">
                            <div class="name">${player.name}</div>
                            <div class="title">${player.points} points</div>
                        </div>
                    </div>
                </td>
                <td><span class="region-badge region-${player.region.toLowerCase()}">${player.region}</span></td>
                <td><div class="tiers-container">${TiersHtml}</div></td>
            `;
            tbody.appendChild(tr);
        });
    });
}

// 4. Функция обработки ввода в поисковую строку
function handleSearch() {
    const query = document.getElementById('playerSearch').value;
    renderLeaderboards(query);
}

// Стартуем отрисовку при первой загрузке страницы
window.onload = () => {
    renderLeaderboards();
    const activeSection = document.querySelector('.leaderboard-section.active');
    if(activeSection) {
        activeSection.style.opacity = '1';
        activeSection.style.transform = 'translateY(0)';
    }
};
