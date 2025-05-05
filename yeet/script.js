// Dữ liệu các mốc quà tặng
const milestones = [
    {
        title: "Comrade: Nguyễn Ngọc Minh Anh",
        image: "assets/nametag.jpg",
        message: "When we were officially dating, there was a time when i used this name tag, and it was quite hilarious that everyone called me by your name, even the boss joined in. You were quite popular in the unit during that time, with the nickname my lover :D."
    },
    {
        title: "The Quick Meeting In Da Nang",
        image: "assets/danang.jpg",
        message: "I met you in Da Nang during the time I was traveling from Hanoi to prepare for my admission documents, after being discharged from the army. This time was very emotional for me, when I made a crazy decision. Luckily you were still there."
    },
    {
        title: "The Badass xD ",
        image: "assets/2023.jpg",
        message: "It wasn't until Tet 2023 that I really felt more comfortable going out with you, when we started seeing each other more, although compared to other couples it was still very little. I still find it unbelievable that we were able to maintain a relationship under such difficult circumstances."
    },
    {
        title: "Another Year Has Passed",
        image: "assets/nuida.jpg",
        message: "Later on, we learn more about each other, meet each other more. Which means we see each other's true selves, and conflicts inevitably occur. Even so, you still tolerate my negativity, still accept me despite the gossip around and the bad things you have seen about me. I really appreciate that <3 ."
    },
    {
        title:"The Trip To Ha Noi",
        image:"assets/epic.jpg",
        message: "This is probably our best trip and 'peak' time so far. The first time we planned, saved money, and enjoyed the trip to the fullest. I have to say that looking back it wasn't perfect, there were things i didn't know, and plans that weren't completed. But i think it only added to the meaning of the trip."
    },
    {
        title:"Made It To Another Year",
        image:"assets/panik.jpg",
        message:"Each year brings new things, we gradually understand each other more, more comfortable with each other in many things. Just hope that the obstacles will be removed, we can be closer to each other, not only geographically but also spiritually.",
    }
];

let openedGifts = 0;
const totalGifts = milestones.length;

function createTimeline() {
    const timeline = document.querySelector('.timeline');
    
    milestones.forEach((milestone, index) => {
        const milestoneElement = document.createElement('div');
        milestoneElement.className = 'milestone';
        
        milestoneElement.innerHTML = `
            <div class="milestone-content">
                <h3 class="milestone-title">${milestone.title}</h3>
                <div class="gift-message" id="gift-${index}">
                    <img src="${milestone.image}" alt="Kỷ niệm">
                    <p>${milestone.message}</p>
                </div>
            </div>
            <div class="gift-container">
                <div class="gift-box" onclick="openGift(${index})"></div>
            </div>
        `;
        
        timeline.appendChild(milestoneElement);
    });
}

function openGift(index) {
    const giftMessage = document.getElementById(`gift-${index}`);
    const giftBox = document.querySelectorAll('.gift-box')[index];
    
    if (giftMessage.classList.contains('visible')) return;
    
    giftMessage.classList.add('visible');
    giftBox.classList.add('opened');
    openedGifts++;
    
    if (openedGifts === totalGifts) {
        setTimeout(showFinalMessage(), 10000);
    }
}

function showFinalMessage() {
    const finalMessage = document.querySelector('.final-message');
    finalMessage.classList.remove('hidden');
    finalMessage.classList.add('visible');
    document.body.classList.add('all-gifts-opened');
    
    setTimeout(() => {
        finalMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 500);
}

function checkLogin() {
    if (sessionStorage.getItem('loggedIn') === 'true') return true;
    if (window.location.pathname.endsWith('login.html')) return false;
    window.location.href = "login.html";
    return false;
}

window.onload = function() {
    if (checkLogin() && window.location.pathname.endsWith('index.html')) {
        createTimeline();
    }
};