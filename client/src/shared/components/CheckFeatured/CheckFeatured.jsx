import React from "react";

export const CheckFeatured = ({ featured, setFeatured }) => {
  const handleFeatured = () => setFeatured(!featured);

  return (
    <div className="checkFeaturedGroup">
      <h5 className="writeFormTitle">Featured Post</h5>

      <input onClick={handleFeatured} checked={featured} type="checkbox" />
      <label>Is featured?</label>
      <br />
      <h7 className="finePrint">
        * Featured Posts are displayed in the app sidebar.
      </h7>
    </div>
  );
};
