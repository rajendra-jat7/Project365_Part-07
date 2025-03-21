const getProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p className="price">💲{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
