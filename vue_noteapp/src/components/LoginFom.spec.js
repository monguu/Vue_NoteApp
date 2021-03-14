import { shallowMount } from "@vue/test-utils";
// import Vue from "vue";
import LoginForm from "./LoginForm.vue";

describe("LoginForm", () => {
  test("ID is email form", () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: "test",
        };
      },
    });
    // wrapper.find("#username");
    // const idInput = wrapper.find("#username");
    // console.log(idInput.element.value);
    // console.log(wrapper.vm.isUserValid);
    const userformatText = wrapper.find(".failduserText");
    expect(userformatText.exists()).toBeTruthy();
  });
  test("Id and password input ==> login input", () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: "",
          password: "",
        };
      },
    });
    const inputButton = wrapper.find("button");
    expect(inputButton.element.disabled).toBeTruthy();
  });
});
