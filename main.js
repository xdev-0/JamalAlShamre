document.addEventListener('DOMContentLoaded', function() {
    // تهيئة تأثير الجسيمات
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ff6b08" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ff6b08", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // تبديل القائمة على الأجهزة المحمولة
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // التنقل بين التبويبات
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // إزالة النشاط من جميع الأزرار والمحتويات
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // إضافة النشاط للعنصر المحدد
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // التنقل بين العصور في الخط الزمني
    const eraElements = document.querySelectorAll('.era');
    
    eraElements.forEach(era => {
        era.addEventListener('click', () => {
            const eraName = era.getAttribute('data-era');
            // هنا يمكنك إضافة كود لتحميل المحتوى المناسب للعصر
            console.log(`تم اختيار عصر: ${eraName}`);
            
            // إزالة التأكيد من جميع العصور
            eraElements.forEach(e => {
                e.querySelector('.era-dot').style.background = 'var(--border-color)';
            });
            
            // إضافة التأكيد للعصر المحدد
            era.querySelector('.era-dot').style.background = 'var(--primary-color)';
        });
    });

    // تأثير الظهور عند التمرير
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => observer.observe(el));

    // زر الاستكشاف
    document.getElementById('explore-btn').addEventListener('click', () => {
        document.querySelector('#caliphs').scrollIntoView({ behavior: 'smooth' });
    });

    // أزرار الفيديو
    document.querySelectorAll('.video-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const videoId = btn.getAttribute('data-video');
            // هنا يمكنك فتح مشغل فيديو أو نافذة منبثقة
            alert(`سيتم تشغيل الفيديو: ${videoId}`);
        });
    });
});