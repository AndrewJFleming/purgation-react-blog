import React from "react";

export const CheckFeatured = ({ featured, setFeatured }) => {
  const handleFeatured = () => setFeatured(!featured);

  return (
    <div className="writeFormGroup">
      <h3>Featured Post</h3>

      <input onClick={handleFeatured} checked={featured} type="checkbox" />
      <label>Is featured?</label>
      <h6 className="finePrint">
        * Featured Posts are displayed in the app sidebar.
      </h6>
    </div>
  );
};
