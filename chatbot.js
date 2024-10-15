function preprocessQuestion(question) {
    return question.toLowerCase().replace(/[^\w\s]/g, "").split(" ");
}

function findClosestAnswer(qaPairs, userQuestion) {
    // Preprocess the user's question
    let userWords = preprocessQuestion(userQuestion);

    let bestMatch = null;
    let maxMatches = 0;

    // Compare with each predefined question
    for (let i = 0; i < qaPairs.length; i++) {
        let [question, answer] = qaPairs[i];

        let predefinedWords = preprocessQuestion(question);

        // Count how many words match
        let matches = predefinedWords.filter(word => userWords.includes(word)).length;

        // Update the best match if current question has more matches
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = answer;
        }
    }

    // Return the answer corresponding to the closest matching question
    return bestMatch || "Sorry, I don't understand the question.";
}

let qaPairs = [
    ["What is your name?", "My name is Chatbot."],
    ["How can I help you?", "I can assist you with your queries."],
    ["What is the weather today?", "The weather is sunny."]
];

let userQuestion = "What's the weather like today?";
console.log(findClosestAnswer(qaPairs, userQuestion)); 
