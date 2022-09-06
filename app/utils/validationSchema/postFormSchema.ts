import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string().required().min(3).label('Title'),
  price: Yup.number()
    .required('Price is required')
    .min(1)
    .max(10000)
    .label('Price')
    .typeError('Price can only be number'),
  category: Yup.string().required('This field is required').label('Category'),
  description: Yup.string().label('Description'),
});
