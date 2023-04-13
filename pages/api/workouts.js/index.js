import Workout from "@/models/Workout";
import connectDB from "@/utils/connectDB";
import nc from "next-connect";

await connectDB();
const handler = nc()
  .use(require("body-parser").json())
  .post(async (req, res) => {
    const { title, load, reps } = req.body;

    let emptyFields = [];

    if (!title) {
      emptyFields.push("title");
    }
    if (!load) {
      emptyFields.push("load");
    }
    if (!reps) {
      emptyFields.push("reps");
    }
    if (emptyFields.length > 0) {
      return res
        .status(400)
        .json({ error: "Please fill in all fields", emptyFields });
    }

    // add to the database
    try {
      const workout = new Workout({ title, load, reps });
      await workout.save();
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })
  .get(async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
    // res.status(200).json({ data: "ahmed" })
  });
export default handler;
