export function Item({ children }) {
  return <div className="flex flex-col mx-8 items-center">{children}</div>;
}

export default function ({ children, items = [] }) {
  return (
    <div className="bg-surface-container-highest p-[20px] rounded-lg gap-y-2 gap-x-2 flex justify-center">
      {items.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
      {children}
    </div>
  );
}
