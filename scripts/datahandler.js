var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var args = JSON.parse(this.responseText);
    if (args.home != undefined && args.home != null){
        handleHomeSection(args.home);
    }

    if (args.project != undefined && args.project != null){
        handleProjectSection(args.project);
    }

    if (args.achievements != undefined && args.achievements != null){
        handleAchievementSection(args.achievements);
    }
  }
};
xhr.open("GET", "data.json", true);
xhr.send();


// hanlde home section
function handleHomeSection(args){
    if (args.data.length > 0){
        var target = $("#homeSection");
        var homeElements = [];
        args.data.forEach(element => {
            var questionElement = "<div class='container left'><div class='content'><h2><a>" + element.question + "</a></h2></div></div>";
            var answerElement = "<div class='container right'><div class='content'><h2><a><span>" + element.answer + "</span></a></h2></div></div>";
            homeElements.push(questionElement);
            homeElements.push(answerElement);
        });
        target.append(homeElements);
    }
}


// handle project section
function handleProjectSection(args){
    if (args.data.length > 0){
        var target = $("#projectSection");
        args.data.forEach(function(element,index) {
            var container = $("<div class='container " + getStatus(index) + "'></div>");
            var content = $("<div class='content'></div>");
            var header = $("<h2><a href='" + element.link + "' target='_blank'>" + element.header + "</a></h2>");
            var description = $("<p>" + element.description + "</p>");
            var techWrapper = $("<ul style='list-style: none'></ul>");
            var techHeader = $("<li><b>" + element.usedTechHeader + "</b></li>");
            var usedTechList = $("<ul>" + getTechList(element.usedTech) + "</ul>");
            
            techWrapper.append(techHeader);
            techWrapper.append(usedTechList);
            content.append(header);
            content.append(description);
            content.append(techWrapper);
            container.append(content);
            target.append(container);
        });
    }
}

function getStatus(index){
    var position = 'left';
    if ((index+1) % 2 === 0){
        position = 'right';
    }
    return position;

}

function getTechList(techList){
    var usedTechs = '';
    if (techList.length > 0){
        techList.forEach(element =>{
            usedTechs += "<li>" + element + "</li>";
        });
    }
    return usedTechs;
}

// handle achievement section
function handleAchievementSection(args){
    if (args.data.length > 0){
        var target = $("#achivementSection");
        args.data.forEach(element => {
            var headerContainer = $("<div class='container left'></div>");
            var headercontent = $("<div class='content'></div>");
            var header = $("<h2><a>" + element.header + "</a></h2>");
            headercontent.append(header);
            headerContainer.append(headercontent);
            target.append(headerContainer);
            if (element.companyInfo.length > 0){
                element.companyInfo.forEach(info => {
                    var container = $("<div class='container right'></div>");
                    var content = $("<div class='content'></div>");
                    var infoBlock = $("<h2><a href='" + getLink(info) + "' target='" + getTargetType(info) + "'>" + info.companyName + " <span>" + getPositionInfo(info) + "</span></a></h2>");
                    content.append(infoBlock);
                    container.append(content);
                    target.append(container);
                });
            }
        });
    }
}

function getLink(args){
    return (args.link === undefined || args.link === "" || args.link === null) ? "#" : args.link;
}

function getTargetType(args){
    return (args.link === undefined || args.link === "" || args.link === null)  ? "" : "_blank";
}

function getPositionInfo(args){
    debugger
    return (args.position === undefined || args.position === "" || args.position === null)  ? "" : "- " +args.position;
}