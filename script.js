// Soal-soal dalam urutan terstruktur (diacak nanti di tampilan)
const questions = [
    { number: 1, question: "Manakah di bawah ini yang termasuk dalam Internet of Things dalam kehidupan sehari-hari?", options: ["Penggunaan televisi elektronik", "Penggunaan AC", "Penggunaan aplikasi ojek online dalam kehidupan sehari-hari", "Penggunaan kompor listrik untuk memasak", "Penggunaan coolcash"], answer: 2 },
    { number: 2, question: "Manakah platform di bawah ini yang termasuk dalam platform crowdfunding?", options: ["Burungnesia", "Campaign", "Tokopedia", "ODK Collect", "Coursera"], answer: 1 },
    { number: 3, question: "Manakah platform di bawah ini yang tidak termasuk dalam platform meeting?", options: ["Ms. Teams", "Zoom", "Webex", "Coursera", "Campaign"], answer: 3 },
    { number: 4, question: "Model e-learning yang tidak melakukan tatap muka secara langsung dikenal dengan..", options: ["Synchronous", "Real time", "Asynchronous", "Langsung", "Open Source"], answer: 2 },
    { number: 5, question: "Manakah di bawah ini yang merupakan kelebihan penggunaan survei online?", options: ["Validitas dan reliabilitas lebih terjaga", "Kerahasiaan lebih mudah dikendalikan", "Mudah dan murah dilakukan", "Lebih akurat", "Lebih valid"], answer: 2 },
    { number: 6, question: "Manakah di bawah ini yang bukan merupakan keuntungan dalam digital marketing?", options: ["Jangkauan target sasaran lebih luas", "Lebih cepat tersampaikan kepada konsumen/sasaran", "Biaya efisien", "Dapat menjangkau seluruh pelosok daerah meskipun belum ada internet", "Waktu pengerjaan tak bisa diprediksi"], answer: 3 },
    { number: 7, question: "Media marketing yang dapat digunakan pada Youtube adalah...", options: ["SEO", "SEM", "Video Marketing", "Website", "Webex"], answer: 2 },
    { number: 8, question: "Pemasaran digital dapat dilakukan tanpa mengeluarkan modal yang besar untuk membantu website masuk pada halaman awal mesin pencarian Google merupakan bentuk...", options: ["Media sosial marketing", "Website", "SEO", "Twitter adsense", "CEO"], answer: 2 },
    { number: 9, question: "Salah satu karakteristik big data adalah data tersebut banyak jumlahnya, merupakan karakteristik dari...", options: ["Value", "Variety", "Volume", "Venue", "Viscosity"], answer: 2 },
    { number: 10, question: "Big data dapat diperoleh dan dianalisis serta digunakan secara realtime untuk mendiskripsikan tentang suatu keadaan sebagai bahan dalam pengambilan keputusan yang dikenal dengan...", options: ["OLTP", "OLAP", "RTAP", "Sistem Pakar", "RLAP"], answer: 2 },
    { number: 11, question: "Data yang digunakan dalam analisis pada big data harus memiliki nilai dan berarti, merupakan karakteristik big data...", options: ["Volume", "Viscosity", "Variety", "Value", "Venue"], answer: 3 },
    { number: 12, question: "Pada konsep awal, karakteristik big data terdiri dari 3 V yaitu...", options: ["Volume, Viscosity, Variety", "Volume, Value, Viscosity", "Volume, Variety, Value", "Volume, Verbosity, Value", "Volume, Viscosity, Value"], answer: 0 },
    { number: 13, question: "Bentuk uji coba untuk membuktikan apakah suatu sistem termasuk dalam AI adalah...", options: ["Tes Hardware", "Tes Software", "Tes Turing", "Automatically Test", "Limited Test"], answer: 2 },
    { number: 14, question: "Jenis AI yang paling dasar dan tidak memiliki kemampuan untuk membentuk ingatan atau menggunakan pengalaman masa lalu adalah...", options: ["Reactive Machines", "Limited Memory", "Theory of Mind", "Self awareness", "Theory of Machines"], answer: 0 },
    { number: 15, question: "Machine intelligence yang mana suatu sistem telah memiliki kecerdasan serupa dengan manusia yang seringkali tidak dapat dibedakan pada tes turing adalah...", options: ["Artificial Narrow Intelligence (ANI)", "Artificial General Intelligence (AGI)", "Artificial Super Intelligence (ASI)", "Artificial Brain Intelligence", "Artificial Special Intelligence"], answer: 1 },
    { number: 16, question: "Manakah di bawah ini yang bukan merupakan manfaat dari AI?", options: ["Membantu dalam pengambilan keputusan", "Efisien", "Membantu mengatasi beberapa permasalahan dalam kehidupan", "Menggantikan manusia di masa mendatang", "Membantu pekerjaan manusia"], answer: 3 },
    { number: 17, question: "Kebocoran data yang disebabkan karena pengguna menyebarluaskan user dan password kepada pihak lain disebut dengan...", options: ["Ransomware", "Malware", "Internal Attack", "Carding", "DDOs attack"], answer: 2 },
    { number: 18, question: "Dalam cybersecurity, seringkali dilakukan simulasi untuk mengetahui sistem manakah yang lemah dan rawan terkena serangan. Hal tersebut seringkali disebut dengan...", options: ["Traffic floading", "Request floading", "Penetration testing", "Malicious software", "Malicious testing"], answer: 2 },
    { number: 19, question: "Bapak A kehilangan handphone yang di dalamnya terdapat m-Banking dan beberapa software yang terhubung dengan akun kartu kredit. Selang beberapa waktu, terdapat transaksi tidak dikenal yang menggunakan akun kartu kredit Bapak A untuk pembayarannya. Termasuk jenis apakah kejadian yang dialami oleh Bapak A?", options: ["Cracking", "Pishing", "Carding", "Ransomware", "Internal Attack"], answer: 2 },
    { number: 20, question: "Suatu hari Ibu A mendapatkan SMS pemberitahuan bahwa dirinya mendapatkan hadiah sebesar 75 juta. Untuk prosedur lebih lanjut Ibu A diminta untuk mengklik link yang ada di SMS tersebut. Cara tersebut merupakan jenis serangan...", options: ["Ransomware", "Carding", "Pishing", "DDOs Attack", "Hacking"], answer: 2 },
    { number: 21, question: "Manakah hal yang tidak berpengaruh dalam literasi digital seseorang?", options: ["Tingkat pendidikan", "Kultur atau budaya", "Kemampuan komunikasi", "Agama", "Kemampuan literasi"], answer: 3 },
    { number: 22, question: "Manakah hal yang dapat dilakukan untuk mencari artikel ilmiah?", options: ["Mencari di sosial media", "Menggunakan informasi dari instant messaging", "Menggunakan artikel dari database yang kredibel", "Menggunakan segala jenis web/blog", "Mencari di berbagai database"], answer: 2 },
    { number: 23, question: "Manakah yang bukan termasuk dalam database artikel/jurnal?", options: ["PubMed", "Scopus", "Ebsco", "Jurnal Kesehatan", "e-Journal"], answer: 3 },
    { number: 24, question: "Bagaimanakah tahapan dalam melakukan sintesis artikel yang diperoleh dari internet?", options: ["Designing, conducting, analyzing, writing", "Conducting, analyzing, writing, designing", "Writing, conducting, analyzing, designing", "Writing, analyzing, designing, conducting", "Designing, analyzing, writing, conducting"], answer: 0 },
    { number: 25, question: "Konsep e-commerce yang mana yang menjual produk atau jasa kepada lembaga pemerintah disebut dengan…", options: ["B2C", "C2C", "B2A", "O2O", "B2O"], answer: 2 },
    { number: 26, question: "Konsep e-commerce yang mana terdiri dari marketplace dan model classified merupakan konsep…", options: ["B2C", "C2C", "O2O", "B2A", "B2O"], answer: 1 },
    { number: 27, question: "Aspek non teknis merupakan aspek mengenai hal dibawah ini kecuali…", options: ["Etika", "Hukum", "Ekonomi global", "Sistem pembayaran", "Sistem perhitungan"], answer: 3 },
    { number: 28, question: "E-commerce seperti Gojek maupun Grab merupakan contoh e-commerce dengan model…", options: ["O2O", "B2B", "C2C", "C2A", "C2B"], answer: 0 },
    { number: 29, question: "Podcast yang dilakukan oleh host sendiri atau monolog disebut dengan....", options: ["Interview podcast", "Solo podcast", "Multhost podcast", "Podcast wawancara", "Podcast 2 arah"], answer: 1 },
    { number: 30, question: "Representasi data, visual, serta ilmu pengetahuan yang biasanya disajikan dalam kombinasi tulisan dan gambar disebut dengan...", options: ["Video", "Podcast", "Infografis", "Surat", "Webex"], answer: 2 }
];

