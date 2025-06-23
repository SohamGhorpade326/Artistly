// Onboarding Page (app/onboard/page.js)
'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const categoryOptions = ['Singers', 'Dancers', 'Speakers', 'DJs']
const languageOptions = ['English', 'Hindi', 'Marathi', 'Gujarati']

const schema = yup.object().shape({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.array().min(1),
  languages: yup.array().min(1),
  feeRange: yup.string().required(),
  location: yup.string().required()
})

export default function Onboard() {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { category: [], languages: [] }
  })
  const [profileImage, setProfileImage] = useState(null)

  const onSubmit = (data) => {
    console.log({ ...data, profileImage })
    reset()
    setProfileImage(null)
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Artist Onboarding</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input {...register('name')} placeholder="Name" />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>

              <Textarea {...register('bio')} placeholder="Bio" />
              <p className="text-red-500 text-sm">{errors.bio?.message}</p>

              <div>
                <p className="font-medium mb-1">Category</p>
                <Controller control={control} name="category" render={({ field }) => (
                  categoryOptions.map(opt => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="checkbox" value={opt} checked={field.value.includes(opt)} onChange={(e) => {
                        const newValue = e.target.checked ? [...field.value, opt] : field.value.filter(v => v !== opt)
                        field.onChange(newValue)
                      }} />
                      <span>{opt}</span>
                    </label>
                  ))
                )} />
                <p className="text-red-500 text-sm">{errors.category?.message}</p>
              </div>

              <div>
                <p className="font-medium mb-1">Languages Spoken</p>
                <Controller control={control} name="languages" render={({ field }) => (
                  languageOptions.map(opt => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="checkbox" value={opt} checked={field.value.includes(opt)} onChange={(e) => {
                        const newValue = e.target.checked ? [...field.value, opt] : field.value.filter(v => v !== opt)
                        field.onChange(newValue)
                      }} />
                      <span>{opt}</span>
                    </label>
                  ))
                )} />
                <p className="text-red-500 text-sm">{errors.languages?.message}</p>
              </div>

              <select {...register('feeRange')} className="border w-full p-2">
                <option value="">Select Fee Range</option>
                <option value="₹20k - ₹50k">₹20k - ₹50k</option>
                <option value="₹50k - ₹1L">₹50k - ₹1L</option>
                <option value="₹1L+">₹1L+</option>
              </select>
              <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>

              <div>
                <p className="mb-1">Profile Image (Optional)</p>
                <Input type="file" accept="image/*" onChange={(e) => setProfileImage(e.target.files[0])} />
                {profileImage && <p className="text-green-600 text-sm">Selected: {profileImage.name}</p>}
              </div>

              <Input {...register('location')} placeholder="Location" />
              <p className="text-red-500 text-sm">{errors.location?.message}</p>

              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}