export interface Category {
  name: string;
  type: string;
  requirements?: Requirements;
}

export type Requirements = {
  type: 'OR' | 'AND';
  requirementsData: string[];
};
