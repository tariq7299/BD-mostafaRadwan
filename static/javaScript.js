function copyText(button) {
    malfunctionLabel = button.textContent
    navigator.clipboard.writeText(malfunctionLabel);
    var tooltip = button.nextElementSibling;
    tooltip.innerHTML = "Copied";
}

function setToolBoxTextToDefault(button) {
  var tooltip = button.nextElementSibling;
  tooltip.innerHTML = "Click to Copy";
}

function showSubcategories(category) {

  document.querySelector('.sub-sub-category').style.display = 'none';
  document.querySelector('.sub-category').style.display = 'block';
  var subCatTitle = document.getElementById("subcat-title");
  var row = document.querySelector(".sub-category-row");

  subCatTitle.innerHTML = "Subcategories of " + category;
  row.innerHTML = "";
  
  var subcategories = {
      "Cutting BD": ["Applicator Problem", "Schleuniger", "Komax", "Ulmer"],
      "Crimping BD": ["Applicator Change", "Crimping Press"],
      "Shrinking BD": ["DSG Canusa", "Heat Gun"],
      "Testing BD": ["Clip Gun","Grommet","layup","Line & Carousel","Pin Punching","Printer","Seal Machine","Test Module","Test Table"],
      "Stripping BD": ["Stripping M/C"],
      "Twisting BD": ["Twisting M/C"],
      "Welding BD": ["USS M/C"],
      "Taping BD": ["Taping M/C"],
      "Soldering BD": ["Solder"]
  };

  for (var i = 0; i < subcategories[category].length; i++) {

    var subcat = subcategories[category][i];

    var td = document.createElement("td");
    td.classList.add("tooltip");

    var button = document.createElement("button");
    
    var span = document.createElement("span");
    span.innerHTML = "Click to Copy"
    span.classList.add("tooltiptext");

    button.innerHTML = subcat;
    button.onclick = function() {
      copyText(this);
      showSubsubcategories(this.innerHTML);
    }
    button.addEventListener("mouseout", function() {
      setToolBoxTextToDefault(this);
    });

    td.appendChild(button);
    td.appendChild(span);
    row.appendChild(td);
  }
}

function showSubsubcategories(subcategory) {

  document.querySelector('.sub-sub-category').style.display = 'block';
  var subSubCatTitle = document.getElementById("subsubcat-title");
  var row = document.querySelector(".sub-sub-category-row");

  subSubCatTitle.innerHTML = "Faults For " + subcategory;
  row.innerHTML = "";

  var subsubcategories = {
    "Applicator Problem": ["Scan Applicator ID"], 
    "Schleuniger": ["Machine Problem"], 
    "Komax": ["CAO Problem", "CFA Problem", "Crimping Problem", "Gripper Problem", "PC Problem", "Press Problem", "Seal station Problem", "Stripping Problem", "Swivel Problem", "Topwin Problem", "Wire Drive Problem", "Wire length Problem", "Wire Tray Problem"],
    "Ulmer": ["Ulmer Machine Problem"],
    "Applicator Change": ["Applicator Change Problem"], 
    "Crimping Press": ["Crimping Press Problem"], 
    "DSG Canusa": ["Heaters Problem", "Shrinking Cap Problem", "Shrinking Machine Problem"], 
    "Heat Gun": ["Heat Gun Problem", "Shrink Problem"], 
    "Clip Gun": ["Clip Gun Problem"], 
    "Grommet": ["Grommet Problem"], 
    "layup": ["layup Problem"], 
    "Line & Carousel": ["المبة لا تعمل", "أعطال المحرك", "سرعة المحرك غير ثابتة"], 
    "Pin Punching": ["Pin Punching Problem"], 
    "Printer": ["Printer Problem"], 
    "Seal Machine": [" الماكينة لا تعمل", "السيل لا يدخل التراك"], 
    "Test Module": ["Test Module number is:"], 
    "Test Table": ["التست لا يعمل", "الكشاف  لا يعمل", "وجود مشكلة فى الاسكان"], 
    "Twisting M/C": ["Twist Clamp Problem", "Twist Door problem", "Twist Problem"], 
    "USS M/C": ["Terminal Change", "Welding Machine Problem", "Welding Problem"], 
    "Taping M/C": ["Tapping problem", "Tapping Touch Screen Problem"], 
    "Solder": ["Solder Problem"]
  };

  for (var i = 0; i < subsubcategories[subcategory].length; i++) {
    var subsubcat = subsubcategories[subcategory][i];

    var td = document.createElement("td");
    td.classList.add("tooltip");

    var button = document.createElement("button");


    var span = document.createElement("span");
    span.innerHTML = "Click to Copy"
    span.classList.add("tooltiptext");

    button.innerHTML = subsubcat;
    button.onclick = function() {
      copyText(this);
    }

    button.addEventListener("mouseout", function() {
      setToolBoxTextToDefault(this);
    });

  
    
    td.appendChild(button);
    td.appendChild(span);
    row.appendChild(td);
  }
}
