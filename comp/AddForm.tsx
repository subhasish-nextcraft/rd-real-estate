// import connectDB from 'lib/db';
// import Topic from 'models/topics';
// import { revalidatePath } from 'next/cache';
// import Button from 'ui/Button';
// import Input from 'ui/Input';

// const addTodo = async (formData) => {
//   'use server';

//   const newTopic = formData.get('newTopic');
//   const newDescription = formData.get('newDescription');

//   await connectDB();
//   await Topic.create({
//     title: newTopic,
//     description: newDescription,
//   });
//   revalidatePath('/');
// };

export default function AddForm() {
  return (
    <>
      asdfjhk
      {/* <form action={addTodo}> */}
      {/* <Input name="newTopic" placeholder="Enter new topic" />
      <Input name="newDescription" className="mt-2" /> */}
      {/* <Button className="mr-4 mt-4">Add</Button>
      <Button clear className="mr-4 mt-4">
        Add
      </Button>
      <Button error className="mr-4 mt-4">
        Add
      </Button>
      <Button clear error className="mr-4 mt-4">
        Add
      </Button> */}
      {/* </form> */}
    </>
  );
}
