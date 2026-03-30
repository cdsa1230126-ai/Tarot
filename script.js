// タロットカードのデータ
const tarotDeck = [
    { name: "0 愚者", meaning: "自由、新たな出発、純粋さ" },
    { name: "I 魔術師", meaning: "創造、自信、スタートライン" },
    { name: "II 女教皇", meaning: "直感、知性、静かな洞察" },
    { name: "III 女帝", meaning: "豊かさ、愛情、母性" },
    { name: "IV 皇帝", meaning: "リーダーシップ、安定、実行力" },
    { name: "V 教皇", meaning: "伝統、教育、慈悲" }
];

function drawCard() {
    // 0から配列の長さまでの乱数を作る
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const card = tarotDeck[randomIndex];

    // 画面の要素を取得
    const cardDisplay = document.getElementById('card-display');
    const resultArea = document.getElementById('result-area');
    const nameLabel = document.getElementById('card-name');
    const meaningLabel = document.getElementById('card-meaning');

    // 表示を更新
    cardDisplay.innerText = "✨"; // 演出用
    
    // 少し遅らせて結果を出す（占ってる感を出すため）
    setTimeout(() => {
        cardDisplay.innerText = "🃏"; 
        nameLabel.innerText = card.name;
        meaningLabel.innerText = card.meaning;
        resultArea.classList.remove('hidden');
    }, 500);
}