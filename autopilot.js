function getNewCar () {
  var place = {
    city: 'Toronto',
    passengers: 0,
    gas: 100
  }
  return place;
}
// console.log(getNewCar());

// --------------------------------//
var cars = [];

function addCar (cars, newCar) {
  cars.push(newCar);
  return 'Adding new car to fleet. Fleet size is now ' + cars.length + '.';
}
// console.log(addCar(cars, 'Honda'));

// --------------------------------//
var car = {
  passengers:  0,
  gas:  0,
  city: 'London'
}

// --------------------------------//
function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas        -= 10;
  return 'Picked up passenger. Car now has ' + car.passengers + ' passengers.';
}
// console.log(pickUpPassenger(car));

// --------------------------------//
function getDestination(car) {
  if (car.city === 'Toronto') {
    return 'Mississauga';
  } else if (car.city === 'Mississauga') {
    return 'London';
  } else if (car.city === 'London') {
    return 'Toronto';
  }
}
// console.log(getDestination(car));

// --------------------------------//
function fillUpGas(car) {
  oldGas = car.gas;
  car.gas = 100;
  return 'Filled up to ' + getGasDisplay(car.gas) + ' on gas from ' + getGasDisplay(oldGas);
}

function getGasDisplay(gasAmount) {
  return gasAmount;
}

// console.log(fillUpGas(car));

// --------------------------------//
function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    return fillUpGas(car);
  }
  car.city = getDestination(car);
  car.gas -= cityDistance;
  return 'Drove to ' + car.city + '. Remaining gas: ' + getGasDisplay(car.gas) + '.';
}
// console.log(drive(car, 50));

// --------------------------------//
function dropOffPassengers(car) {
  previousPassengers = car.passengers;
  car.passengers = 0;
  return 'Dropped off ' + previousPassengers + ' passengers.';
}
// console.log(dropOffPassengers(car));

// --------------------------------//
function act(car) {
  var distanceBetweenCities = 10;

  if (car.gas < 20) {
    fillUpGas(car);
  } else if (car.passengers < 3) {
    pickUpPassenger(car);
  } else if (car.gas < distanceBetweenCities) {
    return fillUpGas(car)
  }

  var droveTo = drive(car, distanceBetweenCities);
  var passengersDropped = dropOffPassengers(car);

  return droveTo + ' ' + passengersDropped
}

// console.log(act(car));

// --------------------------------//

function commandFleet(cars) {
  for (var i = 0; i < cars.length; i++) {
    var action = act(cars[i]);
    return action;
  }
}
console.log(commandFleet(cars))

// --------------------------------//
function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i++) {
    newCar = getNewCar
    return addCar(cars, 'BMW');
    commandFleet(cars);
  }
}

var cars = [];
console.log(addOneCarPerDay(cars, 10));
