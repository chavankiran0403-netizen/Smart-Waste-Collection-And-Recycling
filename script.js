function scrollToRequest() {
    document.getElementById("request").scrollIntoView({
        behavior: "smooth"
    });
}


// Waste Pickup Form
document.getElementById("wasteForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const requestId =
        "SWC" + Math.floor(1000 + Math.random() * 9000);

    // Save status
    localStorage.setItem(
        "status_" + requestId,
        "Pending"
    );

    // Show success message
    document.getElementById("successMessage").innerHTML =
        "✅ Request submitted successfully!<br>" +
        "Your Request ID is: <strong>" + requestId + "</strong>";

    // Reset form
    document.getElementById("wasteForm").reset();

});


// Track Request
function trackRequest() {

    const id =
        document.getElementById("requestId").value.trim();

    if (id === "") {

        document.getElementById("trackingResult").innerHTML =
            "Please enter your Request ID.";

        return;
    }

    const status =
        localStorage.getItem("status_" + id) || "Pending";

    document.getElementById("trackingResult").innerHTML =
        "🟢 Request Status: <strong>" + status + "</strong>";
}