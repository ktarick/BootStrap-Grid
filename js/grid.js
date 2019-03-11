var relatives = [
    { id: 1, name: "Margaret", relation: "grandmother", birthdate: "1930-05-08" },
    { id: 2, name: "Greg", relation: "father", birthdate: "1957-08-27" },
    { id: 3, name: "Cindy", relation: "mother", birthdate: "1954-07-06" },
    { id: 4, name: "Rick", relation: "uncle", birthdate: "1959-03-31" },
    { id: 5, name: "Sherry", relation: "aunt", birthdate: "1960-04-15" },
    { id: 6, name: "Sandy", relation: "aunt", birthdate: "1961-05-18" },
    { id: 7, name: "Lisa", relation: "aunt", birthdate: "1964-04-01" },
    { id: 8, name: "Lori", relation: "aunt", birthdate: "1966-04-01" }
];

function loaded(){
    buildGrid();
}

function buildGrid(){

    var fill = document.getElementById("tbody")
    fill.innerHTML = "";
    for(var relative of relatives){
        var row = "<div class = 'row'>";
        //row += `<div class='col-1>${relative.id}</div>`
        //row += `<div class='col>${relative.name}</div>`
        //row += `<div class='col>${relative.relation}</div>`
        //row += `<div class='col>${relative.birthdate}</div>`
        row += "<div class='col-1'>" + relative.id + "</div>";
        row += "<div class='col'>" + relative.name + "</div>";
        row += "<div class='col'>" + relative.relation + "</div>";
        row += "<div class='col'>" + relative.birthdate + "</div>";
        row += "</div>"
        fill.innerHTML += row;
    }
}