import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from 'nuxt-typed-vuex'
import * as email from './email'

interface State {
  firstName: string
  lastName: string
  age: number
}

export const state = (): State => ({
  firstName: 'Supreecha',
  lastName: 'Jaijumpa',
  age: 27,
})

export const getters = getterTree(state, {
  fullName: (state: State): string => state.firstName + ' ' + state.lastName,
  birthYear: (state: State): number => new Date().getFullYear() - state.age,
})

export const mutations = mutationTree(state, {
  SET_FIRST_NAME: (state: State, firstName: string): void => {
    state.firstName = firstName
  },
  SET_LAST_NAME: (state: State, lastName: string): void => {
    state.lastName = lastName
  },
  SET_AGE: (state: State, age: number): void => {
    state.age = age
  },
})

export const actions = actionTree(
  { state, mutations, getters },
  {
    changeName: ({ commit }, fullname: string): void => {
      const [firstname, lastName]: string[] = fullname.split(' ')
      commit('SET_FIRST_NAME', firstname)
      commit('SET_LAST_NAME', lastName)
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    email,
  },
})
