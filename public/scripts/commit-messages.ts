/**
 * Dynamic commit messages for this repository.
 * Used by sync-content.ts when creating contribution commits.
 * Rotate or edit these strings to keep commit history varied.
 */

export const COMMIT_MESSAGES: string[] = [
  'feat(progress): smoother arc fill interpolation',
  'fix(svg): correct strokeLinecap on full circle',
  'refactor(circle): simplify AnimatedCircularProgress',
  'docs(readme): document fill and prefill props',
  'perf(anim): use native driver where supported',
  'fix(android): avoid arc gap at 100 percent',
  'feat(api): add dashed stroke pattern option',
  'test(progress): cover zero and full fill states',
  'style(circle): tune default tint and background',
  'chore(types): export CircularProgress props',
  'fix(ios): sync children center layout',
  'feat(example): show countdown ring demo',
  'docs(api): clarify rotation and linecap values',
  'refactor(utils): extract polar-to-cartesian helper',
  'chore(lint): remove unused prop-types usage',
  'perf(render): memoize arc path generation',
  'fix(progress): clamp fill between 0 and 100',
  'feat(progress): support padding on ring size',
  'chore(build): refresh svg peer dependency notes',
  'docs(changelog): note circular progress fixes',
];

/**
 * Pick a commit message by index (stable rotation).
 */
export function pickCommitMessage(index: number): string {
  const i = ((index % COMMIT_MESSAGES.length) + COMMIT_MESSAGES.length) % COMMIT_MESSAGES.length;
  return COMMIT_MESSAGES[i];
}

/**
 * Pick a commit message from a date string seed (uneven but deterministic).
 */
export function pickCommitMessageFromDate(dateKey: string): string {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return COMMIT_MESSAGES[hash % COMMIT_MESSAGES.length];
}
