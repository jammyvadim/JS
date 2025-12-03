console.log('#HmvAfRQM')
console.log('– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.')
console.log('Відобразити всі поля кожної корзини.')

const div_carts = document.getElementById('div_carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);

        for (const cart of carts) {
            const div_cart = document.createElement('div');
            div_cart.classList.add('div_cart');
            const divWithInfo = document.createElement('div');
            divWithInfo.classList.add('divWithInfo')
            divWithInfo.innerText = `
                    total: ${cart.total},
                    discountedTotal: ${cart.discountedTotal},
                    userId: ${cart.userId},
                    totalProducts: ${cart.totalProducts},
                    totalQuantity: ${cart.totalQuantity},
                    list of products:
                `

            const div_products = document.createElement('div');
            div_products.classList.add('div_products')
            for (const product of cart.products) {
                const div_product = document.createElement('div');
                const p_info = document.createElement('p');
                p_info.classList.add('p_info')
                p_info.innerText = `
                      id: ${product.id},
                      title: ${product.title},
                      price: ${product.price},
                      quantity: ${product.quantity},
                      total: ${product.total},
                      discountPercentage: ${product.discountPercentage},
                      discountedTotal: ${product.discountedTotal},
                    `

                const img_product = document.createElement('img');
                img_product.classList.add('img_product')
                img_product.src = product.thumbnail;
                div_product.append(img_product, p_info);
                div_products.appendChild(div_product);

            }

            div_cart.append(divWithInfo, div_products);
            div_carts.appendChild(div_cart);

        }

    });