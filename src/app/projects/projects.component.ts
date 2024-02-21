import { Component } from "@angular/core";

@Component({
    selector: 'projects-component',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent{
    items = [
        { imageUrl: 'netplix-desktop.png',
        text: {
        title: 'NetPlix',
        description: 'NetPlix, is a streaming service and production company. Launched on February 10, 2022, it offers a small library of one video. Make sure to subscribe. Build with React.js and Redux as state manager.',
        mainTechnology: 'React.js (Hooks, Session Storage)',
        stateManagement: 'Redux',
        serverSide: 'Node.js',
        database: 'Mongodb(on Atlas cloud)',
        style: 'SASS',
        libraries: 'Axios(http requests), React router, React-beautiful dnd, React-google-login, Font Awesome(Icons)',
        code: 'https://github.com/SundosGutty/Netplix-React-FE'
    
    } 
    },
        { imageUrl: 'monday-desktop.png', 
        text: {
        title: 'Tasker',
        description: 'Inspired by Monday, Tasker is THE app for planning, organizing, and tracking all of your team’s work in one place. Create your ideal workflow just in few minutes.',
        mainTechnology: 'Vue.js (with Vue CLI)',
        stateManagement: 'Vuex',
        serverSide: 'Node.js',
        database: 'Mongodb(on Atlas cloud)',
        style: 'SASS',
        libraries: 'Axios(http requests), Socket.io(Web Sockets), Vue- smooth - dnd(Drag and Drop), Vue router, Font Awesome(Icons)',
        code: 'https://github.com/SundosGutty/Tasker-FrontEnd'
    } 
    },
      ]
      

}