import data from 'data.json';

export function getLogoPath() {
  return 'jcrew_logo.svg';
}

export function getLandingImagePath() {
  return data.landingImage;
}

export function getMainNavItems() {
  return fetch('/data/v1/US/navigation', { mode: 'no-cors' })
    .then(response => response.json())
    .then(data => data.nav[0].navGroups[0].navItems)
    .catch(error => console.log(error));
}

export function getGridItems() {
  return data.items;
}
