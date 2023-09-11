const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");

const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    //modal header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "✖️"
    modalClose.className = "modal-close"
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", ()=> {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    //modal Body
    cart.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body"
        modalBody.innerHTML = `
        <div class="product">
            <img class="produc-img" src="${product.img}" />
            <div class+ "product-info">
                <h3>${product.productName}</h3>
            </div>
        <div class="quantity">
            <span class="quantitiy-btn-decrese">-</span>
            <span class="quantitiy-input">${product.quanty}</span>
            <span class="quantitiy-btn-increse">+</span>
        </div>
            <div class="price">$ ${formatearNumero(product.price * product.quanty)}</div>
            <div class="delete-product">❌</div>
        </div>
        `;

        modalContainer.append(modalBody);

        const  decrese = modalBody.querySelector(".quantitiy-btn-decrese");
        decrese.addEventListener("click", () => {
            if (product.quanty !== 1) {
                product.quanty--;
                displayCart();
            }
        });

        const  increse = modalBody.querySelector(".quantitiy-btn-increse");
        increse.addEventListener("click", () => {
                product.quanty++;
                displayCart();
        });    
    

    const deleteProduct = modalBody.querySelector(".delete-product");
    deleteProduct.addEventListener("click", () => {
        deleteCartProduct(product.id)

      })
    });
    //modal fotter
    
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0)
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <div class<"total-price">$ ${formatearNumero(total)}</div>
    `;
    modalContainer.append(modalFooter);
};
 
cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element)=> element.id === id )
    console.log(foundId)
    cart.splice(foundId, 1)
    displayCart();
}
// Función para formatear un número con separadores de miles
function formatearNumero(numero) {
    // Usamos la función toLocaleString para formatear el número
    return numero.toLocaleString('es-ES');
}
