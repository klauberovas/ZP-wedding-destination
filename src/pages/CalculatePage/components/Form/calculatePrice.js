import { formatPrice } from './formatPrice';
import {
  listDestinations,
  listCeremony,
  listPackage,
  listServices,
} from './data';

export const calculatePrice = (userData) => {
  let totalPrice = 0;
  if (userData.destination) {
    let destinationPrice = listDestinations.find(
      (item) => item.name === userData.destination,
    ).price;
    totalPrice += destinationPrice;
  }

  if (userData.ceremony !== '') {
    let ceremonyPrice = listCeremony.find(
      (item) => item.name === userData.ceremony,
    ).price;
    totalPrice += ceremonyPrice;
  }

  if (userData.package !== '') {
    let packagePrice = listPackage.find(
      (item) => item.name === userData.package,
    ).price;
    totalPrice += packagePrice;
  }

  if (userData.services && userData.services.length !== 0) {
    userData.services.forEach((service) => {
      let servicePrice = listServices.find(
        (item) => item.value === service,
      ).price;
      totalPrice += servicePrice;
    });
  }
  return formatPrice(totalPrice);
};
