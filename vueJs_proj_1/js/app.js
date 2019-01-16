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
                variantColor:"green",
                variantImage: "images/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "images/vmSocks-blue-onWhite.jpg"
                
            }
        ],
        sizes:["XL","LG","M","S","XS"],
        cart: 0,
    },
    methods:{
        addToCart: function(){
            this.cart += 1
            if(this.cart> 0){
                document.getElementById('messageDisplay').innerHTML = '';
            }
        },
        removeCart: function(){
            this.cart -= 1
           if(this.cart < 1){
               document.getElementById('messageDisplay').innerHTML = 'Your car is empty';
               this.cart = 0;
           }
        },
        updateProdut: function(variantImage){
            this.image = variantImage;
        }
    }
})