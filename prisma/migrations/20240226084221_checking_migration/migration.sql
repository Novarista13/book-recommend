/*
  Warnings:

  - You are about to drop the column `categoryId` on the `books` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `Books_categoryId_fkey`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `categoryId`;

-- CreateTable
CREATE TABLE `CategoryList` (
    `bookId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`bookId`, `categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CategoryList` ADD CONSTRAINT `CategoryList_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoryList` ADD CONSTRAINT `CategoryList_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
