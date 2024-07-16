-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC_USER', 'VENUE_GIG_MANAGER', 'ARTIST_GIG_MANAGER', 'ADMIN');

-- CreateEnum
CREATE TYPE "GigStatus" AS ENUM ('PLANNING', 'CLOSED', 'CANCELLED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "role" "Role"[] DEFAULT ARRAY['BASIC_USER']::"Role"[],
    "isVenueGigManager" BOOLEAN NOT NULL DEFAULT false,
    "isArtistGigManager" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT[],
    "location" TEXT,
    "bio" TEXT,
    "url" TEXT,
    "contactId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gigs" (
    "id" SERIAL NOT NULL,
    "eventName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "venueId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    "status" "GigStatus" NOT NULL DEFAULT 'PLANNING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gigs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venues" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "capacity" INTEGER,
    "contactId" TEXT,
    "url" TEXT,
    "numberOfStages" INTEGER NOT NULL,
    "hasBackline" BOOLEAN NOT NULL DEFAULT false,
    "backlineDetails" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "venues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArtistToGig" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtistToGig_AB_unique" ON "_ArtistToGig"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtistToGig_B_index" ON "_ArtistToGig"("B");

-- AddForeignKey
ALTER TABLE "artists" ADD CONSTRAINT "artists_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gigs" ADD CONSTRAINT "gigs_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "venues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venues" ADD CONSTRAINT "venues_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToGig" ADD CONSTRAINT "_ArtistToGig_A_fkey" FOREIGN KEY ("A") REFERENCES "artists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToGig" ADD CONSTRAINT "_ArtistToGig_B_fkey" FOREIGN KEY ("B") REFERENCES "gigs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
