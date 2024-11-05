"use client";

import { useActionState } from "react";
import { increment } from "../actions";

export default function StatefulForm() {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form className="text-center mt-40">
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
