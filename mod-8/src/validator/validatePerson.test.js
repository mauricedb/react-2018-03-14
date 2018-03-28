import validatePerson from './validatePerson';

describe('People validation', () => {
  let person;

  beforeEach(() => {
    person = {
      firstName: 'Li',
      lastName: '12',
      age: 50
    };
  });

  test('Validate an null object', () => {
    const errors = validatePerson(null);
    expect(errors).toEqual(['Geen persoon!']);
  });

  test('Validate a valid object', () => {
    const errors = validatePerson(person);
    expect(errors).toEqual([]);
  });

  test('Validate a over aged', () => {
    person.age = 200;
    const errors = validatePerson(person);
    expect(errors).toEqual(['Zo oud wordt niemand!']);
  });

  test('Validate an unnamed person', () => {
    person.firstName = '';
    const errors = validatePerson(person);
    expect(errors).toEqual(['Voornaam is verplicht!', 'Voornaam is te kort!']);
  });

  test('An unnamed person should match its snapshot', () => {
    person.firstName = '';
    const errors = validatePerson(person);
    expect(errors).toMatchSnapshot();
  });

  test('An valid person should match its snapshot', () => {
    const errors = validatePerson(person);
    expect(errors).toMatchSnapshot();
  });
});

describe('Adding (math)', () => {
  test('0.1 + 0.2 === 0.3', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });
});
