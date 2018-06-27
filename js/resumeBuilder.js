/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Tim McMullins",
    "role": "Graphic Designer & Front End Web Developer",
    "contacts": {
        "mobile": "909-559-0903",
        "email": "tm.grafx@gmail.com",
        "github": "https://github.com/tmcmullins",
        "location": "Rancho Cucamonga, CA"
    },
    "welcomeMessage": "Hello, I produce visually captivating design that stimulates product and brand awareness.",
    "skills": [
        "Adobe CS",
        "Cinema4D",
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "biopic": "images/MyLogo.jpg"
};

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role),
        HTMLheaderName.replace("%data%", bio.name),
        HTMLbioPic.replace("%data%", bio.biopic),
        HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

    if (bio.skills.length >= 0) {
        $("#header").append(HTMLskillsStart);
        for (var x = 0; x < bio.skills.length; x++) {
            $("#header").append(HTMLskills.replace("%data%", bio.skills[x]));
        }
    }

    $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile),
        HTMLemail.replace('%data%', bio.contacts.email),
        HTMLgithub.replace('%data%', bio.contacts.github),
        HTMLlocation.replace('%data%', bio.contacts.location));

    $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile),
        HTMLemail.replace('%data%', bio.contacts.email),
        HTMLgithub.replace('%data%', bio.contacts.github),
        HTMLlocation.replace('%data%', bio.contacts.location));
};
bio.display();

var education = {
    "schools": [{
            "name": "Cal Poly Pomona",
            "location": "Pomona, CA",
            "degree": "BA",
            "majors": [
                "Fine Arts",
                "Graphic Design Option"
                ],
            "dates": "Graduated 2006",
            "url": "http://www.cpp.edu/"
        },
        {
            "name": "Udacity",
            "location": "Mountain View, CA, US",
            "degree": "Nano",
            "majors": [
                "Front-End Web Development",
                ""
                ],
            "dates": "Currently Enrolled",
            "url": "https://www.udacity.com/"
        }
    ]
};

education.display = function() {
    for (var edu = 0; edu < education.schools.length; edu++) {
        $('#education').append(HTMLschoolStart);

        var formatEduName = HTMLschoolName.replace('%data%', education.schools[edu].name);
        var formatEduDegree = HTMLschoolDegree.replace('%data%', education.schools[edu].degree);
        $('.education-entry:last').append(formatEduName + formatEduDegree);

        var formatEduDates = HTMLschoolDates.replace('%data%', education.schools[edu].dates);
        $('.education-entry:last').append(formatEduDates);

        var formatEduLoc = HTMLschoolLocation.replace('%data%', education.schools[edu].location);
        $('.education-entry:last').append(formatEduLoc);

        var formatEduMajor = HTMLschoolMajor.replace('%data%', education.schools[edu].majors);
        $('.education-entry:last').append(formatEduMajor);


    }
};
education.display();

var work = {
    "jobs": [{
            "employer": "Freelance",
            "title": "Graphic Designer",
            "location": "Rancho Cucamonga CA",
            "dates": "2006 - Present",
            "description": "- Conceptualize and execute graphics for print and web.<br> - Project Management.<br> - Research markets and industry trends.<br> - Source vendors for clients.<br> - Take photos and videos as necessary.<br> - Maintain high customer retention rate.<br> - Design annual program covers for the NAACP since 2006."
        },
        {
            "employer": "Virtual Images",
            "title": "Graphic Designer",
            "location": "Redlands CA",
            "dates": "June 2006 - July 2017",
            "description": "- Collaborate with clients to produce creative for lenticular, print, and web content.<br> - 3D conversions and various motion graphic effects.<br> - Daily use of imagesetters, inkjet, large format printers,lamination and CAD cutting equipment.<br> - Apply spot colors and setup files for emboss, foil stamp, and silkscreen.<br> - Color correct art files as needed.<br> - Prep art files for optimum print quality.<br> - Train, mentor and oversee work of junior designers.<br> - Stand in for creative manager.<br> - Research and development.<br> - Learn new technologies and draw up SOPs.<br> - Designed award winning “Autumn” direct mailer.<br> - Lead designer for Redakai trading card game."
        },
        {
            "employer": "US Marine Corps Reserves",
            "title": "E4 Corporal - 2131 Towed Artillery Tech",
            "location": "Seal Beach CA",
            "dates": "June 1998 - June 2004",
            "description": "- Section Leader under supervision of GySgt.<br> - Perform 2nd echelon primary inspection, maintenance and repair of M198 howitzers.<br> - Complete administrative paperwork. - Attend field training exercises.<br> - Honorable discharge."
        }
    ]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

var projects = {
    "projects": [{
            "title": "3D Modeling",
            "dates": "2009 - Present",
            "description": "Here are samples of 3D modeling projects created with Cinema 4D",
            "images": [
                "images/Cinema/gears.jpg",
                "images/Cinema/balcony.jpg",
                "images/Cinema/piano.jpg",
                "images/Cinema/yinyang.jpg"
            ]
        },
        {
            "title": "NAACP",
            "dates": "2006 - Present",
            "description": "Here are covers created annually for the Pasadena Branch NAACP Ruby McKnight Williams Awards Dinner.",
            "images": [
                "images/NAACP/Unity.jpg",
                "images/NAACP/Robinson.jpg",
                "images/NAACP/Foundation.jpg",
                "images/NAACP/Icons.jpg"
            ]
        }
    ]
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};
projects.display();



function inName() {
    var finalName = bio.name;

    var letter = finalName.toLocaleUpperCase().slice(0, 1);
    var splits = finalName.split(" ");
    finalName = letter + splits[0].toLocaleLowerCase().slice(1) + " " + splits[1].toLocaleUpperCase();

    return finalName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

$('#header').prepend('<div class = "NameRole"></div>');
$('#name').appendTo('.NameRole');
$('.role').appendTo('.NameRole');