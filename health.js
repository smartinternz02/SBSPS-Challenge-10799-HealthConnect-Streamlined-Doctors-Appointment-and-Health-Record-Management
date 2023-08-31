// Example JavaScript code for HealthConnect application

// Simulated data
const doctors = [
  {
    id: 1,
    name: "Dr. Smith",
    specialty: "Cardiology",
    location: "City Hospital",
  },
  {
    id: 2,
    name: "Dr. Johnson",
    specialty: "Dermatology",
    location: "Skin Clinic",
  },
  // ... more doctor data
];

const appointments = [];

// Function to display doctors' recommendations
function displayDoctorRecommendations() {
  const doctorList = document.getElementById("doctor-list");
  doctorList.innerHTML = ""; // Clear previous recommendations

  doctors.forEach((doctor) => {
    const doctorItem = document.createElement("li");
    doctorItem.innerHTML = `
      <strong>${doctor.name}</strong><br>
      Specialty: ${doctor.specialty}<br>
      Location: ${doctor.location}<br>
      <button onclick="bookAppointment(${doctor.id})">Book Appointment</button>
    `;
    doctorList.appendChild(doctorItem);
  });
}

// Function to book an appointment
function bookAppointment(doctorId) {
  const selectedDoctor = doctors.find((doctor) => doctor.id === doctorId);
  if (selectedDoctor) {
    const appointment = {
      doctor: selectedDoctor,
      time: "2023-09-01 10:00 AM", // Replace with actual time logic
    };
    appointments.push(appointment);
    alert("Appointment booked!");
  } else {
    alert("Doctor not found.");
  }
}

// Initialize the app
function initializeApp() {
  displayDoctorRecommendations();
}

// Run the app initialization when the page loads
window.onload = initializeApp;
