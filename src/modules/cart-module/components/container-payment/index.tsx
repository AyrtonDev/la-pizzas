import { RadioGroup } from '@/shared/components/ui/radio-group';

import { paymentOptions } from '../../mock/mock-payment';
import { CardItem } from '../card';

export const Payment = () => {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="grid grid-cols-2 gap-2">
        {paymentOptions.map((payment) => (
          <CardItem
            title={payment.name}
            method={payment.value}
            isPaymentOnDelivery={false}
            type={'payment'}
          />
        ))}
      </div>
    </RadioGroup>
  );
};
