import Workout from "@/models/Workout";
import connectDB from "@/utils/connectDB";
import nc from "next-connect";
connectDB();
const handler = nc()
  .get(async (req, res) => {
    const { id } = req.query;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  })
  .put(async (req, res) => {
    const { id } = req.query;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such workout" });
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!workout) {
      return res.status(400).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  })
  .delete(async (req, res) => {
    const { id } = req.query;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ error: "No such workout" });
    // }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
      return res.status(400).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  });
export default handler;
