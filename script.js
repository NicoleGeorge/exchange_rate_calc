const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates & update the DOM
function calculate() {
  //   console.log('RAN'); working...woot-woot
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  //   console.log(currency_one, currency_two);

  fetch(
    `https://v6.exchangerate-api.com/v6/e41b1edc60d38faa51c543fb/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
      const rate = data.conversion_rates[currency_two];

      console.log(rate);
    });
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();
