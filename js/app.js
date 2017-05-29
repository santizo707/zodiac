// array of objects to store zodiac data
var zodiac = [
	{
		sign: "aquarius",
		fortune: "Success will come to you when you work with the energies at hand. Go with the flow of the situation instead of trying to undermine or manipulate it. There's a tremendous force at work. Perhaps all it needs is a bit of direction to align it with your goals. State your intentions openly instead of working behind the scenes. You will receive support from others when you do.",
		image: "img/aquarius.jpg",
	},
	{
		sign: "aries",
		fortune: "You may be confused about asking for help, Aries. Your usual resources could be occupied with issues and conflicts that have nothing to do with you. You may then offer to help others. By doing this, you've put someone else's needs above your own. Although this may feel good to you on some level, it's also a way to avoid the problems that you need to deal with.",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "This is a great time to move forward on a writing project, Cancer. Any large, long-term project involving communication, film, or long-distance travel is begging you to take action. Don't delay. You have a strong force urging you to move forward. Look ahead with a positive attitude instead of thinking of all the reasons why these projects won't pan out the way you want them to.",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		fortune: "You're getting support for and confidence from one aspect of your life and physical energy from another. Even though the two areas may be in a point of conflict, Capricorn, you have the ability to take the positive aspects from each and fuse them together to create something new or solve a problem. Pool your resources and shift into high gear. The sky's the limit.",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: "Try not to get too caught up in any potential conflicts brewing around you, Gemini. Your job lies in calming things down and bringing a more practical perspective to the situation. If you get tangled in the action phase of endeavors without first thinking about what it is that you're doing, you may confuse things more. Step back from the fire instead of throwing yourself into it headfirst.",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "This is an expansive time for you. You can make great progress on your goals, Leo. The key is to clear up any miscommunication or dishonesty before you move forward with a clear conscious. Don't even bother trying to make progress before you've cleared up past cobwebs. Keeping everything on a light, flexible track will help you work more efficiently.",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune: "No one likes rejection, but no one likes rejection less than you, Libra. You may hesitate to take risks in the unknown. Keep in mind that by playing it safe, you deprive yourself of the very adventure that could turn your life around. There's an energetic, expansive feeling in the air encouraging you to take that leap of faith. This energy may feel foreign to you, but it's time to embrace it.",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune: " You may end up in some arguments, Pisces. Your nature is expansive and generous, but if others take advantage of this good nature, your mood quickly turns to anger and detachment. Conflict is often a natural part of a relationship. Use it as a learning experience instead of blowing it out of proportion and turning it into a larger issue than it needs to be.",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune: "You may be in a difficult position, Sagittarius. You want to explode into a new way of life yet feel stuck. Perhaps you feel chained to your current routine. You may feel like you're indeed making progress in the world, but you long for a giant release - like a trap door opening - that allows you to make a leap into the great beyond. This door is always open.",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune: "Be flexible in your communication, Scorpio, and doors will open to you that you didn't even know were there. There's a tremendous amount of physical energy at your disposal. Don't waste it. By being rigid about your ways and insisting on doing things only according to your philosophy, you deprive yourself of the spontaneous adventures that give life the spice and variety you love.",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune: "You're in the middle of a terrific yearly transition. You have a great deal of physical energy, Taurus. You have an action-oriented mind ready to tackle anything. The key to making the most of this fortunate period is communication. Right now you have multitasking abilities that you can put to good use once you connect with others and understand exactly what needs to be done.",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune: "Your engine is revved and ready, Virgo. You have a full tank of gas. Unfortunately, you may feel like there's a large obstacle in your way. Perhaps this obstacle is your mental attitude and inability to make confident decisions. You may become so scattered at times that you can't effectively move forward on anything. Don't beat yourself up over it. The answers will come when you need them.",
		image: "img/virgo.jpg"
	}
]

// function to determine user horoscope, function fires on user clicking button line 24 index.html
function horoscope() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata")
	// confirm the element exists and what value the user submits
	console.log(userdata)
	console.log("users value is: " + userdata.value)

	// loop through zodiac array one item at a time
	for(i = 0; i < zodiac.length; i = i + 1) {
		// check what the users value is before using it in a condition
		console.log("users value lowercase is: " + userdata.value.toLowerCase())
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign)

		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran")
			// check some values in the console before updating HTML
			console.log("users typed in: " + userdata.value)
			console.log("current image value is: " + zodiac[i].image)
			console.log("current fortune value is: " + zodiac[i].fortune)

			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = userdata.value
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = zodiac[i].image
			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[i].fortune

			// stop the function because we found a match and added the data to the screen!!!
			return
		}
		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct zodiac sign")
		// if no match is found, do opposite of above, mostly clearing content and images
		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!"
		document.getElementById("yourHoroscope").textContent = ""
		document.getElementById("icon").src = ""
	}
}
