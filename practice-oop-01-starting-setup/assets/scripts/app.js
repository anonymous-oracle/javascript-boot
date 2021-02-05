class DOMHelper {
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
}

class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElement = document.getElementById(hostElementId);
        } else {
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }
    detach = () => {
        this.element.remove();
    }
    attach() {
        this.hostElement.insertAdjacentElement(this.insertBefore ? 'beforebegin' : 'beforeend', this.element);
    }
}

class Tooltip extends Component {

    constructor(closeNotifierFunction) {
        super('active-projects');
        this.closeNotifier = closeNotifierFunction;
        this.create();
    }

    closeToolTip = () => {
        this.detach();
        this.closeNotifier();
    };
    create() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'DUMMY!';
        tooltipElement.addEventListener('click', this.detach);
        this.element = tooltipElement;
    }
}

class ProjectItem {
    hasActiveToolTip = false;

    constructor(id, updateProjectListFunction, type) {
        this.id = id;
        this.updateProjectHandler = updateProjectListFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }
    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate'
        switchBtn.addEventListener('click', this.updateProjectHandler.bind(null, this.id));
    };

    showMoreInfoHandler() {
        if (this.hasActiveToolTip) {
            return;
        }
        const tooltip = new Tooltip(() => { this.hasActiveToolTip = false });
        tooltip.attach();
        this.hasActiveToolTip = true;
    }

    update(updateProjectListFunction, type) {
        this.updateProjectHandler = updateProjectListFunction;
        this.connectSwitchButton(type);
    }
    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler)

    };
}

class ProjectList {
    projects = []; // fields are converted to properties well before anything else runs in the class
    constructor(type) {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`); // # is used for selecting id's
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
        }
        console.log(this.projects);
    }
    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type)
    };

    switchProject(projectId) {
        // const projectIndex = this.projects.find(p=>p.id===projectId);
        // this.projects.splice(projectIndex, 1);
        // OR
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
    setSwitchHandler(swHandler) {
        this.switchHandler = swHandler;
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandler(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandler(activeProjectsList.addProject.bind(activeProjectsList));
    }
}

App.init();