import { defineComponent } from 'vue'
import './index1.less'

export default defineComponent({
    name: 'test',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    setup(props) {
        console.log('props: ', props)
        return () => <div class={'a'}>{props.name}测试内容</div>
    }
})
