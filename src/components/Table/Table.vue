<template>
    <div id="table-wrapper" :class="tableStyle">
        <!--table header-->
        <div id="table-header" class="py-3 p-8 border-b-2 border-b-grey_1 flex justify-between" :class="headingStyle">
            <p v-if="!ignoreTableHeading">{{ tableHeading }}</p>
            <tippy content="Refresh table" class="cursor-pointer"> <Icon :iconName="'repeat'"/></tippy>
        </div>
        <div id="table-body" class="w-full h-full">
            <!--render this when no data is available-->
            <div v-if="tableData.length == 0 && !ignoreEmptySection" class="w-full h-full flex flex-col justify-center items-center gap-1">
                <span class="bg-grey_1 flex justify-center items-center w-[2rem] h-[2rem] box-border rounded-lg p-5">
                    <Chart class="text-2xl" />
                    <Icon :iconName="'simple-chart'"/>
                </span>
                <p class="text-[white] text-xl">No data is available</p>
            </div>
            <!--render table when data is present-->
            <table v-else class="mx-3 table-fixed w-full overflow-y-scroll">
               <tr>
                 <th v-for="(heading, key) in headings" :id="key" align="left"> {{ heading }} </th>
               </tr>
               <tr v-for="data in tableData">
                  <td>{{ data.item }}</td>
                  <td>{{ data.date }}</td>
                  <td> {{ data.cost }}</td>
               </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import Icon from "@icon/Icon.vue"


defineProps({
    tableData: {
        type: Array,
        default: [],
    },
    tableStyle: {
        type: String,
    },
    tableHeading: {
        type: String,
        default: 'Table heading'
    },
    ignoreTableHeading : {
      type:Boolean,
      default:false,
    },
    ignoreEmptySection: {
        type:Boolean,
        default:false
    },
    headingStyle: {
        type: String,
    },
    headings:{
        type:Array
    }

})
</script>


<style scoped>
table tr th,
table tr td{
    padding: 5px;
    text-transform: capitalize;
}
</style>