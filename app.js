let section = document.getElementsByTagName("section")[0];

section.addEventListener("click", (e) => {
  // if(e.target == "")
  console.log(e.target.tagName);
  if (e.target.tagName == "INPUT") {
    e.target.style.backgroundColor = "rgb(255, 255, 0)";
  }
});

class Student {
  constructor(gpa) {
    this.gpa = gpa;
  }

  stringGPA()
}

