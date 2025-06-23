import { RadioGroup } from '@/shared/components/ui/radio-group';

import { deliveryOptions } from '../../mock/mock-delivery';
import { CardItem } from '../card';

export const Delivery = () => {
  return (
    <RadioGroup defaultValue="delivery-local">
      <div className="grid grid-cols-2 gap-2">
        {deliveryOptions.map((delivery) => (
          <CardItem title={delivery.name} method={delivery.value} type={delivery.type} />
        ))}
      </div>
    </RadioGroup>
  );
};
