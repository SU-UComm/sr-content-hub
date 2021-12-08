const netlifyFormHelpers = require('../netlify_functions/helpers/formHelpers');

test('generateFormData()', () => {
    const input = {a: 1, b: 'lorem'};
    const output = netlifyFormHelpers.generateFormData(input);
    const expectedOutput = 'a=1&b=lorem';

    expect(output).toStrictEqual(expectedOutput);
});
