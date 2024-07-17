// scripts.js
const quizData = [
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'hokkaido.png',
        answers: ['北海道', 'ほっかいどう'],
        hint:'2024年の名探偵コナンの映画のモデル地にもなった函館は、100万ドルの夜景として知られています。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'aomori.png',
        answers: ['青森県', '青森', 'あおもりけん', 'あおもり'],
        hint:'りんごの生産量が日本一。ねぶた祭りが有名です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'iwate.png',
        answers: ['岩手県', '岩手', 'いわてけん', 'いわて'],
        hint:'リアス海岸が有名で、連続テレビ小説「あまちゃん」のモデル地にもなりました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'miyagi.png',
        answers: ['宮城県','宮城','みやぎけん','みやぎ'],
        hint:'伊達政宗が開いた仙台市は現在、杜の都と呼ばれています。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'akita.png',
        answers: ['秋田県','秋田','あきたけん','あきた'],
        hint:'なまはげやきりたんぽ鍋が有名です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'yamagata.png',
        answers: ['山形県','山形','やまがたけん','やまがた'],
        hint:'さくらんぼ(桜桃)の生産量が日本一です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'fukushima.png',
        answers: ['福島県','福島','ふくしまけん','ふくしま'],
        hint:'炭鉱跡に開かれたハワイアンズはいわき市にあります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'ibaraki.png',
        answers: ['茨城県','茨城','いばらきけん','いばらき'],
        hint:'湖の周囲長日本一の霞ヶ浦があります。レンコンの生産量も日本一です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'tochigi.png',
        answers: ['栃木県','栃木','とちぎけん','とちぎ'],
        hint:'宇都宮餃子が有名で、駅前には餃子の銅像があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'gunma.png',
        answers: ['群馬県','群馬','ぐんまけん','ぐんま'],
        hint:'こんにゃく芋の90%以上を生産。明治時代に建てられた富岡製糸場があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'saitama.png',
        answers: ['埼玉県','埼玉','さいたまけん','さいたま'],
        hint:'秩父市は秩父夜祭やセメントの製造で有名です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'chiba.png',
        answers: ['千葉県','千葉','ちばけん','ちば'],
        hint:'落花生の生産量が日本一です。成田空港は貿易額日本一を誇ります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'tokyo.png',
        answers: ['東京都','東京','とうきょうと','とうきょう'],
        hint:'日本の首都。約1300万人の人口を擁します。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'kanagawa.png',
        answers: ['神奈川県','神奈川','かながわけん','かながわ'],
        hint:'明治時代、海外からの輸入品が集まった赤レンガ倉庫は現在、商業施設として生まれ変わりました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'nigata.png',
        answers: ['新潟県','新潟','にいがたけん','にいがた'],
        hint:'米の生産量が日本一です。佐渡金山は江戸幕府の財政を支えました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'toyama.png',
        answers: ['富山県','富山','とやまけん','とやま'],
        hint:'チューリップ球根の生産量が日本一です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'ishikawa.png',
        answers: ['石川県','石川','いしかわけん','いしかわ'],
        hint:'2024年1月に発生した地震で、能登半島では大きな被害が起こりました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'fukui.png',
        answers: ['福井県','福井','ふくいけん','ふくい'],
        hint:'眼鏡のフレームが生産量日本一の鯖江市があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'yamanashi.png',
        answers: ['山梨県','山梨','やまなしけん','やまなし'],
        hint:'扇状地での果樹栽培が盛んで、ぶどう、ももの生産量が日本一です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'nagano.png',
        answers: ['長野県','長野','ながのけん','ながの'],
        hint:'県庁所在地の市は善光寺の門前町として発展しました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'gifu.png',
        answers: ['岐阜県','岐阜','ぎふけん','ぎふ'],
        hint:'合掌造りで有名な白川郷があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'shizuoka.png',
        answers: ['静岡県','静岡','しずおかけん','しずおか'],
        hint:'牧之原台地でお茶栽培が盛んで、生産量日本一を誇ります。'

    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'aichi.png',
        answers: ['愛知県','愛知','あいちけん','あいち'],
        hint:'自動車産業が盛んで、トヨタ自動車の本社がある豊田市があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'mie.png',
        answers: ['三重県','三重','みえけん','みえ'],
        hint:'伊勢神宮があり、参拝する伊勢参りは江戸時代から盛んになりました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'shiga.png',
        answers: ['滋賀県','滋賀','しがけん','しが'],
        hint:'日本一大きな湖、琵琶湖があり、湖畔にはかつて織田信長が安土城を築きました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'kyoto.png',
        answers: ['京都府','京都','きょうとふ','きょうと'],
        hint:'古都として観光客に人気ですが、近年オーバーツーリズムが問題になっています。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'osaka.png',
        answers: ['大阪府','大阪','おおさかふ','おおさか'],
        hint:'2025年の万博が行われる、夢洲があります。1970年にも万博が行われました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'hyogo.png',
        answers: ['兵庫県','兵庫','ひょうごけん','ひょうご'],
        hint:'世界遺産の姫路城(別名:白鷺城)があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'nara.png',
        answers: ['奈良県','奈良','ならけん','なら'],
        hint:'吉野山は桜の名所として有名で、南北朝時代には南朝が置かれていました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'wakayama.png',
        answers: ['和歌山県','和歌山','わかやまけん','わかやま'],
        hint:'みかん、梅、柿の生産量が日本一の果物王国です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'tottori.png',
        answers: ['鳥取県','鳥取','とっとりけん','とっとり'],
        hint:'境港市はゲゲゲの鬼太郎で有名な水木しげる氏の出身地であり、妖怪たちを使った町おこしが行われています。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'shimane.png',
        answers: ['島根県','島根','しまねけん','しまね'],
        hint:'江戸時代日本の輸出を支えた石見銀山があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'okayama.png',
        answers: ['岡山県','岡山','おかやまけん','おかやま'],
        hint:'桃太郎伝説のモデルとされており、ももの生産が盛んです。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'hiroshima.png',
        answers: ['広島県','広島','ひろしまけん','ひろしま'],
        hint:'現首相岸田氏の選出区であり、養殖牡蠣の生産量が日本一です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'yamaguchi.png',
        answers: ['山口県','山口','やまぐちけん','やまぐち'],
        hint:'明治維新を支えた人材を輩出した、吉田松陰による松下村塾がありました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: '徳島.png',
        answers: ['徳島県','徳島','とくしまけん','とくしま'],
        hint:'阿波踊り、鳴門のうずしおが有名です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'kagawa.png',
        answers: ['香川県','香川','かがわけん','かがわ'],
        hint:'うどんの消費量が日本一です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'ehime.png',
        answers: ['愛媛県','愛媛','えひめけん','えひめ'],
        hint:'今治タオルは吸水性に優れ、国内外から絶大な人気を誇ります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'kochi.png',
        answers: ['高知県','高知','こうちけん','こうち'],
        hint:'坂本龍馬の出身地。カツオ漁も盛んです。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'fukuoka.png',
        answers: ['福岡県','福岡','ふくおかけん','ふくおか'],
        hint:'かつては太宰府が置かれ、大陸からの防衛、交易に大きな役割を果たしました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'saga.png',
        answers: ['佐賀県','佐賀','さがけん','さが'],
        hint:'弥生時代の大規模集落跡の吉野ケ里遺跡があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'nagasaki.png',
        answers: ['長崎県','長崎','ながさきけん','ながさき'],
        hint:'江戸時代鎖国状態の中で、唯一海外交流の拠点だった出島がありました。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'kumamoto.png',
        answers: ['熊本県','熊本','くまもとけん','くまもと'],
        hint:'世界最大級のカルデラを誇る阿蘇山があります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'oita.png',
        answers: ['大分県','大分','おおいたけん','おおいた'],
        hint:'全国的に有名な湯布院温泉や別府温泉がある温泉王国です。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'miyazaki.png',
        answers: ['宮崎県','宮崎','みやざきけん','みやざき'],
        hint:'温暖な気候を活かした促成栽培による、きゅうり、ピーマンなどの生産が盛んです。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'kagoshima.png',
        answers: ['鹿児島県','鹿児島','かごしまけん','かごしま'],
        hint:'現在も噴火活動を繰り返す桜島があり、火山灰が堆積したシラス台地が広がります。'
    },
    {
        question: 'この都道府県はどこですか？',
        imageSrc: 'okinawa.png',
        answers: ['沖縄県','沖縄','おきなわけん','おきなわ'],
        hint:'温暖な気候を活かした、南国フルーツパイナップル、マンゴーの生産量が日本一です。'
    },
];

