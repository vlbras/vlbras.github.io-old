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
					 "Stayed", "Suitcase", ]
	let answers = ["смажити", "холодильник", "банка", "наречена", "наречений", 
				   "розлучення", "шлюб", "сперечатися з", "ювілей", "весілля", 
				   "рідна душа", "племінниця", "племінник", "проживання", "притулок", 
				   "біженцець", "квартира", "тимчасовий", "заброньовано", "багаж", 
				   "обігрівач", "пам'ятки", "пам'ятник", "далеко", "кут", 
				   "залишився", "валіза",]

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
			console.log("false")
		}
	}

	document.write("You have " + points + "/" + questions.length)
}