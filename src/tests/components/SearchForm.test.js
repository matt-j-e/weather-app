import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchInput: "Some search string",
    setSearchInput: jest.fn(),
    onCitySearch: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchInput={validProps.searchInput}
        setSearchInput={validProps.setSearchInput}
        onCitySearch={validProps.onCitySearch}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct button text", () => {
    const { getByDisplayValue } = render(
      <SearchForm
        searchInput={validProps.searchInput}
        setSearchInput={validProps.setSearchInput}
        onCitySearch={validProps.onCitySearch}
      />
    );
    expect(getByDisplayValue("Search")).toBeInTheDocument();
  });
});
