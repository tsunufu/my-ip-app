"use client";

import { useState, useEffect } from 'react';

export const runtime = "edge";

export default function Home() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('IPアドレスの取得に失敗しました:', error);
        setIpAddress('IPアドレスの取得に失敗しました');
      }
    };

    getIpAddress();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-xl p-12 w-3/4 max-w-2xl">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          あなたのIPアドレスを確認
        </h1>
        <div className="border-t border-gray-200 pt-6">
          <p className="text-2xl font-medium text-blue-700 text-center">
            {ipAddress}
          </p>
        </div>
        <p className="text-gray-500 text-sm mt-4 text-center">
          このツールを使用すると、あなたのIPアドレスを簡単に確認できます。IPアドレスは、インターネット上であなたを識別するために使用される一意の番号です。
        </p>
      </div>
    </main>
  );
}
