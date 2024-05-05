document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const cekSekarangButton = document.getElementById('cekSekarang');
  const dataSiswa = document.getElementById('dataSiswa');
  const namaSiswa = document.getElementById('namaSiswa');
  const nisSiswa = document.getElementById('nisSiswa');
  const nisnSiswa = document.getElementById('nisnSiswa');
  const namaSiswaDetail = document.getElementById('namaSiswaDetail');
  const tempatlahirSiswa = document.getElementById('tempatlahirSiswa');
  const tgllahirSiswa = document.getElementById('tgllahirSiswa');
  const ortuwaliSiswa = document.getElementById('ortuwaliSiswa');
  const passwordInput = document.getElementById('password');
  const statusEligible = document.getElementById('statusEligible');

  // Fungsi untuk mengambil data siswa dari file JSON
  function fetchData() {
    fetch('siswa.json')
      .then((response) => response.json())
      .then((siswaData) => {
        loginForm.addEventListener('submit', function (e) {
          e.preventDefault();
          const nisInput = document.getElementById('nis').value;
          const passwordInputValue = passwordInput.value;

          const siswa = siswaData.find((data) => data.nis === nisInput);

          if (siswa && siswa.password === passwordInputValue) {
            namaSiswa.textContent = siswa.nama;
            welcomeMessage.classList.remove('d-none');
            loginForm.classList.add('d-none'); // Menghilangkan formulir login
          } else {
            alert('Login gagal. NIS atau password salah.');
          }
        });

        cekSekarangButton.addEventListener('click', function () {
          const nisInput = document.getElementById('nis').value;
          const siswa = siswaData.find((data) => data.nis === nisInput);

          if (siswa) {
            nisSiswa.textContent = siswa.nis;
            nisnSiswa.textContent = siswa.nisn;
            namaSiswaDetail.textContent = siswa.nama;
            tempatlahirSiswa.textContent = siswa.tempatLahir;
            tgllahirSiswa.textContent = siswa.tanggalLahir;
            ortuwaliSiswa.textContent = siswa.ortuWali;
            statusEligible.textContent = siswa.statusEligible;

            dataSiswa.classList.remove('d-none');
          }
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  fetchData();
});
