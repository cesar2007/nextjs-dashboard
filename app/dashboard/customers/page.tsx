"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";


export default function Page(){
  return (
    <>
      <h2>Customers Page</h2>
      <div className="space-x-1.5">
        <Button>Click me 2</Button>
        <Button variant="outline" >Outline</Button>
        <Button variant="secondary" >Secondary</Button>
        <Button variant="ghost" >Ghost</Button>
        <Button variant="link" >Link</Button>
        <Button variant="destructive" >Destructive</Button>

      </div>
      <h2>Calendar</h2>
      <Calendar/>      
      <h2>Switch</h2>
      <Switch/>
      <h2>Sonner</h2>
      <Button
        variant="secondary"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
    </Button>
    </>
  )  
}
