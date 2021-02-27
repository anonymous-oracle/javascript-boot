import { Modal } from './UI/Modal.js'

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }
    locateUserHandler() {
        const geoLocation = navigator.geolocation
        if (!geoLocation) {
            alert('Location feature not available in the browser, please update to a more modern browser or enter an address');
            return;
        }
        const modal = new Modal('loading-modal-content', 'loading location - please wait');
        modal.show();
        geoLocation.getCurrentPosition(successResult => {
            modal.hide();
            const coordinates = {
                lat: successResult.coords.latitude,
                long: successResult.coords.longitude
            };
            console.log(coordinates);
        }, error => {
            modal.hide();
            alert('Could not locate you. Please enter the address manually');
        });
    };

    findAddressHandler() {

    };
}

const placeFinder = new PlaceFinder();