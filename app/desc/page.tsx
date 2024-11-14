import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bitcoin, DollarSign, TrendingUp, Shield } from 'lucide-react'

export default function ExplanationPage() {
  return (
    <div  dir="rtl">
      <header className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-4">كيف يعمل كريبتو إنفست</h1>
        <p className="text-xl">دليلك الشامل للاستثمار في العملات المشفرة</p>
      </header>

      <main className="container mx-auto mt-12">
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="basics">أساسيات الاستثمار</TabsTrigger>
            <TabsTrigger value="platform">منصة كريبتو إنفست</TabsTrigger>
            <TabsTrigger value="strategies">استراتيجيات الاستثمار</TabsTrigger>
            <TabsTrigger value="security">الأمان والحماية</TabsTrigger>
          </TabsList>
          <TabsContent value="basics">
            <Card>
              <CardHeader>
                <CardTitle>أساسيات الاستثمار في العملات المشفرة</CardTitle>
                <CardDescription>تعرف على المغاهيم الاساسية قبل البدء</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">ما هي العملات المشفرة؟</h3>
                <p>العملات المشفرة هي أصول رقمية تستخدم التشفير لتأمين المعاملات وإنشاء وحدات جديدة.</p>
                <h3 className="text-lg font-semibold">كيف تعمل البلوكتشين؟</h3>
                <p>البلوكتشين هي تقنية دفتر الحسابات الموزع التي تسجل جميع المعاملات بشكل آمن وشفاف.</p>
                <h3 className="text-lg font-semibold">مخاطر وفوائد الاستثمار</h3>
                <p>يوفر الاستثمار في العملات المشفرة إمكانية تحقيق عوائد عالية، ولكنه ينطوي أيضًا على مخاطر كبيرة بسبب تقلبات السوق.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="platform">
            <Card>
              <CardHeader>
                <CardTitle>كيفية استخدام منصة كريبتو إنفست</CardTitle>
                <CardDescription>دليل خطوة بخطوة لبدء الاستثمار</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal list-inside space-y-2">
                  <li>قم بإنشاء حساب على المنصة</li>
                  <li>قم بتأكيد هويتك من خلال عملية التحقق</li>
                  <li>أضف الأموال إلى محفظتك</li>
                  <li>اختر العملات المشفرة التي ترغب في الاستثمار فيها</li>
                  <li>قم بإجراء عمليات الشراء والبيع</li>
                  <li>تابع استثماراتك وقم بتحليل أدائها</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="strategies">
            <Card>
              <CardHeader>
                <CardTitle>استراتيجيات الاستثمار في العملات المشفرة</CardTitle>
                <CardDescription>تعرف على أفضل الممارسات لتحسين عوائدك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">التنويع</h3>
                <p>قم بتوزيع استثماراتك على عدة عملات مشفرة لتقليل المخاطر.</p>
                <h3 className="text-lg font-semibold">الاستثمار طويل الأجل</h3>
                <p>ركز على العملات ذات الأساسيات القوية واحتفظ بها لفترات طويلة.</p>
                <h3 className="text-lg font-semibold">التداول النشط</h3>
                <p>استفد من تقلبات السوق من خلال عمليات البيع والشراء قصيرة الأجل.</p>
                <h3 className="text-lg font-semibold">التحليل الفني والأساسي</h3>
                <p>استخدم أدوات التحليل المتاحة على المنصة لاتخاذ قرارات مدروسة.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card className=''>
              <CardHeader>
                <CardTitle>الأمان والحماية في كريبتو إنفست</CardTitle>
                <CardDescription>كيف نحمي استثماراتك وبياناتك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">تشفير من طرف إلى طرف</h3>
                <p>جميع البيانات والمعاملات مشفرة لضمان الخصوصية والأمان.</p>
                <h3 className="text-lg font-semibold">المصادقة الثنائية</h3>
                <p>نستخدم المصادقة الثنائية لحماية حسابك من الوصول غير المصرح به.</p>
                <h3 className="text-lg font-semibold">تخزين بارد للأصول</h3>
                <p>نحتفظ بمعظم الأصول في محافظ باردة غير متصلة بالإنترنت لحمايتها من الهجمات الإلكترونية.</p>
                <h3 className="text-lg font-semibold">تأمين الأصول</h3>
                <p>لدينا تغطية تأمينية شاملة لحماية أصول المستخدمين في حالة حدوث أي خرق أمني.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <section className="container mx-auto mt-12 mb-12" >
        <h2 className="text-2xl font-bold mb-6">ابدأ رحلتك الاستثمارية اليوم</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-800 text-white">
            <CardHeader>
              <Bitcoin className="w-10 h-10 mb-2" />
              <CardTitle>اختر عملتك</CardTitle>
            </CardHeader>
            <CardContent>
              <p>استكشف مجموعة واسعة من العملات المشفرة واختر ما يناسب أهدافك الاستثمارية.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800 text-white">
            <CardHeader>
              <DollarSign className="w-10 h-10 mb-2" />
              <CardTitle>استثمر بذكاء</CardTitle>
            </CardHeader>
            <CardContent>
              <p>استفد من أدوات التحليل والتوصيات لاتخاذ قرارات استثمارية مدروسة.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800 text-white">
            <CardHeader>
              <TrendingUp className="w-10 h-10 mb-2" />
              <CardTitle>تابع أداءك</CardTitle>
            </CardHeader>
            <CardContent>
              <p>راقب اس��ثماراتك في الوقت الفعلي وقم بتعديل استراتيجيتك حسب الحاجة.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-800 text-white">
            <CardHeader>
              <Shield className="w-10 h-10 mb-2" />
              <CardTitle>استمتع بالأمان</CardTitle>
            </CardHeader>
            <CardContent>
              <p>اطمئن مع أعلى معايير الأمان وحماية الأصول المتوفرة في كريبتو إنفست.</p>
            </CardContent>
          </Card>
        </div>
      </section>

   
    </div>
  )
}