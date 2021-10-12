import { defineComponent } from 'vue'
import test1 from './test1'
import Text from './components/Text.vue'
import './app.less'

export default defineComponent({
    name: 'App',
    components: {
        test1,
        Text
    },
    setup() {
        // const a = 1
        return () => (
            <div>
                <router-view>
                    <test1 name="1"></test1>
                    <Text msg="1fdsafdsafsd"></Text>
                    <div class={['h']}></div>
                    <router-link to="/home">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </router-view>
            </div>
        )
    }
})
