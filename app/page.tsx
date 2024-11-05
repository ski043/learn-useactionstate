"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPost } from "./actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const [state, formAction, isPending] = useActionState(createPost, undefined);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  id="name"
                  placeholder="Name of your project"
                />
                <p>{state?.message}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>{isPending ? "Saving..." : "Save"}</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
