import { createElement } from "react";
import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  function renderProducts() {
    if (data && data.products && data.products.length) {
      return data.products.map((productItem) =>
        createElement('p', { key: productItem.id || productItem.title }, productItem.title)
      );
    }
    return null;
  }

  return createElement(
    'div', 
    null, 
    
    createElement('h1', null, 'Use Fetch Hook'),
    
    pending ? createElement('h3', null, 'Pending ! Please wait') : null,
    
    error ? createElement('h3', null, String(error)) : null,
    
    renderProducts()
  );
}