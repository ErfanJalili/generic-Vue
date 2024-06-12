<!-- <template>
    <div class="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 class="text-2xl font-bold">{{ entityName }} Manager</h1>
      <form @submit.prevent="addEntity" class="space-y-4">
        <div v-for="property in properties" :key="property.name" class="flex flex-col">
          <label :for="property.name" class="block text-sm font-medium text-gray-700">{{ property.name }}</label>
          <input
            v-model="newEntity[property.name]"
            :type="getInputType(property.type)"
            :name="property.name"
            class="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Add {{ entityName }}
        </button>
      </form>
      <ul class="space-y-4">
        <li v-for="entity in entities" :key="entity.id" class="p-4 bg-gray-100 rounded-md">
          <div v-for="property in properties" :key="property.name" class="flex justify-between">
            <span class="font-semibold">{{ property.name }}:</span> <span>{{ entity[property.name] }} {{ entity[property.name.toLowerCase()] }} </span>
          </div>
          <div class="flex space-x-2 mt-2">
            <button @click="deleteEntity(entity.id)" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">Delete</button>
            <button @click="editEntity(entity)" class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700">Edit</button>
          </div>
        </li>
      </ul>
      <div v-if="editingEntity" class="p-4 bg-gray-50 rounded-md space-y-4 mt-4">
        <h2 class="text-xl font-bold">Edit {{ entityName }}</h2>
        <form @submit.prevent="updateEntity" class="space-y-4">
          <div v-for="property in properties" :key="property.name" class="flex flex-col">
            <label :for="property.name" class="block text-sm font-medium text-gray-700">{{ property.name }}</label>
            <input
              v-model="editingEntity[property.name]"
              :type="getInputType(property.type)"
              :name="property.name"
              class="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
            Update {{ entityName }}
          </button>
        </form>
      </div>
    </div>
  </template> -->
