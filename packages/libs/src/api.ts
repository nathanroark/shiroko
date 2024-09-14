import { treaty } from '@elysiajs/eden'
import { app } from 'server'

export const api = treaty<app>('http://0.0.0.0:3001')
