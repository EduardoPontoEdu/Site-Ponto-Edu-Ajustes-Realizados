document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('main section');

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));

        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    const prevBookArrow = document.querySelector('.prev-book');
    const nextBookArrow = document.querySelector('.next-book');
    const bookItems = document.querySelectorAll('.book-item');

    // URLs dos livros (substitua pelos caminhos reais das suas imagens)
    const livros = [
        { url: 'livro 1 .jpg', alt: 'Capa do livro 1' },
        { url: 'livro 2 .jpg', alt: 'Capa do livro 2' },
        { url: 'livro 3 .jpg', alt: 'Capa do livro 3' },
        { url: 'livro 4.jpg', alt: 'Capa do livro 4' },
        { url: 'livro 5.jpg', alt: 'Capa do livro 5' },
        { url: 'livro 6.jpg', alt: 'Capa do livro 6' },
        { url: 'livro 7.jpg', alt: 'Capa do livro 7' },
        { url: 'livro 8.jpg', alt: 'Capa do livro 8' },
        { url: 'livro 9.jpg', alt: 'Capa do livro 9' },
        { url: 'livro 10.jpg', alt: 'Capa do livro 10' }
    ];
    let livroAtual = 0;

    function atualizarLivros() {
        if (!bookItems.length) return; // Evita erros se não houver itens de livro
        for (let i = 0; i < bookItems.length; i++) {
            const idx = (livroAtual + i) % livros.length;
            const img = bookItems[i].querySelector('img');
            if (img) {
                img.src = livros[idx].url;
                img.alt = livros[idx].alt;
            }
        }
    }

    if (prevBookArrow && nextBookArrow && bookItems.length === 3) {
        atualizarLivros();

        prevBookArrow.addEventListener('click', () => {
            livroAtual = (livroAtual - 1 + livros.length) % livros.length;
            atualizarLivros();
        });

        nextBookArrow.addEventListener('click', () => {
            livroAtual = (livroAtual + 1) % livros.length;
            atualizarLivros();
        });
    }

    // Controle das sub-bolhas para bubble-1, bubble-2, bubble-3, bubble-4 e bubble-5
    const bubbles = [
        {
            main: document.querySelector('.bubble-1'),
            subBubbles: document.querySelectorAll('.bubble-1 .sub-bubble'),
            transforms: [
                'translate(-50%, -50%) rotate(0deg) translateY(-150px) rotate(0deg)',
                'translate(-50%, -50%) rotate(-36deg) translateY(-150px) translateX(-100px) rotate(36deg)',
                'translate(-50%, -50%) rotate(36deg) translateY(-150px) translateX(100px) rotate(-36deg)'
            ]
        },
        {
            main: document.querySelector('.bubble-2'),
            subBubbles: document.querySelectorAll('.bubble-2 .sub-bubble'),
            transforms: [
                'translate(-50%, -50%) rotate(72deg) translateY(-160px) rotate(-72deg)',
                'translate(-50%, -50%) rotate(36deg) translateY(-150px) translateX(-100px) rotate(-36deg)',
                'translate(-50%, -50%) rotate(108deg) translateY(-150px) translateX(100px) rotate(-108deg)'
            ]
        },
        {
            main: document.querySelector('.bubble-3'),
            subBubbles: document.querySelectorAll('.bubble-3 .sub-bubble'),
            transforms: [
                'translate(-50%, -50%) rotate(144deg) translateY(-180px) translateX(-20px) rotate(-144deg)',
                'translate(-50%, -50%) rotate(108deg) translateY(-150px) translateX(-100px) rotate(-108deg)',
                'translate(-50%, -50%) rotate(180deg) translateY(-150px) translateX(50px) rotate(-180deg)'
            ]
        },
        {
            main: document.querySelector('.bubble-4'),
            subBubbles: document.querySelectorAll('.bubble-4 .sub-bubble'),
            transforms: [
                'translate(-50%, -50%) rotate(216deg) translateY(-175px) translateX(25px) rotate(-216deg)',
                'translate(-50%, -50%) rotate(180deg) translateY(-150px) translateX(-50px) rotate(-180deg)',
                'translate(-50%, -50%) rotate(252deg) translateY(-160px) translateX(100px) rotate(-252deg)'
            ]
        },
        {
            main: document.querySelector('.bubble-5'),
            subBubbles: document.querySelectorAll('.bubble-5 .sub-bubble'),
            transforms: [
                'translate(-50%, -50%) rotate(288deg) translateY(-175px) translateX(25px) rotate(-288deg)',
                'translate(-50%, -50%) rotate(252deg) translateY(-150px) translateX(-50px) rotate(-252deg)',
                'translate(-50%, -50%) rotate(324deg) translateY(-150px) translateX(100px) rotate(-324deg)'
            ]
        }
    ];

    bubbles.forEach(({ main, subBubbles, transforms }) => {
        if (main && subBubbles.length) {
            main.addEventListener('mouseenter', () => {
                subBubbles.forEach((bubble, index) => {
                    bubble.style.display = 'flex';
                    bubble.style.opacity = '1';
                    bubble.style.transform = transforms[index] + ' scale(1)';
                });
            });

            main.addEventListener('mouseleave', () => {
                subBubbles.forEach((bubble, index) => {
                    bubble.style.display = 'none';
                    bubble.style.opacity = '0';
                    bubble.style.transform = transforms[index] + ' scale(0.8)';
                });
            });
        }
    });
});