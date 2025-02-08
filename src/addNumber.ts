export function addNumber(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /[\n,]/; // Default delimiters: newline (\n) and comma (,)

  // Check for custom delimiter at the start of the input
  const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  if (customDelimiterMatch) {
    delimiter = new RegExp(customDelimiterMatch[1]); // Extract custom delimiter
    numbers = numbers.split("\n").slice(1).join("\n"); // Remove delimiter line
  }

  return numbers
    .split(delimiter) // Split using the determined delimiter(s)
    .map((num) => parseInt(num, 10) || 0) // Convert to numbers, default to 0 if invalid
    .reduce((sum, num) => sum + num, 0); // Sum up numbers
}
