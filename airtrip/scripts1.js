document.getElementById('bookFlight').addEventListener('click', () => {
    const flightFrom = document.getElementById('flightFrom').value;
    const flightTo = document.getElementById('flightTo').value;
    const flightDate = document.getElementById('flightDate').value;

    if (!flightFrom || !flightTo || !flightDate) {
        alert("Please fill out all fields for flight booking.");
        return;
    }

    const flightDetails = `
        <h3>Flight Booking Details:</h3>
        <p><strong>From:</strong> ${flightFrom}</p>
        <p><strong>To:</strong> ${flightTo}</p>
        <p><strong>Date:</strong> ${flightDate}</p>
    `;

    document.getElementById('bookingDetails').innerHTML = flightDetails;
});

document.getElementById('bookRestaurant').addEventListener('click', () => {
    const restaurantName = document.getElementById('restaurantName').value;
    const restaurantDate = document.getElementById('restaurantDate').value;

    if (!restaurantName || !restaurantDate) {
        alert("Please fill out all fields for restaurant booking.");
        return;
    }

    const restaurantDetails = `
        <h3>Restaurant Booking Details:</h3>
        <p><strong>Name:</strong> ${restaurantName}</p>
        <p><strong>Date:</strong> ${restaurantDate}</p>
    `;

    document.getElementById('bookingDetails').innerHTML += restaurantDetails;
});
