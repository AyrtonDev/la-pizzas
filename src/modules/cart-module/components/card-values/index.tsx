export const Total = () => {
  return (
    <div className="bg-light ih-full w-full rounded-2xl border-1 border-gray-400 p-2">
      <div className="text-primary flex h-6 justify-between border-b border-b-gray-400 text-sm">
        <span>Pizzas</span>
        <div>valor</div>
      </div>
      <div className="text-primary flex h-6 justify-between border-b border-b-gray-400 text-sm">
        <span>Entrega</span>
        <div>entrega</div>
      </div>
      <div className="text-primary flex h-6 justify-between border-b border-b-gray-400 text-base">
        <span>Valor Final</span>
      </div>
    </div>
  );
};
