import burger from './img/burger.jpeg'
import styles from  './styles/menuItems.module.css'

class Item {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}
let menu = [

    new Item(
        `${burger}`, "burger3", "254"
    ),
    new Item(
        `${burger}`, "burger2", "254"
    ),
    new Item(
        `${burger}`, "burger4", "254"
    )
]
const menuItems = () => {
    let content = document.querySelector('#content');
    // content.classList.add(styles.content);
   
    const menuPage = document.createElement('div');
    menuPage.classList.add(styles.content);
    menu.forEach(item => {
          
        const card = document.createElement('div');
        card.classList.add(styles.card);
        const image = new Image();
        image.src = item.image;
        image.classList.add(styles.image);
        const h3 = document.createElement('h3');
        h3.textContent = `${item.title}`;
        h3.classList.add(styles.headingTitle)
        const h4 = document.createElement('h4');
        h4.textContent = `${item.price}`;
        card.appendChild(image);
        card.appendChild(h3);
        card.appendChild(h4);
        content.appendChild(card);
    });
}
export default menuItems;