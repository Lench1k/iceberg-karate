function byID(id) {
    return document.getElementById(id);
  }
  
  byID("toggle5").onclick = function() {
    if (byID("container5").classList.contains("closed5")) {
      byID("container5").classList.remove("closed5");
    } else {
      byID("container5").classList.add("closed5");
    }
  }
















     