let currentQuiz = {};
let correctCount = 0;
let usedQuizzes = [];
let currentQuestionIndex = 0; // 現在の問題番号を管理

function getRandomQuiz() {
    if (usedQuizzes.length === quizData.length) {
        return null; // すべてのクイズが使用された場合
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quizData.length);
    } while (usedQuizzes.includes(randomIndex));

    usedQuizzes.push(randomIndex);
    currentQuestionIndex++; // 問題番号をインクリメント
    return quizData[randomIndex];
}

function displayQuiz(quiz) {
    if (quiz === null) {
        document.getElementById('question').textContent = '全問終了です。お疲れ様でした！';
        document.getElementById('question-image').style.display = 'none';
        document.getElementById('answer').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';

        // すべてのクイズが終了したら結果ページに移動
        localStorage.setItem('correctCount', correctCount);
        window.location.href = 'result.html';
        return;
    }

    currentQuiz = quiz;
    document.getElementById('question').textContent = quiz.question;
    document.getElementById('question-image').src = quiz.imageSrc;
    document.getElementById('question-image').style.display = 'block';
    document.getElementById('answer').style.display = 'block';
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('hint').textContent = '';
    document.getElementById('hint').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('check-answer-button').style.display = 'inline-block';
    document.getElementById('hint-button').style.display = 'inline-block';

    // 現在の問題番号を表示
    document.getElementById('current-question').textContent = `${currentQuestionIndex}問目/47問`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswers = currentQuiz.answers.map(answer => answer.toLowerCase());
    const correctAnswerDisplay = currentQuiz.answers[0]; // 表示する正解は配列の最初の要素

    if (correctAnswers.includes(userAnswer)) {
        document.getElementById('result').textContent = `正解！「${correctAnswerDisplay}」です。`;
        document.getElementById('result').style.color = 'green';
        correctCount++;
    } else {
        document.getElementById('result').textContent = `残念。正解は「${correctAnswerDisplay}」です。`;
        document.getElementById('result').style.color = 'red';
    }

    // ヒントを表示する
    const hintElement = document.getElementById('hint');
    hintElement.textContent = currentQuiz.hint;
    hintElement.style.display = 'block';

    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('next-button').style.display = 'inline-block';

    // ボタンを非表示にする
    document.getElementById('check-answer-button').style.display = 'none';
    document.getElementById('hint-button').style.display = 'none';
}

function showHint() {
    const hintElement = document.getElementById('hint');
    hintElement.textContent = currentQuiz.hint;
    hintElement.style.display = 'block';
}

function nextQuiz() {
    const nextQuiz = getRandomQuiz();
    displayQuiz(nextQuiz);
}

// 初回クイズの表示
nextQuiz();