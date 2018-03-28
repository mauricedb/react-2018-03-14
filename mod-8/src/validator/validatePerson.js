export default person => {
  const errors = [];

  if (!person) {
    errors.push('Geen persoon!');
  } else {
    if (!person.firstName) {
      errors.push('Voornaam is verplicht!');
    }

    if (person.firstName.length < 2) {
      errors.push('Voornaam is te kort!');
    }

    if (!person.lastName) {
      errors.push('Achternaam is verplicht!');
    }

    if (person.lastName.length < 2) {
      errors.push('Achternaam is te kort!');
    }

    if (person.age < 0) {
      errors.push('Moet al geboren zijn!');
    }

    if (person.age > 120) {
      errors.push('Zo oud wordt niemand!');
    }
  }

  return errors;
};
