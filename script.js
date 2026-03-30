// 1. 大アルカナ22枚のフルデータ
const tarotDeck = [
    { name: "0 愚者", upright: "自由・冒険・未知の可能性", reverse: "無計画・無責任・わがまま" },
    { name: "I 魔術師", upright: "創造・才能・スタート", reverse: "スランプ・技術不足・自信喪失" },
    { name: "II 女教皇", upright: "直感・知性・神秘", reverse: "わがまま・神経質・表面的な知識" },
    { name: "III 女帝", upright: "豊かさ・愛情・母性", reverse: "挫折・浪費・感情的" },
    { name: "IV 皇帝", upright: "責任・安定・実行力", reverse: "独断・傲慢・無責任" },
    { name: "V 教皇", upright: "伝統・慈悲・導き", reverse: "束縛・不信感・頑固" },
    { name: "VI 恋人", upright: "選択・調和・ときめき", reverse: "不調和・優柔不断・誘惑" },
    { name: "VII 戦車", upright: "勝利・前進・強い意志", reverse: "暴走・挫折・好戦的" },
    { name: "VIII 力", upright: "勇気・忍耐・精神力", reverse: "自信過剰・無気力・自分勝手" },
    { name: "IX 隠者", upright: "内省・探求・悟り", reverse: "閉鎖的・孤独・不注意" },
    { name: "X 運命の輪", upright: "チャンス・転換点・幸運", reverse: "不運・タイミングの悪さ・逆境" },
    { name: "XI 正義", upright: "公平・決断・バランス", reverse: "不公平・偏見・不正" },
    { name: "XII 吊るされた男", upright: "修行・視点の転換・忍耐", reverse: "無駄な苦労・自己犠牲・停滞" },
    { name: "XIII 死神", upright: "終焉・再出発・変化", reverse: "未練・停滞・執着" },
    { name: "XIV 節制", upright: "節度・調和・癒やし", reverse: "不摂生・不調和・消耗" },
    { name: "XV 悪魔", upright: "執着・誘惑・束縛", reverse: "解放・覚醒・誘惑を断ち切る" },
    { name: "XVI 塔", upright: "崩壊・衝撃・突然の変化", reverse: "緊迫状態・不安・再建への道" },
    { name: "XVII 星", upright: "希望・願い・インスピレーション", reverse: "失望・高望み・悲観的" },
    { name: "XVIII 月", upright: "不安・迷い・潜在意識", reverse: "不安の解消・徐々に好転・現実逃避" },
    { name: "XIX 太陽", upright: "成功・祝福・明るい未来", reverse: "中断・衰退・元気がない" },
    { name: "XX 審判", upright: "復活・覚醒・結果が出る", reverse: "再起不能・悔恨・報われない" },
    { name: "XXI 世界", upright: "完成・完全・ハッピーエンド", reverse: "未完成・限界・スランプ" }
];

function drawCard() {
    // 22枚の中からランダムに選ぶ
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const card = tarotDeck[randomIndex];

    // 50%の確率で逆位置かどうかを決める
    const isReverse = Math.random() < 0.5;

    // 画面の要素を取得
    const cardDisplay = document.getElementById('card-display');
    const resultArea = document.getElementById('result-area');
    const nameLabel = document.getElementById('card-name');
    const meaningLabel = document.getElementById('card-meaning');

    // 演出：一旦リセット
    cardDisplay.innerText = "✨";
    cardDisplay.style.transform = "rotate(0deg)"; // 回転を戻す
    
    // 0.5秒後に結果を表示
    setTimeout(() => {
        cardDisplay.innerText = "🃏"; 
        
        if (isReverse) {
            // 逆位置の場合
            cardDisplay.style.transform = "rotate(180deg)"; // 画像（文字）を180度回転
            nameLabel.innerText = `${card.name}（逆位置）`;
            meaningLabel.innerText = `意味：${card.reverse}`;
        } else {
            // 正位置の場合
            cardDisplay.style.transform = "rotate(0deg)";
            nameLabel.innerText = `${card.name}（正位置）`;
            meaningLabel.innerText = `意味：${card.upright}`;
        }
        
        resultArea.classList.remove('hidden');
    }, 500);
}