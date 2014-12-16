
// images from
// http://hadleybelle.com/wp-content/uploads/2012/02/precious-gemstones.png

//initialize data
var topaz = {
    name: 'Topaz',
    price: 2,
    description: 'lovely light blue gem',
    canPurchase: true,
    soldOut: false,
    images: [
        { full: '/assets/images/topaz-01-full.png', thumb: 'topaz-01-thumb.png' },
        { full: '/assets/images/topaz-02-full.png', thumb: 'topaz-02-thumb.png' }
    ],
    reviews: [
        { stars: 5, body: "I love this product!", author: "bob@mailinator.com" },
        { stars: 1, body: "This product sucks!", author: "sally@mailinator.com" },
        { stars: 4, body: "This product is pretty good.", author: "marcus@mailinator.com" }
    ]
}

var garnet = {
    name: 'Garnet',
    price: 5.95,
    description: 'decadent dark red gem',
    canPurchase: false,
    soldOut: false,
    images: [
        { full: '/assets/images/garnet-01-full.png', thumb: 'garnet-01-thumb.png' },
        { full: '/assets/images/garnet-02-full.png', thumb: 'garnet-02-thumb.png' }
    ],
    reviews: [
        { stars: 5, body: "I want to marry this gem!", author: "frances@mailinator.com" },
        { stars: 1, body: "Ya call this a gem?!", author: "dylan@mailinator.com" },
        { stars: 3, body: "This product is pretty good.", author: "leigh@mailinator.com" }
    ]
}

var diamond = {
    name: 'Diamond',
    price: 2,
    description: 'the king of gems',
    canPurchase: true,
    soldOut: false,
    images: [
        { full: '/assets/images/diamond-01-full.png', thumb: 'diamond-01-thumb.png' },
        { full: '/assets/images/diamond-02-full.png', thumb: 'diamond-02-thumb.png' }
    ],
    reviews: [
        { stars: 5, body: "This gem is a girl's best friend!", author: "jr@mailinator.com" },
        { stars: 1, body: "It's overrated.  What's all the hype for?", author: "gdilly@mailinator.com" },
        { stars: 4, body: "This product met my expectations.", author: "jeff@mailinator.com" }
    ]
}

var gems = [topaz, garnet, diamond];