import { User, Location, Artist, Venue, Gig } from "@/src/lib/models/models";

export const locations: Location[] = [
    {
        country: "United States",
        state: "TX",
        city: "Austin",
        address: "123 Acme Rd",
        zipcode: 12345
    },
    {
        country: "United States",
        state: "TX",
        city: "San Antonio",
        address: "234 Babe Ln",
        zipcode: 23456
    }
];


export const users: User[] = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        firstName: 'Willie',
        lastName: 'Nelson',
        email: 'willie@nelson.com',
        password: '123456',
        location: "Austin, TX",
        isVenueGigManager: false,
        isArtist: true,
    },
    {
        id: '410544b2-4001-4271-9855-fhioe4498yhh',
        firstName: 'Chuck',
        lastName: 'Berry',
        email: 'chuck@berry.com',
        password: '123456',
        location: "Lubbock, TX",
        isVenueGigManager: false,
        isArtist: true,
    }
];


export const artists: Artist[] = [
    {
        id: "410544b2-4001-4271-9855-324hiuho81",
        name: "Willie Nelson",
        bio: "The man, the legend, the chief.",
        genre: ["Americana", "Folk", "Country"],
        contact: "410544b2-4001-4271-9855-fec4b6a6442a"
    },
    {
        id: "410544b2-4001-4271-9855-324hiuho80",
        name: "Chuck Berry",
        bio: "Guitar master and heart stealer.",
        genre: ["Rock n Roll", "Rhythm and blues"],
        contact: "410544b2-4001-4271-9855-fhioe4498yhh",
        upcomingGigs: [
            {
                eventId: "gig002",
                eventName: "Jazz Festival",
                venue: "venue789",
                eventDate: new Date (2024,7,16,14,0,0),
                lineup: [
                    {
                        id: "artist001",
                        name: "Ella Harmonics"
                    },
                    {
                        id: "410544b2-4001-4271-9855-324hiuho80",
                        name: "Chuck Berry"
                    }
                ],
                status: "Closed"
            }
        ]
    },
    {
        id: "artist001",
        name: "Ella Harmonics",
        genre: ["Jazz", "Soul"],
        bio: "Ella Harmonics, a multi-talented jazz and soul vocalist, known for her rich voice and deep, emotive performances.",
        url: "http://www.ellaharmonics.com",
        upcomingGigs: [
            {
                eventId: "gig001",
                eventName: "Summer Jazz Nights",
                venue: "venue789",
                eventDate: new Date (2024-7-15),
                lineup: [
                    {
                        id: "artist001",
                        name: "Ella Harmonics"
                    }
                ],
                status: "Planning"
            },
            {
                eventId: "gig002",
                eventName: "Jazz Festival",
                venue: "venue789",
                eventDate: new Date (2024,7,16,14,0,0),
                lineup: [
                    {
                        id: "artist001",
                        name: "Ella Harmonics"
                    },
                    {
                        id: "410544b2-4001-4271-9855-324hiuho80",
                        name: "Chuck Berry"
                    }
                ],
                status: "Closed"
            }
        ]
    }
    
];

export const gigs: Gig[] = [
    {
        eventId: "gig001",
        eventName: "Summer Jazz Nights",
        venue: "venue789",
        eventDate: new Date (2024,7,15,20,0,0),
        lineup: [
            {
                id: "artist001",
                name: "Ella Harmonics"
            }
        ],
        status: "Planning"
    },
    {
        eventId: "gig002",
        eventName: "Jazz Festival",
        venue: "venue789",
        eventDate: new Date (2024,7,16,14,0,0),
        lineup: [
            {
                id: "artist001",
                name: "Ella Harmonics"
            },
            {
                id: "410544b2-4001-4271-9855-324hiuho80",
                name: "Chuck Berry"
            }
        ],
        status: "Closed"
    }
]

export const venues: Venue[] = [
    {
        "id": "venue123",
        "name": "Grand Concert Hall",
        "country": "USA",
        "state": "Texas",
        "city": "San Antonio",
        "address": "123 Music Ave",
        "zipcode": 10001,
        "capacity": 5000,
        "contact": [
            {
                "id": "user001",
                "firstName": "Jane",
                "lastName": "Doe",
                "email": "jane.doe@example.com",
                "phone": "123-456-7890",
                isVenueGigManager: true,
                isArtist: false,
            },
            {
                "id": "user002",
                "firstName": "John",
                lastName: "Smith",
                "email": "john.smith@example.com",
                "phone": "234-567-8901",
                isVenueGigManager: true,
                isArtist: false,
            }
        ],
        "url": "http://www.grandconcerthall.com",
        "numberOfStages": 2,
        "hasBackline": true,
        "backlineDetails": "Full drum kit, two guitar amps, and a bass amp available"
    },
    {
        "id": "venue456",
        "name": "Urban Arts Theater",
        "country": "UK",
        "state": "England",
        "city": "London",
        "address": "56 Art Street",
        "zipcode": 56789,
        "capacity": 1200,
        "contact": [
            {
                "id": "user003",
                "firstName": "Emily",
                "lastName": "Turner",
                "email": "emily.turner@example.com",
                "phone": "345-678-9012",
                isVenueGigManager: true,
                isArtist: false,
            }
        ],
        "url": "http://www.urbanartstheater.com",
        "numberOfStages": 1,
        "hasBackline": false
    },
    {
        "id": "venue789",
        "name": "The Jazz Corner",
        "country": "France",
        "state": "Île-de-France",
        "city": "Paris",
        "address": "789 Boulevard de Jazz",
        "zipcode": 75001,
        "capacity": 800,
        "contact": [
            {
                "id": "user004",
                "firstName": "Lucas",
                "lastName": "Martin",
                "email": "lucas.martin@example.com",
                "phone": "456-789-0123",
                isVenueGigManager: true,
                isArtist: false,
            },
            {
                "id": "user005",
                "firstName": "Claire",
                "lastName": "Dubois",
                "email": "claire.dubois@example.com",
                "phone": "567-890-1234",
                isVenueGigManager: true,
                isArtist: false,
            }
        ],
        "numberOfStages": 3,
        "hasBackline": true,
        "backlineDetails": "Includes a piano, several microphones, and sound mixing equipment",
        "upcomingGigs": [
            {
                eventId: "gig001",
                eventName: "Summer Jazz Nights",
                venue: "venue789",
                eventDate: new Date (2024-7-15),
                lineup: [
                    {
                        id: "artist001",
                        name: "Ella Harmonics"
                    }
                ],
                status: "Planning"
            },
            {
                eventId: "gig002",
                eventName: "Jazz Festival",
                venue: "venue789",
                eventDate: new Date (2024,7,16,14,0,0),
                lineup: [
                    {
                        id: "artist001",
                        name: "Ella Harmonics"
                    },
                    {
                        id: "410544b2-4001-4271-9855-324hiuho8",
                        name: "Chuck Berry"
                    }
                ],
                status: "Closed"
            }
        ]
    }
];