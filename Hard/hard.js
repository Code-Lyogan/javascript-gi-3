function createPII(){
    let pii = {
    name : "Logan Trout",
    ssn: '720-21-8509'
    }
    function getName() {
    return pii.name;
    }
    return getName();
}

console.log(createPII());