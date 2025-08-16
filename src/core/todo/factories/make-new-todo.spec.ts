import { makeNewTodo } from "./make-new-todo";

it("should creates a new todo object", () => {
  // AAA → Arrange, Act, Assert

  // Arrange → criar o que precisa antes de executar o teste
  const mockNewTodo = {
    id: "any-id",
    description: "hello, world!",
    createdAt: "any-date",
  };

  // Act → usar a função ou recurso que se quer checar o comportamento
  const newTodo = makeNewTodo("hello, world!");

  // Assert → verificar se o comportamento ocorre como esperado (ou como não esperado)
  expect(newTodo.description).toBe(mockNewTodo.description);
});
