let p = fetchTasks(); // This returns a Promise

p.then((data) => {
    console.log("Tasks loaded!");
});

p.catch((err) => {
    console.log("Something went wrong...");
});

async function getTasks() {
  let response = await fetchTasks(); // Pause here until it's done
  console.log("Tasks loaded!");
}

/**If we are using await and the promise
 *  gets Rejected (the database is offline), the code will actually "throw an error" and stop.

Based on what we learned in Video #60, what special "block" do we 
wrap our code in to catch errors when using async/await? */

async function getTasks() {
  try {
    let response = await fetchTasks(); // Try to get the data
    console.log("Tasks loaded!");
  } catch (error) {
    console.error("Oops! Something went wrong:", error); // Handle the failure
  }
}