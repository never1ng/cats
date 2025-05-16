const catsData = [
    {
        id: 1,
        name: 'Лара',
        age: '8 лет',
        description: 'Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg'
    },
    {
        id: 2,
        name: 'Базиль',
        age: '2 года',
        description: 'Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg'
    },
    {
        id: 3,
        name: 'Риш',
        age: '1 год',
        description: 'Риш любит лесенки, канаты. Очень активный и дружелюбный кот. Риш полностью здоров, привит, кастрирован. Использует лоточек и очень аккуратен.',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG'
    },
    {
        id: 4,
        name: 'Элли',
        age: '4 года',
        description: 'Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать. Не доверяет людям, потребуется время, чтобы стать ей другом. Приучена к лотку и когтеточке',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg'
    },
    {
        id: 5,
        name: 'Чарли',
        age: '1 год',
        description: 'Чёрно-белый юный котофилософ очень любит размышлять и быть наедине. Пока что не доверяет людям, не агрессивный. Ладит с другими животными, приучен к лотку и когтеточке',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg'
    },
    {
        id: 6,
        name: 'Стефани',
        age: '6 лет',
        description: 'Прелестная Стефани – трогательная, добродушная и очень-очень общительная девочка как никто другой нуждается в заботе и любви. Приучена к лотку и когтеточке',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg'
    },
    {
        id: 7,
        name: 'Дуся',
        age: '1 год',
        description: 'Дусеньке около 1 года с небольшим, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно. Очень общительная и нежная, хочет постоянного внимания.',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2022-02/B1444207-6EE3-4BA4-97F7-2F9666AE2F63.jpeg'
    },
    {
        id: 8,
        name: 'Бруно',
        age: '1 год',
        description: 'Очаровательный активный кот Бруно, находится в постоянном движении! Очаровательный и ласковый кот. Приучен к лотку, ладит с другими котами, привит.',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2022-01/IMG-20211223-WA0049.jpg'
    },
    {
        id: 9,
        name: 'Лара',
        age: '1 год',
        description: 'Немного боязливая, но очень добрая. Приучена к лотку и когтет',
        imageUrl: 'https://www.friendforpet.ru/api/sites/default/files/2022-01/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BE%D0%BA4_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg'
    }];

const catsContainer = document.getElementById('cats-container');

function createCatCard(cat) {
    const catCard = document.createElement('div');
    catCard.className = `cat-card${cat.isFavorite ? ' favorite' : ''}`;
    catCard.setAttribute('data-id', cat.id);
    
    const catImage = document.createElement('div');
    catImage.className = 'cat-image';
    
    const img = document.createElement('img');
    img.src = cat.imageUrl;
    img.alt = cat.name;
    img.loading = 'lazy';
    
    const ageSpan = document.createElement('span');
    ageSpan.className = 'age';
    ageSpan.textContent = cat.age;
    
    catImage.appendChild(img);
    catImage.appendChild(ageSpan);
    
    const catInfo = document.createElement('div');
    catInfo.className = 'cat-info';
    
    const catName = document.createElement('h2');
    catName.textContent = cat.name;
    
    const catDescription = document.createElement('p');
    catDescription.className = 'description';
    catDescription.textContent = cat.description;
    
    catInfo.appendChild(catName);
    catInfo.appendChild(catDescription);
    
    catCard.appendChild(catImage);
    catCard.appendChild(catInfo);
    
    catCard.addEventListener('click', () => toggleFavorite(cat.id));
    
    return catCard;
}

function toggleFavorite(catId) {
    const catIndex = catsData.findIndex(cat => cat.id === catId);
    
    if (catIndex !== -1) {
        catsData[catIndex].isFavorite = !catsData[catIndex].isFavorite;
        renderCats();
    }
}

function renderCats() {
    catsContainer.innerHTML = '';
    catsData.forEach(cat => {
        const catCard = createCatCard(cat);
        catsContainer.appendChild(catCard);
    });
}

function handleFavoriteClick(event) {
    const catCard = event.target.closest('.cat-card');
    if (catCard) {
        const catId = Number(catCard.getAttribute('data-id'));
        toggleFavorite(catId);
    }
}

function init() {
    renderCats();
    catsContainer.addEventListener('click', handleFavoriteClick);
}

document.addEventListener('DOMContentLoaded', init);