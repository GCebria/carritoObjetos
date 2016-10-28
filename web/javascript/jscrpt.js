/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//------------- CLASE ARTICULOS -------------

function Articulo(id, nombre, precio, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
}

//-------------- CLASE CARRITO ---------------

function Carrito(fecha, cliente) {
    this.fecha = fecha;
    this.cliente = cliente;
    this.articulos = [];
    this.total = 0;

}


Carrito.prototype.anyadeCarrito = function (articulo) {
    this.articulos.push(articulo);
    //this.articulos[this.articulos.lenght]=articulo;
}

Carrito.prototype.mostrar = function () {
    ticket = "Fecha: " + this.fecha + "\n";
    ticket += "Cliente: " + this.cliente + "\n";
    ticket += "              Artículos en carrito      \n";

    for (i = 0; i < this.articulos.length; i++) {
        ticket += this.articulos[i].id + "\t"+this.articulos[i].precio + "\n";
    }
    alert(ticket);
}

//---------------------------------------------------

miCarrito = new Carrito("28/10/2016", "Pepe Perez");

//-------------- FUNCIONES DE LA PAGINA ------------

function f1() {
    id = prompt("dime el id");
    nombre = prompt("dime el nombre");
    precio = prompt("dime el precio");
    descripcion = prompt("dime la descripción");

    articulo = new Articulo(id, nombre, precio, descripcion);

    alert(articulo.id);
    
    miCarrito.anyadeCarrito(articulo);
}

function f2 (){
    miCarrito.mostrar();
}
