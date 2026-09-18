let currentKit = 'overall';

function switchKit(kitId) {
    currentKit = kitId;
    
    const searchInput = document.getElementById('playerSearch');
    if (searchInput) searchInput.value = '';

    const sections = document.querySelectorAll('.leaderboard-section');
    const tabs = document.querySelectorAll('.kit-tab');

    sections.forEach(sec => {
        sec.classList.remove('active');
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(10px)';
    });
    
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const targetSection = document.getElementById(kitId);
    if (targetSection) {
        targetSection.classList.add('active');
        setTimeout(() => {
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
        }, 50);
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    renderLeaderboards();
}

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
    nethpot: [], 
    pot: [], 
    uhc: [], 
    axe: [], 
    smp: []
};

function renderLeaderboards(filterText = '') {
    Object.keys(playersData).forEach(kit => {
        const tbody = document.querySelector(`#${kit} tbody`);
        if (!tbody) return;

        tbody.innerHTML = ''; 

        const filteredPlayers = playersData[kit].filter(player => 
            player.name.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filteredPlayers.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: #666;">Игрок не найден</td></tr>`;
            return;
        }

        filteredPlayers.forEach(player => {
            const tr = document.createElement('tr');
            const TiersHtml = player.tiers.map(t => `<span class="tier-tag tier-${t.toLowerCase()}">${t}</span>`).join('');
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

function handleSearch() {
    const query = document.getElementById('playerSearch').value;
    renderLeaderboards(query);
}

window.onload = () => {
    renderLeaderboards();
    const activeSection = document.querySelector('.leaderboard-section.active');
    if(activeSection) {
        activeSection.style.opacity = '1';
        activeSection.style.transform = 'translateY(0)';
    }
};
