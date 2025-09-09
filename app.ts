// app.ts (Compile this to app.js using tsc or your build setup)

document.addEventListener('DOMContentLoaded', () => {
    const anchors: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor: HTMLAnchorElement) => {
        anchor.addEventListener('click', (e: Event) => {
            e.preventDefault();
            const targetId: string | null = anchor.getAttribute('href');
            if (targetId) {
                const targetElement: HTMLElement | null = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});