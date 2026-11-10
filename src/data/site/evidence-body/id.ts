import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Pengecer Outdoor Eropa',
    product: 'Lini SUP Label Pribadi',
    industry: 'Ritel',
    challenge:
      'Pengecer outdoor Eropa membutuhkan lini SUP label pribadi dengan grafis dek unik, PVC ramah lingkungan, dan kemasan siap ritel — semuanya dikirim dalam 60 hari.',
    solution:
      'Mengembangkan file cetak digital kustom, menyediakan PVC yang memenuhi standar REACH, dan memampatkan proses sampling dari 3 putaran menjadi 1 kali dengan menempatkan tim desain di pabrik Qingdao kami.',
    result:
      '55 hari dari PO yang ditandatangani hingga FOB. 2.400 unit dalam 4 SKU. Pesanan ulang dilakukan sebelum kontainer pertama tiba.',
    outcomeMetrics: [
      {
        label: 'Waktu Tunggu',
        value: '55 hari',
      },
      {
        label: 'Unit',
        value: '2.400',
      },
      {
        label: 'SKU',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Startup Olahraga Air AS',
    product: 'Lini SUP Kustom',
    industry: 'Startup / Ritel',
    challenge:
      'Startup olahraga air AS membutuhkan SUP drop-stitch berkinerja tinggi dengan desain dek kustom, kemasan co-branded, dan sertifikasi BSCI untuk penempatan ritel.',
    solution:
      'Mengadaptasi cetakan SUP yang ada dengan profil rocker yang dimodifikasi, mengembangkan desain kemasan co-branded, dan menyediakan dokumentasi audit BSCI lengkap.',
    result:
      'Berhasil masuk ke 3 jaringan outdoor besar di AS. 5.000+ unit pada tahun pertama dengan tingkat sell-through 98%.',
    outcomeMetrics: [
      {
        label: 'Jaringan Ritel',
        value: '3',
      },
      {
        label: 'Unit Tahun Pertama',
        value: '5.000+',
      },
      {
        label: 'Sell-Through',
        value: '98%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Distributor Australia',
    product: 'Rentang SUP Bersertifikat CE',
    industry: 'Maritim / Ritel',
    challenge:
      'Distributor Australia membutuhkan rentang SUP bersertifikat CE dengan warna dek kustom, opsi PVC yang ditingkatkan, dan kepatuhan terhadap Standar Australia AS 1799.',
    solution:
      'Memproduksi sampel pra-produksi dengan 4 varian warna, menyediakan PVC kelas militer, dan mengoordinasikan pengujian kepatuhan AS 1799 oleh pihak ketiga.',
    result: 'Rentang SUP 3 model diluncurkan di pasar AU/NZ. Disusul kontrak jaringan ritel untuk 12 toko.',
    outcomeMetrics: [
      {
        label: 'Model Diluncurkan',
        value: '3',
      },
      {
        label: 'Toko Ritel',
        value: '12',
      },
      {
        label: 'Kepatuhan',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Grup Resor Mewah Karibia',
    product: 'Armada Resor — SUP',
    industry: 'Perhotelan / Pariwisata',
    challenge:
      'Sebuah grup dengan 5 resor membutuhkan armada peralatan olahraga air sewaan yang terpadu — papan SUP — dengan branding yang konsisten, material tahan UV untuk matahari tropis, dan rencana penggantian 5 tahun.',
    solution:
      'Merancang paket armada SUP kustom 3 model dengan PVC stabil-UV, grafis dek berbrand resor, dan jadwal pengiriman bertahap. Menyediakan pelatihan staf dan kit suku cadang khusus untuk setiap resor.',
    result:
      '180 unit dikirim ke 5 resor. Pesanan ulang untuk 2 properti baru. Biaya per unit berkurang 40% dibandingkan pemasok sebelumnya.',
    outcomeMetrics: [
      {
        label: 'Unit Dikirim',
        value: '180',
      },
      {
        label: 'Resor',
        value: '5',
      },
      {
        label: 'Pengurangan Biaya',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Biaya Penggantian Papan Tahunan',
        before: '$28.000',
        after: '$12.000',
      },
      {
        label: 'Waktu Henti Armada (hari/tahun)',
        before: '45',
        after: '8',
      },
      {
        label: 'Skor Kepuasan Tamu',
        before: '3,8/5',
        after: '4,6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Badan Maritim Asia Tenggara',
    product: 'Armada SUP Patroli & Penyelamatan',
    industry: 'Pemerintah / Keamanan Maritim',
    challenge:
      'Badan maritim pemerintah membutuhkan 20 SUP patroli dan penyelamatan dengan dek berdaya lihat tinggi, dudukan komunikasi terintegrasi, dan konstruksi bersertifikat CE.',
    solution:
      'Memproduksi 20 SUP dengan konstruksi PVC kelas militer, D-ring heavy-duty, dan paket lampu navigasi pra-pasang. Tim inspeksi pabrik menyaksikan uji coba laut. Paket dokumentasi kepatuhan lengkap disediakan.',
    result:
      'Kontrak diselesaikan dalam 4 bulan. Armada diterjunkan untuk patroli perbatasan, pencarian dan penyelamatan, serta penanggulangan bencana di 3 pangkalan regional.',
    outcomeMetrics: [
      {
        label: 'SUP Patroli',
        value: '20',
      },
      {
        label: 'Pengiriman',
        value: '4 bulan',
      },
      {
        label: 'Pangkalan',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Merek Olahraga Air DTC Eropa',
    product: 'Lini SUP Berbrand + Aksesori',
    industry: 'E-commerce / Ritel',
    challenge:
      'Merek olahraga air DTC yang tumbuh cepat membutuhkan paket SUP lengkap (papan, pompa, dayung, tali, tas) dengan kemasan premium yang dirancang untuk pemenuhan e-commerce — langsung ke konsumen via DHL/FedEx tanpa kerusakan.',
    solution:
      'Mengembangkan lini produk co-branded dengan pembentukan inti EPS kustom, teknologi drop-stitch proprietary untuk tekanan lebih tinggi, dan kotak kertas bergelombang dinding ganda siap ritel dengan bantalan sisipan. Mengintegrasikan verifikasi keaslian berbasis kode QR dan pendaftaran garansi.',
    result:
      'Lini SUP 3 model diluncurkan dalam 75 hari. 15.000+ unit dalam 12 bulan pertama. Rating rata-rata 4,8★ dari 2.000+ ulasan. Tingkat kerusakan saat pengiriman 0,3%.',
    outcomeMetrics: [
      {
        label: 'Model',
        value: '3',
      },
      {
        label: 'Unit',
        value: '15.000+',
      },
      {
        label: 'Rating Rata-rata',
        value: '4,8★',
      },
      {
        label: 'Tingkat Kerusakan',
        value: '0,3%',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Jaringan Resor Pantai Mediterania',
    product: 'Armada Resor — SUP + Aksesori',
    industry: 'Perhotelan / Pariwisata',
    challenge:
      'Jaringan resor Mediterania dengan 3 properti ingin meluncurkan program aktivitas air terpadu di seluruh hotel tepi pantainya, membutuhkan 120 SUP dengan branding kustom, kartu keselamatan multibahasa, dan sistem rotasi perawatan.',
    solution:
      'Merancang paket armada khusus resor dengan PVC tahan-UV kelas marinir, grafis dek berbrand hotel dalam 3 skema warna, dan sistem penandaan perawatan berkode warna. Termasuk pelatihan staf dan pengisian suku cadang triwulanan.',
    result:
      'Armada diterapkan di 3 resor. Pendapatan aktivitas air naik 210% pada musim pertama. Skor kepuasan tamu terhadap fasilitas naik dari 4,1 menjadi 4,7/5.',
    outcomeMetrics: [
      {
        label: 'SUP Dikirim',
        value: '120',
      },
      {
        label: 'Resor',
        value: '3',
      },
      {
        label: 'Kenaikan Pendapatan',
        value: '210%',
      },
      {
        label: 'Skor Tamu',
        value: '4,7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Pendapatan Aktivitas Air (tahunan)',
        before: '$45.000',
        after: '$140.000',
      },
      {
        label: 'Tingkat Penggantian Peralatan',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Kepuasan Tamu (fasilitas)',
        before: '4,1/5',
        after: '4,7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Asosiasi Klub Dayung Australia',
    product: 'Armada Klub — SUP + Peralatan Keselamatan',
    industry: 'Rekreasi / Pendidikan',
    challenge:
      'Asosiasi dengan 15 klub perlu menstandarkan peralatan di seluruh klub anggota dengan papan SUP yang tahan lama dan ramah pemula, rompi pelampung bersertifikat CE, serta model pengadaan terpusat untuk menekan biaya per klub.',
    solution:
      'Menstandarkan armada klub 3 tingkat (pemula, menengah, instruktur). Merancang grafis dek berwarna klub dengan logo klub. Menerapkan pergudangan terpusat dengan distribusi tingkat klub triwulanan.',
    result:
      '350 unit di 15 klub. Pengurangan biaya 28% melalui pembelian terkonsolidasi. 92% anggota puas dengan kualitas peralatan.',
    outcomeMetrics: [
      {
        label: 'Klub Dilengkapi',
        value: '15',
      },
      {
        label: 'Unit Dikirim',
        value: '350',
      },
      {
        label: 'Pengurangan Biaya',
        value: '28%',
      },
      {
        label: 'Kepuasan Anggota',
        value: '92%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Operator Resor & Penyewaan Danau Eropa',
    product: 'Armada Sewaan — SUP, Rompi Pelampung, Aksesori',
    industry: 'Penyewaan / Pariwisata',
    challenge:
      'Operator resor danau dengan 6 stasiun penyewaan membutuhkan armada SUP sewaan berdaya tahan tinggi dengan sistem pengeringan cepat, konstruksi tahan kerusakan, dan jadwal penggantian multi-tahun yang dapat diprediksi.',
    solution:
      'Menyediakan SUP sewaan kelas komersial dengan pita rel diperkuat, dek EVA cepat kering, dan PVC stabil-UV. Mengembangkan sistem pelacakan keausan berkode warna dengan laporan kondisi tahunan.',
    result:
      '200 SUP diterapkan di 6 stasiun. Biaya perawatan tahunan berkurang 55%. Umur peralatan meningkat dari 2 menjadi 4 tahun.',
    outcomeMetrics: [
      {
        label: 'Stasiun Penyewaan',
        value: '6',
      },
      {
        label: 'SUP Diterapkan',
        value: '200',
      },
      {
        label: 'Biaya Perawatan',
        value: '-55%',
      },
      {
        label: 'Umur Peralatan',
        value: '4 tahun',
      },
    ],
    beforeAfter: [
      {
        label: 'Rata-rata Umur Papan',
        before: '2 tahun',
        after: '4 tahun',
      },
      {
        label: 'Perawatan Tahunan Per Papan',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Pendapatan Sewaan Per Papan/Musim',
        before: '$1.200',
        after: '$1.850',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Jaringan Pengecer Outdoor Kanada',
    product: 'Lini SUP Label Pribadi + Aksesori',
    industry: 'Ritel',
    challenge:
      'Pengecer outdoor Kanada dengan 25 toko membutuhkan rentang SUP label pribadi eksklusif dengan kemasan dwibahasa Prancis/Inggris, spesifikasi material cuaca dingin, dan kepatuhan terhadap regulasi perahu Kanada.',
    solution:
      'Mengembangkan 4 model SUP dengan senyawa PVC cold-flex berperingkat hingga -15°C. Memproduksi kemasan ritel dwibahasa dengan penanda regulasi Kanada. Menyediakan rak pajangan dan materi pelatihan staf.',
    result:
      'Lini eksklusif diluncurkan di 25 toko. 3.800 unit terjual pada musim pertama. Pengecer memperbarui perjanjian 3 tahun dengan jumlah SKU yang diperluas.',
    outcomeMetrics: [
      {
        label: 'Toko',
        value: '25',
      },
      {
        label: 'Unit Musim Pertama',
        value: '3.800',
      },
      {
        label: 'Perjanjian',
        value: 'Pembaruan 3 tahun',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distributor Olahraga Air Timur Tengah',
    product: 'Lini Produk Lengkap — SUP & Aksesori',
    industry: 'Distribusi / Maritim',
    challenge:
      'Distributor berbasis GCC menginginkan hak eksklusif untuk mewakili lini produk afarer lengkap di 6 negara Teluk, dengan kemasan Arab kustom, spesifikasi material tahan panas, dan ketentuan garansi yang sesuai syariah.',
    solution:
      'Menyusun perjanjian distribusi eksklusif. Mengembangkan kemasan Arab dan materi pemasaran. Memvalidasi spesifikasi material pada suhu lingkungan 50°C. Menyesuaikan ketentuan garansi untuk kepatuhan regional.',
    result:
      '12 pesanan kontainer dalam 18 bulan pertama. Jaringan 15 dealer/sub-distributor terbentuk. Pangsa pasar diperkirakan 18% dari segmen SUP tiup GCC.',
    outcomeMetrics: [
      {
        label: 'Kontainer',
        value: '12',
      },
      {
        label: 'Jaringan Dealer',
        value: '15',
      },
      {
        label: 'Pangsa Pasar',
        value: '18%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Merek Gaya Hidup Jepang',
    product: 'Lini SUP Co-Branded',
    industry: 'OEM / Merek',
    challenge:
      'Merek gaya hidup premium Jepang ingin memasuki pasar olahraga air dengan lini SUP co-branded yang menonjolkan desain minimalis, material ramah lingkungan, dan manufaktur presisi yang sesuai bagi konsumen Jepang yang selektif.',
    solution:
      'Menciptakan cetakan kustom dengan profil rel yang lebih ramping. Menyediakan inlai dek bambu bersertifikat FSC dan opsi PVC daur ulang. Mengembangkan pengalaman unboxing premium dengan panduan perawatan berkode QR berbahasa Jepang.',
    result:
      'Lini co-branded 3 model diluncurkan di Tokyo Marine Show. 2.800 unit terjual dalam penjualan pra-rilis sebelum peluncuran publik. Ditampilkan di 5 publikasi gaya hidup Jepang.',
    outcomeMetrics: [
      {
        label: 'Model',
        value: '3',
      },
      {
        label: 'Unit Pra-jual',
        value: '2.800',
      },
      {
        label: 'Pemberitaan Media',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Merek Peralatan Olahraga Air AS',
    product: 'Cetakan Kustom — SUP Touring',
    industry: 'OEM / Manufaktur',
    challenge:
      'Merek AS membutuhkan cetakan SUP yang sepenuhnya baru dengan bentuk touring 14 kaki, saluran dudukan fishfinder terintegrasi, platform berdiri yang diperkuat, dan kapasitas beban 400 lbs — dirancang untuk pasar SUP memancing.',
    solution:
      'Merancang cetakan drop-stitch 14 kaki baru dengan kepadatan inti drop-stitch yang diperkuat, sisipan rel aksesori tersemat, dan lapisan bawah PVC kelas militer untuk ketahanan abrasi. Memproduksi 3 iterasi prototipe sebelum finalisasi tooling.',
    result:
      'Cetakan baru selesai dalam 14 minggu. 3.500 unit diproduksi pada putaran produksi pertama. Produk dinobatkan sebagai "SUP Memancing Terbaik 2025" oleh Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Waktu Tooling',
        value: '14 minggu',
      },
      {
        label: 'Putaran Pertama',
        value: '3.500 unit',
      },
      {
        label: 'Penghargaan',
        value: 'SUP Memancing Terbaik 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Korporasi Teknologi Global',
    product: 'Kesejahteraan Korporat — Armada SUP',
    industry: 'Korporat / Kesejahteraan',
    challenge:
      'Perusahaan teknologi Fortune 500 ingin meluncurkan program kesejahteraan berbasis air untuk karyawan di 4 kampus global dengan lokasi tepi danau, membutuhkan 60 SUP dengan branding korporat, solusi penyimpanan, dan pelatihan instruktur.',
    solution:
      'Menyediakan armada SUP all-around stabil dengan grafis dek logo korporat. Merancang rak penyimpanan on-site tahan cuaca. Mensertifikasi 12 instruktur internal melalui program pelatihan afarer.',
    result:
      'Program diluncurkan di 4 kampus. 2.400+ partisipasi karyawan pada tahun pertama. Rating kepuasan karyawan 94%. Ditampilkan dalam laporan keberlanjutan perusahaan.',
    outcomeMetrics: [
      {
        label: 'Kampus',
        value: '4',
      },
      {
        label: 'Partisipan',
        value: '2.400+',
      },
      {
        label: 'Kepuasan',
        value: '94%',
      },
    ],
  },
  'university-club-program': {
    client: 'Serikat Olahraga Universitas Inggris',
    product: 'Armada Klub Mahasiswa — SUP + Keselamatan',
    industry: 'Pendidikan',
    challenge:
      'Universitas Inggris dengan klub olahraga air aktif perlu mengganti armada yang menua dengan SUP tiup modern yang dapat disimpan di ruang kampus terbatas, digunakan oleh mahasiswa dari semua tingkat keterampilan, dan memenuhi standar kompetisi BUCS.',
    solution:
      'Menyediakan 25 SUP all-around dengan tas penyimpanan ringkas, 10 SUP touring untuk latihan kompetisi, dan paket peralatan keselamatan lengkap. Memberikan pelatihan pengurus klub dan lokakarya perawatan.',
    result:
      "Armada diluncurkan di Freshers' Fair. Keanggotaan klub tumbuh 140%. Universitas menjadi tuan rumah kompetisi SUP antar-universitas pertama dalam 5 tahun.",
    outcomeMetrics: [
      {
        label: 'SUP Disediakan',
        value: '35',
      },
      {
        label: 'Pertumbuhan Anggota',
        value: '140%',
      },
      {
        label: 'Kompetisi Diadakan',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Operator Kapal Pesiar Karibia',
    product: 'Armada Aktivitas di Atas Kapal — SUP',
    industry: 'Perhotelan / Kapal Pesiar',
    challenge:
      'Operator kapal pesiar besar ingin menawarkan SUP sebagai aktivitas ekskursi pesisir di 7 kapal yang bersandar di pelabuhan pulau privat. Membutuhkan penyimpanan ringkas di atas kapal, siklus pengembungan/pengempisan cepat, dan konsistensi merek di tingkat armada.',
    solution:
      'Mengembangkan paket SUP khusus kapal pesiar dengan sistem katup pengembung cepat, penyimpanan ransel ringkas, dan grafis dek berbrand kapal. Menyediakan pelatihan tim pesisir khusus dan loker suku cadang di 3 pelabuhan pulau.',
    result:
      'Program diluncurkan di 7 kapal. 15.000+ partisipasi tamu pada musim pertama. Rating ekskursi rata-rata 4,6★. Diperluas ke 3 kapal tambahan pada tahun ke-2.',
    outcomeMetrics: [
      {
        label: 'Kapal',
        value: '7',
      },
      {
        label: 'Partisipasi Tamu',
        value: '15.000+',
      },
      {
        label: 'Rating',
        value: '4,6★',
      },
      {
        label: 'Ekspansi Tahun ke-2',
        value: '+3 kapal',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Perusahaan Sewa Pemancingan Florida',
    product: 'Armada SUP Memancing Kustom',
    industry: 'Memancing / Sewa Perahu',
    challenge:
      'Operator sewa pemancingan yang berbasis di Florida ingin menambahkan tur memancing dengan SUP ke layanan mereka, membutuhkan platform stabil dengan dudukan cooler terintegrasi, jalur pemegang joran, dan kompatibilitas transduser fishfinder.',
    solution:
      'Mengustomisasi platform SUP stabil yang ada dengan 4 pemegang joran bawaan, sistem dudukan cooler yang dapat dilepas, dan dudukan scupper transduser tahan air. Menyediakan harga armada dan program penggantian musiman.',
    result:
      'Tur memancing SUP diluncurkan sebagai sumber pendapatan baru. 45% pelanggan charter yang ada memesan tur SUP. Armada berkembang dari 8 menjadi 20 papan dalam 2 musim.',
    outcomeMetrics: [
      {
        label: 'Armada Awal',
        value: '8',
      },
      {
        label: 'Armada Tahun ke-2',
        value: '20',
      },
      {
        label: 'Penjualan Silang Charter',
        value: '45%',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Komunitas Perumahan Tepi Danau AS',
    product: 'Fasilitas Komunitas — Armada SUP',
    industry: 'Properti / Komunitas',
    challenge:
      'Komunitas perumahan mewah tepi danau ingin menyediakan papan SUP sebagai fasilitas penghuni, membutuhkan armada minim perawatan, penyimpanan tepi danau yang aman, dan sistem check-out layan diri untuk 200+ rumah.',
    solution:
      'Menyediakan 15 SUP kelas komersial dengan sistem loker penyimpanan tahan cuaca. Merancang self-checkout berbasis kode QR dengan integrasi pengesahan digital. Menyediakan layanan perawatan musiman.',
    result:
      '85% rumah tangga menggunakan fasilitas SUP pada musim pertama. Nilai properti di kawasan tepi danau naik 7%. Komunitas meraih penghargaan "Kehidupan Tepi Danau Terbaik".',
    outcomeMetrics: [
      {
        label: 'SUP',
        value: '15',
      },
      {
        label: 'Penggunaan Rumah Tangga',
        value: '85%',
      },
      {
        label: 'Dampak Nilai Properti',
        value: '+7%',
      },
      {
        label: 'Penghargaan',
        value: 'Kehidupan Tepi Danau Terbaik',
      },
    ],
  },
};
