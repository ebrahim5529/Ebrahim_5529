import React from 'react';
import { Cloud, Database, Code, LineChart, Layout, TestTube } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-blue-600" />,
      title: 'تحليل وتصميم النظم',
      description: 'تحليل متطلبات العمل وتصميم الحلول المناسبة باستخدام أدوات UML المتقدمة'
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: 'الحوسبة السحابية',
      description: 'تطوير وإدارة الحلول السحابية باستخدام Oracle Cloud وMicrosoft Azure'
    },
    {
      icon: <TestTube className="w-12 h-12 text-blue-600" />,
      title: 'اختبار البرمجيات',
      description: 'اختبار شامل للبرمجيات وضمان الجودة باستخدام أحدث التقنيات'
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: 'إدارة قواعد البيانات',
      description: 'تصميم وإدارة قواعد البيانات العلائقية وتحسين الأداء'
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: 'تطوير البرمجيات',
      description: 'تطوير حلول برمجية مخصصة باستخدام أحدث التقنيات'
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-600" />,
      title: 'تحليل البيانات',
      description: 'تحليل البيانات وإنشاء التقارير باستخدام Power BI وExcel'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا</h1>
        <p className="text-xl text-gray-600">نقدم مجموعة متكاملة من الخدمات في مجال تكنولوجيا المعلومات</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}