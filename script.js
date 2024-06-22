document
  .getElementById("khodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form
    
    const khodams = [
      "Karbu Mio",
      "Cicak Goreng",
      "Gajah Petot",
      "Cicak Koplak",
      "Wewe Gombel",
      "Tali Jemuran",
      "Lele Betot",
      "Babi Mager",
      "Panci Presto",
      "Tuyul Sinting",
      "Gendruwo Ndeso",
      "Sari Murni",
      "Buto Tolol",
      "Pocong Kepleset",
      "Setan Galau",
      "Hantu Ngeselin",
      "Jin Pirit",
      "Layang-layang",
      "Kuntilanak Sumbing",
      "Demang Jahat",
      "Si Manis Sumbing",
      "Kakek Kesel",
      "Gundul Pusing",
      "Suster Jail",
      "Pocong Gokil",
      "Jenglot Narsis",
      "Kalomang",
      "Kolor Tolol",
      "Cipirit Malu",
      "Lembuswana Ngenes",
      "Gendruwo Betot",
      "Siluman Sumbing",
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
      "Kambing Sumbing",
      "Tikus Ndeso",
      "Katak Koplak",
      "Kucing Sial",
      "Kelinci Ngambek",
      "Ayam Betot",
      "Belut Bucin",
      "Cacing Bego",
      "Kepiting Stres",
      "Kodok Pusing",
      "Landak Mager",
      "Ular Sinting",
      "Bebek Sumbing",
      "Bunglon Malas",
      "Keong Ngesot",
      "Kura-kura Tolol",
      "Gerobak Ketoprak",
      "Semut Ngeselin",
      "Labalaba Lemes",
      "Capung Mager",
      "Kupu-kupu Sinting",
      "Laba-laba Betot",
      "Kecoak Koplak",
      "Tupai Ngising",
      "Kursi Malas",
      "Gorila Drible",
      "Kuda Nil Sial",
      "Panda Ngising",
      "Musang Sinting",
      "Domba Garut",
      "Ikan Cupang Hytam",
      "Badak Sumbing",
      "Komodo Tolol",
      "Kawat Nyamuk",
      "Cendrawasih Pincang",
      "Siput Koplak",
      "Katak Tolol",
      "Kucing Berak",
      "Kuda Lumping",
      "Cendol Dawet",
      "Toa Masjid",
      "Cacing Pita",
      "Bakwan Jagung",
      "Piring Terbang",
      "Kipas Angin",
      "Stop Kontak",
      "Teh Poci",
      "Piston Beat",
      "Anies Baswedan",
      "Mimi Peri",
      "Lampu Ayam",
      "Knalpot Bocor",
      "Dinamo Starter",
      "Kampas Rem",
      "Spion Tumpul",
      "Kabel Putus",
      "Busi Kotor",
      "Stang Bengkok",
      "Velg Bengkok",
      "Karburator Bocor",
      "Kopling Licin",
      "Sokbreker Bengkok",
      "Bensin Habis",
      "Oli Kurang",
      "Aki Lemah",
      "Ban Bocor",
      "Gearbox Butut",
      "Transmisi Macet",
      "Filter Oli Kotor",
      "Panel Instrumen Mati",
      "Kabel Gas Putus",
      "Speedometer Tidak Akurat",
      "Rantai Motor Kendur",
      "Ecu Bermasalah",
      "Tangki Bocor",
      "Radiator Kotor",
      "Karburator Kotor",
      "Busi Butut",
      "Kabel Busi Putus",
      "Rem Blong",
      "Pompa Bensin Butut",
      "Ban Kempes",
      "Soket Lampu Mati",
      "Sensor Tidak Berfungsi",
      "Dinamo Starter Mati",
      "Busi Tidak Menyala",
      "Radiator Bocor",
      "Filter Udara Kotor",
      "Panel Instrumen Error",
      "Tangki Kecil",
      "Kopling Licin",
      "Transmisi Macet",
      "Gearbox Butut",
      "Ban Kempes",
      "Sparepart Salah",
      "Bodi Tidak Sempurna",
      "Knalpot Tidak Berfungsi",
      "Stang Tidak Nyaman",
      "Velg Butut",
      "Kaca Spion",
      "Spoiler Butut",
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
    const contentForm = document.getElementById("contentForm");
    const recheck = document.getElementById("recheck");

    // Sembunyikan section hasil dan tampilkan loading spinner
    resultSection.classList.add("hidden");
    randomImage.classList.add("hidden");
    loadingElement.classList.remove("hidden");
    contentForm.classList.add("hidden");
    recheck.classList.add("hidden");

    // Simulasikan penundaan loading
    setTimeout(() => {
      // Sembunyikan loading spinner
      loadingElement.classList.add("hidden");

      // Pilih khodam, sound effect, dan gambar secara acak
      const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
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
      resultTitle.classList.remove("hidden");
      resultElement.classList.remove("hidden");
      randomImage.classList.remove("hidden");
      recheck.classList.remove("hidden");
    }, 3000);
  });

function handleRecheck() {
  const contentForm = document.getElementById("contentForm");
  const recheck = document.getElementById("recheck");
  const resultTitle = document.getElementById("resultTitle");
  const resultElement = document.getElementById("result");
  const randomImage = document.getElementById("randomImage");

  contentForm.classList.remove("hidden");
  recheck.classList.add("hidden");
  resultTitle.classList.add("hidden");
  resultElement.classList.add("hidden");
  randomImage.classList.add("hidden");
}