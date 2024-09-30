export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* no-unused-vars */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* eslint-enable */

  return [task, task2];
}
