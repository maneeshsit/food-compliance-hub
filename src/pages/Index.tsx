
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Camera, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Calendar,
  TrendingUp,
  FileText,
  Settings,
  Eye,
  Download
} from "lucide-react";
import ComplianceChart from "@/components/ComplianceChart";
import FacilityGrid from "@/components/FacilityGrid";
import CertificateManager from "@/components/CertificateManager";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const complianceStats = {
    daily: 92,
    weekly: 88,
    monthly: 94,
    yearly: 91
  };

  const facilities = [
    { id: 1, name: "Main Kitchen", status: "compliant", cameras: 4, lastCheck: "2 hours ago" },
    { id: 2, name: "Storage Unit A", status: "warning", cameras: 2, lastCheck: "30 minutes ago" },
    { id: 3, name: "Packaging Area", status: "compliant", cameras: 3, lastCheck: "1 hour ago" },
    { id: 4, name: "Loading Dock", status: "non-compliant", cameras: 2, lastCheck: "4 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">FSSAI FoSCoS</h1>
                <p className="text-sm text-gray-500">Food Safety Compliance System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Certificate Valid
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="facilities" className="flex items-center space-x-2">
              <Camera className="h-4 w-4" />
              <span>Facilities</span>
            </TabsTrigger>
            <TabsTrigger value="compliance" className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Compliance</span>
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Certificates</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Facilities</CardTitle>
                  <Users className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-blue-100">Active monitoring</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Compliant Today</CardTitle>
                  <CheckCircle className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">22</div>
                  <p className="text-xs text-green-100">92% compliance rate</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Warnings</CardTitle>
                  <AlertTriangle className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-yellow-100">Require attention</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Cameras</CardTitle>
                  <Camera className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">48</div>
                  <p className="text-xs text-purple-100">Real-time monitoring</p>
                </CardContent>
              </Card>
            </div>

            {/* Compliance Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Overview</CardTitle>
                  <CardDescription>Current compliance rates across different periods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Daily Compliance</span>
                      <span className="text-sm text-gray-500">{complianceStats.daily}%</span>
                    </div>
                    <Progress value={complianceStats.daily} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Weekly Compliance</span>
                      <span className="text-sm text-gray-500">{complianceStats.weekly}%</span>
                    </div>
                    <Progress value={complianceStats.weekly} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Monthly Compliance</span>
                      <span className="text-sm text-gray-500">{complianceStats.monthly}%</span>
                    </div>
                    <Progress value={complianceStats.monthly} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Yearly Compliance</span>
                      <span className="text-sm text-gray-500">{complianceStats.yearly}%</span>
                    </div>
                    <Progress value={complianceStats.yearly} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <ComplianceChart />
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest compliance checks and camera alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { time: "10:30 AM", message: "Main Kitchen passed daily hygiene check", type: "success" },
                    { time: "09:45 AM", message: "Storage Unit A temperature warning resolved", type: "warning" },
                    { time: "09:20 AM", message: "Loading Dock camera maintenance completed", type: "info" },
                    { time: "08:15 AM", message: "Weekly compliance report generated", type: "success" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="facilities">
            <FacilityGrid facilities={facilities} />
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Compliance Tracking</CardTitle>
                  <CardDescription>Monitor compliance across different time periods</CardDescription>
                </CardHeader>
                <CardContent>
                  <ComplianceChart />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Actions</CardTitle>
                  <CardDescription>Generate reports and manage compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Daily Report
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Weekly Report
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Monthly Report
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Yearly Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <CertificateManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
