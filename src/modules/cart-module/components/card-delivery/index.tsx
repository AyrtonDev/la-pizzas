import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group';

export const Delivery = () => {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex justify-between">
        <div className="bg-light flex h-20 w-40 flex-wrap justify-between rounded-2xl border-1 border-gray-400 p-2 text-base">
          <span>Entrega</span>
          <div className="">
            <RadioGroupItem value="option-one" id="option-one" />
          </div>

          <span className="text-black">R$ 15,00</span>
        </div>
        <div className="bg-light flex h-20 w-40 flex-wrap justify-between rounded-2xl border-1 border-gray-400 p-2 text-base">
          <span>Retirar no local</span>

          <div className="">
            <RadioGroupItem value="option-two" id="r2" />
          </div>
          <span className="text-black">R$ 00,00</span>
        </div>
      </div>
    </RadioGroup>
  );
};
