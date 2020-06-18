import Model from '../models/model';

const usersModel = new Model('users');
export const users = async (req, res) => {
  try {
    const data = await usersModel.select('firstName, lastName');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

// export const addUser = async (req, res) => {
//   const { firstName, lastName } = req.body;
//   const columns = 'firstName, lastName';
//   const values = `'${firstName}', '${lastName}'`;

//   try {
//     const data = await usersModel.insertWithReturn(columns, values);
//     res.status(200).json({ messages: data.rows });
//   } catch (err) {
//     res.status(200).json({ messages: err.stack });
//   }
// };
