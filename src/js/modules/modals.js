const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector,  autoClose = true) => {
        const modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              trigger = document.querySelectorAll(triggerSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();
    
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        })
    
        close.addEventListener('click', () => {
            modal.style.display = '';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
    
            windows.forEach(item => {
                item.style.display = 'none';
            });
        });
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal && autoClose) {
                modal.style.display = '';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    };

    function showModalByTime(modal, time) {
        setTimeout(() => {
            document.querySelector(modal).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    // showModalByTime('.popup_engineer', 60000);
};



export default modals;