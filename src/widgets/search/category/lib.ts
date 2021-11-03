import { Requirements } from './types';

const checkIsAllValid = <T>(arr1: T[], arr2: T[]) => {
  const difference = new Set(arr1);

  for (const elem of arr2) {
    difference.delete(elem);
  }
  return !difference.size;
};

const checkIsOneValid = <T>(arr1: T[], arr2: T[]) => {
  for (const el of arr1) {
    const isValid = arr2.includes(el);

    if (isValid) {
      return true;
    }
  }

  return false;
};

interface Params {
  requirements: Requirements;
  queryParams: string[];
}

export const checkRequirements = ({ requirements, queryParams }: Params) => {
  const { requirementsData, type } = requirements;

  if (type === 'OR') {
    return checkIsOneValid<string>(requirementsData, queryParams);
  } else {
    return checkIsAllValid<string>(requirementsData, queryParams);
  }
};
