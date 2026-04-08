   var width = 0;
        var progressBar = document.getElementById("progress-bar");
        var statusText = document.getElementById("status");
        
        // Atur kecepatan loading (ms), semakin kecil semakin cepat
        var speed = 30; 

        var id = setInterval(frame, speed);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                statusText.innerHTML = "Selesai!";
                // Pindah ke file lain setelah 500ms
                setTimeout(function() {
                    window.location.href = "index2.html"; // <<-- GANTI FILE TUJUAN DI SINI
                }, 500);
            } else {
                width++;
                progressBar.style.width = width + '%';
                statusText.innerHTML = "Memuat... " + width + '%';
            }
        }