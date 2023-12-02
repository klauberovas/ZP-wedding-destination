//import obřad
import official from './img/official.jpg';
import symbolic from './img/symbolic.jpg';
//import balíčků
import light from './img/light.jpg';
import deluxe from './img/deluxe.jpg';
import premium from './img/premium.jpg';
//import služeb
import flowers from './img/decoration.jpg';
import cake from './img/cake.jpg';
import photograph from './img/photograph.jpg';
import dj from './img/dj.jpg';
import dinner from './img/dinner.jpg';
import church from './img/church.jpg';
import celebrate from './img/celebrate.jpg';
import firework from './img/firework.jpg';
import makeup from './img/makeup.jpg';
import cruise from './img/cruise.jpg';
import flight from './img/flight.jpg';

export const listDestinations = [
  {
    name: 'Maledivy',
    price: 10000,
  },
  {
    name: 'Mauricius',
    price: 8000,
  },
  {
    name: 'Dominikánská republika',
    price: 6000,
  },
];

export const listCeremony = [
  {
    name: 'Oficiální obřad',
    photo: official,
    type: 'ceremony',
    price: 17000,
  },
  {
    name: 'Symbolický obřad',
    type: 'ceremony',
    photo: symbolic,
    price: 5000,
  },
];

export const listPackage = [
  {
    name: 'Balíček Light',
    type: 'package',
    photo: light,
    price: 20000,
  },
  {
    name: 'Balíček Delux',
    type: 'package',
    photo: deluxe,
    price: 30000,
  },
  {
    name: 'Balíček Premium',
    type: 'package',
    photo: premium,
    price: 45000,
  },
];

export const listServices = [
  {
    id: 0,
    label: 'Květinová výzdoba, svatební oblouk a kytice pro nevěstu',
    value: 'flowers',
    photo: flowers,
    price: 2500,
  },
  {
    id: 1,
    label: 'Svatební dort (1-20)',
    value: 'cake',
    photo: cake,
    price: 3000,
  },
  {
    id: 2,
    label: 'Fotograf',
    value: 'photograph',
    photo: photograph,
    price: 7500,
  },
  {
    id: 3,
    label: 'Živá hudba / DJ',
    value: 'music',
    photo: dj,
    price: 15000,
  },
  {
    id: 4,
    label: 'Romantická večeře',
    value: 'romanticDinner',
    photo: dinner,
    price: 8000,
  },
  {
    id: 5,
    label: 'Církevní obřad',
    value: 'churchCeremony',
    photo: church,
    price: 1500,
  },
  {
    id: 6,
    label: 'Občerstvení a nápoje',
    value: 'foodAndDrinks',
    photo: celebrate,
    price: 5000,
  },
  {
    id: 7,
    label: 'Ohňostroj',
    value: 'fireworks',
    photo: firework,
    price: 10000,
  },
  {
    id: 8,
    label: 'Svatební účes a makeup pro nevěstu',
    value: 'makeup',
    photo: makeup,
    price: 4500,
  },
  {
    id: 9,
    label: 'Plavba při západu slunce',
    value: 'cruise',
    photo: cruise,
    price: 14000,
  },
  {
    id: 10,
    label: 'Vyhlídkový let',
    value: 'flight',
    photo: flight,
    price: 12000,
  },
];

export const listPlaces = [
  {
    name: 'Pláž',
    type: 'place',
  },
  {
    name: 'Zahrada',
    type: 'place',
  },
  {
    name: 'Terasa',
    type: 'place',
  },
  {
    name: 'Kaple',
    type: 'place',
  },
];

export const packageDeluxe = ['flowers', 'cake', 'photograph', 'music'];

export const packagePremium = [
  ...packageDeluxe,
  'romanticDinner',
  'churchCeremony',
  'foodAndDrinks',
  'fireworks',
  'makeup',
  'cruise',
];
