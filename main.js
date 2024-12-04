const products = [
    {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
    name: 'Lenovo Ideapad 3 15.6" i5',
    price: 499,
    stars: 4.5,
    reviews: 180,
    seller: 'Amazon',
    image: 'https://thumb.pccomponentes.com/w-150-150/articles/1070/10708336/1734-lenovo-ideapad-3-15itl6-intel-core-i5-1155g7-8-gb-512gb-ssd-156.jpg'
    },
    {
    name: 'Asus VivoBook 14 Pro',
    price: 350,
    stars: 4,
    reviews: 320,
    seller: 'PCWorld',
    image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10847848/1943-asus-vivobook-14-f1404za-nk697w-intel-core-i7-1255u-16gb-512gb-ssd-14.jpg'
    },
    {
    name: 'Acer Aspire 5 A5155',
    price: 399,
    stars: 4.2,
    reviews: 150,
    seller: 'El Corte Inglés',
    image: 'https://thumb.pccomponentes.com/w-150-150/articles/1083/10839661/1940-acer-aspire-3-a315-59-intel-core-i5-1235u-8gb-512gb-ssd-156-foto.jpg'
    },
    {
    name: 'HP Pavilion Plus 14-ew1011ns',
    price: 599,
    stars: 4.8,
    reviews: 400,
    seller: 'MediaMarkt',
    image: 'https://thumb.pccomponentes.com/w-140-140/articles/1084/10848637/1946-hp-15-fc0069ns-amd-ryzen-5-7520u-16gb-1tb-ssd-156.jpg'
    },
    {
    name: 'Dell Inspiron 14 5000',
    price: 499,
    stars: 4.3,
    reviews: 220,
    seller: 'Amazon',
    image: 'https://thumb.pccomponentes.com/w-150-150/articles/1085/10858307/1988-dell-inspiron-15-3000-intel-core-i5-1235u-16gb-1tb-ssd-156-pt.jpg'
    },
    {
    name: 'Samsung Galaxy Book Pro 360',
    price: 899,
    stars: 4.7,
    reviews: 180,
    seller: 'Samsung Store',
    image: 'https://thumb.pccomponentes.com/w-150-150/articles/1083/10832869/1749-samsung-galaxy-book-4-pro-360-intel-core-ultra-7-155h-16gb-512gb-ssd-16-tactil-fr.jpg'
    },
    {
    name: 'Microsoft Surface Laptop 4',
    price: 1050,
    stars: 4.6,
    reviews: 230,
    seller: 'Microsoft Store',
    image: 'https://thumb.pccomponentes.com/w-150-150/articles/39/394924/1794-microsoft-surface-laptop-4-platino-amd-ryzen-7-4980u-8gb-256-gb-ssd-15-tactil.jpg'
    },
    {
    name: 'MacBook Air M1 Pro',
    price: 999,
    stars: 4.9,
    reviews: 800,
    seller: 'Apple Store',
    image: 'https://thumb.pccomponentes.com/w-150-150/articles/33/335377/1575-apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-gris-espacial.jpg'
    },
    {
    name: 'HP Victus 16',
    price: 1199,
    stars: 4.6,
    reviews: 215,
    seller: 'PCComponentes',
    image: 'https://thumb.pccomponentes.com/w-150-150/articles/1073/10733294/1394-hp-victus-16-s0011ns-amd-ryzen-7-7840hs-32gb-1tb-ssd-rtx-4060-161.jpg'
    }
    ];
    //----------------------MENU PRINCIPAL----------------------------
    const menuItems = [
    { name: 'Inicio', href: 'index.html'},
    { name: 'Componentes de PC', href: '#', submenu: ['Placas Base','Procesadores','Discos Duros','Discos Duros SSD','Tarjetas Gráficas','Memoria RAM','Carcasas','Ventilación','Cables Internos PC','Tarjeta de Red'
    ]},
    { name: 'Periféricos', href: '#', submenu: [ 'Monitores','Teclados','Ratones','Altavoces','Auriculares','Webcams'
    ]},
    { name: 'Impresoras', href: '#', submenu: ['Impresoras Láser','Impresoras de Inyección de Tinta','Impresoras Matriciales'
    ] },
    { name: 'Antivirus', href: '#' },
    { name: 'Contáctanos', href: '#' }
    ];
    const nav = document.createElement('nav');
    nav.className= 'navegacion';

    const divMenuMovil = document.createElement('div');
    divMenuMovil.className='menu-icon';
    divMenuMovil.textContent='☰';
    nav.appendChild(divMenuMovil);

    const ulMenu = document.createElement('ul');
    ulMenu.className= 'menu';

    for (let i = 0; i < menuItems.length; i++) {
        const liMenuPrincipal = document.createElement('li');
        const aMenuPrincipal = document.createElement('a');
        aMenuPrincipal.href = menuItems[i].href;
        aMenuPrincipal.textContent = menuItems[i].name;
        liMenuPrincipal.appendChild(aMenuPrincipal);

        if (menuItems[i].submenu && menuItems[i].submenu.length > 0) {
            const ulSubmenu = document.createElement('ul');
            ulSubmenu.className = 'submenu';

            for (let o = 0; o < menuItems[i].submenu.length; o++) {
                const liSubmenu = document.createElement('li');
                const aSubmenu = document.createElement('a');
                aSubmenu.href = '#';
                aSubmenu.textContent = menuItems[i].submenu[o];
                liSubmenu.appendChild(aSubmenu);
                ulSubmenu.appendChild(liSubmenu);
            }
            
            liMenuPrincipal.appendChild(ulSubmenu);
        }

        ulMenu.appendChild(liMenuPrincipal);
    }

    nav.appendChild(ulMenu);
    document.body.appendChild(nav);
    //----------------------MENU DISPOSITIVOS MOVILES----------------
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            menu.classList.remove('active'); 
            //window.location.href = event.target.href; 
        }
    });

    //----------------------PRODUCTOS----------------
    const contenedorProducto = document.createElement('div');
    contenedorProducto.classList.add('contenedor');
    contenedorProducto.id = 'contenedor-producto';
    for (let i = 0; i < products.length; i++) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-producto');

    
        tarjeta.innerHTML = `
        <img src="${products[i].image}" alt="${products[i].name}">
        <h3>${products[i].name}</h3>
        <p>Vendedor: ${products[i].seller}</p>
        <p>Opiniones: ${products[i].reviews} reseñas</p>
        <p class="precio">$${products[i].price}</p>
        <button>Añadir al carrito</button>
        `;

    contenedorProducto.appendChild(tarjeta);
    document.body.appendChild(contenedorProducto);
}
    //----------------------FOOTER----------------
    const abajo = document.createElement('footer');
    const pAbajo = document.createElement('p');
    pAbajo.style.fontWeight = 'bold';
    pAbajo.innerHTML = '&copy; 2024 Multi-PC'
    
    abajo.appendChild(pAbajo);
    document.body.appendChild(abajo);
    
