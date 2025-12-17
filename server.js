// 11.2 create a separate server. This separation is required for Supertest.

const app = require("./index");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
