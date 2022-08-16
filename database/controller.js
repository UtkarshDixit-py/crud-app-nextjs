import Users from "../model/user";

// get: http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
    // res.status(404).json(error);
  }
}

// get: http://localhost:3000/api/users/1515151
export async function getUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "user not selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while fetching user" });
  }
}

// post:http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
// put:http://localhost:3000/api/users/215115153
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "Error while updating user" });
  } catch (error) {
    res.status(404).json({ error: "Error while updating data" });
  }
}

// delete:http://localhost:3000/api/users/215115153
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: userId });
    }

    res.status(404).json({ error: "User not found" });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting" });
  }
}
