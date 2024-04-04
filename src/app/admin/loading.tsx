import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="flex justify-center items-center absolute inset-0 bg-black/5">
      <Loader2 className="size-10 animate-spin" />
    </div>
  );
}
