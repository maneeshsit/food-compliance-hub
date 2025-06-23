
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const ComplianceChart = () => {
  const weeklyData = [
    { day: 'Mon', daily: 95, weekly: 88, monthly: 92 },
    { day: 'Tue', daily: 88, weekly: 90, monthly: 94 },
    { day: 'Wed', daily: 92, weekly: 85, monthly: 89 },
    { day: 'Thu', daily: 96, weekly: 92, monthly: 96 },
    { day: 'Fri', daily: 90, weekly: 88, monthly: 91 },
    { day: 'Sat', daily: 94, weekly: 94, monthly: 93 },
    { day: 'Sun', daily: 89, weekly: 91, monthly: 90 }
  ];

  const monthlyData = [
    { period: 'Week 1', compliance: 92 },
    { period: 'Week 2', compliance: 88 },
    { period: 'Week 3', compliance: 94 },
    { period: 'Week 4', compliance: 91 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compliance Trends</CardTitle>
        <CardDescription>7-day compliance tracking across all facilities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="day" 
                stroke="#666"
                fontSize={12}
              />
              <YAxis 
                stroke="#666"
                fontSize={12}
                domain={[80, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="daily" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                name="Daily"
              />
              <Line 
                type="monotone" 
                dataKey="weekly" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                name="Weekly Avg"
              />
              <Line 
                type="monotone" 
                dataKey="monthly" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                name="Monthly Avg"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplianceChart;
