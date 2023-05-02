-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "done" BOOLEAN NOT NULL,
    "task" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_key" ON "Task"("id");
