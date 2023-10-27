const carBodyTypes = document.getElementById('row');
const changeHeaderBacground = document.getElementById('header');
const logoColor = document.querySelector('.logo');
const brand = document.querySelector('.brands-name');
const newestArrival = document.querySelector('.car-row')

let scrolled = false;
const owl = $('.owl-carousel');
const car = $('.car-row');

window.addEventListener('scroll', handleScroll);

const carListsByBodyType = [
    {id: 1, img: 'img/01.png', imgName: 'Sedan', alt:"firstCar"}, {id: 2, img: 'img/02.png', imgName: 'Compact', alt:"secondCar"}, {id: 3, img: 'img/03.png', imgName: 'Convertible', alt:"thirdCar"}, {id: 4, img: 'img/04.png', imgName: 'SUV', alt:"fourthCar"}, {id: 5, img: 'img/05.png',imgName: 'Crossover', alt:"fifthCar"}, {id: 6, img: 'img/06.png', imgName: 'Wagon', alt:"sixCar"},
    {id: 7, img: 'img/07.png', imgName: 'Sports', alt:"sevenCar"}, {id: 8, img: 'img/08.png', imgName: 'Pickup', alt:"eightCar"},
    {id: 9, img: 'img/09.png', imgName: 'Family MPV', alt:"ninthCar"}, {id: 10, img: 'img/10.png', imgName: 'Coupe', alt:"tenthCar"}, {id: 11, img: 'img/11.png', imgName: 'Electric', alt:"eleventhCar"}, {id: 12, img: 'img/12.png', imgName: 'Luxury', alt:"twelvethCar"}
];

let carList = () => {
    return (carBodyTypes.innerHTML = carListsByBodyType.map((a) => { 
        const {img, alt, imgName} = a
        return `
            <div class="car-row-display">
                <img src=${img} alt=${alt}>
                <p>${imgName}</p>
            </div>
        `
    }).join(''));
};

carList();

const brands = [
    {id: 1, img: 'img/farrariLogo.png', imgName: 'Farrari', alt:"Farrari_Logo"}, {id: 2, img: 'img/hyundaiLogo.jpeg', imgName: 'Hyundai', alt:"Hyundai_Logo"}, {id: 3, img: 'img/mercedesLogo.jpeg', imgName: 'Mercedes Benz', alt:"Mercedes_Logo"}, {id: 4, img: 'img/toyotaLogo.png', imgName: 'Toyota', alt:"Toyota_Logo"}, {id: 5, img: 'img/bmwLogo.jpeg',imgName: 'BMW', alt:"BMW_Logo"}, {id: 6, img: 'img/nissanLogo.png', imgName: 'Nissan', alt:"Nissan_Logo"}
];

let insertBrand = () => {
    return(brand.innerHTML = brands.map((b) => {
        return `
            <div class="brand-img">
                <img src=${b.img} alt=${b.alt}>
                <p>${b.imgName}</p>
            </div>
        `
    }).join(''));
};

insertBrand();

const newProducts = [
    {id: 1, newCarImg: 'img/bmw2.jpg', carName: 'BMW', carType: 'Automatic', speed: '24.5km / 1-litre', model: '2023', vehicalType: 'Hybrid', price: '50,000'}, {id: 2, newCarImg: 'img/mercedes4.jpg', carName: 'Mercedes Benz', carType: 'Automatic', speed: '24km / 1-litre', model: '2023', vehicalType: 'Hybrid', price: '55,000'}, {id: 3, newCarImg: 'img/toyota1.jpg', carName: 'Toyota', carType: 'Automatic', speed: '35km / 1-litre', model: '2023', vehicalType: 'Hybrid', price: '60,000'}, {id: 4, newCarImg: 'img/08.jpg', carName: 'Hyundai', carType: 'Automatic', speed: '25.15km / 1-litre', model: '2023', vehicalType: 'Hybrid', price: '80,000'}
];

let newestItems = () => {
    return(newestArrival.innerHTML = newProducts.map((item) => {
        let {newCarImg, carName, carType, speed, model, vehicalType, price} = item;
        return `
            <div>
                <div class="car-item">
                    <div class="car-img">
                        <span></span>
                        <img src=${newCarImg}>
                        <div class="car-buttons"></div>
                    </div>
                    <div class="car-content">
                        <div class="car-top">
                            <h4>${carName}</h4>
                        </div>
                        <ul class="car-list">
                            <li><i class="far fa-steering-wheel"></i>${carType}</li>
                            <li><i class="far fa-road"></i>${speed}</li>
                            <li><i class="far fa-car"></i>Model: ${model}</li>
                            <li><i class="far fa-gas-pump"></i>Type: ${vehicalType}</li>
                        </ul>
                        <div class="car-footer">
                            <span class="car-price">$${price}</span>
                            <a href="" class="theme-btn"><span class="far fa-eye"></span>Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join(''));
};
newestItems()

function handleScroll() {
    let bar = document.getElementById('line');
    let bar2 = document.getElementById('line2');
    let bar3 = document.getElementById('line3');
    if (!scrolled && window.scrollY > 0) {
        changeHeaderBacground.classList.add('scroll-color')
        logoColor.classList.add('blue')
        bar.classList.add('black')
        bar2.classList.add('black')
        bar3.classList.add('black')
    } else {
        scrolled = false;
        changeHeaderBacground.classList.remove('scroll-color')
        logoColor.classList.remove('blue')
        bar.classList.remove('black')
        bar2.classList.remove('black')
        bar3.classList.remove('black')
    }
};

owl.owlCarousel({
    items: 3.85,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin: 4,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1.94
        },
        1024: {
            items: 2.78
        },
        1100: {
            items: 3.85
        },
        1400: {
            items: 4.1
        }
    }
});

$('.pre').click(function() {
    owl.trigger('prev.owl.carousel', [-1]);
})

$('.next').click(function() {
    owl.trigger('next.owl.carousel', [1]);
})