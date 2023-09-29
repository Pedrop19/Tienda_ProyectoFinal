products.forEach(u => {document.write("<div class='wrapper'>" + 
                                      "\n<div class='product-img'>" + 
                                      "\n<img id='image' src=" + u.image + " height='390' width='340'/>" +
                                      "\n</div>" +
                                      "\n<div class='product-info'>" +
                                      "\n<div class='product-text'>" +
                                      "\n<h1 id='name'>" + u.name + "</h1>" +
                                      "\n<p id='description'>" + u.description + "<p>" +
                                      "\n</div>" +
                                      "\n<div class='product-price-btn'>" +
                                      "\n<p id='price'>" + u.price + "€" + "<p>" +
                                      "\n<button class='boton-comprar'" + " onclick='anadirCarrito(" + u.id + ")'>Añadir al Carrito</button>" +
                                      "\n</div>" +
                                      "\n</div>" +
                                      "\n</div>" +
                                      "\n</div>")});
