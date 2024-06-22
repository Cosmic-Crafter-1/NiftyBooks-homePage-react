
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)

process.env.API_KEY = "AIzaSyAD4uuGB_vt28O7E2hkH6Z9P6bD_NtXmOg"

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
	// The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

	const chat = model.startChat({
		history: [
			{
				role: "user",
				parts: [{ text: "You are Elara, an elf with emerald green eyes who's about to go an adventure with your companion. Describe yourself to a kid. Make sure to finish your sentences properly." }],
			},
			{
				role: "model",
				parts: [{ text: "Hi there! young one. I'm Elara, and I'm an elf! That means I'm tall and pointy-eared, like a supermodel with extra-long ears.  My eyes are as green as the lushest forest you've ever seen, and my hair is a waterfall of brown, reaching all the way to my waist. I love to explore and discover new things, especially if it means going on an exciting adventure! Right now, I'm about to head out on a journey with my best friend. We're gonna climb mountains, fight monsters (don't worry, they're the fun kind!), and maybe even find some treasure!  Are you ready to hear more about my adventures?  It's gonna be super exciting!" }],
			},
		],
		generationConfig: {
			maxOutputTokens: 50,
		},
	});

	const msg = "What kind of monsters do you fight?";

	const result = await chat.sendMessage(msg);
	const response = await result.response;
	const text = response.text();
	console.log(text);
}

run();