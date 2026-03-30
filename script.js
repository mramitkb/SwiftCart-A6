const loadTrendingProduct = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        showTrendingProduct(data);
    })
}
const showTrendingProduct = (products) => {
    // console.log(products);
    const cardContainer = document.getElementById('trending-container');
    if(!cardContainer) return;
    cardContainer.innerHTML = "";

    const allTrendingProducts = [...products].sort((a, b) => b.rating.rate - a.rating.rate);

    allTrendingProducts.slice(0,3).forEach(product => {
        const trendingCard = document.createElement('div');
        trendingCard.innerHTML = `
        <div class="border-2 border-gray-200 rounded-xl flex flex-col h-full">
                        <div class="bg-[#E5E7EB] p-5 flex items-center justify-center">
                            <img class="object-cover h-60 overflow-hidden" src="${product.image}" alt="">
                        </div>
                        <div class="p-5 space-y-3 flex flex-col flex-grow">
                            <div class="flex items-center justify-between">
                                <p class="text-[#818BFF] font-semibold bg-[#E0E7FF] w-fit px-2 rounded-xl py-1">${product.category}</p>
                                <p><i class="fa-solid fa-star text-[#FDC700]"></i> ${product.rating.rate} (${product.rating.count})</p>
                            </div>
                            <h2 class="font-bold text-lg">${product.title}</h2>
                            <p class="font-extrabold text-xl">$${product.price}</p>
                            <div class="flex items-center justify-between mt-auto gap-5">
                                <button onclick="loadProductDetail(${product.id})" class="rounded-xl border border-gray-200 w-full py-2 font-medium cursor-pointer hover:bg-gray-100"><i class="fa-regular fa-eye"></i> Details</button>
                                <button class="rounded-xl w-full bg-[#5945F7] text-white py-2 font-medium cursor-pointer hover:bg-[#432ee7]"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                            </div>
                        </div>
                    </div>
        `
        cardContainer.appendChild(trendingCard);
    })
}


const loadProductDetail = async(id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    showProductDetail(data);
}
const showProductDetail = (product) => {
    // console.log(product);
    const detailContainer = document.getElementById('details-container');
    detailContainer.innerHTML = `
        <div class="border-2 border-gray-200 rounded-xl flex flex-col h-full">
                        <div class="bg-[#E5E7EB] p-5 flex items-center justify-center">
                            <img class="h-60 object-contain" src="${product.image}" alt="">
                        </div>
                        <div class="p-5 space-y-3 flex flex-col flex-grow">
                            <h2 class="font-bold text-lg">${product.title}</h2>
                            <p>${product.description}</p>
                            <div class="flex items-center justify-between">
                                <p class="font-extrabold text-xl">Price: $${product.price}</p>
                                <p><i class="fa-solid fa-star text-[#FDC700]"></i> ${product.rating.rate} (${product.rating.count})</p>
                            </div>
                            <div class="flex items-center justify-center mt-auto">
                                <button class="btn rounded-xl btn-primary"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>
        `

    document.getElementById('detail_modal').showModal();
}

loadTrendingProduct()

// All Categories
// const allCategories = async () => {
//     const res = await fetch("https://fakestoreapi.com/products/categories");
//     const data =await res.json();
//     console.log(data);
// }

// const setAllCategories = (categories) => {
//     console.log(categories);
// }
// allCategories()


// All Products

const loadAllProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    showAllProducts(data);
}

const showAllProducts = (products) => {
    console.log(products);

    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    const product = products.forEach(product => {
        const card = document.createElement("div");
    card.innerHTML = `
    <div class="border-2 border-gray-200 rounded-xl flex flex-col h-full">
                        <div class="bg-[#E5E7EB] p-5 flex items-center justify-center">
                            <img class="object-cover h-60 md:h-70 overflow-hidden" src="${product.image}" alt="">
                        </div>
                        <div class="p-5 space-y-3 flex flex-col flex-grow">
                            <div class="flex items-center justify-between">
                                <p class="text-[#818BFF] font-semibold bg-[#E0E7FF] w-fit px-2 rounded-xl py-1">${product.category}</p>
                                <p><i class="fa-solid fa-star text-[#FDC700]"></i> ${product.rating.rate} (${product.rating.count})</p>
                            </div>
                            <h2 class="font-bold text-lg">${product.title}</h2>
                            <p class="font-extrabold text-xl">$${product.price}</p>
                            <div class="flex items-center justify-between mt-auto gap-5">
                                <button onclick="loadProductDetail(${product.id})" class="rounded-xl border border-gray-200 w-full py-2 font-medium cursor-pointer hover:bg-gray-100"><i class="fa-regular fa-eye"></i> Details</button>
                                <button class="rounded-xl w-full bg-[#5945F7] text-white py-2 font-medium cursor-pointer hover:bg-[#432ee7]"><i class="fa-solid fa-cart-shopping"></i> Add</button>
                            </div>
                        </div>
                    </div>
    `
    productsContainer.appendChild(card)
    })
}
loadAllProducts()