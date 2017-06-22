/* Define bio object with name, role, biopic and welcome
messsage strings.
Contains a "contacts" ojbect with key-value pairs for each
contact medium and a "skills" array with strings for each
skill.
Contains a "display" function for formatting and displaying
the elements which is invoked at the end.
*/
var bio = {
 "name": "Gabriel Hammeken",
 "role": "Desarrollador Web",
 "contacts": {
   "mobile": "044-55-1887-9129",
   "email": "og.hammeken@gmail.com",
   "github": "gabosaurio",
   "location": "CDMX"
 },
 "welcomeMessage": "Sitios y apps para potenciar tu valor.",
 "skills": [
   "Diseño y desarrollo de sitios",
   "Cursos y capacitaciones",
   "Marketing digital",
   "Optimización de procesos"
 ],
 "biopic": "images/me.png",
 "display": function() {
   // Format and display name and role
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
   var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $("#header").prepend(formattedName, formattedRole);
   // Name and role before "contacts" container, picture, message and skills after.
   $("#header").append(formattedPic, formattedWelcomeMsg);

   // Format and display contacts
   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
   $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    // Format and display skills if the array is not empty
    if (bio.skills.length !== 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
      });
    }
  }
};

// Define work object with a "jobs" array of objects containing key-value pairs for the information of each of my jobs. Contains a display function for formatting and appending to index.htmll
var work = {
  "jobs": [
    {
      "employer": "Voluntarios Verdes",
      "title": "Coordinador de proyectos",
      "dates": "2016 - Presente",
      "location": "CDMX",
      "description": "Participo en diversos proyectos de voluntariado medioambientales apoyando en la organización y realización de los eventos."
    },
    {
      "employer": "Tecnológico de Monterrey",
      "title": "Profesor de cátedra",
      "dates": "2015 - 2017",
      "location": "Santa Fe, CDMX",
      "description": "Impartí cursos de pensamiento creativo, comunicación digital, pensamiento lógico computacional y diseño y desarrollo de aplicaciones en la Escuela Preparatoria, así como cursos de Francés en la Escuela de Humanidades y Ciencias Sociales."
    },
    {
      "employer": "GEFCO",
      "title": "Asistente Pricing",
      "dates": "2014 - 2015",
      "location": "Polanco, CDMX",
      "description": "Mi función era armar paquetes de transporte de bienes conectando proveedores y clientes."
    }
  ],
  "display" : function() {
    work.jobs.forEach(function(job) {
      // Initialize job section
      $("#workExperience").append(HTMLworkStart);
      // Format information
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      // Append to section
      $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    });
  }
};

// Define projects object containing a "projects" array with objects for each of my projects. These projects contain key-value pair with strings for the title, dates and despcription and an "images" array with strings for the images.
var projects = {
  "projects": [
    {
      "title": "Conferencia de la Juventud",
      "dates": "2017-2018",
      "description": "Un foro para conocer el sentir de los jóvenes del mundo en torno al cambio climático y proponer soluciones que se traduzcan en políticas públicas.",
      "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    },
    {
      "title": "Lingua",
      "dates": "2017-2018",
      "description": "Una aplicación diseñada para el salón de clases de idiomas que simplifica el trabajo del profesor y motiva a los alumnos.",
      "images": []
    }
  ],
  "display" : function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      if (project.images.length !== 0) {
        for (var i = project.images.length; i > 0; i--) {
          var formattedImage = HTMLprojectImage.replace("%data%", project.images[i-1]);
          $(".project-entry:last").append(formattedImage);
        }
      }
      $(".project-entry:last").prepend(formattedTitle, formattedDates, formattedDescription);
    });
  }
};

var education = {
  "schools": [
    {
      "name": "Tecnológico de Monterrey",
      "degree": "Ingeniería",
      "dates": "2015",
      "location": "Santa Fe, CDMX",
      "majors": ["Industrial y de Sistemas"]
    },
    {
      "name": "Universidad Iberoamericana",
      "degree": "Diplomado",
      "dates": "2014",
      "location": "Santa Fe, CDMX",
      "majors": ["Diseño y desarrollo de comunidades y ciudades sostenibles"]
    },
    {
      "name": "Universidad de Tecnología de Troyes",
      "degree": "Especialización",
      "dates": "2014",
      "location": "Troyes, Francia",
      "majors": ["Logística"]
    }
  ],
  "onlineCourses" : [
    {
      "title": "Desarrollador Web",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://classroom.udacity.com/nanodegrees/nd001/"
    }
  ],
  "display" : function() {
    education.schools.forEach(function(school) {
      // Initialize education entry
      $("#education").append(HTMLschoolStart);
      // Format information
      var formattedNameDegree = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      // Append info to education entry
      $(".education-entry:last").append(formattedNameDegree, formattedDates, formattedLocation);
      // Format and append the majors to the entry
      school.majors.forEach(function(major) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedMajor);
      });
    });

    // Add online courses if there's anything in the array
    if (education.onlineCourses.length !== 0) {
      $("#education").append(HTMLonlineClasses);
      // Attach the objects
      education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);
        var formattedTitleSchool = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedTitleSchool, formattedDates, formattedURL);
      });
    }
  }
};

// Invoking display functions
bio.display();
work.display();
projects.display();
education.display();

/*
$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(" ");
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}
*/

$("#mapDiv").append(googleMap);
