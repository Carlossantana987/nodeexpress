export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;


export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('chidimo', 'first message'),
      ('orji', 'second message')
`;


export const dropMessagesTable = 'DROP TABLE messages';


// USER table queries

export const createUsersTable = `
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR DEFAULT '',
  lastName VARCHAR NOT NULL
  inventory
)
`;


export const insertUsers = `
INSERT INTO users(firstName,lastName)
VALUES('testFirstName','firstName'),
      ('testLastName','lastName'),
      (['bacon','tomatos'], 'inventory')
`;


export const dropUsersTable = 'DROP TABLE users';
