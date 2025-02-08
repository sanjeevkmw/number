export function addNumber(numbers: string): number {
  if (!numbers) return 0; // Handle empty string

  let delimiter = /[\n,]/; // Default delimiters: newline (\n) and comma (,)

  // Check for custom delimiter
  const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  if (customDelimiterMatch) {
    delimiter = new RegExp(customDelimiterMatch[1]); // Extract and use custom delimiter
    numbers = numbers.split("\n").slice(1).join("\n"); // Remove the delimiter declaration line
  }

  // Convert string into an array of numbers
  const numArray = numbers
    .split(delimiter)
    .map((num) => parseInt(num, 10)) // Convert to integer
    .filter((num) => !isNaN(num)); // Ignore NaN values

  // Detect negative numbers and throw an error
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  // Sum the valid numbers
  return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}
