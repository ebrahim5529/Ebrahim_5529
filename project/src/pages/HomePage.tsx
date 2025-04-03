import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">مرحباً بكم في موقعي الشخصي</h1>
        <p className="text-xl text-gray-600 mb-8">مهندس نظم معلومات | محلل نظم | خبير في الحوسبة السحابية</p>
        
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">نبذة مختصرة</h2>
          <p className="text-gray-600 mb-6">
            متخصص في تحليل وتصميم النظم مع خبرة واسعة في مجال تكنولوجيا المعلومات. حاصل على ماجستير في تقنية المعلومات
            وبكالوريوس في نظم المعلومات، مع شهادات معتمدة في ITIL وOracle Cloud Infrastructure.
          </p>
          
          <Link 
            to="/about"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            اقرأ المزيد
            <ArrowLeft size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">تحليل النظم</h3>
            <p className="text-gray-600">خبرة في تحليل وتصميم النظم باستخدام أحدث التقنيات وأدوات UML</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">الحوسبة السحابية</h3>
            <p className="text-gray-600">خبير في حلول Oracle Cloud وMicrosoft Azure</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">اختبار البرمجيات</h3>
            <p className="text-gray-600">متخصص في اختبار وضمان جودة البرمجيات</p>
          </div>
        </div>
      </div>
    </div>
  );
}