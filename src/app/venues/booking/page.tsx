import GigForm from '@/components/gigs/GigForm'
import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { getVenues } from '@/lib/dbActions'
import { Venue } from '@prisma/client'
import { Input } from 'postcss'
import React from 'react'
import { Form } from 'react-hook-form'

export default async function VenueBooking() {
  const venues = await getVenues() as Venue[]
  return (
    <>
    <div className="flex justify-center font-bold text-2xl mt-6 mb-6">Venue Booking Request</div>
    <GigForm venues={venues}/>
    </>
  )
}
