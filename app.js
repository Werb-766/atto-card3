// Mock data for recent trips
const mockTrips = [
    {
        route: '63',
        type: 'Автобус',
        time: '19:59',
        date: '01.04.2025',
        price: '1700 UZS',
        status: 'Оплачено'
    },
    // Add more mock trips as needed
];

// Function to generate random QR code data
function generateQRCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Initialize QR Scanner
function initQRScanner() {
    const html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 }
    );

    html5QrcodeScanner.render((decodedText) => {
        console.log(`QR Code detected: ${decodedText}`);
        alert(`Платеж успешно выполнен!\nКод: ${decodedText}`);
        // Add payment to history
        addTripToHistory({
            route: '63',
            type: 'Автобус',
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            price: '1700 UZS',
            status: 'Оплачено'
        });
    });
}

// Function to add trip to history
function addTripToHistory(trip) {
    const tripList = document.getElementById('tripList');
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
    tripList.prepend(tripItem);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Initialize QR Scanner
    initQRScanner();

    // Populate initial trip history
    mockTrips.forEach(trip => addTripToHistory(trip));
});