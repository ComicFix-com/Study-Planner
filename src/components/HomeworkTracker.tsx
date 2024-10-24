import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  // Real-time updates check
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      homework.forEach((hw) => {
        const dueTime = new Date(hw.dueDate);
        if (!hw.completed && dueTime <= now) {
          toast.warning(`Homework for ${hw.subject} is due!`);
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [homework]);

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
      <h2 className="text-base sm:text-xl font-semibold mb-4">Homework Tracker</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="text-sm sm:text-base"
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-sm sm:text-base"
        />
        <Input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="text-sm sm:text-base"
        />
      </div>
      <Button onClick={addHomework} className="w-full mb-4 text-sm sm:text-base">
        Add Homework
      </Button>

      <ScrollArea className="h-[300px] sm:h-[400px] w-full pr-4">
        <div className="space-y-2">
          {homework.map((hw) => (
            <div
              key={hw.id}
              className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg border"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                  type="checkbox"
                  checked={hw.completed}
                  onChange={() => toggleComplete(hw.id)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <div className={`${hw.completed ? "line-through text-gray-500" : ""} truncate`}>
                  <p className="font-medium text-sm sm:text-base truncate">{hw.subject}</p>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{hw.description}</p>
                  <p className="text-xs text-gray-500">
                    Due: {new Date(hw.dueDate).toLocaleString()}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteHomework(hw.id)}
                className="text-red-500 hover:text-red-700 ml-2"
              >
                <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default HomeworkTracker;