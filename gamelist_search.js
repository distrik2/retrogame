function SearchGame() {
    var input = document.getElementById("Search");
    var filter = input.value.toLowerCase();
    var class_sec = document.getElementsByClassName('section_list');

    for (i = 0; i < class_sec.length; i++) {
        if (class_sec[i].innerText.toLowerCase().includes(filter)) {
            class_sec[i].style.display = "block";
        } else {
            class_sec[i].style.display = "none";
        }
    }
}