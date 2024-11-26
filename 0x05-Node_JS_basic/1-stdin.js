// Prompt user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read and display user input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Display closing message when input ends
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
