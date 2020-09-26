import faker from 'faker'

const RequestersList = [];
var i = 0;

for(i = 0;i<6;i++){
    RequestersList.push({
    "id": faker.random.uuid(),
    "avatar" : faker.image.avatar(),
    "name" : faker.name.firstName(),
    "description" : faker.name.jobDescriptor()
    })
}

export default RequestersList
