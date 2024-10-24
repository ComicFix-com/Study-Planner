import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface StudySession {
  id: string;
  subject: string;
  duration: number;
  date: string;
  notes: string;
}

const StudySessionForm = () => {
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const addSession = () => {
    if (!subject || !duration || !date) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newSession: StudySession = {
      id: Date.now().toString(),
      subject,
      duration: Number(duration),
      date,
      notes,
    };

    setSessions([...sessions, newSession]);
    setSubject("");
    setDuration("");
    setNotes("");
    setDate("");
    toast.success("Study session added successfully!");
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select value={subject} onValueChange={setSubject}>
          <SelectTrigger>
            <SelectValue placeholder="Select subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mathematics">Mathematics</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="history">History</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="art">Art</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="number"
          placeholder="Duration (hours)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <Input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Input
          placeholder="Study notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <Button onClick={addSession} className="w-full">
        Add Study Session
      </Button>

      <div className="mt-6 space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="p-4 border rounded-lg bg-white shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold capitalize">{session.subject}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(session.date).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{session.duration} hours</p>
                {session.notes && (
                  <p className="text-sm text-gray-500">{session.notes}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySessionForm;