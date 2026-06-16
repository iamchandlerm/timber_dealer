const initializeSwiper = ( container = document ) => {
    
        container
        .querySelectorAll('.mySwiper')
        .forEach((slider) => {

           
                
            if(slider.swiper) {
                return
            }


            new Swiper('.mySwiper', {
                loop: true,
                pagination: {
                    clickable: true,
                    el: ".swiper-pagination",
                    type: "progressbar",

                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
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
