window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header.navbar-container');
  
    // Tinggi hero
    var heroHeight = document.querySelector('.hero').offsetHeight;
  
    // Jika posisi scroll melewati tinggi hero
    if (window.scrollY > heroHeight) {
      navbar.classList.add('scrolled'); // kelas scrolled
  
      // Mengubah warna teks menjadi putih
      navbar.classList.add('white-text');
    } else {
      navbar.classList.remove('scrolled'); // Hapus kelas scrolled
  
      // Menghapus kelas yang mengatur warna teks menjadi putih

    //   engga jadi
    //   navbar.classList.remove('white-text');
    }
  });
  