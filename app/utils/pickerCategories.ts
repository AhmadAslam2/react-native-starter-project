interface categoriesInterface {
  value: number;
  label: string;
}
export let categories: categoriesInterface[] = [];

export const setCategories = (_categories: any) => {
  const newarray = _categories.reduce(
    (prev: any, curr: any) => [...prev, {value: curr.id, label: curr.name}],
    [],
  );
  categories = newarray;
};
