import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch("https://dummyjson.com/products", {});

  function renderProducts() {
    if (data && data.products && data.products.length) {
      return data.products.map((productItem) => (
        <p key={productItem.id || productItem.title}>{productItem.title}</p>
      ));
    }
    return null;
  }

  return (
    <div>
      <h1>Use Fetch Hook</h1>

      {pending && <h3>Pending! Please wait</h3>}
      {error && <h3>{String(error)}</h3>}

      {renderProducts()}
    </div>
  );
}
