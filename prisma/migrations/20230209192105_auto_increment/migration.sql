/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE book_id_seq;
ALTER TABLE "Book" ALTER COLUMN "id" SET DEFAULT nextval('book_id_seq');
ALTER SEQUENCE book_id_seq OWNED BY "Book"."id";

-- AlterTable
CREATE SEQUENCE user_id_seq;
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE user_id_seq OWNED BY "User"."id";
