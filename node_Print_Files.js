// Correct the 'require' statements
const fs = require('fs');
const { exec } = require('child_process');

// 1) Create a file called newfile.txt (write any content)
fs.writeFileSync('newfile.txt', 'Hello from new file.');

// 2) Use exec to print the directory contents
exec('ls', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // Split the output by newlines, filter out empty lines
  const files = stdout
    .split('\n')
    .map(file => file.trim())
    .filter(file => file !== '');
  
  // Join them with a comma and space
  console.log(files.join(', '));
});
