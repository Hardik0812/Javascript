const students ={
    name:"hardik",
    rollnumber:01,
    class: "5th"
}

function showProperties(obj) {
    for (let key in obj)
    if(typeof obj[key] == "string")
    console.log(key, obj[key])

}

showProperties(students)
