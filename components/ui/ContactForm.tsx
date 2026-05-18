"use client";

import { useState } from "react";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FiArrowRight } from "react-icons/fi";

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input type="text" id="name" {...register('name')} placeholder="Name:" required className="bg-bg-sec h-12 w-full p-5 rounded-sm"/>
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p> }
      <input type="email" id="email" {...register('email')} placeholder="Email:" required className="bg-bg-sec h-12 w-full p-5 rounded-sm"/>
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p> }
      <textarea id="message" {...register('message')} placeholder="Message:" required className="bg-bg-sec h-30 w-full p-5 rounded-sm"></textarea>
      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p> }
      <button aria-label="Send Message" type="submit" disabled={status === 'loading'} className={`button cursor-pointer bg-brand h-12 w-full rounded-sm text-white px-4 flex items-center justify-between hover:bg-gray-800 disabled:opacity-50`}>{status === 'loading' ? "Sending..." : "Send Message"} <FiArrowRight/> </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">Message sent! We'll be in touch soon.</p> 
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p> 
      )}
    </form>
  )
}