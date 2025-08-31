document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to EzraSchwartz.org");
    let projectCount = 0;

    const projects = [
        {
            id: 'project1',
            name: 'Cycling AutoShift',
            description: 'In this project, I worked to create automatic shifting on a bike using a custom ML model for each rider. The shifting algorithm is an ML model that was trained on historical Strava data, and the on-bike shifting is performed by a microcontroller, which digests real-time packets from BLE sensors (speed, cadence, and power), feeds that data into the ML model, and sends a shifting signal to the electronic shifters.',
            link: 'Autoshift.html'
        },
        {
            id: 'project2',
            name: 'BLE Cycling Power Service',
            description: 'This project is a library I developed for the AutoShift project. During the AutoShift project, I struggled to find a library to dissect a BLE Powermeter packet. Because of this, I decided to create my own library to do so. This library is also available in the CircuitPython Community Bundle.',
            link: 'CyclingPowerService.html'
        },
        // {
        //     id: 'project3',
        //     name: 'FishingTrip Finder',
        //     description: 'This is a program that uses web scraping to find the cheapest hotels in a given area for your given length of stay. It allows you to compare the prices over time in a MySQL database, so you can see if you are receiving a discount for booking the hotel closer to the arrival date.',
        //     link: 'FishTripFinder.html'
        // },
        {
            id: 'project4',
            name: 'Decentralized Ground Sensing Network',
            description: 'This is a remote Sensor network in which all the sensors are working together to transmit data in the most energy-efficient way. This also creates redundancy in case one sensor goes down.',
            link: 'DRSN.html'
        },
        {
            id: 'project4',
            name: 'Vissualizing Deforestation with GEE',
            description: 'This project is using GEE (Google Earth Engine) to visualize on a map where deforestation has been prevaliant and how bad it is in areas of the world. I worked on this project to understand how to use GEE and to learn how you can use satalite images to creat visuals in a new way.',
            link: 'VDE.html'
        },
        {
            id: 'project5',
            name: 'EzraSchwartz.org',
            description: 'This is my personal website, which I built from scratch using HTML, CSS, and JavaScript. I designed it to showcase my projects and provide information about myself.',
            link: 'index.html'},
        {
            id: 'project6',
            name: 'Detecting RTC tears from MRI Scans',
            description: 'This project involved using machine learning to detect rotator cuff tears from MRI scans. I worked on data preprocessing, model training, and evaluation to achieve accurate detection results.',
            link: 'MRIAI.html'
        },


    ];

    const projectsContainer = document.getElementById('projectsContainer');
    const tocList = document.getElementById('tocList');

    function loadProjects() {
        projects.forEach((project, index) => {
            projectsContainer.appendChild(createProjectElement(project, index));



            
            // Generate ToC link for the project
            const tocLink = document.createElement('li');
            tocLink.innerHTML = `<a href=" #${project.link}">${project.name}</a>`;
            tocList.appendChild(tocLink);

            // Add click event to ToC link
            tocLink.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                const projectLink = project.link;
                window.location.href = projectLink;
            });
        });

        // Initialize scrollLeft to the first project's position
        projectsContainer.scrollLeft = projects[0].offsetWidth;

        // Make the carousel infinite to the left
        const intervalId = setInterval(() => {
            if (projectsContainer.scrollLeft <= projects[0].offsetWidth) {
                projectsContainer.scrollLeft = projects[projects.length - 1].offsetWidth;
            }
        }, 10);
        projectsContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
        projectsContainer.addEventListener('mouseleave', () => intervalId.restart());
    }

    function createProjectElement(project, index) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project';
        projectCard.id = project.id;
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        return projectCard;
    }

    function centerProjectInContainer(projectId) {
        const projectElement = document.getElementById(projectId);

        if (!projectElement) return;
    
        const projectsContainer = document.querySelector('.slideshow-container');
        const projectOffset = projectElement.offsetLeft + projectElement.offsetWidth / 2;
        const containerScrollX = projectsContainer.scrollLeft;
        const containerCenter = projectsContainer.offsetWidth / 2;
    
        // Calculate new scroll position to center the project
        const newScrollPosition = projectOffset - containerCenter + containerScrollX;
        
        // Scroll the container to the new position
        projectsContainer.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }

    loadProjects();


});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to EzraSchwartz.org");
    let projectCount = 0;

    const projects = [
        {
            id: 'award1',
            name: 'AutoShift Pattent',
            description: 'Obtained a patent for the AutoShift project, which is an innovative system that automatically shifts gears on a bicycle based on real-time data and machine learning algorithms. This patent recognizes the unique approach and technology used in the AutoShift system. All of the patent filing process was done without a lawyer, and I was able to successfully file and obtain the patent on my own.',
           
        },
        {
            id: 'award2',
            name: 'Adafruit BLE Cycling Power Service Library',
            description:    'Got my own library into the Adafruit CircuitPython Community Bundle. This library is used to dissect BLE Powermeter packets, and it is used in the AutoShift project. This library is now available for anyone to use in their own projects.',
           
        },
        {
            id: 'award3',
            name: 'CTSTEM for Labrum tear research',
            description: 'Third in the CTSTEM competition for my research proposal on using machine learning to detect labrum tears from MRI scans. This project involved data preprocessing, model training, and evaluation to achieve accurate detection results. I presented my findings at the CTSTEM competition and was awarded third place for my work in healthcare research.',
     
        },
        {
            id: 'award4',
            name: 'International Science Youth Forum',
            description: 'Selected to visit Singapore for the International Science Youth Forum. This forum brings together young scientists from around the world to discuss and share their research. I was able to discuss and share my research on using machine learning to detect rotator cuff tears from MRI scans and learn from other young scientists in various fields.',
          
        },
        {
            id: 'award5',
            name: 'Lockheed Martin Cybersecurity Competition',
            description: 'Won 1st place in the Lockheed Martin Cybersecurity Competition. This competition involved solving various cybersecurity challenges and puzzles. I was able to demonstrate my skills in cybersecurity and problem-solving to win first place in the competition.',
      },
        // {
        //     id: 'award6',
        //     name: 'Detecting RTC tears from MRI Scans',
        //     description: 'This project involved using machine learning to detect rotator cuff tears from MRI scans. I worked on data preprocessing, model training, and evaluation to achieve accurate detection results.',
        // }


    ];

    const projectsContainer = document.getElementById('awardsContainer');

    function loadAwards() {
        projects.forEach((project, index) => {
            projectsContainer.appendChild(createAwardElement(project, index));



            
            // Generate ToC link for the project
            const tocLink = document.createElement('li');
            tocLink.innerHTML = `<a href=" #${project.link}">${project.name}</a>`;

            // Add click event to ToC link
            tocLink.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                const projectLink = project.link;
                window.location.href = projectLink;
            });
        });

        // Initialize scrollLeft to the first project's position
        projectsContainer.scrollLeft = projects[0].offsetWidth;

        // Make the carousel infinite to the left
        const intervalId = setInterval(() => {
            if (projectsContainer.scrollLeft <= projects[0].offsetWidth) {
                projectsContainer.scrollLeft = projects[projects.length - 1].offsetWidth;
            }
        }, 10);
        projectsContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
        projectsContainer.addEventListener('mouseleave', () => intervalId.restart());
    }

    function createAwardElement(project, index) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project';
        projectCard.id = project.id;
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>        `
            ;
        return projectCard;
    }


    loadAwards();


});