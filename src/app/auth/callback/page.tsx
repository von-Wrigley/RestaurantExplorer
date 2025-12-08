// app/auth/callback/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '../../../../supabase/supabase-client'

export default function AuthCallback() {
  const [status, setStatus] = useState('processing')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleCallback = async () => {
      const supabase = createClient()


      // Получаем параметры из HASH
      const hash = window.location.hash.substring(1)
      const hashParams = new URLSearchParams(hash)
      
      const accessToken = hashParams.get('access_token')
      const refreshToken = hashParams.get('refresh_token')
      const type = hashParams.get('type')
      const next = searchParams.get('next') ?? '/restaurantDashboard'

      console.log('🔑 Hash tokens:', { 
        accessToken: !!accessToken, 
        type,
        next 
      })

      // Если нет токенов в hash, проверяем есть ли уже сессия
      if (!accessToken) {
        console.log('🔍 No tokens in hash, checking existing session...')
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          console.log('✅ Already authenticated, redirecting...')
        window.location.href = next
          return
        } else {
          setStatus('invalid_token')
          return
        }
      }

      if (accessToken && type === 'invite') {
        try {
          // Устанавливаем сессию с токенами из hash
          const { data: { session }, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken || undefined
          })

          console.log('✅ Session result:', !!session)
          console.log('❌ Session error:', error)

          if (error) {
            console.error('Session setup failed:', error)
            // Пробуем получить сессию еще раз
            const { data: { session: retrySession } } = await supabase.auth.getSession()
            if (retrySession) {
              console.log('✅ Session exists after retry')
              setStatus('success')
              window.history.replaceState(null, '', window.location.pathname + window.location.search)
              window.location.href = next
              return
            }
            setStatus('error')
            return
          }

          if (session) {
            console.log('✅ User authenticated:', session.user)
            setStatus('success')
            
            // Очищаем hash из URL
            window.history.replaceState(null, '', window.location.pathname + window.location.search)
            window.location.href = next
            // Немедленно перенаправляем
         
            return
          }
        } catch (error) {
          console.error('💥 Unexpected error:', error)
          setStatus('error')
        }
      } else {
        setStatus('invalid_token')
        console.log('❌ Invalid token or type')
      }
    }

    handleCallback()
  }, [router, searchParams])

  // Улучшенный UI с задержкой для отладки
  const getStatusMessage = () => {
    switch (status) {
      case 'processing': return 'Обрабатываем приглашение...'
      case 'success': return 'Успешный вход! Перенаправляем...'
      case 'error': return 'Ошибка авторизации'
      case 'invalid_token': return 'Неверная ссылка приглашения'
      default: return 'Обработка...'
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <p className="text-lg font-semibold">{getStatusMessage()}</p>
        <p className="text-sm text-gray-600 mt-2">
          Status: {status}
        </p>
        {status === 'invalid_token' && (
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            На главную
          </button>
        )}
      </div>
    </div>
  )
}