<!-- 
  <template>
    <div class="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 class="text-2xl font-bold">{{ entityName }} Manager</h1>
      <form @submit.prevent="addEntity" class="space-y-4">
        <div v-for="property in properties" :key="property.name" class="flex flex-col">
          <label :for="property.name" class="block text-sm font-medium text-gray-700">{{ property.name }}</label>
          <input
            v-model="newEntity[property.name.toLowerCase()]"
            :type="getInputType(property.type)"
            :name="property.name"
            class="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Add {{ entityName }}
        </button>
      </form>
      <table class="min-w-full divide-y divide-gray-200 mt-4">
        <thead class="bg-gray-50">
          <tr>
            <th v-for="property in properties" :key="property.name" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {{ property.name }}
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="entity in entities" :key="entity.id">
            <td v-for="property in properties" :key="property.name" class="px-6 py-4 whitespace-nowrap">
              {{ entity[property.name.toLowerCase()] }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button @click="deleteEntity(entity.id)" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">Delete</button>
              <button @click="editEntity(entity)" class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 ml-2">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="editingEntity" class="p-4 bg-gray-50 rounded-md space-y-4 mt-4">
        <h2 class="text-xl font-bold">Edit {{ entityName }}</h2>
        <form @submit.prevent="updateEntity" class="space-y-4">
          <div v-for="property in properties" :key="property.name" class="flex flex-col">
            <label :for="property.name" class="block text-sm font-medium text-gray-700">{{ property.name }}</label>
            <input
              v-model="editingEntity[property.name]"
              :type="getInputType(property.type)"
              :name="property.name"
              class="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
            Update {{ entityName }}
          </button>
        </form>
      </div>
    </div>
  </template> -->
  
  <template>
    <div class="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 class="text-2xl font-bold">{{ entityName }} Manager</h1>
      <form @submit.prevent="addEntity" class="space-y-4">
        <div v-for="property in properties" :key="property.name" class="flex flex-col">
          <label :for="property.name" class="block text-sm font-medium text-gray-700">{{ property.name }}</label>
          <input
            v-model="newEntity[property.name]"
            :type="getInputType(property.type)"
            :name="property.name"
            class="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Add {{ entityName }}
        </button>
      </form>
      <div class="flex flex-col mt-4">
        <div class="overflow-x-auto">
          <div class="align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th v-for="property in properties" :key="property.name" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {{ property.name }}
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="entity in entities" :key="entity.id">
                    <td v-for="property in properties" :key="property.name" class="px-6 py-4 whitespace-nowrap">
                      {{ entity[property.name.toLowerCase()] }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button @click="deleteEntity(entity.id)" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">Delete</button>
                      <button @click="editEntity(entity)" class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 ml-2">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div v-if="editingEntity" class="p-4 bg-gray-50 rounded-md space-y-4 mt-4">
        <h2 class="text-xl font-bold">Edit {{ entityName }}</h2>
        <form @submit.prevent="updateEntity" class="space-y-4">
          <div v-for="property in properties" :key="property.name" class="flex flex-col">
            <label :for="property.name" class="block text-sm font-medium text-gray-700">{{ property.name }}</label>
            <input
              v-model="editingEntity[property.name.toLowerCase()]"
              :type="getInputType(property.type)"
              :name="property.name"
              class="mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
            Update {{ entityName }}
          </button>
        </form>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      entityName: String,
    },
    data() {
      return {
        properties: [],
        entities: [],
        newEntity: {},
        editingEntity: null,
      };
    },
    methods: {
      fetchMetadata() {
        axios.get(`https://localhost:44339/api/v1/${this.entityName}s/GetMetadata?entityName=${this.entityName}`)
          .then((response) => {
            
            const entityMetadata = response.data.find(e => e.entityName === this.entityName);
           
            this.properties = entityMetadata.properties;
            this.newEntity = this.createEmptyEntity();
          })
          .catch((error) => {
            console.error(error);
          });
      },
      fetchEntities() {
        axios.get(`https://localhost:44339/api/v1/${this.entityName}s/Get${this.entityName.toLowerCase()}s`)
          .then((response) => {
            this.entities = response.data;
            console.log(this.entities)


          })
          .catch((error) => {
            alert(error)
            console.error(error);
          });
      },
      createEmptyEntity() {
        const entity = {};
        this.properties.forEach((property) => {
          entity[property.name] = '';
        });
        return entity;
      },
      getInputType(type) {
        switch (type) {
          case 'Int32':
          case 'Int64':
          case 'Decimal':
            return 'number';
          case 'DateTime':
            return 'date';
          default:
            return 'text';
        }
      },
      addEntity() {
        axios.post(`https://localhost:44339/api/v1/${this.entityName}s/Add${this.entityName.toLowerCase()}`, this.newEntity)
          .then((response) => {
            // this.entities.push(response.data);
            // this.newEntity = this.createEmptyEntity();
            this.entities = response.data 
            
          })
          .catch((error) => {
            console.error(error);
          });
      },
      deleteEntity(id) {
        console.log(id)
        axios.delete(`https://localhost:44339/api/v1/${this.entityName}s/Delete${this.entityName.toLowerCase()}?id=${id}`)
          .then((response) => {
            this.entities = this.entities.filter(entity => entity.id !== id);
          })
          .catch((error) => {
            console.error(error);
          });
      },
      editEntity(entity) {
        this.editingEntity = { ...entity };
      },
      updateEntity() {
        axios.put(`https://localhost:44339/api/v1/${this.entityName}s/Edit${this.entityName.toLowerCase()}/${this.editingEntity.id}`, this.editingEntity)
          .then((response) => {
            // this.fetchEntities();
            // this.editingEntity = null;
            this.entities = response.data 
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
    mounted() {
      this.fetchMetadata();
      this.fetchEntities();
    },
  };
  </script>
  
  <style>
  /* Add any additional styling if necessary */
  </style>
  