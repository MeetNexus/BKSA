import { toast } from 'react-hot-toast'

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public status?: number
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export function handleError(error: unknown): void {
  if (error instanceof AppError) {
    toast.error(error.message)
    console.error(`[${error.code}] ${error.message}`)
  } else if (error instanceof Error) {
    toast.error('Une erreur inattendue est survenue')
    console.error(error)
  } else {
    toast.error('Une erreur inconnue est survenue')
    console.error('Unknown error:', error)
  }
}