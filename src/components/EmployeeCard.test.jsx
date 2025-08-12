import { render, screen } from "@testing-library/react";
import EmployeeCard from "./EmployeeCard"; // adjust import to your path

test("renders employee name and email", () => {
  const employee = {
    name: "John Doe",
    email: "john@example.com",
    role: "Software Engineer",
    department: "Engineering",
  };

  render(<EmployeeCard employee={employee} />);

  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
});
