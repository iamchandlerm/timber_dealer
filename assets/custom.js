

const newSwiperInitialization = (container = document) => {
        container.querySelectorAll('.mySwiper').forEach((slider) => {


            let paginationType = slider.dataset.paginationType || 'custom';

            console.log(paginationType);

            
            const localPagination = slider.querySelector('.swiper-pagination');
            const localNextbtn = slider.querySelector('.swiper-button-next');
            const localPrevbtn = slider.querySelector('.swiper-button-prev');

        // new initialization depending on the type the user adds

        if(paginationType === "progressbar") {
            new Swiper('.mySwiper', {
                loop:true,
                pagination: {
                    clickable: true,
                    el: localPagination,
                    type: paginationType
                }
                
            })
        }else if(paginationType === "bullets") {
            const swiper = new Swiper('.mySwiper', {
                loop:true,
                pagination: {
                    clickable: true,
                    el: localPagination,
                    renderBullet(index,className){
                        return `<span class="${className}">${index + 1}</span>`
                    }
                }
            });
            
            // create the prev and next items
            const paginateFirst = slider.querySelector('.db-pagination__first');
            const paginatePrev = slider.querySelector('.db-pagination__prev');
            const paginateNext = slider.querySelector('.db-pagination__next');
            const paginateLast = slider.querySelector('.db-pagination__last');

            paginateFirst?.addEventListener('click', () => {
                slider.swiper.slideTo(0);
            })
            paginatePrev?.addEventListener('click', () => {
                slider.swiper.slidePrev();
            })
            paginateNext?.addEventListener('click', () => {
                slider.swiper.slideNext();
            })
            paginateLast?.addEventListener('click', () => {
                slider.swiper.slideTo(slider.swiper.slides.length - 1);
            })
 

        }

        })
}

document.addEventListener('DOMContentLoaded', () => {

    newSwiperInitialization();
    
})

document.addEventListener('shopify:section:load', (event) => {
    newSwiperInitialization(event?.target);

});


// fall back code


// const initializeSwiper = ( container = document , line = false ) => {
    
//     container
//     .querySelectorAll('.mySwiper')
//     .forEach((slider) => {

       
            
//         if(slider.swiper) {
//             return
//         }


//         new Swiper('.mySwiper', {
//             loop: true,
//             pagination: {
//                 clickable: true,
//                 el: ".swiper-pagination",
//                 type: "progressbar",

//             },
//             navigation: {
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//             },
//           });
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     initializeSwiper(document);
    
// })

// document.addEventListener('shopify:section:load', (event) => {
//     initializeSwiper(event?.target);
// });
