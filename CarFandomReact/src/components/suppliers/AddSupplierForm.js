import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import SelectInput from '../../UI/form/SelectInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';

const AddSupplierForm = (props) => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);

  const suppliersOptions = props.suppliers.map((s) => {
    return { name: s.ame, value: s._id };
  });

  const submitHandler = async (formData) => {
    try {
<<<<<<< Updated upstream:CarFandomReact/src/components/Post/AddPostForm.js
      const response = await fetch('http://localhost:3000/Post', {
=======
      const response = await fetch('http://localhost:3000/suppliers', {
>>>>>>> Stashed changes:CarFandomReact/src/components/suppliers/AddSupplierForm.js
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `BEARER ${authContext.token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
        label="Name"
        type="text"
        name="name"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Product name must not be empty</FormInputError>
      )}

      <TextAreaInput
        label="Location"
        name="location"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.location && (
        <FormInputError>Supplier location must not be empty</FormInputError>
      )}

     
      <TextInput
        label="Image URL"
        type="text"
        name="imgURL"
        register={register}
      />

      <SelectInput
        label="Supplier"
        name="supplierId"
        register={register}
        validation={{ required: true }}
        options={suppliersOptions}
      />
      {formState.errors.supplierId && (
        <FormInputError>Supplier must not be empty.</FormInputError>
      )}

      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Supplier
      </button>
    </form>
  );
};

export default AddSupplierForm;
