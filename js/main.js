import {
    DialogIcons,
    showAlertDialog,
    showInputDialog,
    showConfirmationDialog,
    showToastNotification,
    showCustomDialog
} from './dialogs.js';

document.getElementById('alertButton').addEventListener('click', () => {
    showAlertDialog('Alert Title', 'This is an alert message', DialogIcons.WARNING, true);
});

document.getElementById('inputButton').addEventListener('click', () => {
    showInputDialog('Input Title', 'text', 'Enter your name', '', true).then((inputValue) => {
        showAlertDialog('Input Received', `Your name is: ${inputValue}`, DialogIcons.INFO, true);
    });
});

document.getElementById('confirmButton').addEventListener('click', () => {
    showConfirmationDialog('Confirm Action', 'Are you sure you want to proceed?', 'Proceed', 'Cancel', true)
        .then((isConfirmed) => {
            showToastNotification(isConfirmed ? 'Action confirmed.' : 'Action canceled.', isConfirmed ? DialogIcons.SUCCESS : DialogIcons.ERROR, 'top-end', 3000);
        });
});

document.getElementById('toastButton').addEventListener('click', () => {
    showToastNotification('Operation successful!', DialogIcons.SUCCESS, 'bottom-end', 5000);
});

document.getElementById('textareaButton').addEventListener('click', () => {
    showInputDialog('Textarea Input', 'textarea', 'Enter your message', '', true).then((inputValue) => {
        showAlertDialog('Textarea Input Received', `Your message: ${inputValue}`, DialogIcons.INFO, true);
    });
});

document.getElementById('runTestsButton').addEventListener('click', () => {
    showAlertDialog('Test Alert', 'This is a test alert.', DialogIcons.INFO).then(() => {
        return showInputDialog('Test Input', 'text', 'Enter a test value:', '', true);
    }).then((inputValue) => {
        showAlertDialog('Test Input Received', `Test Value: ${inputValue}`, DialogIcons.INFO, true);
        return showConfirmationDialog('Test Confirmation', 'Do you confirm this test?', 'Yes', 'No', true);
    }).then((isConfirmed) => {
        showToastNotification(isConfirmed ? 'Test Confirmed.' : 'Test Canceled.', isConfirmed ? DialogIcons.SUCCESS : DialogIcons.ERROR, 'top-end', 3000);
        return showToastNotification('Test Toast', DialogIcons.SUCCESS, 'top-end', 3000);
    }).then(() => {
        return showInputDialog('Test Textarea', 'textarea', 'Enter a test message:', '', true);
    }).then((textareaValue) => {
        showAlertDialog('Test Textarea Received', `Test Message: ${textareaValue}`, DialogIcons.INFO, true);
    });
});
