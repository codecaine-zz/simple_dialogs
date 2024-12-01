// Export constants and functions
export const DialogIcons = {
    INFO: 'info',
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    QUESTION: 'question'
};

export function showAlertDialog(title, text, icon = DialogIcons.INFO, isModal = true) {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'OK',
        allowOutsideClick: !isModal,
        backdrop: isModal,
        showCancelButton: showCancelButton
    }).then((result) => {
        if (resultCallback) resultCallback(result);
    });
}

export function showInputDialog(title, inputType = 'text', inputPlaceholder = '', inputValue = '', isModal = true, resultCallback, showCancelButton = true) {
    return Swal.fire({
        title: title,
        input: inputType,
        inputPlaceholder: inputPlaceholder,
        inputValue: inputValue,
        showCancelButton: showCancelButton,
        confirmButtonText: 'Submit',
        allowOutsideClick: !isModal,
        backdrop: isModal
    }).then((result) => {
        if (result.isConfirmed) {
            if (resultCallback) resultCallback(result.value);
            return result.value; // Added return
        } else {
            if (resultCallback) resultCallback(null);
            return null; // Added return
        }
    });
}

export function showConfirmationDialog(title, text, confirmButtonText = 'Yes', cancelButtonText = 'No', isModal = true, resultCallback, showCancelButton = true) {
    return Swal.fire({
        title: title,
        text: text,
        icon: DialogIcons.QUESTION,
        showCancelButton: showCancelButton,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        allowOutsideClick: !isModal,
        backdrop: isModal
    }).then((result) => {
        if (resultCallback) resultCallback(result.isConfirmed);
        return result.isConfirmed; // Added return statement
    });
}

export function showToastNotification(title, icon = DialogIcons.SUCCESS, position = 'top-end', timer = 3000, resultCallback) {
    return Swal.fire({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        icon: icon,
        title: title,
    }).then((result) => {
        if (resultCallback) resultCallback(result);
    });
}

export function showCustomDialog(config) {
    return Swal.fire(config);
}