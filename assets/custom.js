// const initializeSwiper = ( container = document ) => {
//         let swiperinstance = 1;
//         container
//         .querySelectorAll('.mySwiper')
//         .forEach((slider) => {

//             if (slider.swiper) {
//                 slider.swiper.destroy();
//                 console.log(slider,`destroyed ${swiperinstance} swiper`);
//             }

//             const paginationType = slider.dataset.paginationType || 'bullets';
//             console.log(slider,`${swiperinstance} swiper pagination type ${paginationType}`);

//             const localPagination =slider.querySelector('.swiper-pagination');
//             const localNextbtn = slider.querySelector('.swiper-button-next');
//             const localPrevbtn = slider.querySelector('.swiper-button-prev');


//             new Swiper('.mySwiper', {
//                 loop: true,
//                 pagination: {
//                     clickable: true,
//                     el: localPagination,
//                     type: paginationType

//                 },
//                 navigation: {
//                   nextEl: localNextbtn,
//                   prevEl: localPrevbtn,
//                 },
//               });
//               console.log(slider,`created ${swiperinstance} swiper`);
//               swiperinstance++;

//         });

// }


const newSwiperInitialization = (container = document) => {
        container.querySelectorAll('.mySwiper').forEach((slider) => {


            let paginationType = slider.dataset.paginationType || 'bullets';

            
            const localPagination =slider.querySelector('.swiper-pagination');
            const localNextbtn = slider.querySelector('.swiper-button-next');
            const localPrevbtn = slider.querySelector('.swiper-button-prev');


            // let paginateObj;
            // let navigationObj;


            // if(paginationType == 'progressbar') {
            //      paginateObj= {
            //         clickable: true,
            //         el: localPagination,
            //         type: paginationType
            //     }
            //     navigationObj = {}
            // }else{
            //     paginateObj= {
            //         clickable: true,
            //         el: localPagination,
            //         type: paginationType
            //     }
            //     navigationObj = {
            //         nextEl: localNextbtn,
            //         prevEl: localPrevbtn,
            //     }
            // }

            // new Swiper('.mySwiper', {
            //     loop:true,
            //     pagination: paginateObj,
            //     naviation: navigationObj
            // });

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
            new Swiper('.mySwiper', {
                loop:true,
                pagination: {
                    clickable: true,
                    el: localPagination,
                    renderBullet(index,className){
                        return `<span class="${className}">${index + 1}</span>`
                    }
                },
                navigation: {
                    nextEl: localNextbtn,
                    prevEl: localPrevbtn,
                }
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
