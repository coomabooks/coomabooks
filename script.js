/**
 * 絵本データを配列で定義します。
 * public/images フォルダに表紙画像ファイルを置き、image プロパティにパスを設定してください。
 */
const worksData = [
  { image: './images/santana_no_daiji.jpg', title: 'サンタナのだいじ', desc: '「"だいじ" って、こんなにうれしい」<br>やさしい言葉で綴る、ぬいぐるみのものがたり', asin: 'B0F92MVYC3' },
  { image: './images/santana_special_something.jpg', title: 'Santana’s Special Something', desc: '“Being loved feels so special."<br>A heartwarming story told in gentle, simple words — perfect for reading aloud.', asin: 'B0F2726F8C' },
  // 以降、必要に応じてオブジェクトを追加してください
];

const slides = document.getElementById('slides');
const container = document.getElementById('slidesContainer'); // ここを追加

// worksData に基づき動的にカードを生成
worksData.forEach(({ image, title, desc, asin }) => {
  const url = `https://www.amazon.co.jp/dp/${asin}`;
  const card = document.createElement('div');
  card.className = 'flex-shrink-0 w-48 bg-white rounded-lg shadow-lg p-4 text-center snap-start';
  card.innerHTML = `
    <a href="${url}" target="_blank" rel="noopener">
      <img src="${image}" alt="${title}" class="h-40 w-full object-cover rounded mb-2">
    </a>
    <h3 class="font-bold">${title}</h3>
    <p class="text-sm">${desc}</p>
  `;
  slides.appendChild(card);
});

// スライダー制御
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// データが1件以下ならボタン非表示
if (worksData.length <= 2) {
  prev.style.display = 'none';
  next.style.display = 'none';
} else {
  const firstCard = slides.querySelector('.snap-start');
  const styleInfo = getComputedStyle(firstCard);
  const cardWidth = firstCard.offsetWidth + parseInt(styleInfo.marginRight, 10);

  // 前へボタン
  prev.addEventListener('click', () => {
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  // 次へボタン
  next.addEventListener('click', () => {
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
}
