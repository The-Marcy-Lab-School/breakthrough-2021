const app = require("./app");
const supertest = require("supertest");

const request = supertest(app);

describe("/tasks", () => {
  describe("GET /tasks", () => {
    it("returns a list of tasks", async () => {
      const res = await request.get("/tasks");

      console.log(res.body);
      expect(res.status).toBe(200);
      expect(res.body.name).toEqual("example");
    });
  });

  describe("/POST /tasks", () => {
    test("will return the body of req", async () => {
      const res = await request.post("/tasks").send({
        task_name: "do this",
      });

      expect(res.status).toBe(201);
    });
  });
});
