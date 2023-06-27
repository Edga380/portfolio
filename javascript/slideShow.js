// Get all project buttons and projects
const projectButtons = document.querySelectorAll('[id^="projectButton"]');
const projectIds = document.querySelectorAll('[id^="project0"]');
const projects = document.querySelectorAll('.project');
let slideShowTimeOut = 0;
var num = 0;

// Function to handle button click
function handleButtonClick(projectIndex) {
  projects.forEach((project, index) => {
    project.style.display = index === projectIndex ? "flex" : "none";
  });

  projectButtons.forEach((button, index) => {
    button.style.backgroundColor = index === projectIndex ? "rgba(0, 93, 153, 1)" : "";
  });
}

// Add event listeners to project buttons
projectButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    handleButtonClick(index);
    num = index;
  });
});

// Add event listeners to project buttons
projects.forEach((project) => {
    project.addEventListener("mouseover", () => {
    clearTimeout(slideShowTimeOut);
  });
});

// Add event listeners to project buttons
projects.forEach((project) => {
    project.addEventListener("mouseout", () => {
        slideShowTimeOut = setTimeout(SlideShow, 1000);
  });
});

// Automatically run through projects
SlideShow();
function SlideShow(){
    handleButtonClick(num);
    projects.length - 1 <= num ? num = 0 : num++;
    slideShowTimeOut = setTimeout(SlideShow, 3000);
};