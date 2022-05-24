<template>
   <v-dialog max-width="600px">
      <v-btn flat slot="activator" class="success">Add new project</v-btn>
      <v-card>
         <v-card-title>
         <h2>add a title here</h2>
         </v-card-title>
         <v-card-text>
         <v-form class="px-3">
            <v-text-field v-model="title" prepend-icon="folder" label="Title"></v-text-field>
            <v-ptextarea label="Information" v-model="content" prepend-icon="edit" />
            <v-btn flat class="right sucess mx-0 mt-3" @click="submit">add review</v-btn>
         </v-form>
         </v-card-text>
      </v-card>
   </v-dialog>
</template>

<script>
export default {
   data() {
      return {
         title: '',
         content: ''
      }
   },
   methods: {
      submit() {
         console.log(this.title, this.content)
      }
   }
}
</script>