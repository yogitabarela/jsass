// Q24-Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

const invalidJSONString = '{"key": "value", "another_key": }';

try {
    const parsedJSON = JSON.parse(invalidJSONString);
    console.log("Parsed JSON:", parsedJSON);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Invalid JSON string:", invalidJSONString);
        console.log("Error message:", error.message);
    } else {
        throw error;
    }
}
