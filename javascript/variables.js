const productos = document.querySelector('.productos');

let bars = document.querySelector('#menuH');
let navbar = document.querySelector('.navbar');


let cart = document.querySelector('#cart');
let modalCart = document.querySelector('.modal_cart');

const productosEnCarrito = JSON.parse(localStorage.getItem("productCart"));
let infoProduct = document.querySelector('.modal_cart_checkout-fullBtn');
let cartEmpty = document.querySelector('.modal_cart_checkout-empty');
let infoProductPrice = document.querySelector('.cart_modal_price');
let cartNotif = document.querySelector('.cart_notif--notification');
let cont = 0;
let total = 0;