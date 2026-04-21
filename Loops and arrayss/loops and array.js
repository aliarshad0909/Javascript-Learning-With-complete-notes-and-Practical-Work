let students = prompt("Enter the names of old students");
let Newstudents = ["Ali", "Sara", "John"];

for (let i = 0; i < Newstudents.length; i++) {
    console.log(`${i + 1}. ${Newstudents[i]} are the new students in the class + ${students} are the old students in the class`);
}
if (Newstudents.length > 0) {
    console.log(`There are ${Newstudents.length} new students in the class`);
}