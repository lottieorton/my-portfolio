//Adds event listeners to make the project descriptions drop down and hide on click

//Array of the project elements that are clickable
const projects = document.getElementById('projects').getElementsByTagName('h3');
const projectsArray = Array.from(projects);

//Array of element ids and the statuses of the dropdowns
let projectsDisplayed = [];
projectsArray.forEach(project => projectsDisplayed.push({id: project.id, status: false}));

//Creating the event functions to be executed on alternate clicks
const dropDown = function(event) {
    console.log(event.target.parentNode.getElementsByClassName('dropdown-content')[0].style.display);
    event.target.parentNode.getElementsByClassName('dropdown-content')[0].style.display = 'block';
    
    //Leaving the below commented as an alternative if want multiple element with the class name to be inc in dropdown
    /*const dropdownContents = event.target.parentNode.getElementsByClassName('dropdown-content');
    const dropdownContentsArray = Array.from(dropdownContents);
    dropdownContentsArray.forEach(dropdownContent => dropdownContent.style.display = 'block')*/
}

const hideProject = function(event) {  
    console.log(event.target.parentNode.getElementsByClassName('dropdown-content')[0].style.display);
    event.target.parentNode.getElementsByClassName('dropdown-content')[0].style.display = 'none';
}

//Event handler function for project dropdowns
const projectDisplayChange = function(event) {
    let projectDisplayed = projectsDisplayed.find(project => project.id === event.target.id).status;
    //console.log(projectDisplayed);
    if(projectDisplayed) {
            hideProject(event);
            projectsDisplayed.find(project => project.id === event.target.id).status = false;
    } else {
            dropDown(event);
            projectsDisplayed.find(project => project.id === event.target.id).status = true;
    }
}

//Loops through array of projects and assigns the event hander function
projectsArray.forEach(project => project.onclick = projectDisplayChange);