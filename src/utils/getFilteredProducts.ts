import {
  Product,
  SearchTypes,
  SearchSpecification,
} from '../types';

export const getFilteredProducts = (
  products: Product[],
  type: SearchTypes | string,
  specification: SearchSpecification | string,
  query: string,
): Product[] => {
  let filterProducts = products;

  const normalizedQuery = query.trim().toLowerCase();

  switch (type) {
    case SearchTypes.Monitor:
      filterProducts = products.filter(product => product.type === 'Monitors');
      break;

    case SearchTypes.Laptop:
      filterProducts = products.filter(product => product.type === 'Laptops');
      break;

    case SearchTypes.Printer:
      filterProducts = products.filter(product => product.type === 'Printers');
      break;

    default:
      break;
  }

  switch (specification) {
    case SearchSpecification.Specification_1:
      filterProducts = filterProducts.filter(product => product.specification === 'Specification 1');
      break;

    case SearchSpecification.Specification_2:
      filterProducts = filterProducts.filter(product => product.specification === 'Specification 2');
      break;

    case SearchSpecification.Specification_3:
      filterProducts = filterProducts.filter(product => product.specification === 'Specification3');
      break;

    default:
      break;
  }

  filterProducts = filterProducts.filter(product => product.title.toLowerCase().includes(normalizedQuery));

  return filterProducts;
};