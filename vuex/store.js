import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {},
  listNum:0
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'add some new text',
      title: 'New Title '+state.listNum,
      favorite: false
    }
    state.notes.push(newNote)
    state.listNum++
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },

  EDIT_TITLE(state, title) {
    state.activeNote.title = title
  }
}

export default new Vuex.Store({
  state,
  mutations
})
