// GIVEN
//1
//console.log(hello);                                   
//var hello = 'world';                                 
var hello = 'world';
console.log(hello); // logs "world"

// GIVEN
//2
//var needle = 'haystack';
//test();
//function test(){
//	var needle = 'magnet';
//	console.log(needle);
//}
var needle = 'haystack';
function test(){
	var needle = 'magnet';
	console.log(needle);
}
test(); // logs "magnet"

// GIVEN
//3
//var brendan = 'super cool';
//function print(){
//	brendan = 'only okay';
//	console.log(brendan);
//}
//console.log(brendan);

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan); // logs "super cool"

// GIVEN
//4
//var food = 'chicken';
//console.log(food);
//eat();
//function eat(){
//	food = 'half-chicken';
//	console.log(food);
//	var food = 'gone';
//}
var food = 'chicken';
console.log(food); //logs "chicken"
function eat(){
	var food = 'gone';
    food = 'half-chicken';
	console.log(food);
}
eat();//logs "half-chicken"

// GIVEN
//5
//mean();
//console.log(food);
//var mean = function() {
//	food = "chicken";
//	console.log(food);
//	var food = "fish";
//	console.log(food);
//}
//console.log(food);

var food= "x"
console.log(food); //logs "x"
var mean = function() {
	food = "chicken";
	console.log(food); 
	var food = "fish";
	console.log(food); 
}
console.log(food);//logs "x"
mean(); //logs "chicken" / "fish"

// GIVEN
//6
//console.log(genre);
//var genre = "disco";
//rewind();
//function rewind() {
//	genre = "rock";
//	console.log(genre);
//	var genre = "r&b";
//	console.log(genre);
//}
//console.log(genre);

var genre = "disco";
console.log(genre); //logs "disco"
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre); //logs "disco"


// GIVEN
//7
//dojo = "san jose";
//console.log(dojo);
//learn();
//function learn() {
//	dojo = "seattle";
//	console.log(dojo);
//	var dojo = "burbank";
//	console.log(dojo);
//}
//console.log(dojo);
dojo = "san jose";
console.log(dojo); //logs "san jose"
function learn() {
	dojo = "seattle";
	console.log(dojo);
    var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo); //logs "san jose"
learn(); //logs "seattle - burbank"

// GIVEN
//8 - Bonus ES6: const
//console.log(makeDojo("Chicago", 65));
//console.log(makeDojo("Berkeley", 0));
//function makeDojo(name, students){
//        const dojo = {};
//        dojo.name = name;
//        dojo.students = students;
//        if(dojo.students > 50){
//            dojo.hiring = true;
//        }
//        else if(dojo.students <= 0){
//            dojo = "closed for now";
//        }
//        return dojo;
//}

function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65)); //logs "{name:"Chicago, students: 65, hiring: true}"";
console.log(makeDojo("Berkeley", 0)); //logs "closed for now"