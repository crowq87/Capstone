
import { supabase } from './config'

// ========== VEHICLE SERVICES ==========

export const getAllVehicles = async () => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error getting vehicles:', error)
    throw error
  }
}


export const getVehicle = async (vehicleId) => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('id', vehicleId)
      .single()
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error getting vehicle:', error)
    throw error
  }
}


export const addVehicle = async (vehicleData) => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    const { data, error } = await supabase
      .from('vehicles')
      .insert([{
        ...vehicleData,
        owner_id: user.id,
        status: 'pending'
      }])
      .select()
    
    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Error adding vehicle:', error)
    throw error
  }
}


export const updateVehicle = async (vehicleId, vehicleData) => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .update(vehicleData)
      .eq('id', vehicleId)
      .select()
    
    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Error updating vehicle:', error)
    throw error
  }
}


export const deleteVehicle = async (vehicleId) => {
  try {
    const { error } = await supabase
      .from('vehicles')
      .delete()
      .eq('id', vehicleId)
    
    if (error) throw error
  } catch (error) {
    console.error('Error deleting vehicle:', error)
    throw error
  }
}

// ========== IMAGE UPLOAD ==========


export const uploadVehicleImage = async (file) => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await supabase.storage
      .from('vehicle-images')
      .upload(filePath, file)

    if (error) throw error


    const { data: urlData } = supabase.storage
      .from('vehicle-images')
      .getPublicUrl(filePath)

    return urlData.publicUrl
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}

export const getVehiclesByLocation = async (location) => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('location', location)
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error filtering vehicles:', error)
    throw error
  }
}

export const getVehiclesByType = async (type) => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('type', type)
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error filtering vehicles:', error)
    throw error
  }
}