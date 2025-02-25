<template>
  <div>
    <v-list
      :items="importantLinks"
      class="pt-0 bg-green-lighten-5"
    />
    <v-list
      :items="newsArchive"
      class="mt-5 pt-0 bg-green-lighten-5"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    importantLinks: [
      {
        title: 'Important Links',
        props: {
          class: 'bg-green-darken-4',
          variant: 'tonal'
        }
      },
      { title: 'Brunch this weekend?' },
      { type: 'divider' },
      { title: 'Important Links' },
      { type: 'divider' },
      { title: 'Our Board' },
      { type: 'divider' },
      { title: 'Scholarships 2024' },
      { type: 'divider' },
      { title: 'Youth Empowerment Scheme 2024' },
      { type: 'divider' },
      { title: 'Women Development Program' },
      { type: 'divider' },
      { title: 'Medical Outreach Program' },
      { type: 'divider' },
      { title: 'Publications' },
    ],

    newsArchive: [
      {
        title: 'News Archive',
        props: {
          class: 'bg-green-darken-4',
          variant: 'tonal'
        }
      },
      { title: '2021' },
      { type: 'divider' },
      { title: '2022' },
      { type: 'divider' },
      { title: '2023' },
      { type: 'divider' },
      { title: 'Ongoing -2024' }
    ],
  }),
}
</script>