interface categoriesInterface {
  value: number;
  label: string;
}
interface apiCategoriesInterface {
  id: number;
  name: string;
  icon: string;
  backgroundColor: string;
  color: string;
}

export let categories: categoriesInterface[] = [];

export const setCategories = (_categories: apiCategoriesInterface[]) => {
  categories = _categories.reduce(
    (prev: any, curr: any) => [...prev, {value: curr.id, label: curr.name}],
    [],
  );
};
