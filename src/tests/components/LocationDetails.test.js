import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="GB" />
    );

    expect(getByText("Manchester")).toHaveClass("location-details");
  });
});
