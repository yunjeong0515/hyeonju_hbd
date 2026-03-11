const btn = document.getElementById('runaway-btn');
const btnText = btn.querySelector('span'); // 버튼 안의 글자 요소

// 현듀를 약 올릴 문구 리스트
const messages = [
    "메롱! 😜", 
    "못 잡겠죵? 히히", 
    "선물 안 줄거지롱~", 
    "여긴가? 0_0",
    "잡아봐라~~"
];

btn.addEventListener('mouseover', () => {
    // 1. 도망가기 시작하면 화면 전체 기준으로 고정
    btn.style.position = 'fixed';

    // 2. 화면 안에서만 움직이도록 안전 영역 계산 (여유값 50px)
    const pad = 50;
    const maxX = window.innerWidth - btn.offsetWidth - pad;
    const maxY = window.innerHeight - btn.offsetHeight - pad;

    // 3. 랜덤 좌표 생성 (최소 pad, 최대 maxX/maxY)
    const randomX = Math.floor(Math.random() * (maxX - pad)) + pad;
    const randomY = Math.floor(Math.random() * (maxY - pad)) + pad;

    // 4. 위치 이동 및 텍스트 변경
    btn.style.transform = 'none'; 
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;

    // 5. 문구 무작위 변경
    const randomIdx = Math.floor(Math.random() * messages.length);
    btnText.innerText = messages[randomIdx];
});



// 하트 생성 함수
function createHeart() {
    const heartWrapper = document.createElement('div');
    heartWrapper.classList.add('heart');

    // 현듀가 좋아할 만한 예쁜 색상들 (원하는 색으로 바꿔보세요!)
    const colors = ['#FF49BC', '#DF9BFF', '#FF8BE0', '#FFF98C', '#45E9FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // 직접 주신 SVG 코드를 넣고 fill 부분만 변수로 처리!
    heartWrapper.innerHTML = `
        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.8637 3.97723V0H19.8863H15.909V3.97723H11.9318V0H7.9545H3.97727V3.97723H0V7.9545V11.9317H3.97727V15.909H7.9545V19.8864H11.9318V23.8637H15.909V19.8864H19.8863V15.909H23.8637V11.9317H27.8409V7.9545V3.97723H23.8637Z" 
            fill="${randomColor}"/>
        </svg>
    `;

    // 랜덤 설정 (위치, 크기, 속도)
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 20 + 15; // 15px ~ 35px
    const duration = Math.random() * 3 + 3; // 3초 ~ 6초

    heartWrapper.style.left = `${startX}px`;
    heartWrapper.style.width = `${size}px`;
    heartWrapper.style.animationDuration = `${duration}s`;
    heartWrapper.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(heartWrapper);

    // 애니메이션 끝나면 삭제
    setTimeout(() => {
        heartWrapper.remove();
    }, duration * 1000);
}

// 하트 생성 주기
setInterval(createHeart, 300);

const modal = document.getElementById('birthday-modal');
const closeBtn = document.querySelector('.close-btn');
const runawayBtn = document.getElementById('runaway-btn');

// 버튼 클릭 시 모달 열기
runawayBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.onclick = function() {
    modal.style.display = 'none';
}
