import OpenAI from "openai";
import { config } from "dotenv";

config();
const openai = new OpenAI( {apiKey: process.env.OPENAI_API_KEY});
let text = "Emily in Paris"

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [
            {
            role: "system",
            content: "You are a flashcard generator. The user will input text and you are to use that text and context of that text and generate 5 flashcards regarding it in a question, answer format. Give the answers in json format as well."
            },
            {
                "role": "user",
                "content": text
            }
        ],
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
}

main();
