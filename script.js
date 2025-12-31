document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".navbar a");
    const dishes = document.querySelectorAll(".dish-card");

    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const filter = this.getAttribute("data-filter");

            dishes.forEach(dish => {
                if (filter === "all" || dish.dataset.category === filter) {
                    dish.style.display = "block";
                    
                } else {
                    dish.style.display = "none";
                }
            });
        });
    });
});

// document: This refers to your entire HTML webpage.

// addEventListener: This tells the browser to "listen" for a specific event.

// "DOMContentLoaded": This is the event. It means "Wait until the HTML is finished loading."

// Why? If the script runs before the HTML exists, it won't find your buttons or cards.

// const: This creates a "variable"—a named container to store information.

// querySelectorAll: This is like a search tool. It goes into the HTML and finds all elements that match the CSS name.

// filterLinks now holds all your navbar links.

// dishes now holds all your food cards.

// forEach: Since you have many links (Home, Rice, Noodles), this tells the code to "do the following for every single link."

// e.preventDefault(): Normally, when you click a link (<a>), the page refreshes or jumps. This "prevents" that default behavior so the filter stays on the same page.

// this: Refers to the specific link you just clicked.

// getAttribute("data-filter"): It looks at the HTML of that link and reads the category name (e.g., data-filter="rice"). It saves that word in a variable called filter.

// filter === "all": Did the user click the "All" button?

// dish.dataset.category === filter: Does the category labeled on this dish card match the link that was clicked?

// If YES: It sets the CSS to display: block (makes it visible).

// If NO: It sets the CSS to display: none (removes it from the page layout).
