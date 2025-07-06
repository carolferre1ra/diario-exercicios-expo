import React from "react";
import { render } from "@testing-library/react-native";
import AddButton from "../components/AddButton";

describe("<AddButton />", () => {
  it("renderiza o botão com o texto correto", () => {
    const { getByText } = render(<AddButton />);
    expect(getByText("➕ Adicionar")).toBeTruthy();
  });

  it("tem o link correto para a tela /add", () => {
    const { getByText } = render(<AddButton />);
    const botao = getByText("➕ Adicionar");

    expect(botao.props.href).toBe("/add");
  });
});
