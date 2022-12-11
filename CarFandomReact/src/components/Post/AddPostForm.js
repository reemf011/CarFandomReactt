import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import SelectInput from '../../UI/form/SelectInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';

const AddPostForm = (props) => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);

  const PostsOptions = props.Post.map((s) => {
    return { postName: p.ame, value: p._id };
  });

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Post', {
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
        <FormInputError>Post name must not be empty</FormInputError>
      )}

      <TextAreaInput
        label="postPrice"
        name="price"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.price && (
        <FormInputError>car price must not be empty</FormInputError>
      )}

     
      <TextInput
        label="Image URL"
        type="text"
        name="imgURL"
        register={register}
      />

      <SelectInput
        label="Post"
        name="postId"
        register={register}
        validation={{ required: true }}
        options={PostsOptions}
      />
      {formState.errors.postId && (
        <FormInputError>post must not be empty.</FormInputError>
      )}

      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Post
      </button>
    </form>
  );
};

export default AddPostFormForm;
