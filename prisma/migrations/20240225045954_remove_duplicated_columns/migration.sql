/*
  Warnings:

  - You are about to drop the column `authorName` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `categoryName` on the `books` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `Books_authorId_authorName_fkey`;

-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `Books_categoryId_categoryName_fkey`;

-- DropForeignKey
ALTER TABLE `lists` DROP FOREIGN KEY `Lists_bookId_fkey`;

-- AlterTable
ALTER TABLE `authors` MODIFY `about` TEXT NULL;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `authorName`,
    DROP COLUMN `categoryName`,
    MODIFY `availability` ENUM('HardCopy', 'EBook', 'Audiobook') NULL DEFAULT 'EBook';

-- AlterTable
ALTER TABLE `lists` MODIFY `bookId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Authors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lists` ADD CONSTRAINT `Lists_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Books`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
