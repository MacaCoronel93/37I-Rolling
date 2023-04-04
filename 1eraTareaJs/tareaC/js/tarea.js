let cantidadProducto, valorProducto,nombreProducto,gastoCliente;

nombreProducto= (prompt( `que producto lleva?`));
cantidadProducto= (prompt( `que cantidad de producto lleva?`));
valorProducto= (prompt( `el valor del producto por unidad`));

gastoCliente= cantidadProducto*valorProducto

document.write(  `El cliente  lleva ${cantidadProducto} ${nombreProducto} y lo que tiene que abonar  es ${gastoCliente}`)
