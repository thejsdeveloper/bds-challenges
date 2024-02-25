import { TASKS } from "@/app/api/challenges/TaskBoard/taskdata";
import { Task } from "@/app/api/challenges/TaskBoard/types/Task";
import { AvatarGroup } from "@/app/components/AvatarGroup/AvatarGroup";
import { Badge } from "@/app/components/Badge/Badge";
import Card from "@/app/components/Card/Card";
import Column from "@/app/components/Column/Column";
import { formatDate } from "@/app/utils/dateFormat";
import React from "react";

const TODO = TASKS.filter((task) => task.status === "To Do");
const IN_PROGRESS = TASKS.filter((task) => task.status === "In progress");
const UNDER_REVIEW = TASKS.filter((task) => task.status === "Under Review");
const DONE = TASKS.filter((task) => task.status === "Done");

export const TaskBoard = () => {
  return (
    <div className="flex-1 | rounded-xl | mb-6">
      <h1 className="text-3xl font-bold tracking-wider">Boards</h1>
      <BoardContent>
        <Column>
          <Column.Header className="flex items-center gap-2   rounded-lg p-2">
            <Column.Title>To do</Column.Title>
            <AddButton />
          </Column.Header>
          <Column.Content>
            {TODO.map((todoTasks) => (
              <TaskCard key={todoTasks.id} task={todoTasks} />
            ))}
          </Column.Content>
        </Column>
        {/* In Progress COLUMN */}
        <Column>
          <Column.Header className="flex items-center gap-2   rounded-lg p-2">
            <Column.Title>In Progress</Column.Title>
            <AddButton />
          </Column.Header>
          <Column.Content>
            {IN_PROGRESS.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Column.Content>
        </Column>
        {/* Under Review COLUMN */}
        <Column>
          <Column.Header className="flex items-center gap-2   rounded-lg p-2">
            <Column.Title>Under Review</Column.Title>
            <AddButton />
          </Column.Header>
          <Column.Content>
            {UNDER_REVIEW.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Column.Content>
        </Column>
        {/* Done Review COLUMN */}
        <Column>
          <Column.Header className="flex items-center gap-2   rounded-lg p-2">
            <Column.Title>Done</Column.Title>
            <AddButton />
          </Column.Header>
          {DONE.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Column>
      </BoardContent>
    </div>
  );
};

const AddButton = () => (
  <button className="w-6 h-6 p-2 flex justify-center items-center rounded-full text-gray-700 font-bold outline-none hover:bg-white hover:scale-110 focus:ring-1 ring-amber-600 transition-all">
    +
  </button>
);
const BoardContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-between gap-8 mt-8">
      {children}
    </div>
  );
};

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const { title, description, date, severity, imageUrl, assignedUsers } = task;

  const avatars = assignedUsers.map((user) => ({
    src: user?.avatar,
    alt: user?.name,
  }));

  return (
    <Card>
      <Card.Header className="flex justify-between">
        <div>
          {severity === "high" && <Badge color="primary" text="High" />}
          {severity === "medium" && <Badge color="info" text="Medium" />}
          {severity === "low" && <Badge color="secondary" text="Low" />}
        </div>
        <p className="text-gray-500">{formatDate(date)}</p>
      </Card.Header>
      <Card.Body className="flex flex-col gap-2">
        {imageUrl && (
          <div className="w-full h-[150px] relative rounded-lg overflow-hidden">
            <Card.Image
              src={imageUrl}
              alt={`Task ${title} image`}
              fill
              className="object-cover"
            />
          </div>
        )}
        <Card.Title>{title}</Card.Title>
        <Card.Content>{description}</Card.Content>
      </Card.Body>
      <Card.Footer>
        <AvatarGroup size="small" images={avatars} />
      </Card.Footer>
    </Card>
  );
};
