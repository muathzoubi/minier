"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem,  FormMessage } from "@/components/ui/form"
import { CreditCard, Lock } from 'lucide-react'


const formSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, { message: 'يجب أن يتكون رقم البطاقة من 16 رقمًا' }),
  cardHolder: z.string().min(2, { message: 'يجب أن يتكون اسم حامل البطاقة من حرفين على الأقل' }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'يجب أن يكون تاريخ الانتهاء بتنسيق MM/YY' }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: 'يجب أن يتكون رمز CVV من 3 أو 4 أرقام' }),
})

export default function CreditCardForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send the payment information to your payment processor
    // Remember to use a secure method and never store raw credit card details
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-blue-900 bg-opacity-50 backdrop-blur-sm text-white border-blue-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">الدفع بالبطاقة الائتمانية</CardTitle>
        <CardDescription className="text-gray-300">أدخل تفاصيل بطاقتك الائتمانية لإتمام الدفع</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }:any) => (
                <FormItem dir="ltr">
                  <label>رقم البطاقة</label>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="1234 5678 9012 3456" {...field} className="pl-10" />
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardHolder"
              render={({ field }:any) => (
                <FormItem>
                  <label>اسم حامل البطاقة</label>
                  <FormControl>
                    <Input placeholder="محمد أحمد" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }:any) => (
                  <FormItem dir="ltr">
                    <label>تاريخ الانتهاء</label>
                    <FormControl>
                      <Input placeholder="MM/YY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }:any) => (
                  <FormItem dir="ltr">
                    <label>CVV</label>
                    <FormControl>
                      <div className="relative">
                        <Input type="password" placeholder="123" {...field} className="pl-10" />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit" onClick={form.handleSubmit(onSubmit)}>
          إتمام الدفع
        </Button>
      </CardFooter>
    </Card>
  )
}