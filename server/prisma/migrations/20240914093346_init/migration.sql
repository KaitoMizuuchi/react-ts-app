/*
  Warnings:

  - Made the column `rating` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `books` MODIFY `rating` INTEGER NOT NULL;
