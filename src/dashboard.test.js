import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./dashboard";

test("deve renderizar o componente sem erros", () => {
    render(<Dashboard />);
    const linkElement = screen.getByText(/dashboard/i);
    expect(linkElement).toBeInTheDocument();
});
