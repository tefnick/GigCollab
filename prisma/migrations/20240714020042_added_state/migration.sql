/*
  Warnings:

  - You are about to drop the column `state` on the `venues` table. All the data in the column will be lost.
  - Added the required column `stateId` to the `venues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "venues" DROP COLUMN "state",
ADD COLUMN     "address3" TEXT,
ADD COLUMN     "stateId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" VARCHAR(2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "venues" ADD CONSTRAINT "venues_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
