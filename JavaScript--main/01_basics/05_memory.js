//Stack (Primitive), Heap (Non-Primitive)!

let myInstaHandle = "rajma.chaawalll";  // Primitive type -> goes into the stack memory!
let anotherName = myInstaHandle;
anotherName = "sketch_shitposting"; // Value only changes for anotherName! it is another variable with copy of value in myInstaHandle! in the stack memory!

console.log(myInstaHandle);
console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl",
}
console.log(user1.email);

let user2 = user1; //

user2.email = "rajma@google.com"; // change in value of parent object changes value for both objects as they are referencing to same email and upi! in the heap memory!

console.log(user1.email);
console.log(user2.email);
