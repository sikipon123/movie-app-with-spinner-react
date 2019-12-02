import React from "react";

function spinner() {
  return (
    <div className="spinner">
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default spinner;
