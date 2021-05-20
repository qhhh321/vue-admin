<template>
    <div class="home-container">
        <div class="home-content">
            <!-- <Input :rows="30" style="margin-top: 20px" v-model="userInfo" type="textarea" /> -->
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="80">
                </el-table-column>
                <el-table-column
                label="日期"
                width="180">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="家庭地址"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                label="setting"
                show-overflow-tooltip>
                <el-button size="small" type="success">成功按钮</el-button>
                <el-button type="info" size="small">信息按钮</el-button>
                <el-button type="success" size="small">成功按钮</el-button>
                </el-table-column>

            </el-table>
        </div>
    </div>
</template>

<script>
import { fetchUserData } from '@/api'

export default {
    name: 'home',
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }],
            multipleSelection: [],
            userInfo: '',
        }
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        getUserData() {
            fetchUserData().then(res => {
                this.userInfo = JSON.stringify(res, null, 4)
            })
        },
    },
}
</script>

<style scoped>
.home-container {
    padding: 10px;
    padding-top: 5px;
}
.home-content {
    padding: 10px;
    border-radius: 5px;
    background: #fff;
}
</style>