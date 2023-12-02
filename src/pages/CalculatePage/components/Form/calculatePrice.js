import { formatPrice } from './formatPrice';
import {
  listDestinations,
  listCeremony,
  listPackage,
  listServices,
} from './data';

export const calculatePrice = (userData, packageType) => {
  let totalPrice = 0;
  if (
    userData.destination !== '' &&
    userData.nights !== '' &&
    userData.guests !== ''
  ) {
    let destinationPrice = listDestinations.find(
      (item) => item.name === userData.destination,
    ).price;
    totalPrice +=
      destinationPrice * Number(userData.nights) * Number(userData.guests);
  }

  if (userData.ceremony !== '') {
    let ceremonyPrice = listCeremony.find(
      (item) => item.name === userData.ceremony,
    ).price;
    totalPrice += ceremonyPrice;
  }

  if (packageType !== '') {
    let packagePrice = listPackage.find(
      (item) => item.name === packageType,
    ).price;
    totalPrice += packagePrice;
  }

  if (userData.services.length !== 0) {
    userData.services.forEach((service) => {
      let servicePrice = listServices.find(
        (item) => item.value === service,
      ).price;
      totalPrice += servicePrice;
    });
  }
  return formatPrice(totalPrice);
};
