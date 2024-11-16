"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bitcoin, DollarSign, TrendingUp, Shield, BarChart2, Users, Check, Menu } from 'lucide-react'
import Link from 'next/link'

const FloatingShape = ({ size, color, speed, delay }: any) => {
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
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingShape size={100} color="#4C51BF" speed={1} delay={0} />
        <FloatingShape size={80} color="#6B46C1" speed={1.5} delay={2000} />
        <FloatingShape size={60} color="#2C5282" speed={2} delay={1000} />
        <FloatingShape size={120} color="#2B6CB0" speed={0.8} delay={3000} />
        <FloatingShape size={90} color="#4299E1" speed={1.2} delay={1500} />
      </div>
      <div className="relative z-10">
      <header className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
<img src='/images/logo-inv20.svg' width={120} alt='logo'/>            <Button variant="ghost" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
            <nav className="hidden lg:flex items-center space-x-4 space-x-reverse">
              <ul className="flex space-x-4 space-x-reverse">
                <li><Button variant="ghost">الرئيسية</Button></li>
                <li><Button variant="ghost">عن المنصة</Button></li>
                <li><Button variant="ghost">تواصل معنا</Button></li>
              </ul>
              <Button variant="outline" className="mr-2 text-black">تسجيل الدخول</Button>
              <Button>التسجيل</Button>
            </nav>
          </div>
          {menuOpen && (
            <nav className="mt-4 lg:hidden">
              <ul className="flex flex-col space-y-2">
                <li>
                <Link href={'/'}>

                  <Button variant="ghost" className="w-full justify-start">الرئيسية</Button>
                  </Link>
                  </li>
                <li>
                  <Link href={'/desc'}>
                  <Button variant="ghost" className="w-full justify-start">عن المنصة
                </Button>
                </Link>
                </li>
                <li><Button variant="ghost" className="w-full justify-start">تواصل معنا</Button></li>
              </ul>
              <div className="mt-4 flex flex-col space-y-2">
               <Link href="/sign">
                <Button variant="outline" className="w-full text-green-400">تسجيل الدخول</Button>
               </Link>
               <Link href="/sign">
                <Button className="w-full">التسجيل</Button>
                </Link>

              </div>
            </nav>
          )}
        </header>


        <main className="container mx-auto mt-20 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">استثمر في مستقبل المال الرقمي</h2>
          <p className="text-xl mb-10">منصة كريبتو إنفست توفر لك فرصة الاستثمار في أكبر العملات المشفرة بكل سهولة وأمان</p>
         <Link href="/sign"> <Button size="lg" className="bg-green-600 hover:bg-green-700">ابدأ الاستثمار الآن</Button></Link>
        </main>

        <section className="container mx-auto mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">لماذا كريبتو إنفست؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <Bitcoin className="w-10 h-10 mb-2" />
                <CardTitle>تنوع العملات</CardTitle>
              </CardHeader>
              <CardContent>
                <p>استثمر في مجموعة واسعة من العملات المشفرة الرائدة في السوق</p>
              </CardContent>
            </Card>
            <Card className="bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <DollarSign className="w-10 h-10 mb-2" />
                <CardTitle>عوائد مجزية</CardTitle>
              </CardHeader>
              <CardContent>
                <p>فرص لتحقيق أرباح عالية مع استراتيجيات استثمار مدروسة</p>
              </CardContent>
            </Card>
            <Card className="bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="w-10 h-10 mb-2" />
                <CardTitle>تحليلات متقدمة</CardTitle>
              </CardHeader>
              <CardContent>
                <p>أدوات تحليل وتوقعات لمساعدتك في اتخاذ قرارات استثمارية ذكية</p>
              </CardContent>
            </Card>
            <Card className="bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
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
   <section className="container mx-auto mt-20 px-4" dir='rtl'>
          <h3 className="text-3xl font-bold text-center mb-10">اختر الخطة المناسبة لك</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-green-300 bg-opacity-50 border-green-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">الخطة الأساسية</CardTitle>
                <CardDescription>للمستثمرين المبتدئين</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$29.99<span className="text-sm font-normal">/شهريًا</span></p>
                <ul className="space-y-2">
                                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> ربح يومي  $5</li>

                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> تداول حتى 5 عملات مشفرة</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> تحليلات أساسية</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> دعم عبر البريد الإلكتروني</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> دعم عبر البريد الإلكتروني</li>
                </ul>
              </CardContent>
              <CardFooter>
              <Link  className="w-full" href={'/sign'}>        <Button className="w-full bg- border">اشترك الآن</Button></Link>
              </CardFooter>
            </Card>
            <Card className="bg- bg-opacity-50 border-green-700 backdrop-blur-sm border-2 border-green-400">
              <CardHeader>
                <CardTitle className="text-2xl">الخطة الاحترافية</CardTitle>
                <CardDescription>للمستثمرين النشطين</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$129.99<span className="text-sm font-normal">/شهريًا</span></p>
                <ul className="space-y-2">
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> ربح يومي $20</li>

                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> تداول غير محدود للعملات المشفرة</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> تحليلات متقدمة وتنبيهات السوق</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> دعم على مدار الساعة</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> استراتيجيات استثمار مخصصة</li>
                </ul>
              </CardContent>
              <CardFooter>
              <Link className="w-full" href={'/sign'}>    <Button className="w-full bg-green-500 text- hover:bg-green-500 border">اشترك الآن</Button></Link>
              </CardFooter>
            </Card>
            <Card className="bg-green-300 bg-opacity-50 border-green-300 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">خطة الاعمال</CardTitle>
                <CardDescription>للشركات والمستثمرين الكبار</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">اتصل بنا<span className="text-sm font-normal"> للتسعير</span></p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> حلول مخصصة للمؤسسات</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> API للتداول الآلي</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> مدير حساب مخصص</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> دعم على مدار الساعة</li>
                  <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> تقارير وتحليلات متقدمة</li>
                </ul>
              </CardContent>
              <CardFooter>
             <Link className="w-full" href={'/sign'}>   <Button className="w-full bg- border">اتصل بنا</Button></Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="container mx-auto mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">معلومات إضافية عن كريبتو إنفست</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
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
            <Card className="bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
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

        <section className="container mx-auto mt-20 mb-20" id="contact">
          <Card className="max-w-md mx-auto bg-opacity-50 hover:border-green-700 backdrop-blur-sm">
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
              <Button className="w-full bg-green-600">اشترك الآن</Button>
            </CardFooter>
          </Card>
        </section>

     
      </div>
    </>
  )
}