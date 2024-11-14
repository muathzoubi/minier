
"use client"
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, CreditCard, DollarSign, LayoutDashboard, LogIn, Settings, UserPlus, Wallet } from 'lucide-react'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// تكوين Firebase - استبدل هذه القيم بقيم مشروعك الخاص
const firebaseConfig = {
    apiKey: "AIzaSyCk2ac7zLA-N_F3P_dY2fcdnL4tP6K6fVw",
    authDomain: "zinsappata.firebaseapp.com",
    databaseURL: "https://zinsappata-default-rtdb.firebaseio.com",
    projectId: "zinsappata",
    storageBucket: "zinsappata.appspot.com",
    messagingSenderId: "113369271332",
    appId: "1:113369271332:web:1a55d786fac0aa96cb5cb1",
    measurementId: "G-V9LKMQYCTN"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function CryptoInvestmentPlatform() {
  const [user, setUser] = useState<any>()
  const { toast } = useToast()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser!)
    })
    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      toast({
        title: "تم تسجيل الخروج بنجاح",
        description: "نتمنى أن نراك قريبًا!",
      })
    } catch (error:any) {
      toast({
        title: "خطأ في تسجيل الخروج",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-green-600" dir='rtl'>
      {/* Sidebar */}
      <aside className=" w-64 bg-gray-400 dark:bg-gray-800 p-4 xlg:hidden">
        <h1 className="text-2xl font-bold text-green-500  mb-6 text-center">
        <img src='/images/logo-inv20.svg' alt='logo' width={155}/>
            
            </h1>
        <nav>
          <ul className="space-y-2 text-white " dir="rtl">
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="ml-2 h-4 w-4" />
                لوحة التحكم
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Wallet className="ml-2 h-4 w-4" />
                المحفظة
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="ml-2 h-4 w-4" />
                الاستثمارات
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="ml-2 h-4 w-4" />
                المعاملات
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="ml-2 h-4 w-4" />
                الإعدادات
              </Button>
            </li>
          </ul>
        </nav>
        {user && (
          <Button variant="ghost" className="w-full justify-start mt-4  text-red-600 " onClick={handleSignOut}>
            <LogIn className="ml-2 h-4 w-4" />
            تسجيل الخروج
          </Button>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {user ? (
          <Dashboard user={user} />
        ) : (
          <AuthTabs />
        )}
      </main>
    </div>
  )
}

function AuthTabs() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { toast } = useToast()

  const handleLogin = async (e:any) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "مرحبًا بك مرة أخرى!",
      })
    } catch (error:any) {
      toast({
        title: "خطأ في تسجيل الدخول",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  const handleRegister = async (e:any) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast({
        title: "تم إنشاء الحساب بنجاح",
        description: "مرحبًا بك في منصتنا!",
      })
    } catch (error:any) {
      toast({
        title: "خطأ في إنشاء الحساب",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  return (
    <Tabs defaultValue="login" className="w-[400px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
        <TabsTrigger value="register">إنشاء حساب</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>تسجيل الدخول</CardTitle>
            <CardDescription>أدخل بيانات حسابك للوصول إلى لوحة التحكم.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form onSubmit={handleLogin} className="space-y-2">
              <Input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input 
                type="password" 
                placeholder="كلمة المرور" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-green-500">
                <LogIn className="ml-2 h-4 w-4" /> تسجيل الدخول
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>إنشاء حساب</CardTitle>
            <CardDescription>قم بإنشاء حساب جديد للبدء في الاستثمار.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form onSubmit={handleRegister} className="space-y-2">
              <Input 
                placeholder="الاسم الكامل" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input 
                type="password" 
                placeholder="كلمة المرور" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-green-500">
                <UserPlus className="ml-2 h-4 w-4" /> إنشاء الحساب
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

function Dashboard({ user }:any) {
  return (
    <div className="space-y-4" dir='rtl'>
      <h2 className="text-2xl font-bold text-green-500 ">مرحبًا بك في لوحة التحكم، {user.email}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium  text-green-500 ">إجمالي الرصيد</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500 ">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% من الشهر الماضي</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium  text-green-500 ">الاستثمارات النشطة</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500 ">7</div>
            <p className="text-xs text-muted-foreground">+2 من الأسبوع الماضي</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium  text-green-500 ">إجمالي الأرباح</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500 ">$12,234.59</div>
            <p className="text-xs text-muted-foreground">+19% من الشهر الماضي</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}