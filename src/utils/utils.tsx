import { v4 as uuidv4 } from 'uuid';

export function createObjectsArray(
  count: number
): { title: string; text: string; id: string }[] {
  return Array.from({ length: count }, () => ({
    title: `Title`,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    id: uuidv4(),
  }));
}
