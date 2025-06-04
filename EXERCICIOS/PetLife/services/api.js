import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export async function getCategories() {
  const res = await axios.get(`${BASE_URL}/products/categories`);
  return res.data;
}

export async function getProductsByCategory(category) {
  const res = await axios.get(`${BASE_URL}/products/category/${category}`);
  return res.data.products;
}

export async function getProductById(id) {
  const res = await axios.get(`${BASE_URL}/products/${id}`);
  return res.data;
}