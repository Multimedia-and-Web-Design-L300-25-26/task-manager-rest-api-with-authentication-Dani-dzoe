import app from "../src/app.js";

afterAll(async () => {
  await mongoose.connection.close();
});
export default app;
