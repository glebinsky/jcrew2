export function getMainNavItems() {
  return fetch('/data/v1/US/navigation', { mode: 'no-cors' })
    .then(response => response.json())
    .then(data => data.nav[0].navGroups[0].navItems)
    .catch(error => console.log(error));
}

export function getProductList(category) {
  return fetch(`/data/v1/US/enhance-category/c/${category}/newarrivals`, { mode: 'no-cors' })
    .then(response => response.json())
    .then(data => data.productList)
    .catch(error => console.log(error));
}
