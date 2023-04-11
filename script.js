const miFuncion = async () => {
    console.log("x1")
    const response = await fetch("https://raw.githubusercontent.com/anasofia-pacheco23/Taller-calificable/main/tienda.json");
    const data = await response.json();

    for(let tienda of data) {
        console.log(tienda);
    }

    const jsonString = JSON.stringify(data);
    const jsonJSON = JSON.parse(jsonString);

    console.log(jsonString);
    console.log(jsonJSON);
    console.log("x2");
}



