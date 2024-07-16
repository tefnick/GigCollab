// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of building a POC, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Location = {
    country: string,
    state: string, // change to enum?
    city: string,
    address: string
    zipcode: number
};

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    phone?: string
    location?: string
    isVenueGigManager: Boolean
    isArtist: Boolean
    venues?: Venue["id"][]
    artists?: Artist["id"][]
};

export type Venue = {
    id: string,
    name: string,
    country: string,
    state: string, 
    city: string,
    address: string
    zipcode: number
    capacity?: number,
    contact?: User[],
    url?: string
    numberOfStages: number,
    hasBackline: Boolean,
    backlineDetails?: string
    upcomingGigs?: Gig[]
};

export type Artist = {
    id: string,
    name: string,
    genre?: string[],
    location?: Location,
    bio?: string,
    url?: string,
    contact?: User["id"],
    upcomingGigs?: Gig[]
};

export type Gig = {
    eventId: string,
    eventName: string
    venue?: Venue["id"], // lookup to Venue
    eventDate?: Date,
    lineup?: Artist[] // lookup list of Artist(s),
    status: "Planning" | "Closed" | "Canceled"
};