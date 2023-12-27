import Preview from "../Preview";
export default function List({children}) {
  return (
    <Preview>
      <div className="flex w-full flex-col items-center gap-y-4">{children}</div>
    </Preview>
  );
}