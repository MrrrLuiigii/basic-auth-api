const users = [
  {
    id: 1,
    username: "Nicky",
    password: "Secret",
    firstName: "Nicky",
    lastName: "Janse",
  },
  {
    id: 2,
    username: "Pietje",
    password: "Password",
    firstName: "Pietje",
    lastName: "Puk",
  },
];

export async function authenticate({ username, password }) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
