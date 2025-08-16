import { makeNewTodo } from "./make-new-todo";

describe("makeNewTodo", () => {
  describe("create", () => {
    it("should creates a new todo object", () => {
      // AAA → Arrange, Act, Assert

      // Arrange → criar o que precisa antes de executar o teste
      const mockNewTodo = {
        id: expect.any(String),
        description: "hello, world!",
        createdAt: expect.any(String),
      };

      // Act → usar a função ou recurso que se quer checar o comportamento
      const newTodo = makeNewTodo("hello, world!");

      // Assert → verificar se o comportamento ocorre como esperado (ou como não esperado)
      expect(newTodo).toStrictEqual(mockNewTodo);
    });
  });
});
