import connectDB from 'lib/db';
import Topic from 'models/topics';

type Props = {
  title: string;
  description: string;
};

export default async function createTopic({ title, description }: Props) {
  await connectDB();
  const response = await Topic.create({ title, description });
  return response;
}
