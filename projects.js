/* ===================== PROJECTS.JS ===================== */

document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tab');
    const groups = document.querySelectorAll('.category-group');

    // Set initial active tab color
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        activeTab.style.setProperty('--tab-active-color', activeTab.dataset.color);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.category;
            const color  = tab.dataset.color;

            // Update tabs
            tabs.forEach(t => {
                t.classList.remove('active');
                t.style.removeProperty('--tab-active-color');
            });
            tab.classList.add('active');
            tab.style.setProperty('--tab-active-color', color);

            // Update groups
            groups.forEach(g => g.classList.remove('active'));
            const targetGroup = document.querySelector(`.category-group[data-category="${target}"]`);
            if (targetGroup) {
                targetGroup.classList.add('active');
                // Animate cards in staggered
                const cards = targetGroup.querySelectorAll('.proj-card');
                cards.forEach((card, i) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.35s, box-shadow 0.35s`;
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 20);
                });
            }

            // Scroll to projects section smoothly
            document.querySelector('.projects-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Animate initial cards on load
    const initialCards = document.querySelectorAll('.category-group.active .proj-card');
    initialCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s, border-color 0.35s, box-shadow 0.35s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

});
