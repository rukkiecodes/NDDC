<template>
  <v-empty-state icon="$success">
    <template #media>
      <v-icon color="surface-variant" />
    </template>

    <template #headline>
      <div class="block-text text-body-1 text-sm-h6 text-md-h5">
        All Done For Now!
      </div>
    </template>

    <template #title>
      <div class="main-text text-body-2 text-sm-body-1 text-md-h6">
        You're all caught up.
      </div>
    </template>

    <template #text>
      <div class="main-text text-medium-emphasis text-caption text-sm-body-2 text-md-body-1">
        Great job on completing all your tasks! This might be a good time to relax or consider planning your next set of
        goals. If you think of something new, just hit the button below to add a new task.
      </div>
    </template>
  </v-empty-state>
</template>