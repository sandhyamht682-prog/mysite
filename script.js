// Variable cache memory to hold visitor details
let activeUser = "";
let activePhone = "";

// Handles initial user authentication transition
function startChat() {
    const nameVal = document.getElementById('chat-name').value.trim();
    const phoneVal = document.getElementById('chat-phone').value.trim();

    // Check if fields are empty
    if(nameVal === "" || phoneVal === "") {
        alert("Please provide both a name and number to log in.");
        return;
    }

    activeUser = nameVal;
    activePhone = phoneVal;

    // Flip UI visibility matrices
    document.getElementById('chat-auth').classList.add('hidden');
    document.getElementById('chat-window').classList.remove('hidden');

    // Display customized validation marker
    const box = document.getElementById('chat-messages');
    box.innerHTML += `<div class="message system">System: Hello ${activeUser}! Leave a note and I will get back to you at ${activePhone}.</div>`;
}

// Manages sending and responding logic
function sendMessage() {
    const input = document.getElementById('message-input');
    const txt = input.value.trim();

    if(txt === "") return;

    const box = document.getElementById('chat-messages');

    // Append user input
    box.innerHTML += `<div class="message user"><strong>You:</strong> ${txt}</div>`;
    input.value = ""; // Clear the text input field
    box.scrollTop = box.scrollHeight; // Automatically scroll to the bottom

    // Simulate real-time response feedback hook
    setTimeout(() => {
        box.innerHTML += `
            <div class="message incoming">
                <strong>Portfolio Bot:</strong> Got your message, ${activeUser}! Your notification request has been logged. I'll reach out soon.
            </div>`;
        box.scrollTop = box.scrollHeight;
    }, 1200);
}

// Bind standard keyboard Enter button to activate send handler seamlessly
document.getElementById('message-input')?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});