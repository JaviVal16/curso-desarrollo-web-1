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
let btnsDelete = document.querySelectorAll('.modal_cart_button_delete fa-solid fa-trash');
let btnComprar = document.getElementById("btnComprar");

let btnOrden = document.getElementById('btnOrden');
let btnCateg = document.querySelector('.filtro-dropdown_categorias');

let precioMa = document.querySelector('.precioMa');
let precioMe = document.querySelector('.precioMe');
let alfaA = document.querySelector('.alfaA');
let alfaZ = document.querySelector('.alfaZ');

const localGet = './json/masProductos.json';
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const sig = document.getElementById('sig');


