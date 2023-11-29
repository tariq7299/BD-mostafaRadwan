# Global
-   Whenever a user clicks on something just open the category and close and dissappear everything else

# html
-   Copy all categories from the main row

# javascript
-   Find a better way to store sub-cat dict and sub-sub-cat dict
-   use "var" or maybe there is somthing better
-   Rename the functions and wncapsulate them
- Add all code inside afterdom loaded function
-   Try to create the first row using java

```
    const categories = ["Cutting BD", "Shrinking BD"];
    const table = document.createElement("table");

    for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const span = document.createElement("span");

    img.src = `${category}.png`;
    img.alt = category;
    button.innerHTML = category;
    button.onclick = function() {
        copyText(this);
        showSubcategories(category);
    };
    button.addEventListener("mouseout", function() {
        outFunc(this);
    });
    span.innerHTML = "Click to Copy";

    cell1.appendChild(img);
    cell2.appendChild(button);
    cell2.appendChild(span);
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
    }

    document.body.appendChild(table);
```
-   Add the functions to each button instead of typing it html using javascript