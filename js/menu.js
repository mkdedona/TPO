let seccionPlatos = document.getElementById("seccion-platos");
let itemNombre = document.getElementsByClassName("item-nombre");
let itemPrecio = document.getElementsByClassName("item-precio");

async function pedirPost(){
  let varFetch = await fetch("./json/data.json")
  const data = await varFetch.json(); 
 
  data.forEach( producto => {
    const div1 = document.createElement('div');
    div1.setAttribute('id',`categoria`);
    
    let h2Menu = document.createElement('h2');
    h2Menu.setAttribute('class',`h2Menu`);
    h2Menu.innerText =`${producto.titulo}`;

    let platos = document.createElement('div');
    producto.platos.forEach( plato => {
    platos.innerHTML+= `
        <div class="carta-item">
        <div class="item-nombre">${plato.nombre}</div>
        <div class="item-precio">${plato.precio}</div>
        </div>
    `;
    div1.append(platos);
    });
    seccionPlatos.append(h2Menu,div1);
  })
  return data;
}
pedirPost();
