const otabekjs = require("./index");

const app = new otabekjs();

app.post("/users/:id", (req, res, next) => {
  const userId = req.params.id;
  const queryParams = req.query;
  console.log(userId)
  console.log(queryParams);
  
  const responseData = {
    userId,
    queryParams,
  }
  app.json(res,responseData);
  console.log(responseData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});