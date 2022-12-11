import { useState, useEffect } from 'react';

import AddSupplierForm from '../components/suppliers/AddSupplierForm';

const AddSupplierPage = () => {
  const [Repair, setRepair] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchPost = async () => {
      try {
<<<<<<< Updated upstream:CarFandomReact/src/pages/AddPostPage.js
        const response = await fetch('http://localhost:3000/Repair', {
=======
        const response = await fetch('http://localhost:3000/suppliers', {
>>>>>>> Stashed changes:CarFandomReact/src/pages/AddSupplierPage.js
          signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setSuppliers(data.suppliers);
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
    return <p>Loading list of existing suppliers...</p>;
  }

  return (
    <div>
      <AddcSuppliersForm suppliers={suppliers} />
    </div>
  );
};

export default AddSupplierPage;
