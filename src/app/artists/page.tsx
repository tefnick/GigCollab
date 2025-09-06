"use client"

import { title } from "@/src/components/primitives";
import Form from "next/form";
import {Input} from "@heroui/input";
import {Button} from "@heroui/button";

export default function ArtistsPage() {
  return (
    <div>
      <h1 className={title()}>Artists</h1>
        <Form action={e => console.log(e.entries())}>
            <Input
                isRequired
                name="username"
                label="Username"
                labelPlacement="outside"
                placeholder="Enter your username"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Username must be at least 3 characters long";
                    }

                    return value === "admin" ? "Nice try!" : null;
                }}
            />
            <Button type="submit">Submit</Button>
        </Form>
    </div>
  );
}
