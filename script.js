//adding student
showstudent();//to show the details even if the page reloads

let addstd = document.getElementById("addstudent");
addstd.addEventListener("click", () => {
    let addtext = document.getElementById("addtext");
    let details = localStorage.getItem("details");
    if (details == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(details)
    }
    notesobj.push(addtext.value)
    localStorage.setItem("details", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);
    showstudent();
})
//function to create a new student card
function showstudent() {
    let details = localStorage.getItem("details")
    if (details == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(details)
    }
    let str = ""
    notesobj.forEach((element, index) => {
        str +=

            `<div class="noteCard mx-2 my-2 card" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title"> student number${index + 1}</h5>
                     <p> ${element}</p> 
                     <button  id="${index}"onclick="deletestudent(this.id)" class="btn btn-primary">Delete student</button>
                </div>
        </div>`;
    });
    let detailselem = document.getElementById("details")
    if (notesobj.length != 0) {
        detailselem.innerHTML = str
    }
    else {
        detailselem.innerHTML = `nothing to show!!! "use add student to add a student"`
    }
}
//function to delete a student
function deletestudent(index) {
    console.log(`i am deleting ${index}`)
    let details = localStorage.getItem("details")
    if (details == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(details)
    }
    notesobj.splice(index, 1)
    localStorage.setItem("details", JSON.stringify(notesobj));
    showstudent()

}
//function for search tab 
let search = document.getElementById("searchtxt");
search.addEventListener("input", searchcard=() => {
    let inputval = search.value.toLowerCase()
    console.log("input event fired", inputval)
    let notescards = document.getElementsByClassName("noteCard")
    Array.from(notescards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    })
})
deletebtn=document.getElementById("deletebtn")
deletebtn.addEventListener("click",()=>{
    localStorage.clear();
    showstudent();
})
