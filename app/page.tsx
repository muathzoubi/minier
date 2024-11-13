"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bitcoin, DollarSign, TrendingUp, Shield, BarChart2, Users } from 'lucide-react'
import Link from 'next/link'

const FloatingShape = ({ size, color, speed, delay }:any) => {
  const shapeRef = useRef<any>(null);

  useEffect(() => {
    const shape = shapeRef.current;
    const duration = 15000 / speed;
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    shape.style.setProperty('--move-duration', `${duration}ms`);
    shape.style.setProperty('--x-end', `${randomX}px`);
    shape.style.setProperty('--y-end', `${randomY}px`);
    shape.style.animationDelay = `${delay}ms`;
  }, [speed, delay]);

  return (
    <div
      ref={shapeRef}
      className="absolute rounded-full opacity-20 animate-float"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
};

export default function CryptoInvestLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-green-900 to-purple-900 text-white overflow-hidden" dir="rtl">
      {/* خلفية متحركة */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingShape size={100} color="#4C51BF" speed={1} delay={0} />
        <FloatingShape size={80} color="#6B46C1" speed={1.5} delay={2000} />
        <FloatingShape size={60} color="#2C5282" speed={2} delay={1000} />
        <FloatingShape size={120} color="#2B6CB0" speed={0.8} delay={3000} />
        <FloatingShape size={90} color="#4299E1" speed={1.2} delay={1500} />
      </div>

      {/* المحتوى */}
      <div className="relative z-10">
        {/* الرأس */}
        <header className="container mx-auto py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">كريبتو إنفست</h1>
          <nav className="flex items-center space-x-4 space-x-reverse">
            <ul className="flex space-x-4 space-x-reverse xsm:hidden">
              <li><Button variant="ghost">الرئيسية</Button></li>
              <li><Button variant="ghost">عن المنصة</Button></li>
              <li><Button variant="ghost">الاستثمارات</Button></li>
              <li><Button variant="ghost">تواصل معنا</Button></li>
            </ul>
           <Link href="/sign"> <Button variant="outline" className="mr-2 text-black">تسجيل الدخول</Button></Link>
           <Link href="/sign"> <Button>التسجيل</Button></Link>
          </nav>
        </header>

        {/* القسم الرئيسي */}
        <main className="container mx-auto mt-20 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">استثمر في مستقبل المال الرقمي</h2>
          <p className="text-xl mb-10">منصة كريبتو إنفست توفر لك فرصة الاستثمار في أكبر العملات المشفرة بكل سهولة وأمان</p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">ابدأ الاستثمار الآن</Button>
        </main>

        {/* ميزات المنصة */}
        <section className="container mx-auto mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">لماذا كريبتو إنفست؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-green-800 bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <Bitcoin className="w-10 h-10 mb-2" />
                <CardTitle>تنوع العملات</CardTitle>
              </CardHeader>
              <CardContent>
                <p>استثمر في مجموعة واسعة من العملات المشفرة الرائدة في السوق</p>
              </CardContent>
            </Card>
            <Card className="bg-green-800 bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <DollarSign className="w-10 h-10 mb-2" />
                <CardTitle>عوائد مجزية</CardTitle>
              </CardHeader>
              <CardContent>
                <p>فرص لتحقيق أرباح عالية مع استراتيجيات استثمار مدروسة</p>
              </CardContent>
            </Card>
            <Card className="bg-green-800 bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="w-10 h-10 mb-2" />
                <CardTitle>تحليلات متقدمة</CardTitle>
              </CardHeader>
              <CardContent>
                <p>أدوات تحليل وتوقعات لمساعدتك في اتخاذ قرارات استثمارية ذكية</p>
              </CardContent>
            </Card>
            <Card className="bg-green-800 bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <Shield className="w-10 h-10 mb-2" />
                <CardTitle>أمان وموثوقية</CardTitle>
              </CardHeader>
              <CardContent>
                <p>حماية قصوى لأصولك الرقمية مع أحدث تقنيات الأمان</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* معلومات إضافية */}
        <section className="container mx-auto mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">معلومات إضافية عن كريبتو إنفست</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="bg-green-800 bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <BarChart2 className="w-10 h-10 mb-2" />
                <CardTitle>إحصائيات المنصة</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>أكثر من 100,000 مستثمر نشط</li>
                  <li>حجم تداول يومي يتجاوز 50 مليون دولار</li>
                  <li>دعم لأكثر من 50 عملة مشفرة</li>
                  <li>معدل نمو سنوي يتجاوز 200%</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-green-800 bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <Users className="w-10 h-10 mb-2" />
                <CardTitle>خدمة العملاء</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">نحن نفخر بتقديم دعم استثنائي لعملائنا على مدار الساعة:</p>
                <ul className="space-y-2">
                  <li>دعم فني 24/7</li>
                  <li>مدير حساب شخصي لكبار المستثمرين</li>
                  <li>مركز تعليمي شامل للمبتدئين</li>
                  <li>منتدى مجتمعي نشط لتبادل الخبرات</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* نموذج الاشتراك */}
        <section className="container mx-auto mt-20 mb-20">
          <Card className="max-w-md mx-auto bg-green-800 bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>انضم إلينا اليوم</CardTitle>
              <CardDescription>احصل على آخر الأخبار والعروض الحصرية</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="name" placeholder="الاسم الكامل" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input id="email" placeholder="البريد الإلكتروني" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">اشترك الآن</Button>
            </CardFooter>
          </Card>
        </section>

        {/* تذييل الصفحة */}
        <footer className="bg-green-900 bg-opacity-50 py-6 text-center backdrop-blur-sm">
          <p>&copy; 2024 كريبتو إنفست. جميع الحقوق محفوظة.</p>
        </footer>
      </div>
    </div>
  )
}