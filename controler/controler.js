import loginDetail from "../schema/schema.js";

// get all the data
export const getAllData = async (req, res) => {
  try {
    const allData = await loginDetail.find();
    return res.status(200).json(allData);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// added the data
export const handlePost = async (req, res) => {
  const postedData = new loginDetail({
    UserName: req.body.UserName,
    UserEmail: req.body.UserEmail,
    UserAge: req.body.UserAge,
  });
  try {
    const addedData = await postedData.save();
    return res.status(200).json(addedData);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export const handleUpdata = async (req, res) => {
  try {
    const updatedData = await loginDetail.findByIdAndUpdate(
      { _id: req.params.id },
      {
        UserName: req.body.UserName,
        UserEmail: req.body.UserEmail,
        UserAge: req.body.UserAge,
      },
      { new: true }
    );

    res.status(200).json(updatedData);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// update the data
export const handleDelect = async (req, res) => {
  const id = req.params.id;
  try {
    await loginDetail.deleteOne({ _id: id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send("delete a response");
};
