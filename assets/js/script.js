// fetch("https://northwind.vercel.app/api/products")
//   .then((res) => res.json())
//   .then((data) =>
//     data.forEach((element) => {
//       createProduct(element.id, element.name, element.quantityPerUnit);
//     })
//   );
async function getFetch() {
  const ref = await fetch("https://northwind.vercel.app/api/products");
  const data = await ref.json();
  data.forEach(element => {
    createProduct(element.id, element.name, element.quantityPerUnit)
  });
}
getFetch()

function createProduct(id, name, quantityPerUnit) {
  document.body.innerHTML += `
<div class="product-container">
        <h1>${id}</h1>
        <h4>${name}</h4>
        <p>${quantityPerUnit}</p>
        <a href="./details.html#${id}">Go to details..</a>
    </div>
`;
}
