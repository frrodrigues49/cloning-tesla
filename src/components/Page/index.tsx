import React from 'react';
import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container, Spacer } from './styles';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'MODEL S',
            'MODEL 3',
            'MODEL X',
            'MODEL Y',
            'SOLAR ROOF',
            'Acessories',            
          ].map(modelName => (        
          <ModelSection
            key={modelName}
            className="colored" 
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent 
                label={modelName}
                description="Order Online for Delivery"
              />
            } 
            />
          ))}
        </div>

        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper> 
    </Container>
  );
};

export default Page;
