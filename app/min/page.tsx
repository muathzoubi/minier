"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { Pickaxe } from 'lucide-react'

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


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function MiningCounter() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Read initial count from Firebase
    const countRef = ref(database, 'miningCount');
    onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setCount(data || 0);
      setIsLoading(false);
    });
  }, []);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Update count in Firebase
    set(ref(database, 'miningCount'), newCount);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-blue-900 bg-opacity-50 backdrop-blur-sm text-white border-blue-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center justify-center">
          <Pickaxe className="mr-2" />
          عداد التعدين
        </CardTitle>
        <CardDescription className="text-center text-gray-300">
          عدد مرات النقر على زر التعدين
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        {isLoading ? (
          <p className="text-4xl font-bold">جاري التحميل...</p>
        ) : (
          <p className="text-6xl font-bold">{count}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={incrementCount}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          تعدين
        </Button>
      </CardFooter>
    </Card>
  )
}