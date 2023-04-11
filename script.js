const miFuncion = async () => {
    console.log("x1")
    const response = await fetch("https://raw.githubusercontent.com/anasofia-pacheco23/Taller-calificable/main/tienda.json");
    const data = await response.json();

    const jsonString = JSON.stringify(data);
    const jsonJSON = JSON.parse(jsonString);

    console.log(jsonString);
    console.log(jsonJSON);
    console.log("x2");
}

miFuncion();

class Producto{
url = "";

constructor(url){
    this.url = url;
}

render(){
    const imagen = document.createElement("img");
    imagen.classList.add("imagen");
    imagen.setAttribute("src", this.url);
    return imagen
}
}

for (const producto of producto){
    const prod = new Producto(prod.image);
    const prodElement = prod.render();
    contenedor.appendchild(prodElement);
} 

