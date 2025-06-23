
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Eye, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface Facility {
  id: number;
  name: string;
  status: string;
  cameras: number;
  lastCheck: string;
}

interface FacilityGridProps {
  facilities: Facility[];
}

const FacilityGrid = ({ facilities }: FacilityGridProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'non-compliant':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'warning':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'non-compliant':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Facility Monitoring</h2>
          <p className="text-gray-600">Real-time camera feeds and compliance status</p>
        </div>
        <Button>
          <Eye className="h-4 w-4 mr-2" />
          View All Cameras
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {facilities.map((facility) => (
          <Card key={facility.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{facility.name}</CardTitle>
                {getStatusIcon(facility.status)}
              </div>
              <Badge 
                variant="outline" 
                className={getStatusColor(facility.status)}
              >
                {facility.status.replace('-', ' ').toUpperCase()}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Camera Feed Simulation */}
              <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  LIVE
                </div>
                <div className="absolute bottom-2 right-2 text-white text-xs">
                  {new Date().toLocaleTimeString()}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white/50" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active Cameras:</span>
                  <span className="font-medium">{facility.cameras}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Check:</span>
                  <span className="font-medium">{facility.lastCheck}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Camera className="h-3 w-3 mr-1" />
                  Record
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Camera Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Camera Management</CardTitle>
          <CardDescription>Manage all facility cameras and recordings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">Online Cameras</span>
              </div>
              <p className="text-2xl font-bold text-green-600">45/48</p>
              <p className="text-sm text-green-600">93.8% uptime</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <span className="font-semibold text-yellow-800">Maintenance</span>
              </div>
              <p className="text-2xl font-bold text-yellow-600">2</p>
              <p className="text-sm text-yellow-600">Scheduled today</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-red-800">Offline</span>
              </div>
              <p className="text-2xl font-bold text-red-600">1</p>
              <p className="text-sm text-red-600">Requires attention</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FacilityGrid;
