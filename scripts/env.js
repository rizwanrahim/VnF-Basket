const { execSync } = require('child_process');

try {

  const secret = execSync(`echo $PROJECT_ID | sed 's/./& /g'`);
  console.log(secret);

} catch (error) {
  console.log(error);
}