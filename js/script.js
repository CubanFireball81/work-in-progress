const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const certifications = document.querySelector('#certifications')
const contact = document.querySelector('#contact')


const aboutContent = document.querySelector('#about-content')
const projectsContent = document.querySelector('#projects-content')
const certificationsContent = document.querySelector('#certifications-content')
const contactContent = document.querySelector('#contact-content')

// About Me window
about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        // modal: true,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

// My Projects window
projects.addEventListener('click', () => {
    const projectsBox = new WinBox({
        title: 'My Projects',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: projectsContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

// My Certifications window
certifications.addEventListener('click', () => {
    const certificationsBox = new WinBox({
        title: 'My Certifications',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: certificationsContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})

// Contact Me window
contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
})