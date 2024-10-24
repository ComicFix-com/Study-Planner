import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

interface Homework {
  id: string;
  subject: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

const HomeworkTracker = () => {
  const [homework, setHomework] = useState<Homework[]>([]);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addHomework = () => {
    if (!subject || !description || !dueDate) {
      toast.error("Please fill in all fields");
      return;
    }

    const newHomework: Homework = {
      id: Date.now().toString(),
      subject,
      description,
      dueDate,
      completed: false,
    };

    setHomework([...homework, newHomework]);
    setSubject("");
    setDescription("");
    setDueDate("");
    toast.success("Homework added successfully");
  };

  const toggleComplete = (id: string) => {
    setHomework(
      homework.map((hw) =>
        hw.id === id ? { ...hw, completed: !hw.completed } : hw
      )
    );
  };

  const deleteHomework = (id: string) => {
    setHomework(homework.filter((hw) => hw.id !== id));
    toast.success("Homework deleted");
  };

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Homework Tracker</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <Button onClick={addHomework} className="w-full mb-4">
        Add Homework
      </Button>

      <div className="space-y-2">
        {homework.map((hw) => (
          <div
            key={hw.id}
            className="flex items-center justify-between p-3 bg-white rounded-lg border"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={hw.completed}
                onChange={() => toggleComplete(hw.id)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <div className={hw.completed ? "line-through text-gray-500" : ""}>
                <p className="font-medium">{hw.subject}</p>
                <p className="text-sm text-gray-600">{hw.description}</p>
                <p className="text-xs text-gray-500">
                  Due: {new Date(hw.dueDate).toLocaleString()}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteHomework(hw.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HomeworkTracker;