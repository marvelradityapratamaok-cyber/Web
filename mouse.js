 document.addEventListener('mousemove', function(e) {
            // 1. Buat elemen gambar baru
            const img = document.createElement('img');
            
            // 2. Sumber gambar (Ganti dengan URL gambar Anda)
            img.src = 'fotosatuan1.jpg ' ;
            img.classList.add('cursor-img');

            // 3. Posisikan gambar di kursor
            img.style.left = e.pageX + 'px';
            img.style.top = e.pageY + 'px';

            // 4. Tambahkan ke body
            document.body.appendChild(img);

            // 5. Hapus gambar setelah animasi selesai agar tidak memberatkan browser
            setTimeout(() => {
                img.remove();
            }, 500);
        });