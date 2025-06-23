
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Download, 
  Calendar, 
  CheckCircle, 
  AlertTriangle,
  Upload,
  Eye,
  Refresh
} from "lucide-react";

const CertificateManager = () => {
  const certificates = [
    {
      id: 1,
      name: "FSSAI Basic Registration",
      number: "12345678901234",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-15",
      status: "valid",
      type: "Basic"
    },
    {
      id: 2,
      name: "FSSAI State License",
      number: "23456789012345",
      issueDate: "2024-02-01",
      expiryDate: "2025-02-01",
      status: "valid",
      type: "State"
    },
    {
      id: 3,
      name: "FSSAI Central License",
      number: "34567890123456",
      issueDate: "2024-03-01",
      expiryDate: "2024-12-31",
      status: "expiring",
      type: "Central"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'valid':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Valid</Badge>;
      case 'expiring':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Expiring Soon</Badge>;
      case 'expired':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Expired</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Certificate Management</h2>
          <p className="text-gray-600">Manage FSSAI FoSCoS certificates and compliance documents</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload Certificate
          </Button>
          <Button>
            <Refresh className="h-4 w-4 mr-2" />
            Renew Certificate
          </Button>
        </div>
      </div>

      {/* Certificate Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Valid Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <p className="text-green-100 text-sm">Active and compliant</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Expiring Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <p className="text-yellow-100 text-sm">Requires renewal</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Total Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-blue-100 text-sm">All certificate types</p>
          </CardContent>
        </Card>
      </div>

      {/* Certificate List */}
      <Card>
        <CardHeader>
          <CardTitle>Certificate Details</CardTitle>
          <CardDescription>All FSSAI certificates and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certificates.map((cert) => {
              const daysUntilExpiry = getDaysUntilExpiry(cert.expiryDate);
              const progressValue = cert.status === 'valid' ? 100 : 
                                  cert.status === 'expiring' ? 25 : 0;
              
              return (
                <div key={cert.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-lg">{cert.name}</h3>
                        {getStatusBadge(cert.status)}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Certificate No: {cert.number}</p>
                      <p className="text-sm text-gray-600">Type: {cert.type} License</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Issue Date</p>
                      <p className="text-sm text-gray-600">{new Date(cert.issueDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Expiry Date</p>
                      <p className="text-sm text-gray-600">{new Date(cert.expiryDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Days Until Expiry</p>
                      <p className={`text-sm font-medium ${
                        daysUntilExpiry > 90 ? 'text-green-600' :
                        daysUntilExpiry > 30 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {daysUntilExpiry > 0 ? `${daysUntilExpiry} days` : 'Expired'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Certificate Validity</span>
                      <span>{cert.status === 'valid' ? '100%' : cert.status === 'expiring' ? '25%' : '0%'}</span>
                    </div>
                    <Progress value={progressValue} className="h-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Certificate Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Certificate Actions</CardTitle>
          <CardDescription>Manage certificate renewals and compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
              <Upload className="h-6 w-6 mb-2" />
              <span>Upload New Certificate</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
              <Refresh className="h-6 w-6 mb-2" />
              <span>Renew Certificate</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
              <Download className="h-6 w-6 mb-2" />
              <span>Download All</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-6 h-auto">
              <Calendar className="h-6 w-6 mb-2" />
              <span>Set Reminders</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateManager;
