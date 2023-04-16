import styles from "@/styles/Home.module.css";
import domain from "@/utils/config";
import { useWorkoutsContext } from "@/lib/hooks/useWorkouts";
import { useEffect } from "react";

// components
import WorkoutDetails from "@/components/WorkoutDetails";
import WorkoutForm from "@/components/WorkoutForm";

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

// export async function getStaticProps() {
//   const response = await axios.get(`${domain}/workouts`);
//   return {
//     props: {
//       workoutData: response.data,
//     },
//   };
// }
