document.addEventListener('DOMContentLoaded', function () {
    const medicineDetails = {
        productName: "Example-1 Tablet",
        productId: "0987654321",
        mfgDate: "2024-05-05",
        expiryDate: "2026-05-05",
        fdaAuthorized: "Yes",
        fdaId: "FDA654321",
        batchNumber: "BATCH456789",
        manufacturer: "PharmaTab Inc."
    };

    // Populate the fields with the data
    document.getElementById('productName').textContent = medicineDetails.productName;
    document.getElementById('productId').textContent = medicineDetails.productId;
    document.getElementById('mfgDate').textContent = medicineDetails.mfgDate;
    document.getElementById('expiryDate').textContent = medicineDetails.expiryDate;
    document.getElementById('fdaAuthorized').textContent = medicineDetails.fdaAuthorized;
    document.getElementById('fdaId').textContent = medicineDetails.fdaId;
    document.getElementById('batchNumber').textContent = medicineDetails.batchNumber;
    document.getElementById('manufacturer').textContent = medicineDetails.manufacturer;
});
