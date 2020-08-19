<template>
  <div class="dashboard">
    <TasksSummaryPreview />
    <TodaySummaryPreview />
    <AbsentStaffPreview />
    <TasksSummaryGraph/>
  </div>
</template>

<script>
// @ is an alias to /src
import TasksSummaryPreview from '@/components/modules/dashboard/TasksSummaryPreview';
import TodaySummaryPreview from '@/components/modules/dashboard/TodaySummaryPreview';
import AbsentStaffPreview from '@/components/modules/dashboard/AbsentStaffPreview';
import TasksSummaryGraph from '@/components/modules/dashboard/TasksSummaryGraph';

export default {
  name: 'Home',
  data: () => ({
    appName: process.env.VUE_APP_SERVER_URL,
    summaries: [
      { title: 'Tasks Summary', }
    ]
  }),
  components: {    
    TasksSummaryPreview,
    TodaySummaryPreview,
    AbsentStaffPreview,
    TasksSummaryGraph
  },
  mounted() {    
    this.$store.dispatch('absent/getAbsentStaffSummaryAsync');
  }
}
</script>

<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 25%;
  gap: 10px;
  height: 100%;
}
</style>