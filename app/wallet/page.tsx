"use client"
import React,{useState} from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownLeft, Wallet, CreditCard, RefreshCw, X  } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import CreditCardForm from '@/components/paymentform/payment';
 function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer
}: any) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-blue-900 bg-opacity-90 backdrop-blur-sm text-white border-blue-700">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-gray-300">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <Button
          className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">إغلاق</span>
        </Button>
        <div className="py-4">{children}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
export default function WalletPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
      <div className="container mx-auto mt-12" dir='rtl'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="col-span-2 bg-">
            <CardHeader className='text-green-400'>
              <CardTitle className="text-2xl">الرصيد الإجمالي</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl text-green-200 font-bold">$0.67</p>
              <p className="text-green-200 mt-2">+0.23% خلال الـ 24 ساعة الماضية</p>
            </CardContent>
          </Card>
          <Card className="bg-white-100 text-green-400">
            <CardHeader className='text-green-100'>
              <CardTitle>العمليات السريعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full  text-green-200" variant="outline">
                <ArrowUpRight className="mr-2 h-4 w-4" /> إيداع
              </Button>
              <Button className="w-full text-blue-200" variant="outline">
                <ArrowDownLeft className="mr-2 h-4 w-4" /> سحب
              </Button>
              <Button className="w-full text-red-200  " variant="outline">
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
              <CardHeader className='text-green-400' >
                <CardTitle>أصولك</CardTitle>
                <CardDescription>قائمة بجميع العملات المشفرة في محفظتك</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className='text-blue-200'>
                      <TableHead>العملة</TableHead>
                      <TableHead>الرصيد</TableHead>
                      <TableHead>القيمة بالدولار</TableHead>
                      <TableHead>التغير (24 ساعة)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className='text-blue-200'>
                      <TableCell>بيتكوين (BTC)</TableCell>
                      <TableCell>0.5 BTC</TableCell>
                      <TableCell>$8,234.50</TableCell>
                      <TableCell className="text-green-400">+2.3%</TableCell>
                    </TableRow>
                    <TableRow className='text-blue-200'>
                      <TableCell>إيثيريوم (ETH)</TableCell>
                      <TableCell>5.2 ETH</TableCell>
                      <TableCell>$3,456.78</TableCell>
                      <TableCell className="text-red-400">-1.5%</TableCell>
                    </TableRow>
                    <TableRow className='text-blue-200'>
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
              <CardHeader className='text-green-200'>
                <CardTitle>المعاملات الأخيرة</CardTitle>
                <CardDescription>سجل معاملاتك خلال الـ 30 يومًا الماضية</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                        <TableRow className='text-blue-200'>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>النوع</TableHead>
                      <TableHead>العملة</TableHead>
                      <TableHead>المبلغ</TableHead>
                      <TableHead>الحالة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                        <TableRow className='text-blue-200'>
                      <TableCell>2024-03-15</TableCell>
                      <TableCell>شراء</TableCell>
                      <TableCell>BTC</TableCell>
                      <TableCell>0.1 BTC</TableCell>
                      <TableCell className="text-green-400">مكتمل</TableCell>
                    </TableRow>
                        <TableRow className='text-blue-200'>
                      <TableCell>2024-03-10</TableCell>
                      <TableCell>بيع</TableCell>
                      <TableCell>ETH</TableCell>
                      <TableCell>2.5 ETH</TableCell>
                      <TableCell className="text-green-400">مكتمل</TableCell>
                    </TableRow>
                        <TableRow className='text-blue-200'>
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
            <Card className='text-green-200'>
              <CardHeader  className='text-green-200'>
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
                    <Button variant="outline" className='bg-black' onClick={()=>setIsModalOpen(true)}>
                      <CreditCard className="mr-2 h-4 w-4 " /> بطاقة ائتمان
                    </Button>
                    <Button variant="destructive">
                      <Wallet className="mr-2 h-4 w-4" /> ايداع كريبتو
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500  text-green-200 ">إتمام الإيداع</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} description={<CreditCardForm />} set></Modal>
    </div>
  )
}