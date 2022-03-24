function library(){
	let questions = []
	let answers = []

	let size = prompt("Please enter numer of english words")
	for(var i = 0; i < size; i++){
		questions[i] = prompt("english(" + (i+1) + ")")
		answers[i] = prompt("ukrainian(" + (i+1) + ")")
	}

	for(var i = 0; i < size; i++){
		document.write("&quot" + questions[i] + "&quot;, ")
	}
	document.write('<br>')
	for(var i = 0; i < size; i++){
		document.write("&quot" + answers[i] + "&quot;, ")
	}
}

function quiz(){
	let points = 0;
	let questions = ["Roast", "Fridge", "Jar", "Bride", "Groom", 
					 "Divorce", "Marriage", "Argue with", "Anniversary", "Wedding", 
					 "Soulmate", "Niece", "Nephew", "Accommodation", "Refuge", 
					 "Refugee", "Flat", "Temporary", "Booked", "Luggage", 
					 "Heater", "Sights", "Monument", "Away", "Corner", 
					 "Stayed", "Suitcase", "Spring", "Autumn", "Windy", 
					 "Noon", "Midnight", "Advice", "Affirmative", "Request", 
					 "Offer", "Plural", "Decent", "Solve", "Decide", 
					 "Amusement", "entertainment", "Succeeded", "Appointment", "Urgent", 
					 "Schedule", "Reschedule", "Advance", "Several", "Unusual",]
	let answers = ["смажити", "холодильник", "банка", "наречена", "наречений", 
				   "розлучення", "шлюб", "сперечатися з", "ювілей", "весілля", 
				   "рідна душа", "племінниця", "племінник", "проживання", "притулок", 
				   "біженець", "квартира", "тимчасовий", "заброньовано", "багаж", 
				   "обігрівач", "пам'ятки", "пам'ятник", "далеко", "кут", 
				   "залишився", "валіза", "весна", "осінь", "вітряно", 
				   "полудень", "опівночі", "порада", "стверджувальний", "запит", 
				   "пропозиція", "множина", "пристойний", "вирішити", "зробили вибір", 
				   "розваги", "розваги", "вдалося", "прийом", "терміново", 
				   "розклад", "перепланувати", "заздалегідь", "кілька", "незвичайний",]

	for(var i = 0; i < questions.length; i++){
		let rand = Math.floor(Math.random() * questions.length);
		[questions[rand], questions[i]] = [questions[i], questions[rand]];
		[answers[rand], answers[i]] = [answers[i], answers[rand]]
	}

	for(var i = 0; i < questions.length; i++){
		let ans = prompt("What is '" + questions[i] + "'?")
		if(ans=="stop"){
			break
		}
		if(ans == answers[i]){
			points += 1;
			console.log("true")
		}
		else{
			alert("It's wrong. The right is '" + answers[i] + "'.")
			document.write(i + 1 + ") " + questions[i] + " - " + answers[i] + "<br>")
			console.log("false")
		}
	}

	document.write("<br>" + "You have " + points + "/" + questions.length + ", " + (points / 50 * 100).toFixed(2) + "%")

}

function testaddwords(questions){
	let size = prompt("Please enter numer of english words")
	for(var i = 0; i < size; i++){
		questions[i] = prompt("english(" + (i+1) + ")")
		
	}
}

function testquiz(){
	let questions = []
	testaddwords(questions)
}

function test(){
	let a = prompt();
	let b = prompt();
	alert(+a + +b)
}