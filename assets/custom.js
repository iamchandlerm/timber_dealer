const initializeSwiper = ( container = document ) => {
    
        container
        .querySelectorAll('.mySwiper')
        .forEach((slider) => {

            if (slider.swiper) {
                slider.swiper.destroy();
            }

            const paginationType = slider.getAttribute('data-pagination') || 'bullets';

            const localPagination =slider.querySelector('.swiper-pagination');
            const localNextbtn = slider.querySelector('.swiper-button-next');
            const localPrevbtn = slider.querySelector('.swiper-button-prev');

            new Swiper('.mySwiper', {
                loop: true,
                pagination: {
                    clickable: true,
                    el: localPagination,
                    type: paginationType

                },
                navigation: {
                  nextEl: localNextbtn,
                  prevEl: localPrevbtn,
                },
              });
        });
}

document.addEventListener('DOMContentLoaded', () => {
        initializeSwiper(document);
        
})

document.addEventListener('shopify:section:load', (event) => {
        initializeSwiper(event?.target);
});
