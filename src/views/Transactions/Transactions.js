import React from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

export default function Transactions() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <h2>Transactions</h2>
        </GridItem>
      </GridContainer>
    </div>
  );
}
