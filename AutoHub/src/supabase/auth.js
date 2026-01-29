
import { supabase } from './config'


export const registerUser = async (email, password, userData) => {
  try {
    
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (authError) throw authError

    
    const { error: profileError } = await supabase
      .from('user_profiles')
      .insert([{
        id: authData.user.id,
        name: userData.name,
        location: userData.location,
        phone: userData.phone,
        role: 'user'
      }])

    if (profileError) throw profileError

    return authData.user
  } catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}

export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
    return data.user
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}

export const logoutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    console.error('Error logging out:', error)
    throw error
  }
}

export const getCurrentUser = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('Error getting current user:', error)
    throw error
  }
}

export const onAuthChange = (callback) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user ?? null)
  })
}