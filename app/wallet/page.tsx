import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownLeft, Wallet, CreditCard, RefreshCw } from 'lucide-react'

export default function WalletPage() {
  return (
      <div className="container mx-auto mt-12" dir='rtl'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="col-span-2 bg-">
            <CardHeader className='text-green-500'>
              <CardTitle className="text-2xl">الرصيد الإجمالي</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$12,345.67</p>
              <p className="text-green-400 mt-2">+5.23% خلال الـ 24 ساعة الماضية</p>
            </CardContent>
          </Card>
          <Card className="bg-white-100 text-white">
            <CardHeader className='text-green-500'>
              <CardTitle>العمليات السريعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full  text-green-500" variant="outline">
                <ArrowUpRight className="mr-2 h-4 w-4" /> إيداع
              </Button>
              <Button className="w-full text-blue-500" variant="outline">
                <ArrowDownLeft className="mr-2 h-4 w-4" /> سحب
              </Button>
              <Button className="w-full text-red-500  " variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" /> تحويل
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="assets" className="w-full text-sm" dir='rtl'>
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-3">
            <TabsTrigger value="assets ">الأصول</TabsTrigger>
            <TabsTrigger value="transactions">المعاملات</TabsTrigger>
            <TabsTrigger value="deposit">إيداع الأموال</TabsTrigger>
          </TabsList>
          <TabsContent value="assets ">
            <Card>
              <CardHeader className='text-green-500' >
                <CardTitle>أصولك</CardTitle>
                <CardDescription>قائمة بجميع العملات المشفرة في محفظتك</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className='text-blue-500'>
                      <TableHead>العملة</TableHead>
                      <TableHead>الرصيد</TableHead>
                      <TableHead>القيمة بالدولار</TableHead>
                      <TableHead>التغير (24 ساعة)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className='text-blue-500'>
                      <TableCell>بيتكوين (BTC)</TableCell>
                      <TableCell>0.5 BTC</TableCell>
                      <TableCell>$8,234.50</TableCell>
                      <TableCell className="text-green-400">+2.3%</TableCell>
                    </TableRow>
                    <TableRow className='text-blue-500'>
                      <TableCell>إيثيريوم (ETH)</TableCell>
                      <TableCell>5.2 ETH</TableCell>
                      <TableCell>$3,456.78</TableCell>
                      <TableCell className="text-red-400">-1.5%</TableCell>
                    </TableRow>
                    <TableRow className='text-blue-500'>
                      <TableCell>كاردانو (ADA)</TableCell>
                      <TableCell>1000 ADA</TableCell>
                      <TableCell>$654.39</TableCell>
                      <TableCell className="text-green-400">+5.7%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="transactions">
            <Card>
              <CardHeader className='text-green-500'>
                <CardTitle>المعاملات الأخيرة</CardTitle>
                <CardDescription>سجل معاملاتك خلال الـ 30 يومًا الماضية</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                        <TableRow className='text-blue-500'>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>النوع</TableHead>
                      <TableHead>العملة</TableHead>
                      <TableHead>المبلغ</TableHead>
                      <TableHead>الحالة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                        <TableRow className='text-blue-500'>
                      <TableCell>2024-03-15</TableCell>
                      <TableCell>شراء</TableCell>
                      <TableCell>BTC</TableCell>
                      <TableCell>0.1 BTC</TableCell>
                      <TableCell className="text-green-400">مكتمل</TableCell>
                    </TableRow>
                        <TableRow className='text-blue-500'>
                      <TableCell>2024-03-10</TableCell>
                      <TableCell>بيع</TableCell>
                      <TableCell>ETH</TableCell>
                      <TableCell>2.5 ETH</TableCell>
                      <TableCell className="text-green-400">مكتمل</TableCell>
                    </TableRow>
                        <TableRow className='text-blue-500'>
                      <TableCell>2024-03-05</TableCell>
                      <TableCell>إيداع</TableCell>
                      <TableCell>USD</TableCell>
                      <TableCell>$1000</TableCell>
                      <TableCell className="text-yellow-400">قيد المعالجة</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="deposit">
            <Card className='text-green-500'>
              <CardHeader  className='text-green-500'>
                <CardTitle>إيداع الأموال</CardTitle>
                <CardDescription>أضف أموالًا إلى محفظتك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="amount">المبلغ (بالدولار الأمريكي)</label>
                  <Input id="amount" type="number" placeholder="أدخل المبلغ" />
                </div>
                <div className="space-y-2">
                  <label>طريقة الدفع</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">
                      <CreditCard className="mr-2 h-4 w-4" /> بطاقة ائتمان
                    </Button>
                    <Button variant="outline">
                      <Wallet className="mr-2 h-4 w-4" /> تحويل بنكي
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg- outline text-green-500 ">إتمام الإيداع</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  )
}