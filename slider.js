// Auto-swipe slider untuk setiap .project-slider
document.addEventListener("DOMContentLoaded", () => {

    const sliders = document.querySelectorAll(".project-slider");

    sliders.forEach((slider) => {

        const track = slider.querySelector(".slider-track");
        const slides = Array.from(track.children);
        const dotsWrap = slider.querySelector(".slider-dots");

        let index = 0;
        const total = slides.length;

        if (total === 0) return;

        // buat dots sesuai jumlah gambar
        slides.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.classList.add("slider-dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => goTo(i));
            dotsWrap.appendChild(dot);
        });

        const dots = Array.from(dotsWrap.children);

        function update() {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle("active", i === index));
        }

        function goTo(i) {
            index = i;
            update();
            resetTimer();
        }

        function next() {
            index = (index + 1) % total;
            update();
        }

        let timer = setInterval(next, 5000); // ganti tiap 3 detik

        function resetTimer() {
            clearInterval(timer);
            timer = setInterval(next, 5000);
        }

        // jeda auto-swipe saat mouse hover (opsional, biar nyaman dilihat)
        slider.addEventListener("mouseenter", () => clearInterval(timer));
        slider.addEventListener("mouseleave", () => (timer = setInterval(next, 3000)));

    });

});