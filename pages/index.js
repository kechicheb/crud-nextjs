import workout from "@/model/Workout";
import styles from "@/styles/Home.module.css";
import domain from "@/utils/config";
import axios from "axios";

export default function Home({ workoutData }) {
  const workouts = workoutData.map((workout) => {
    return <p>{workout}</p>;
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {workouts}
    </>
  );
}
export async function getStaticProps() {
  const response = await axios.get(`${domain}/workouts`);
  return {
    props: {
      workoutData: response.data,
    },
  };
}
