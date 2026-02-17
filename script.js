const loadTrendingProduct = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => showTrendingProduct(data))
}
const showTrendingProduct = (products) => {
    console.log(products);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    products.map(product => {
        const trendingCard = document.createElement('div');
        trendingCard.innerHTML = `
        <div class="border-2 border-gray-200 rounded-xl">
                        <div class="bg-[#E5E7EB] py-20">
                            <img class="w-[70%] h-[200px] mx-auto" src="${product.image}" alt="">
                        </div>
                        <div class="p-5 space-y-3">
                            <div class="flex items-center justify-between">
                                <p class="text-[#818BFF] font-semibold bg-[#E0E7FF] w-fit px-2 rounded-xl py-1">${product.category}</p>
                                <p><i class="fa-solid fa-star text-[#FDC700]"></i> ${product.rating.rate} (${product.rating.count})</p>
                            </div>
                            <h2 class="font-bold text-lg">${product.title}</h2>
                            <p class="font-extrabold text-xl">$${product.price}</p>
                            <div class="flex items-center justify-between">
                                <button class="btn rounded-xl"><i class="fa-regular fa-eye"></i> Details</button>
                                <button class="btn rounded-xl btn-primary"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                            </div>
                        </div>
                    </div>
        `
        cardContainer.appendChild(trendingCard);
    })
}


loadTrendingProduct()