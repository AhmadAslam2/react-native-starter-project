import {useState} from 'react';

const useApi = () => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const request = async (Func: any) => {
    try {
      setLoading(true);
      const response = await Func();
      setData(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return {request, data, loading, setData};
};
export default useApi;
