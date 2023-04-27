
// function featuresDown() {
//     document.getElementById("features-down").src ="images/icon-arrow-up.svg"
//     }

//     function companyDown() {
//         document.getElementById("company-down").src ="images/icon-arrow-up.svg"
//         }
    

let dropDown = false;

function dropDownChange() {
if (dropDown === false) {
    
    document.getElementById("features-down").src ="images/icon-arrow-up.svg"
    dropDown = true
} else {
    document.getElementById("features-down").src ="images/icon-arrow-down.svg"
    dropDown = false
}
}
