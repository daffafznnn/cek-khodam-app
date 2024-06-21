document
  .getElementById("khodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    const khodams = [
      "Karbu Mio",
      "Cicak Goreng",
      "Gajah petot",
      "Cicak Koplak",
      "Wewe Goblok",
      "Tali Jemuran",
      "Lele Betot",
      "Babi Bingung",
      "Panci Presto",
      "Tuyul Sinting",
      "Gendruwo Ndeso",
      "Sari Murni",
      "Buto Bodoh",
      "Pocong Kepleset",
      "Setan Galau",
      "Hantu Ngeselin",
      "Jin Pirit",
      "Layang-layang",
      "Kuntilanak Goblok",
      "Demang Jahat",
      "Si Manis Goblok",
      "Kakek Kesel",
      "Gundul Pusing",
      "Suster Jail",
      "Pocong Gokil",
      "Jenglot Narsis",
      "Kalomang",
      "Kolor Bodoh",
      "Cipirit Malu",
      "Lembuswana Ngenes",
      "Gendruwo Betot",
      "Siluman Goblok",
      "Anjing Ngambek",
      "Monyet Bangkrut",
      "Lutung Cengeng",
      "Gajah Kesel",
      "Singa Bete",
      "Kuda Mabuk",
      "Alat Pancing",
      "Burung Gagak Bangkrut",
      "Srigala Stres",
      "Iblis Sok",
      "Tuyul Gagal",
      "Kambing Goblok",
      "Tikus Ndeso",
      "Katak Koplak",
      "Kucing Sial",
      "Kelinci Ngambek",
      "Ayam Betot",
      "Belut Bucin",
      "Cacing Bego",
      "Kepiting Stres",
      "Kodok Pusing",
      "Landak Bingung",
      "Ular Sinting",
      "Bebek Goblok",
      "Bunglon Malas",
      "Keong Ngesot",
      "Kura-kura Bodoh",
      "Gerobak Ketoprak",
      "Semut Ngeselin",
      "Labalaba Lemes",
      "Capung Bingung",
      "Cicada Bete",
      "Kupu-kupu Sinting",
      "Laba-laba Betot",
      "Kecoak Koplak",
      "Tupai Jahat",
      "Kursi Malas",
      "Gorila Drible",
      "Kuda Nil Sial",
      "Panda Jahat",
      "Musang Sinting",
      "Domba Malu",
      "Kucing Bangkrut",
      "Ikan Cupang Hytam",
      "Badak Goblok",
      "Komodo Bodoh",
      "Kolibri Ngambek",
      "Kawat Nyamuk",
      "Cendrawasih Pusing",
      "Siput Koplak",
      "Katak Ndeso",
      "Kucing Pusing",
      "Kuda Lumping",
      "Cendol Dawet",
      "Toa Masjid",
      "Cacing Pita",
      "Bakwan Jagung",
      "Piring Terbang",
      "Kipas Angin",
      "Stop Kontak",
      "Teh Poci",
    ];

    const soundEffects = [
      "../public/assets/sound/Random Sound Meme Absurd memebacksound.mp3",
      "../public/assets/sound/y2mate.com - Acumalaka  sound effect.mp3",
      "../public/assets/sound/soundtrack meme alamak sedapnyee 😋.mp3",
      "../public/assets/sound/WAIT WAIT WAIT WAT THE HELLLLLL FULL.mp3",
      "../public/assets/sound/udah bang tapi.mp3",
      "../public/assets/sound/Y2meta.app - SUS meme sound effect (320 kbps).mp3",
    ];

    const images = [
      "../public/assets/img-random/image1.jpeg",
      "../public/assets/img-random/image2.jpeg",
      "../public/assets/img-random/image3.jpeg",
      "../public/assets/img-random/image4.jpeg",
      "../public/assets/img-random/image5.jpeg",
      "../public/assets/img-random/image6.jpeg",
      "../public/assets/img-random/image7.jpeg",
      "../public/assets/img-random/image8.jpeg",
      "../public/assets/img-random/image9.jpeg",
      "../public/assets/img-random/image10.jpeg",
      "../public/assets/img-random/image11.jpeg",
      "../public/assets/img-random/image12.jpeg",
      "../public/assets/img-random/image13.jpeg",
      "../public/assets/img-random/image14.jpeg",
      "../public/assets/img-random/image15.jpeg",
      "../public/assets/img-random/image16.jpeg",
      "../public/assets/img-random/image17.jpeg",
      "../public/assets/img-random/image18.jpeg",
      "../public/assets/img-random/image19.jpeg",
      "../public/assets/img-random/image20.jpeg",
      "../public/assets/img-random/image21.jpeg",
      "../public/assets/img-random/image22.jpeg",
      "../public/assets/img-random/image23.jpeg",
      "../public/assets/img-random/image24.jpeg",
      "../public/assets/img-random/image25.jpeg",
      "../public/assets/img-random/image26.jpeg",
    ];

    const nameInput = document.getElementById("name"); // Ambil elemen input nama
    const name = nameInput.value; // Ambil nilai input nama
    const resultSection = document.getElementById("resultSection"); // Ambil elemen section hasil
    const resultTitle = document.getElementById("resultTitle"); // Ambil elemen judul hasil
    const resultElement = document.getElementById("result"); // Ambil elemen hasil
    const loadingElement = document.getElementById("loading"); // Ambil elemen loading
    const randomImage = document.getElementById("randomImage"); // Ambil elemen randomImage
    const randomImg = document.getElementById("randomImg"); // Ambil elemen randomImg
    const muteButton = document.getElementById("muteButton"); // Ambil elemen tombol mute

    // Sembunyikan section hasil dan tampilkan loading spinner
    resultSection.classList.add("hidden");
    randomImage.classList.add("hidden");
    loadingElement.classList.remove("hidden");
    muteButton.classList.add("hidden");

    // Simulasikan penundaan loading
    setTimeout(() => {
      // Sembunyikan loading spinner
      loadingElement.classList.add("hidden");

      // Pilih khodam, sound effect, dan gambar secara acak
      const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
      const randomSound = soundEffects[Math.floor(Math.random() * soundEffects.length)];
      const randomImageSrc = images[Math.floor(Math.random() * images.length)];

      // Setel teks hasil dengan nama dan khodam
      resultTitle.textContent = `${name} khodam anda adalah:`;
      resultElement.textContent = randomKhodam;

      // Setel gambar random
      randomImg.src = randomImageSrc;

      // Mengosongkan nilai input setelah berhasil
      nameInput.value = "";

      // Tampilkan section hasil dan random image
      resultSection.classList.remove("hidden");
      randomImage.classList.remove("hidden");
      muteButton.classList.remove("hidden");

      // Mainkan sound effect
       const audio = new Audio(randomSound);
       audio.play();

       // Fungsi untuk mute dan unmute
       muteButton.addEventListener("click", function () {
         audio.muted = true;
         muteButton.classList.add("hidden");
       });
    }, 3000);
  });
