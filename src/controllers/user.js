import Model from '../models/model';

const usersModel = new Model('users');
export const users = async (req, res) => {
  try {
    const data = await usersModel.select('id,firstName, lastName, inventory');
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(200).json({ users: err.stack });
  }
};

export const addUser = async (req, res) => {
  const { firstName, lastName, inventory} = req.body;
  const columns = 'firstName, lastName, inventory';
  const values = `'${firstName}', '${lastName}', '${inventory}'`;

  try {
    const data = await usersModel.insertWithReturn(columns, values);
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(200).json({ users: err.stack });
  }
};

// export const deleteTask = async (req, res) => {
//   const { firstName, lastName}
// }