// Acak soal sebelum ditampilkan
questions.sort(() => Math.random() - 0.5);

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

function loadQuestion(index) {
    let questionData = questions[index];

    document.getElementById("questionNumber").textContent = `Soal ${index + 1}`;
    document.getElementById("questionText").textContent = questionData.question;
    document.getElementById("options").innerHTML = questionData.options.map((option, i) =>
        `<button class="option ${userAnswers[index] !== null ? (i === questions[index].answer ? 'correct' : (i === userAnswers[index] ? 'wrong' : '')) : ''}" 
        onclick="selectAnswer(${i})">${String.fromCharCode(65 + i)}. ${option}</button>`
    ).join("");

    document.getElementById("answeredCount").textContent = `${userAnswers.filter(ans => ans !== null).length}/${questions.length}`;
    document.getElementById("prevButton").disabled = index === 0;
    document.getElementById("nextButton").textContent = index === questions.length - 1 ? "Selesai" : "Soal Berikutnya";
    document.getElementById("feedback").textContent = ""; 
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    loadQuestion(currentQuestionIndex);

    let feedbackText = document.getElementById("feedback");
    let optionsContainer = document.getElementById("options");

    if (answerIndex === questions[currentQuestionIndex].answer) {
        feedbackText.textContent = "Keren cuy!";
        feedbackText.style.color = "green";
    } else {
        feedbackText.textContent = "Kasian salah!";
        feedbackText.style.color = "red";

        // Tambahin efek shake pas salah
        optionsContainer.classList.add("shake");
        setTimeout(() => optionsContainer.classList.remove("shake"), 500);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function submitQuiz() {
    let score = userAnswers.reduce((score, ans, i) => score + (ans === questions[i].answer ? 1 : 0), 0);
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";
    document.getElementById("finalScore").textContent = `Skor Anda: ${score}/${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    document.getElementById("resultScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";
    loadQuestion(currentQuestionIndex);
}

function startQuiz() {
    let username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Masukkan username terlebih dahulu!");
        return;
    }
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";
    loadQuestion(currentQuestionIndex);
}

document.addEventListener("DOMContentLoaded", () => loadQuestion(currentQuestionIndex));
