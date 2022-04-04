const core = require('@actions/core');
const github = require('@actions/github');

try {
  // throw(new Error('some error message'));
  core.debug('Debug message');
  core.warning('Warning message');
  core.error('Error message');
  core.setSecret('This text will be masked in the log with ***');
  const name = core.getInput('who-to-great');
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput('time', time.toTimeString());

  core.startGroup('Logging github object');
  // console.log(JSON.stringify(github, null, '\t'));
  core.endGroup();

  core.exportVariable('HELLO_VAR', 'hello my name is');
} catch (error) {
  core.setFailed('This is the message why it fail. Is needed to let github know that it failed; ' + error.message);
}


