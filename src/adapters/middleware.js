import camelCaseKeys from 'camelcase-keys';
import snakeCaseKeys from 'snakecase-keys';

const toSnakeCase = (data) => {
  if (!data) return;

  return snakeCaseKeys(data, { deep: true });
};

const toCamelCase = (results) => {
  if (!results) return;

  return camelCaseKeys(results, { deep: true });
};

export { toSnakeCase, toCamelCase };
