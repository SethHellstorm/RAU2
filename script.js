function filtrar(categoria) {
    const productos = document.querySelectorAll(".producto");
    const botones = document.querySelectorAll("button");

    // Quitar clase activo de todos los botones
    botones.forEach(btn => btn.classList.remove("activo"));

    // Agregar clase activo al botón presionado
    event.target.classList.add("activo");

    productos.forEach(producto => {
        if (categoria === "todos") {
            producto.style.display = "block";
        } else {
            if (producto.classList.contains(categoria)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        }
    });
}