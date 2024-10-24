import { useState } from "react";
import { UserButton } from "@clerk/clerk-react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Calendar as CalendarIcon, BookOpen, ClipboardList } from "lucide-react";
import StudyChart from "@/components/StudyChart";
import StudySessionForm from "@/components/StudySession";
import HomeworkTracker from "@/components/HomeworkTracker";

const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Study Planner</h1>
          <UserButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </Card>

          <Card className="col-span-1 md:col-span-2 p-6">
            <Tabs defaultValue="sessions" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="sessions" className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Study Sessions
                </TabsTrigger>
                <TabsTrigger value="homework" className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Homework
                </TabsTrigger>
                <TabsTrigger value="subjects" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Subjects
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  Analytics
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sessions">
                <StudySessionForm />
              </TabsContent>
              <TabsContent value="homework">
                <HomeworkTracker />
              </TabsContent>
              <TabsContent value="subjects">
                <div className="text-center text-gray-500 py-8">
                  Subject management coming soon!
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <StudyChart />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;