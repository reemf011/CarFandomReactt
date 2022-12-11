import FormInputError from "../../UI/form/FormInputError";
import SelectInput from "../../UI/form/SelectInput";
import FeedbackSummary from "./FeedbackSummary";

const FeedbackList =(props) => {
    const {register, handlesubmit, formState } = useForm();

    const customerOptions = props.customer.map((s) =>{
      return {name: s.name, valueL: s._id};
    });
    const submitHandler = (FormData);
  };

  return(
    <form
    className="flex flex-col p-10 gap-5 bg-gray-800 w-fit"
    onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
      Label="Name"
      type="text"
      name="Name"
      register={register}
      validation={{required: true}}
      />
      {formState.errors.name && (
        <FormInputError> customer feedback name must not be empty </FormInputError>
      )}

      <TextAreaInput
      Label="Description"
      name= "description"
      register={register}
      validation={{required: true}}
      />

{formState.errors.name && (
        <FormInputError> feedback description must not be empty </FormInputError>
      )}

          <button
          type="submit"
          className="bg-white rounded-x1 my-4 py-2 px-8 self-center"
          >
            Add Feedback
          </button>
          </form>
    );

    const submitHandler = async (formData) => {
      try{
        const response = await fetch ('http://localhost:3000/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
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

export default FeedbackList;