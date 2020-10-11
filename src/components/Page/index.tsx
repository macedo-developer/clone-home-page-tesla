import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelsWrapper, ModelSection } from "../Model";

import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Order online for delivery"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
