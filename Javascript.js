//Q1.1 : Extend Date object with daysTo() method
Date.prototype.daysTo = function (otherDate) {
 
    const date1 = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const date2 = new Date(otherDate.getFullYear(), otherDate.getMonth(), otherDate.getDate());
  
    const diffInMilliseconds = Math.abs(date2 - date1);
  
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const completeDays = Math.floor(diffInMilliseconds / millisecondsInADay);
  
    return completeDays;
  };
  const d1 = new Date('2022-04-18');
  const d2 = new Date('2023-05-22');
  // console.log(d1.daysTo(d2)); // 399
  document.write('<h2>'+'Q1.1 : Quantity of complete days from date1 to date2 is : ' + d1.daysTo(d2)+'</h2>');



// ===========================================================================================================================




//Q1.2 : Function to calculate the Total from Input array of sales
// Input array
const sales = [
  { amount: 10000, quantity: 10 },
  { amount: 5000, quantity: 2 },
  { amount: 3000, quantity: 5 },
  { amount: 2000, quantity: 3 },
  { amount: 8000, quantity: 1 }
];


// New array with Total sales
const orderedSales = sales.map(sale => {
  return {
    amount: sale.amount,
    quantity: sale.quantity,
    Total: sale.amount * sale.quantity
  };
});
// Sorting the new array
orderedSales.sort((a, b) => a.Total - b.Total);
const jsonSales = JSON.stringify(orderedSales);

document.write('<h2>'+'Q1.2 : Array with total property sorted by total sales : '+ '</h2>');

for (let i = 0; i < orderedSales.length; i++) {
  document.write('<h3>'+ JSON.stringify(orderedSales[i])+'</h3>');
}




// ===========================================================================================================================



// //Q1.3   : Object Projection
function projectObject(source, prototype) {
  // Check if the source and prototype are both objects
  if (typeof source !== 'object' || typeof prototype !== 'object') {
    return {};
  }

  const projected = {};

  // Iterate over prototype object
  for (const key in prototype) {
    // if the property exists in the source object
    if (key in source) {
      if (typeof prototype[key] === 'object' && prototype[key] !== null) {
        const projectedValue = projectObject(source[key], prototype[key]);
        // adding the projected property only if it has at least one property
        if (Object.keys(projectedValue).length > 0) {
          projected[key] = projectedValue;
        }
      } else {
        // If the property is not an object or is null, assign its value from the source object
        projected[key] = source[key];
      }
    }
  }

  return projected;
}

// Input src object
const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
};

// Input proto object
const proto = {
  prop11: {
    prop22: null,
  },
};


const projectedObject = projectObject(src, proto);
const jsontext = JSON.stringify(projectedObject);
// console.log(jsontext);
document.write('<h2>'+'Q1.3  Projected object res : '+ '</h2>');
document.write(jsontext);
