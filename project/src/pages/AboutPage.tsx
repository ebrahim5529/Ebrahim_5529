import React from 'react';
import { 
  TestTube, 
  Database, 
  Cloud, 
  Code, 
  LineChart, 
  Layout,
  Workflow,
  FileCode,
  GitBranch,
  PenTool,
  Laptop,
  BookOpen
} from 'lucide-react';

export default function AboutPage() {
  const technicalSkills = [
    {
      icon: <TestTube className="w-8 h-8 text-blue-600" />,
      title: "اختبار البرمجيات",
      description: "مهارات متقدمة في اختبار البرمجيات باستخدام تقنيات وأدوات حديثة"
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "قواعد البيانات",
      description: "خبرة في تقييم وتصميم قواعد البيانات العلائقية"
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "الحوسبة السحابية",
      description: "خبرة في حلول السحابة باستخدام Oracle Cloud وMicrosoft Azure"
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "هندسة البرمجيات",
      description: "تصميم وتطوير حلول برمجية مبتكرة"
    },
    {
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      title: "تحليل وتصميم النظم",
      description: "تصميم أنظمة معلومات باستخدام أدوات UML المتقدمة"
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "تحليل البيانات",
      description: "تحليل البيانات وإنشاء التقارير باستخدام Power BI وExcel"
    }
  ];

  const certifications = [
    {
      icon: <Workflow className="w-6 h-6 text-blue-600" />,
      title: "ITIL",
      description: "Information Technology Infrastructure Library"
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      title: "OCI",
      description: "Oracle Cloud Infrastructure"
    },
    {
      icon: <Laptop className="w-6 h-6 text-blue-600" />,
      title: "Microsoft Az-900",
      description: "Cloud Computing"
    },
    {
      icon: <GitBranch className="w-6 h-6 text-blue-600" />,
      title: "SFPC",
      description: "Scrum Foundation Professional Certificate"
    },
    {
      icon: <PenTool className="w-6 h-6 text-blue-600" />,
      title: "ECDL",
      description: "European Computer Driving Licence"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">السيرة الذاتية</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            معلومات شخصية
          </h2>
          <p className="text-gray-600 mb-4">
            أنا إبراهيم حمزة، مهندس نظم معلومات حاصل على ماجستير في تقنية المعلومات. أتمتع بخبرة واسعة في مجال تكنولوجيا المعلومات،
            مع تركيز خاص على البرمجيات، تحليل وتصميم النظم، واختبار البرمجيات.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileCode className="w-6 h-6 text-blue-600" />
            المؤهلات الأكاديمية
          </h2>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2 text-gray-600">
              <Laptop className="w-5 h-5 text-blue-600" />
              ماجستير في تقنية المعلومات
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <Laptop className="w-5 h-5 text-blue-600" />
              بكالريوس في نظم المعلومات
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            الشهادات المهنية
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                {cert.icon}
                <div>
                  <h3 className="font-semibold text-gray-800">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            المهارات التقنية
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  {skill.icon}
                  <h3 className="text-xl font-medium text-gray-800">{skill.title}</h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}