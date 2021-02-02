class Tooltip { }

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }
    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click',);
    };

    connectMoreInfoButton() { };
}

class ProjectList {
    projects = []; // fields are converted to properties well before anything else runs in the class
    constructor(type) {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`) // # is used for selecting id's
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id));
        }
        console.log(this.projects);
    }
    addProject() {
        console.log(this)
    };
    switchProject(projectId) {
        // const projectIndex = this.projects.find(p=>p.id===projectId);
        // this.projects.splice(projectIndex, 1);
        // OR
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
    set switchHandler(swHandler) {
        this.switchHandler = swHandler;
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finish');
        activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }
}

App.init();