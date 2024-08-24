-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nrp" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'Praktikan',
    "contact" TEXT NOT NULL,
    "profilPic" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelompok" (
    "userId" TEXT NOT NULL,
    "nomorKel" TEXT NOT NULL,
    "nrp" TEXT NOT NULL,
    "fullname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Nilai" (
    "userId" TEXT NOT NULL,
    "kelompokid" TEXT NOT NULL,
    "nilaiRataRata" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum1" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum2" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum3" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum4" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum5" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum6" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum7" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum8" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum9" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Praktikum10" (
    "userId" TEXT NOT NULL,
    "kelompokId" TEXT NOT NULL,
    "aslabId" TEXT NOT NULL,
    "aslab" TEXT NOT NULL,
    "nilai1" INTEGER NOT NULL,
    "nilai2" INTEGER NOT NULL,
    "nilai3" INTEGER NOT NULL,
    "nilai4" INTEGER NOT NULL,
    "nilai5" INTEGER NOT NULL,
    "nilaiTotal" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "JudulAslab" (
    "id" TEXT NOT NULL,
    "idAslab" TEXT NOT NULL,
    "kodeJudul" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "Aslab" TEXT NOT NULL,

    CONSTRAINT "JudulAslab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jadwal" (
    "aslabId" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nrp_key" ON "User"("nrp");

-- CreateIndex
CREATE UNIQUE INDEX "Kelompok_userId_key" ON "Kelompok"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Nilai_userId_key" ON "Nilai"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum1_userId_key" ON "Praktikum1"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum2_userId_key" ON "Praktikum2"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum3_userId_key" ON "Praktikum3"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum4_userId_key" ON "Praktikum4"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum5_userId_key" ON "Praktikum5"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum6_userId_key" ON "Praktikum6"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum7_userId_key" ON "Praktikum7"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum8_userId_key" ON "Praktikum8"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum9_userId_key" ON "Praktikum9"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Praktikum10_userId_key" ON "Praktikum10"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Jadwal_aslabId_key" ON "Jadwal"("aslabId");
