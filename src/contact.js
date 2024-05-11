export function generateContact() {
    let container = document.getElementById("content");
    let h1 = document.createElement('h1')
    h1.textContent = "Our Contact Details"
    let h2 = document.createElement('h2');
    h2.textContent = " Address: 123 Magical Lane, Enchantville, WonderlandPhone: +1 (555) 123-4567 Email: info@whimsydelights.com";
    container.appendChild(h1);
    container.appendChild(h2);
}