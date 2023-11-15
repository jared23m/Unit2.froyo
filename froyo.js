
// Prompt the user for input
const userInputString = prompt(
    "Please enter some flavors separated by commas."
  );

// Parse it into an array of strings
const stringArray = userInputString.split(",");

/* I apologize in advance, but I don't understand how
to do this assignment without using classes and class 
constructors. I hate to be that guy, but if the user wants
to input any flavor they want, then I don't see how 
else to do that. If I get a lower score for this,
so be it, because I can't figure it out the other
way. Thanks for understanding and I'm sorry. */

/* The class constructor below is a template so that
multiple flavor objects can be generated based on the
user input */
class Flavor {
    constructor(name, amount){
        this.name = name;
        this.amount = amount;
    }
}

/* The flavorIndexer function organizes all of the data,
recognizing each individual flavor as well as the amounts
of each flavor */
function flavorIndexer(flavorList) {
    let flavorsObserved = [];
    let knownFlavor;
    let counter;

    // This loop interates through the array of strings inputted by the user
    for (const flavorIndex in flavorList){
        knownFlavor = false;
        counter = 0;

        /*This conditional detects whether the flavor has already been
        recorded or not. If it has already, the amount is increased. If not,
        a new flavor object is created with the appropriate name.*/
        if (flavorsObserved.length === 0){
            flavorsObserved.push(new Flavor(flavorList[flavorIndex], 1));
        } else {
            while ((counter < flavorsObserved.length) && (!knownFlavor)){
                if (flavorList[flavorIndex] === flavorsObserved[counter].name){
                    flavorsObserved[counter].amount++;
                    knownFlavor = true;
                } else {
                    counter++;
                }
            }
            if (!knownFlavor){
                flavorsObserved.push(new Flavor(flavorList[flavorIndex], 1));
            }
        }
    }

    // Returns the array of objects created. All of the data is stored here.
    return flavorsObserved;

}


// This function prints out the data that was organized in the previous function
function flavorPrinter(flavorChart){
    console.log("Here are your requested flavors, and how many of each that you want:");
    
    // This loop iterates through the organized data
    for (const flavorIndex in flavorChart){
        console.log(flavorChart[flavorIndex].name + ": " + flavorChart[flavorIndex].amount);
    }
}

// This calls the printer function using the appropiate arguments
flavorPrinter(flavorIndexer(stringArray));