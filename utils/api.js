export const API = 'https://rarog-django.vercel.app/api' // for production
// export const API = 'http://localhost:8000/api' // for local development

export function generateImageId(id) {
  return `https://rarog.blob.core.windows.net/images/${ id }.jpg`
}