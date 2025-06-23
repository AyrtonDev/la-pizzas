import { Checkbox } from '@/shared/components/ui/checkbox';
import { RadioGroupItem } from '@/shared/components/ui/radio-group';

type CardItemProps = {
  title: string;
  method: string;
  isPaymentOnDelivery?: boolean;
  type: 'payment' | 'delivery' | 'pickup';
};

export const CardItem = ({ title, method, isPaymentOnDelivery, type }: CardItemProps) => {
  return (
    <div className="bg-light flex h-21 w-40 flex-col justify-between rounded-2xl border-1 border-gray-400 p-3 text-[14px]">
      <div className="flex items-center justify-between">
        <span className="break-words">{title}</span>

        <RadioGroupItem
          sizeIndicator="size-3"
          className="size-6 border-3"
          value={method}
          id={method}
        />
      </div>
      <div className="flex items-center justify-between">
        {type === 'delivery' && <span className="text-black">R$ 15,00</span>}
        {type === 'pickup' && <span className="text-black">R$ 00,00</span>}
        {type === 'payment' && (
          <>
            <span className="text-[12px] text-black">Pagar na entrega</span>

            <Checkbox
              checked={isPaymentOnDelivery}
              className="text-light border-primary border-2"
              id="terms-1"
            />
          </>
        )}
      </div>
    </div>
  );
};
