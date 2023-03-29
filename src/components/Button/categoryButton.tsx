import { Grab } from "../Icon/Grab";
import { Input } from "../Input";

export function CategoryButton() {
  return (
    <div className="flex items-center gap-2">
      <Grab />
      <Input placeholder="Background" type="text" />
    </div>
  );
}
