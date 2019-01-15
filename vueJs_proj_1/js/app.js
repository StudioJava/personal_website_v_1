// JavaScript Document
var app = new Vue({
    el:'#app',
    data:{
        product:'Socks',
        description:'Thermic material created from the best wool in the world.',
        image:'images/vmSocks-green-onWhite.jpg',
        link:'https://vuejs.org/',
        inStock:false,
        onSale:true,
        inventory:30,
        details:["80% cotton", "20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor:"green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes:["XL","LG","M","S","XS"],
        cart: 0,
    },
    methods:{
        addToCart: function(){
            this.cart += 1
        }
    }
})