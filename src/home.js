export function generateHome () {
    // Get container to append elements
    
   
    let container = document.getElementById("content");
    
    let img = document.createElement("img");
    img.src = "https://picsum.photos/1000/500?";
    container.appendChild(img);
    // headline
    let h = document.createElement("h1");
    h.textContent = "Super Amazing Restaurant";
    container.appendChild(h);
    // paragraph
    let p = document.createElement("p");
    p.textContent = "Very cool restaurant because adipisicing elit. Inventore similique sapiente culpa magni provident molestiae reiciendis minima labore eum libero, eveniet obcaecati officiis repellat perferendis quasi aspernatur blanditiis saepe quia!";
    container.appendChild(p);
}