document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursor-follower');

    // CUSTOM CURSOR
    document.addEventListener('mousemove', (e) => {
        if (!cursor || !cursorFollower) return;

        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Hover effect (safely)
    const interactiveElements = document.querySelectorAll(
        'a, button, .feature-card, .pricing-card, .testimonial-card'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(2)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // SCROLL REVEAL
    const scrollElements = document.querySelectorAll('[data-scroll]');

    const elementInView = (el, percentage = 90) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) * (percentage / 100)
        );
    };

    const showElement = (el) => {
        el.setAttribute("data-scroll", "in");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                showElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // initial run
});
