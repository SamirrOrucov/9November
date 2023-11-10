let hash = window.location.hash.substring(1);
console.log(hash);
// fetch("https://northwind.vercel.app/api/products/" + hash)
//   .then((res) => res.json())
//   .then((data) =>
//     createProduct(
//       data.id,
//       data.name,
//       data.quantityPerUnit,
//       data.unitPrice,
//       data.unitsInStock
//     )
//   );

async function getFetch(){
  const res=await fetch("https://northwind.vercel.app/api/products/"+hash)
  const data =await res.json()
  createProduct( data.id,
          data.name,
          data.quantityPerUnit,
         data.unitPrice,
          data.unitsInStock)
}

getFetch()
function createProduct(id, name, quantityPerUnit, unitPrice, unitsInStock) {
  document.body.innerHTML += `
    <div class="product-container">
<h1>ID: ${id}</h1>
<h4>Name:${name}</h4>
<p>${quantityPerUnit}</p>
<p>Price: ${unitPrice}</p>
<p>Stock: ${unitsInStock}</p>
</div>
`;
  if (unitsInStock === 0) {
    const div = document.querySelector(".product-container");
    const noStock = document.querySelector(".noStock");
    div.classList.add("noStock");
  }
}
