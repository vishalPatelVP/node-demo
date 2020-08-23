module.exports = {
    "createuser":{
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "name":{ "type": "string" },
            "email": { "type": "string" ,"format": 'email'},
            "password" : { "type": "string" },
            "phone" :{ "type": "string" },
            "hobbies":{"type":"array"}
        },
        "required": [ "name", "email","password","phone","hobbies"]
    },
    "findall":{
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required":[]
    },
    "find":{
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "id":{ "type" : "string"}
        },
        "required":["id"]
    }
}