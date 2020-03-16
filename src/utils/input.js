
/**
 * Selector Input.
 *
 * @param input
 * @param event
 * @param value
 * @param relation
 * @param field
 */
export function selectorInput(input, event, value, field, relation) {

  if (event) {

    if (relation) {

      event = event || [];

      input({
        ...value,
        [relation]: event,
        [`${field}Ids`]: event.map(v => v.id),
      });

    } else {

      input({
        ...value,
        [field]: event,
        [`${field}Id`]: event.id,
      });
    }

  } else {

    if (relation) {

      input({
        ...value,
        [relation]: [],
        [`${field}Ids`]: [],
      });

    } else {

      input({
        ...value,
        [field]: null,
        [`${field}Id`]: 0,
      });
    }
  }
}
