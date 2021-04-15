import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    forecast: {
      date: 111,
      description: "Stub description",
      icon: "800",
      temperature: {
        max: 22,
        min: 11,
      },
    },
    onSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        forecast={validProps.forecast}
        onSelect={validProps.onSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        forecast={validProps.forecast}
        onSelect={validProps.onSelect}
      />
    );
    expect(getByText("Thu")).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("22°c")).toHaveClass("forecast-summary__temperature");
  });
});
