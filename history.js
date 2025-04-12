// Mock data for full trip history
const fullTripHistory = [
    {
        route: '63',
        type: 'Автобус',
        time: '19:59',
        date: '01.04.2025',
        price: '1700 UZS',
        status: 'Оплачено'
    },
    {
        route: '63',
        type: 'Автобус',
        time: '19:58',
        date: '01.04.2025',
        price: '1700 UZS',
        status: 'Оплачено'
    },
    // Add more historical trips
];

document.addEventListener('DOMContentLoaded', () => {
    const tripList = document.getElementById('fullTripList');
    
    fullTripHistory.forEach(trip => {
        const tripItem = document.createElement('div');
        tripItem.className = 'trip-item';
        tripItem.innerHTML = `
            <div class="trip-info">
                <div>Маршрут ${trip.route} - ${trip.type}</div>
                <div>${trip.time} / ${trip.date}</div>
            </div>
            <div class="trip-price">
                <div>${trip.price}</div>
                <div class="status">${trip.status}</div>
            </div>
        `;
        tripList.appendChild(tripItem);
    });
});