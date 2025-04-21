'use client'

import React from 'react'
import { gigFormSchema, GigFormSchema } from '@/lib/schemas/gigFormSchema'
import { format, getDate } from "date-fns"
import { useForm, Controller } from 'react-hook-form'
import { Button } from '../ui/button'
import { Venue, GigStatus } from '@prisma/client'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from '../ui/form'
import { cn } from '@/lib/utils'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import { CalendarIcon } from "lucide-react"
import { Calendar } from '../ui/calendar'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '../ui/select'

type GigFormProps = {
  venues: Venue[]
}

export default function GigForm({ venues }: GigFormProps) {
  const form = useForm<GigFormSchema>({
    resolver: zodResolver(gigFormSchema),
    defaultValues: {
      eventName: '',
      date: new Date(),
      venue: { id: ''},
      status: 'PLANNING'
    }
  })

  function onSubmit(data: GigFormSchema) {
    console.log(data)
  }

  return (
    // plain form below
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input defaultValue="test" {...register("eventName")}/>
    //   <input type="date" {...register("date")}/>
    //   <select {...register("venue")}>
    //     {venues?.map((venue) => (
    //       <option key={venue.id} value={venue.id}>{venue.name}</option>
    //     ))}
    //   </select>
    //   <select {...register("status")}>
    //     {Object.values(GigStatus).map((status) => (
    //       <option key={status} value={status}>{status}</option>
    //     ))}
    //   </select>
    //   <Button type="submit">Submit</Button>
    // </form>
    <div className='flex justify-center'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Event Name */}
          <FormField
            control={form.control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="awesome gig" {...field} />
                </FormControl>
                <FormDescription>
                  This is your event name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Event Date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of event</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date: Date) => // don't let user choose date in the past
                        date <= new Date()
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  The date of your event
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Venue */}
          <FormField 
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Event Venue</FormLabel>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a venue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Venues</SelectLabel>
                      {venues?.map((venue) => (
                        <SelectItem key={venue.id} value={venue.id.toString()}>{venue.name}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Status */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Set Gig Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                {Object.values(GigStatus)?.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
