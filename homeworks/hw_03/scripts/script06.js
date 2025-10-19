let products = [
    {
        title: 'milk',
        price: 22,
        // image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg'
        image: 'https://www.shutterstock.com/image-vector/tall-glass-milk-carton-box-600nw-2017090295.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        // image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
        image: 'https://5.imimg.com/data5/SM/MN/MY-26849189/lipton-tea-bag.jpg'
    }
];

document.write('<div class="product-card">')
    for (const product of products) {
        document.write('<h3 class=”product-title”>')
            document.write(product.title)
            document.write(' - ')
            document.write(product.price)
        document.write('</h3>')
        document.write('<img src="')
            document.write(product.image)
            document.write('" alt=”')
            document.write(product.title)
        document.write('” class=”product-image”>')
    }
document.write('</div>')