////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//                           Is Mac 
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0; 
if (isMac) { 
    document.getElementById("section-4-11").classList.add("isMac"); 
} 



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//                          Media Query
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
window.matchMedia("(max-width: 480px)").matches 

 



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//                      Single Page Search
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// highlight text 
function highlight(obj){ 

   var orig = obj.style.textShadow; 
   
   obj.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"; 

   setTimeout(function(){ 

        obj.style.textShadow = orig; 

   }, 3000); 
} 

// search function 
function searchFunction(searchText) { 

    var pattern = searchText.toLowerCase(); 

    var elems = document.querySelectorAll('div,p,h1,h2,h3,h4,h5,h6'); 

    var found; 

    for (i in elems) { 

        found = elems[i].innerText.toLowerCase(); 

        if (found.includes(pattern)) { 

            highlight(elems[i]); 

            if (window.matchMedia("(max-width: 1120px)").matches) { 

                var elementPlacement = (window.pageYOffset + elems[i].getBoundingClientRect().top)-400; 

                document.body.scrollTop = elementPlacement; // For Safari 

                document.documentElement.scrollTop = elementPlacement; // For Chrome, Firefox, IE and Opera 

            } else { 

                elems[i].scrollIntoViewIfNeeded({block:'center'}); 

            } 

        } 

    } 

} 


 

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//                       Fetch Async/Await
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

getDevices = async() => { 
    constlocation = window.location.hostname; 
    constsettings = { 
        method: 'POST', 
        headers: { 
            Accept: 'application/json', 
            'Content-Type': 'application/json', 
        } 
    }; 
    try{ 
        constfetchResponse = awaitfetch(`http://${location}:9000/api/sensors/`, settings); 
        constdata = awaitfetchResponse.json(); 
        returndata; 
    } catch(e) { 
        return; 
    }     
}
 

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//                        MAP VS FILTER
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// Map returns a new array where each item has been altered by a function called by map.  
const numbers = [4, 9, 16, 25];
// newArrayNumbers is a new array where each item of array numbers has been multiplied by two
var newArrayNumbers = numbers.map(number => {
    return number * 2;
});

// below is the filter syntax
filter((element, index, array) => { /* ... */ } )
// Filter Used to select certain items of array, but not manipulate them. Returns array.  
const numbers2 = [1,2,3,4,5,6,7,8,9];
var filteredArrayNumbers2 = numbers2.filter(number => number >= 6);



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//                      Filter Object
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// To go through object items, use Object.entries.  
// below, the const [key, value] is called an enumerable property pair. 
// Object.entries returns an array of enumerable properties
// Object.entries returns an array, so we use For...Of
for (const [key, value] of Object.entries(obj)) { 
    console.log(`Key ${key}'s value is ${value}`);
}

// unfortunately, Object.entries returns an array, not an object. An object like the following................
const obj = {model: "Porsche", color: "red"};
//  ....................will be converted to an array like the following: 
const array = [["model", "Porsche"], ["color", "red"]];
// To convert the above back to an object, use  Object.fromEntries(array);


// The below code removes properties whose keys are not found in the "allowed" array
// fromEntries converts the array of 
const raw = { item1: { prop:'1' }, item2: { prop:'2' }, item3: { prop:'3' } };

const allowed = ['item1', 'item3'];

const filtered = Object.fromEntries(
   Object.entries(raw).filter(
      ([key, val])=>allowed.includes(key)
   )
);



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//                      For in vs For of
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//For...in loops over all keys in object. 
const object = { a: 1, b: 2, c: 3 };
// because the key is iterated over, we must access the value by inserting the key into the object:         object[property]
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}


//For...of iterates over values in an array
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}




////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//                          Scrolling
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// height of window
window.innerHeight 

// how far is DOCUMENT scrolled
window.scrollY 

// height of document
document.body.offsetHeight 

// scroll to position
window.scrollTo(x,y) 

// get co-ordinations of element
window.scrollY + document.querySelector('#elementId').getBoundingClientRect().top // Y
window.scrollX + document.querySelector('#elementId').getBoundingClientRect().left // X
 
// Scrolled to bottom of page
if (window.innerHeight + window.scrollY == document.body.offsetHeight) { 
    // bottom of page has been reached 
} 
