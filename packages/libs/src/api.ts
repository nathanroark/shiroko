import { treaty } from '@elysiajs/eden'
import { app } from 'server'

export const api = treaty<app>('http://localhost:3000/api')
