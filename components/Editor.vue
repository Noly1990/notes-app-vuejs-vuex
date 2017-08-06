<template>
  <div id="note-editor">
    <input class="title" type="text" :value="defaltTitle" @input="editTitle">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { editNote } from '../vuex/actions'
import { editTitle } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      activeNoteText: state => state.activeNote.text,
      defaltTitle: state => state.activeNote.title
    },
    actions: {
      editNote,
      editTitle
    }
  }
}
</script>

<style scoped>
.title {
  margin:15px 0 5px 10px;
  padding: 0;
  height:30px;
  font-size: 24px;
  border: none;
  width: 100%;
  outline: none;
}
</style>

