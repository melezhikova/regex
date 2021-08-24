import Validator from '../app';

test.each([
  ['LyUda', true],
  ['LyudaННН123', false],
  ['Lyu2da', true],
  ['Lyuda1', false],
  ['1Lyuda', false],
  ['Lyuda-', false],
  ['Lyuda_', false],
  ['-Lyuda', false],
  ['_Lyuda', false],
  ['Lyu-da', true],
  ['Lyu_da', true],
  ['Lyu123da', true],
  ['Lyu1234da', false],
])(
  ('should validate username'), (name, expected) => {
    const validate = new Validator(name);
    const result = validate.validateUsername();

    expect(result).toBe(expected);
  },
);
