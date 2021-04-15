import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 111,
        description: "Stub description 1",
        icon: "800",
        temperature: {
          max: 22,
          min: 11,
        },
      },
      {
        date: 222,
        description: "Stub description 2",
        icon: "211",
        temperature: {
          max: 24,
          min: 9,
        },
      },
    ],
    onForecastSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of tests", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(getAllByTestId("forecast-summary").length).toBe(2);
  });
});
