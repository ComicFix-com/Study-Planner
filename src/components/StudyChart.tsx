import { Card } from "@/components/ui/card";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { subject: "Mathematics", hours: 10 },
  { subject: "Science", hours: 8 },
  { subject: "History", hours: 5 },
  { subject: "English", hours: 7 },
  { subject: "Art", hours: 3 },
];

const StudyChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Study Hours by Subject</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="hours" fill="#818cf8" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default StudyChart;