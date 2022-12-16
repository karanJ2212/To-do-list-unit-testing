/**
 * @jest-environment jsdom
 */

import { add, remove, populateList } from "../crud.js";
import ToDo from "../todoList.js";

jest.mock("../todoList");

describe("test for todo list function", () => {
  beforeEach(() => {
    ToDo.list = [];
  });

  describe("test for add storage and html DOM", () => {
    test("test for add funtion", () => {
      add("hello");
      add("goodbye");
      add("bye");
      const storage = JSON.parse(localStorage.getItem("todoList"));
      expect(storage).toHaveLength(3);
    });
    test("test for html DOM when add a task", () => {
      document.body.innerHTML =
        "<div>" + '  <ul id="todo-list"><li></li></ul>' + "</div>";
      add("hello");
      populateList();
      const listElements = document.querySelectorAll("#todo-list li");
      expect(listElements).toHaveLength(1);
    });
  });

 // write below, delete comment