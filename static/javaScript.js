function copyText(text) {
    navigator.clipboard.writeText(text);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Click to Copy";
  }

  function showSubcategories(category) {
    var title = document.getElementById("subcat-title");
    var buttons = document.getElementById("subcat-buttons");
    title.innerHTML = "Subcategories of " + category;
    buttons.innerHTML = "";
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
    for (var i = 0; i < subcategories[category].length; i++) {
      var subcat = subcategories[category][i];
      var button = document.createElement("button");
      button.className = "button";
      button.innerHTML = subcat;
      button.onclick = function() {
        copyText(this.innerHTML);
        showSubsubcategories(this.innerHTML);
      };
      buttons.appendChild(button);
    }
  }

  function showSubsubcategories(subcategory) {
    var title = document.getElementById("subsubcat-title");
    var buttons = document.getElementById("subsubcat-buttons");
    title.innerHTML = "Faults For " + subcategory;
    buttons.innerHTML = "";
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
      var button = document.createElement("button");
      button.className = "button";
      button.innerHTML = subsubcat;
      button.onclick = function() {
        copyText(this.innerHTML);
      };
      buttons.appendChild(button);
    }
  }