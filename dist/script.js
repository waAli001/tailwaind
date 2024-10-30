// Toggle notification modal visibility
const notificationBell = document.getElementById('notification-bell');
const notificationModal = document.getElementById('notification-modal');

notificationBell.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    notificationModal.classList.toggle('hidden'); // Toggle hidden class
});

// Click outside the modal to close it
window.addEventListener('click', (e) => {
    if (e.target === notificationModal) {
        notificationModal.classList.add('hidden'); // Close the modal if clicked outside
    }
});