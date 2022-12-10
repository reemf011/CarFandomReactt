import { useState, useEffect } from 'react';

import AddPostForm from '../components/Post/AddPosttForm';

const AddProductPage = () => {
  const [Repair, setRepair] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchPost = async () => {
      try {
        const response = await fetch('http://localhost:5000/Repair', {
          signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setSuppliers(data.Repair);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchPost;

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Loading list of existing Repairs...</p>;
  }

  return (
    <div>
      <AddPostForm Repair={Repair} />
    </div>
  );
};

export default AddPostPage;
