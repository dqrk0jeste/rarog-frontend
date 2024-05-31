export const API = import.meta.env.DEV ? 'http://localhost:8000/api' : 'https://rarog-django.vercel.app/api'

export function generateImageId(id) {
  return `https://rarog.blob.core.windows.net/images/${ id }.jpg`
}
