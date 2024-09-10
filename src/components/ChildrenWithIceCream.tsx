interface Props {
  backgroundColor: string;
  path: string;
}

export function ChildrenWithIceCream({
  backgroundColor,
  path,
}: Readonly<Props>) {
  return (
    <span className="relative inline-block mx-2 -mb-4">
      <span
        className="absolute left-0 bottom-0 w-12 h-4 rounded-full"
        style={{ backgroundColor }}
      ></span>
      <img
        src={path}
        alt="Child smiling"
        className="relative w-12 h-12 rounded-full object-cover"
      />
    </span>
  );
}
