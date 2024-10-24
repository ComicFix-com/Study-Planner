import { useState } from "react";
import { UserButton } from "@clerk/clerk-react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Calendar as CalendarIcon, BookOpen, ClipboardList } from "lucide-react";
import StudyChart from "@/components/StudyChart";
import StudySessionForm from "@/components/StudySession";
import HomeworkTracker from "@/components/HomeworkTracker";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-indigo-600">Study Planner</h1>
          <UserButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="col-span-1 p-2 sm:p-4 overflow-hidden">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full"
            />
          </Card>

          <Card className="col-span-1 lg:col-span-2 p-4 sm:p-6">
            <Tabs defaultValue="sessions" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4">
                <TabsTrigger value="sessions" className="flex items-center gap-2 text-xs sm:text-sm">
                  <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Study Sessions</span>
                  <span className="sm:hidden">Sessions</span>
                </TabsTrigger>
                <TabsTrigger value="homework" className="flex items-center gap-2 text-xs sm:text-sm">
                  <ClipboardList className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Homework</span>
                  <span className="sm:hidden">HW</span>
                </TabsTrigger>
                <TabsTrigger value="subjects" className="flex items-center gap-2 text-xs sm:text-sm">
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Subjects</span>
                  <span className="sm:hidden">Subj</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2 text-xs sm:text-sm">
                  <BarChart className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Analytics</span>
                  <span className="sm:hidden">Stats</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sessions" className="mt-0">
                <StudySessionForm />
              </TabsContent>
              <TabsContent value="homework" className="mt-0">
                <HomeworkTracker />
              </TabsContent>
              <TabsContent value="subjects" className="mt-0">
                <div className="text-center text-gray-500 py-8">
                  Subject management coming soon!
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="mt-0">
                <StudyChart />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
