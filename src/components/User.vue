<script>
import eventBus from '@/Plugins/eventBus';

export default {
    name: 'User',
    data() {
        return {

        }
    },
    methods:{
    Dothis() 
    {
        eventBus.$emit("user","This is from user component");
    }        
    },
    props: ['users']
}

</script>

<template>
    <div>
        <h1>Hello from User</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <p>{{ user.id }}</p>
                <p>{{ user.name }}</p>
            </li>
        </ul>
    </div>
</template>


<style></style>