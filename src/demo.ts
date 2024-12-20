// Richtiges Passwort festlegen
const correctPassword: string = "213sk";

// DOM-Elemente abrufen
const passwordInput = document.getElementById("passwordInput") as HTMLInputElement;
const submitButton = document.getElementById("submitPassword") as HTMLButtonElement;
const errorText = document.getElementById("error") as HTMLParagraphElement;
const passwordPrompt = document.getElementById("passwordPrompt") as HTMLDivElement;
const mainContent = document.getElementById("mainContent") as HTMLDivElement;

// Funktion zur Passwortüberprüfung
function checkPassword(): void {
    const enteredPassword: string = passwordInput.value;
    console.log("Eingegebenes Passwort:", enteredPassword); // Überprüfe, ob das Passwort eingegeben wurde

    // Überprüfen, ob das eingegebene Passwort korrekt ist
    if (enteredPassword === correctPassword) {
        console.log("Passwort korrekt!"); // Log für korrektes Passwort
        passwordPrompt.classList.add("hidden"); // Passwortabfrage ausblenden
        mainContent.classList.remove("hidden"); // Hauptinhalt anzeigen
        errorText.classList.add("hidden"); // Fehlermeldung ausblenden
    } else {
        console.log("Passwort falsch!"); // Log für falsches Passwort
        errorText.classList.remove("hidden"); // Fehlermeldung anzeigen
    }
}

// Event-Listener für den Button hinzufügen
submitButton.addEventListener("click", checkPassword);

// Optional: Passwort auch per Enter-Taste bestätigen
passwordInput.addEventListener("keyup", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
        checkPassword();
    }
});

// Modal- und Schließen-Button-Elemente auswählen
const modal = document.getElementById("myModal") as HTMLElement | null;
const image = document.querySelector(".clickable-image") as HTMLElement | null;
const closeButton = document.querySelector(".close") as HTMLElement | null;

// Überprüfen, ob die Elemente existieren, bevor die Event-Listener hinzugefügt werden
if (modal && image && closeButton) {
    // Bild anklicken, um das Modal zu öffnen
    image.onclick = function() {
        modal.style.display = "block";
    }

    // Modal durch Klick auf das Schließen-Symbol schließen
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // Modal schließen, wenn außerhalb des Inhalts geklickt wird
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}


