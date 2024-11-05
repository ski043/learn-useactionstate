"use server";

export async function createPost(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name") as string;

  if (name.length < 2) {
    return {
      status: "error",
      message: "Name must be at least 2 characters long",
    };
  }

  return {
    status: "success",
    message: "Post created successfully",
  };
}

export async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}
