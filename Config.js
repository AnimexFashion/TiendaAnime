    function entrar() {
      document.getElementById('bienvenida').style.display = 'none';
      document.querySelector('header').style.display = 'flex';
      document.querySelector('.catalogo').style.display = 'grid';
      document.getElementById('nosotros').style.display = 'block';
      document.getElementById('contacto').style.display = 'block';
    }

    function volverInicio() {
      document.getElementById('bienvenida').style.display = 'block';
      document.querySelector('header').style.display = 'none';
      document.querySelector('.catalogo').style.display = 'none';
      document.getElementById('nosotros').style.display = 'none';
      document.getElementById('contacto').style.display = 'none';
    }

    function agregarAlCarrito(producto) {
      const carrito = document.getElementById('carrito');
      const lista = document.getElementById('lista-carrito');
      const item = document.createElement('li');
      item.textContent = producto;
      lista.appendChild(item);
      carrito.style.display = 'block';
    }

    function finalizarCompra() {
      alert('Gracias por tu compra. Pronto recibirás tu pedido.');
      vaciarCarrito();
    }

    function vaciarCarrito() {
      document.getElementById('lista-carrito').innerHTML = '';
      document.getElementById('carrito').style.display = 'none';
    }