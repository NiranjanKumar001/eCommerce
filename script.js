function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const userData = {
        username: username,
        email: email,
        mobile: mobile,
        password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = 'login.html';
}

function handleLogin(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && loginUsername === storedUserData.username && loginPassword === storedUserData.password) {
        alert('Login successful!');
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function handleSignup1(event) {
    event.preventDefault();

    const sellerName = document.getElementById('seller').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const gstin = document.getElementById('gstin').value;
    const password = document.getElementById('loginPassword').value;
    const sellerData = {
        sellerName: sellerName,
        phone: phone,
        email: email,
        gstin: gstin,
        password: password
    };
    localStorage.setItem('sellerData', JSON.stringify(sellerData));
    window.location.href = 'seller-login.html';
}

function handleLogin1(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedSellerData = JSON.parse(localStorage.getItem('sellerData'));

    if (storedSellerData && loginEmail === storedSellerData.email && loginPassword === storedSellerData.password) {
        alert('Login successful as seller!');
        window.location.href = 'add-product.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// function addProduct(event) {
//     event.preventDefault();

//     const productName = document.getElementById('productName').value;
//     const productImage = document.getElementById('productImage').value;
//     const productPrice = document.getElementById('productPrice').value;
//     let products = JSON.parse(localStorage.getItem('products')) || [];
//     let newProduct = {  // Add new product
//         name: productName,
//         image: productImage,
//         price: productPrice
//     };

//     products.push(newProduct);
//     localStorage.setItem('products', JSON.stringify(products));
//     document.getElementById('productName').value = '';
//     document.getElementById('productImage').value = '';
//     document.getElementById('productPrice').value = '';
//     displayProducts();//update product
// }

// function displayProducts() {
//     const content = document.getElementById('content');
//     content.innerHTML = '';

// // div as productcontainer
//     const products = JSON.parse(localStorage.getItem('products')) || [];
//     const productContainer = document.createElement('div');
//     productContainer.className = 'product-container';
//     productContainer.style.display = 'flex';
//     productContainer.style.justifyContent='center';
//     productContainer.style.flexWrap = 'wrap';
// //for div
//     products.forEach((product, index) => {
//         const productDiv = document.createElement('div');
//         productDiv.className = 'product';
//         productDiv.style.backgroundColor = '#04AA6D';
//         productDiv.style.margin = '10px';
//         productDiv.style.width = '300px';
//         productDiv.style.padding = '10px';
//         productDiv.style.border = '2px solid white';

// //for name
//         const productName = document.createElement('h3');
//         productName.textContent = product.name;
//         productName.style.textAlign = 'center';
//         productName.style.fontSize = '24px';
//         productName.style.fontWeight = 'bolder';
//         productName.style.color = 'white';
//         productDiv.appendChild(productName);


// // for img
//         const productImage = document.createElement('img');
//         productImage.src = product.image;
//         productImage.alt = product.name;
//         productImage.style.display = 'block';
//         productImage.style.width = '100%';
//         productImage.style.border = '2px solid black';
//         productDiv.appendChild(productImage);


// //for price
//         const productPrice = document.createElement('p');
//         productPrice.textContent = `$${product.price}`;
//         productPrice.style.textAlign = 'center';
//         productPrice.style.fontSize = '24px';
//         productPrice.style.fontWeight = 'bolder';
//         productPrice.style.color = 'white';
//         productDiv.appendChild(productPrice);

//         productContainer.appendChild(productDiv);
//     });

//     content.appendChild(productContainer);
// }

