import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'

interface State {
  emails: string[]
}

export const state = (): State => ({
  emails: ['mail1@mail.com', 'mail2@mail.com'],
})

export const getters = getterTree(state, {
  emailsLenght: (state: State): number => state.emails.length,
})

export const mutations = mutationTree(state, {
  PUSH_EMAIL: (state: State, email: string): void => {
    state.emails.push(email)
  },
})

export const actions = actionTree(
  { state, mutations, getters },
  {
    addEmail: ({ commit }, email: string): void => {
      commit('PUSH_EMAIL', email)
    },
  }
)
