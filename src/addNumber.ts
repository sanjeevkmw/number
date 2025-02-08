export function addNumber(numbers: string): number {
  if (!numbers) return 0;

  return numbers
    .split(/[\n,]/) // Split by both newline (\n) and comma (,)
    .map((num) => parseInt(num, 10) || 0) // Convert to numbers, default to 0 if invalid
    .reduce((sum, num) => sum + num, 0); // Sum up numbers
}
