// 🍕 Step 1: Function to simulate getting cheese from a shop (asynchronous operation)
function getCheese() {
    return new Promise((resolve, reject) => {
        // Simulate delay with setTimeout (2 seconds)
        setTimeout(() => {
            const cheese = "🧀"; // cheese is ready
            resolve(cheese);    // Promise fulfilled successfully
        }, 2000);
    });
}

// console.log(getCheese());

// 🍞 Step 2: Function to make dough using the cheese (also asynchronous)
function makedough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍕"; // cheese is used to make dough
            resolve(dough);              // dough created successfully
            // If something goes wrong, we could reject:
            // reject("Bad cheese");
        }, 2000);
    });
}

// 🔥 Step 3: Function to bake pizza using dough (asynchronous)
function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍩";  // dough is baked into pizza
            resolve(pizza);              // Promise resolved with pizza
        }, 2000);
    });
}

// 🍽️ Step 4: Chaining all steps with .then() and handling with .catch() and .finally()
getCheese() // Call the first async step
    .then((cheese) => {
        // After getCheese resolves...
        console.log("Here is the cheese", cheese); // Output: 🧀
        return makedough(cheese); // Move to next step
    })
    .then((dough) => {
        // After makedough resolves...
        console.log("Here is the dough", dough); // Output: 🧀🍕
        return bakePizza(dough); // Move to final step
    })
    .then((pizza) => {
        // After bakePizza resolves...
        console.log("Here is the Pizza", pizza); // Output: 🧀🍕🍩
    })
    .catch((error) => {
        // If any promise fails (reject is called), this block runs
        console.log("Error occurred:", error);
    })
    .finally(() => {
        // This block ALWAYS runs at the end
        console.log("Process Ended");
    });
